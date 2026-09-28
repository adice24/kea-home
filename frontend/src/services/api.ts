import type { Candidate } from '../data/mockCandidates';
import { findCandidate } from '../data/mockCandidates';

// Base URL from environment, or empty string to use Vite dev proxy / relative paths
const RAW_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
const API_BASE_URL = RAW_BASE_URL.endsWith('/') ? RAW_BASE_URL.slice(0, -1) : RAW_BASE_URL;

export interface VerifyCandidateResponse {
  success: boolean;
  candidate?: Candidate;
  message?: string;
}

export interface NoticeItem {
  id: number;
  title: string;
  date: string;
  category: string;
  isNew: boolean;
  fileUrl: string;
}

export interface NoticesResponse {
  success: boolean;
  count: number;
  data: NoticeItem[];
}

export interface FlashNewsResponse {
  success: boolean;
  data: string[];
}

/**
 * Verify candidate application credentials against the KEA Backend API.
 * Gracefully falls back to mock dataset if backend is offline.
 */
export async function verifyCandidate(
  applicationNo: string,
  dob: string
): Promise<Candidate> {
  const cleanApp = applicationNo.trim();
  const cleanDob = dob.trim();

  try {
    const response = await fetch(`${API_BASE_URL}/api/candidates/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        applicationNo: cleanApp,
        dob: cleanDob,
      }),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.candidate) {
      return data.candidate as Candidate;
    }

    if (data?.message) {
      throw new Error(data.message);
    }

    throw new Error(`Server returned status ${response.status}`);
  } catch (err: unknown) {
    // If it's an explicit validation/credential error from backend, rethrow it
    const errorMessage = err instanceof Error ? err.message : 'Candidate verification failed';
    if (
      errorMessage.includes('Invalid Application Number') ||
      errorMessage.includes('Entered Date of Birth does not match') ||
      errorMessage.includes('does not match records')
    ) {
      throw new Error(errorMessage);
    }

    // Otherwise, check local mock candidates for offline/demo fallback
    console.warn('Backend API call error, checking offline data:', errorMessage);
    const fallback = findCandidate(cleanApp, cleanDob);
    if (fallback) {
      return fallback;
    }

    throw new Error(
      'No candidate record found matching the entered Application Number and Date of Birth. Please verify your details.'
    );
  }
}

/**
 * Fetch published notices and circulars from backend.
 */
export async function getNotices(category?: string): Promise<NoticeItem[]> {
  try {
    const url = category
      ? `${API_BASE_URL}/api/notices?category=${encodeURIComponent(category)}`
      : `${API_BASE_URL}/api/notices`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: NoticesResponse = await res.json();
    return data.data || [];
  } catch (err) {
    console.warn('Could not fetch notices from backend:', err);
    return [];
  }
}

/**
 * Fetch flash news ticker items from backend.
 */
export async function getFlashNews(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/notices/flash`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: FlashNewsResponse = await res.json();
    return data.data || [];
  } catch (err) {
    console.warn('Could not fetch flash news from backend:', err);
    return [];
  }
}

/**
 * Healthcheck ping to backend.
 */
export async function checkBackendHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/health`, { method: 'GET' });
    return res.ok;
  } catch {
    return false;
  }
}
