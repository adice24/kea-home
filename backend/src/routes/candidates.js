import { Router } from 'express';

export const candidatesRouter = Router();

// Sample candidate database (matches KEA PGCET examination records)
const candidates = [
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
    allotment: {
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
    }
  },
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
    allotment: {
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
    }
  },
  {
    applicationNo: '26652841',
    dob: '2005-06-24',
    name: 'SHILPASHREE K',
    fatherName: 'KEMPEGOWDA',
    gender: 'F',
    category: 'GM',
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
        rank: '11558.00',
        status: 'QUALIFIED'
      }
    ]
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
        rank: '42.00',
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
        rank: '118.00',
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
        rank: '15.00',
        status: 'QUALIFIED'
      },
      {
        courseCode: 'MCA',
        courseName: 'Master of Computer Applications',
        iconType: 'mca',
        versionCode: 'B-1',
        obtainedMarks: 86.00,
        maxMarks: 100,
        rank: '31.00',
        status: 'QUALIFIED'
      }
    ]
  },
  {
    applicationNo: '2026101',
    dob: '2002-04-15',
    name: 'RAHUL SHARMA',
    fatherName: 'VIJAY SHARMA',
    gender: 'MALE',
    category: 'GM',
    karnatakaStatus: 'KARNATAKA CANDIDATE',
    testCenter: 'MYSURU - MAHAJANA COLLEGE',
    claimedQuota: 'GENERAL',
    courses: [
      {
        courseCode: 'MBA',
        courseName: 'Master of Business Administration',
        iconType: 'mba',
        versionCode: 'A2',
        obtainedMarks: 72.50,
        maxMarks: 100,
        rank: '1420.00',
        status: 'QUALIFIED'
      }
    ]
  }
];

// Helper to normalize dates for comparison (supports YYYY-MM-DD, DD-MM-YYYY, DD/MM/YYYY)
const normalizeDate = (d) => {
  if (!d) return '';
  const cleaned = d.toString().trim().replace(/\//g, '-');
  if (cleaned.includes('-')) {
    const parts = cleaned.split('-');
    if (parts[0].length === 4) return `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
    if (parts[2].length === 4) return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
  }
  return cleaned;
};

// GET /api/candidates - list or lookup
candidatesRouter.get('/', (req, res) => {
  const { appNo, dob } = req.query;
  if (!appNo) {
    return res.json({ success: true, count: candidates.length, data: candidates });
  }

  const cleanAppNo = appNo.trim();
  const candidate = candidates.find(c => c.applicationNo === cleanAppNo);

  if (!candidate) {
    return res.status(404).json({ success: false, message: 'Candidate not found with provided Application Number' });
  }

  if (dob && normalizeDate(candidate.dob) !== normalizeDate(dob)) {
    return res.status(401).json({ success: false, message: 'Date of Birth does not match records' });
  }

  return res.json({ success: true, data: candidate });
});

// POST /api/candidates/verify - verify credentials
candidatesRouter.post('/verify', (req, res) => {
  const { applicationNo, dob } = req.body;

  if (!applicationNo || !dob) {
    return res.status(400).json({ success: false, message: 'applicationNo and dob are required fields' });
  }

  const cleanAppNo = applicationNo.toString().trim();
  const candidate = candidates.find(c => c.applicationNo === cleanAppNo);

  if (!candidate) {
    return res.status(404).json({ success: false, message: 'Invalid Application Number. No records found.' });
  }

  if (normalizeDate(candidate.dob) !== normalizeDate(dob)) {
    return res.status(401).json({ success: false, message: 'Entered Date of Birth does not match application records.' });
  }

  return res.json({ success: true, candidate });
});

// GET /api/candidates/:applicationNo
candidatesRouter.get('/:applicationNo', (req, res) => {
  const { applicationNo } = req.params;
  const candidate = candidates.find(c => c.applicationNo === applicationNo.trim());

  if (!candidate) {
    return res.status(404).json({ success: false, message: 'Candidate not found' });
  }

  return res.json({ success: true, data: candidate });
});
