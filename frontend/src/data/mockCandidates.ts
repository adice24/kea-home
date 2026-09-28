export interface CourseResult {
  courseCode: string;
  courseName: string;
  iconType: 'mca' | 'mba' | 'mtech';
  versionCode: string;
  obtainedMarks: number;
  maxMarks: number;
  rank: number | string;
  status: 'ELIGIBLE' | 'QUALIFIED' | 'PROVISIONAL';
  categoryRank?: number;
}

export interface AllotmentResult {
  cetNo: string;
  name: string;
  appliedCategory: string;
  rank: string | number;
  discipline: string;
  collegeAllotted: string;
  courseAllotted: string;
  categoryAllotted: string;
  allottedOptionSerialNo: string | number;
  allotmentType?: 'Provisional' | 'Final';
}

export interface Candidate {
  applicationNo: string;
  dob: string; // YYYY-MM-DD or DD-MM-YYYY
  name: string;
  fatherName: string;
  gender: 'MALE' | 'FEMALE' | 'F' | 'M' | 'TRANSGENDER';
  category: string;
  karnatakaStatus: 'KARNATAKA CANDIDATE' | 'NON-KARNATAKA CANDIDATE';
  testCenter: string;
  claimedQuota: string;
  courses: CourseResult[];
  allotment?: AllotmentResult;
}

export const DEFAULT_ALLOTMENT: AllotmentResult = {
  cetNo: 'B877B',
  name: 'SHILPASHREE K',
  appliedCategory: '2A',
  rank: '11558',
  discipline: 'MCA',
  collegeAllotted: 'C551 – AMITY UNIVERSITY NATIONAL HIGHWAY 648, DEVANAHALLI-DODDABALLAPUR ROAD',
  courseAllotted: 'MASTERS IN COMPUTER APPLICATIONS (GX)',
  categoryAllotted: '2A',
  allottedOptionSerialNo: '6',
  allotmentType: 'Final'
};

export const SAMPLE_CANDIDATES: Candidate[] = [
  // Primary Candidate from User's uploaded screenshot
  {
    applicationNo: 'B877B',
    dob: '2005-06-24',
    name: 'SHILPASHREE K',
    fatherName: 'KEMPEGOWDA',
    gender: 'F',
    category: '2A',
    karnatakaStatus: 'KARNATAKA CANDIDATE',
    testCenter: 'BANGALORE - KEA EXAMINATION CENTRE (MALLESWARAM)',
    claimedQuota: 'GENERAL',
    courses: [
      {
        courseCode: 'MCA',
        courseName: 'Master of Computer Applications',
        iconType: 'mca',
        versionCode: 'C1',
        obtainedMarks: 55.00,
        maxMarks: 100,
        rank: '11558',
        status: 'QUALIFIED'
      }
    ],
    allotment: DEFAULT_ALLOTMENT
  },
  // User's candidate alias
  {
    applicationNo: '205223',
    dob: '2005-06-23',
    name: 'SHILPASHREE K',
    fatherName: 'KEMPEGOWDA',
    gender: 'F',
    category: '2A',
    karnatakaStatus: 'KARNATAKA CANDIDATE',
    testCenter: 'BANGALORE - KEA EXAMINATION CENTRE (MALLESWARAM)',
    claimedQuota: 'GENERAL',
    courses: [
      {
        courseCode: 'MCA',
        courseName: 'Master of Computer Applications',
        iconType: 'mca',
        versionCode: 'C1',
        obtainedMarks: 55.00,
        maxMarks: 100,
        rank: '11558',
        status: 'QUALIFIED'
      }
    ],
    allotment: DEFAULT_ALLOTMENT
  },
  {
    applicationNo: '26652841',
    dob: '2005-06-24',
    name: 'SHILPASHREE K',
    fatherName: 'KEMPEGOWDA',
    gender: 'F',
    category: '2A',
    karnatakaStatus: 'KARNATAKA CANDIDATE',
    testCenter: 'BANGALORE - KEA EXAMINATION CENTRE (MALLESWARAM)',
    claimedQuota: 'GENERAL',
    courses: [
      {
        courseCode: 'MCA',
        courseName: 'Master of Computer Applications',
        iconType: 'mca',
        versionCode: 'C1',
        obtainedMarks: 55.00,
        maxMarks: 100,
        rank: '11558',
        status: 'QUALIFIED'
      }
    ],
    allotment: DEFAULT_ALLOTMENT
  },
  {
    applicationNo: '266100824',
    dob: '2002-08-15',
    name: 'ANANYA R HEGDE',
    fatherName: 'RAMESH HEGDE',
    gender: 'F',
    category: 'GM / 3B',
    karnatakaStatus: 'KARNATAKA CANDIDATE',
    testCenter: 'BANGALORE - KEA EXAMINATION CENTRE (MALLESWARAM)',
    claimedQuota: 'KANNADA MEDIUM & RURAL',
    courses: [
      {
        courseCode: 'MCA',
        courseName: 'Master of Computer Applications',
        iconType: 'mca',
        versionCode: 'B-3',
        obtainedMarks: 84.50,
        maxMarks: 100,
        rank: 42,
        categoryRank: 8,
        status: 'QUALIFIED'
      }
    ]
  },
  {
    applicationNo: '266205912',
    dob: '2001-03-24',
    name: 'MOHAMMED ZAYAN KHAN',
    fatherName: 'IMTIYAZ KHAN',
    gender: 'M',
    category: '2B (MINORITY)',
    karnatakaStatus: 'KARNATAKA CANDIDATE',
    testCenter: 'MYSURU - GOVT POLYTECHNIC FOR BOYS',
    claimedQuota: 'GENERAL',
    courses: [
      {
        courseCode: 'MBA',
        courseName: 'Master of Business Administration',
        iconType: 'mba',
        versionCode: 'A-1',
        obtainedMarks: 78.25,
        maxMarks: 100,
        rank: 118,
        categoryRank: 19,
        status: 'QUALIFIED'
      }
    ]
  },
  {
    applicationNo: '266308119',
    dob: '2000-11-10',
    name: 'VIKRAM PATIL',
    fatherName: 'SURESH PATIL',
    gender: 'M',
    category: '3A',
    karnatakaStatus: 'KARNATAKA CANDIDATE',
    testCenter: 'HUBBALLI - BVB COLLEGE OF ENGG',
    claimedQuota: 'HYDERABAD-KARNATAKA (371J)',
    courses: [
      {
        courseCode: 'M.TECH (CSE)',
        courseName: 'Master of Technology in Computer Science & Engineering',
        iconType: 'mtech',
        versionCode: 'C-4',
        obtainedMarks: 91.00,
        maxMarks: 100,
        rank: 15,
        categoryRank: 3,
        status: 'QUALIFIED'
      },
      {
        courseCode: 'MCA',
        courseName: 'Master of Computer Applications',
        iconType: 'mca',
        versionCode: 'B-1',
        obtainedMarks: 86.00,
        maxMarks: 100,
        rank: 31,
        categoryRank: 5,
        status: 'QUALIFIED'
      }
    ]
  }
];

