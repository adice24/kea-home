import { Router } from 'express';

export const noticesRouter = Router();

const NOTICES = [
  {
    id: 1,
    title: 'PGCET-2026 - Provisional Result & Verification Portal Live',
    date: '18-09-2026',
    category: 'PGCET-2026',
    isNew: true,
    fileUrl: '#'
  },
  {
    id: 2,
    title: 'PGCET-2026 - Master of Computer Applications (MCA) Revised Final Answer Key',
    date: '16-09-2026',
    category: 'Answer Keys',
    isNew: true,
    fileUrl: '#'
  },
  {
    id: 3,
    title: 'PGCET-2026 - Schedule for Document Verification and Seat Allotment First Round',
    date: '14-09-2026',
    category: 'Admissions',
    isNew: false,
    fileUrl: '#'
  },
  {
    id: 4,
    title: 'UGCET (KCET)-2026 - Engineering & Architecture Second Extended Round Cutoff',
    date: '10-09-2026',
    category: 'UGCET-2026',
    isNew: false,
    fileUrl: '#'
  }
];

const FLASH_NEWS = [
  'PGCET-2026 Provisional Result and Scorecard link is now active.',
  'Candidates must verify details before document verification process begins.',
  'Helpline Desk active from 10:00 AM to 5:30 PM: 080-23460460'
];

noticesRouter.get('/', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = NOTICES.filter(n => n.category.toLowerCase() === category.toLowerCase());
    return res.json({ success: true, count: filtered.length, data: filtered });
  }
  return res.json({ success: true, count: NOTICES.length, data: NOTICES });
});

noticesRouter.get('/flash', (req, res) => {
  return res.json({ success: true, data: FLASH_NEWS });
});
