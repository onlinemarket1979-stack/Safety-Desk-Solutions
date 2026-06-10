import express from 'express';

const router = express.Router();

// GET /api/companies
router.get('/', (req, res) => {
  res.json({ message: 'List companies endpoint' });
});

// POST /api/companies
router.post('/', (req, res) => {
  res.json({ message: 'Create company endpoint' });
});

// GET /api/companies/:id
router.get('/:id', (req, res) => {
  res.json({ message: 'Get company endpoint', companyId: req.params.id });
});

// PUT /api/companies/:id
router.put('/:id', (req, res) => {
  res.json({ message: 'Update company endpoint', companyId: req.params.id });
});

export default router;