export function findCandidate(appNo: string, dobInput: string): Candidate | null {
  const cleanAppNo = appNo.trim();
  const cleanDob = dobInput.trim();

  // Direct match for user's candidate B877B (case-insensitive) or aliases
  const upperAppNo = cleanAppNo.toUpperCase();
  if (upperAppNo === 'B877B' || upperAppNo === '205223' || upperAppNo === '26652841') {
    const candidate = SAMPLE_CANDIDATES.find(c => c.applicationNo === upperAppNo) || SAMPLE_CANDIDATES[0];
    return {
      ...candidate,
      applicationNo: upperAppNo,
      dob: cleanDob || candidate.dob,
      allotment: {
        ...DEFAULT_ALLOTMENT,
        cetNo: upperAppNo
      }
    };
  }

  const found = SAMPLE_CANDIDATES.find(c => {
    if (c.applicationNo.toUpperCase() !== upperAppNo) return false;

    if (!cleanDob) return true;

    // Support YYYY-MM-DD, DD-MM-YYYY, DD/MM/YYYY
    const normalizedCDob = c.dob.replace(/[-/]/g, '');
    const normalizedInput = cleanDob.replace(/[-/]/g, '');

    if (normalizedCDob === normalizedInput) return true;

    // Check reverse if user entered DD-MM-YYYY vs YYYY-MM-DD
    const parts = cleanDob.split(/[-/]/);
    if (parts.length === 3) {
      if (parts[0].length === 2 && parts[2].length === 4) {
        // DD-MM-YYYY -> YYYY-MM-DD
        const formatted = `${parts[2]}-${parts[1]}-${parts[0]}`;
        if (formatted === c.dob) return true;
      } else if (parts[0].length === 4 && parts[2].length === 2) {
        // YYYY-MM-DD -> DD-MM-YYYY
        const formatted = `${parts[0]}-${parts[1]}-${parts[2]}`;
        if (formatted === c.dob) return true;
      }
    }

    return false;
  });

  if (found) {
    return {
      ...found,
      allotment: found.allotment || {
        ...DEFAULT_ALLOTMENT,
        cetNo: upperAppNo,
        name: found.name,
        rank: found.courses[0]?.rank || DEFAULT_ALLOTMENT.rank
      }
    };
  }

  // Graceful fallback for any CET entered in demo mode:
  return {
    ...SAMPLE_CANDIDATES[0],
    applicationNo: upperAppNo,
    allotment: {
      ...DEFAULT_ALLOTMENT,
      cetNo: upperAppNo
    }
  };
}
