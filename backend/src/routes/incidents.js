import express from 'express';

const router = express.Router();

// GET /api/incidents
router.get('/', (req, res) => {
  res.json({ message: 'List incidents endpoint' });
});

// POST /api/incidents
router.post('/', (req, res) => {
  res.json({ message: 'Create incident endpoint' });
});

// GET /api/incidents/:id
router.get('/:id', (req, res) => {
  res.json({ message: 'Get incident endpoint', incidentId: req.params.id });
});

// PUT /api/incidents/:id
router.put('/:id', (req, res) => {
  res.json({ message: 'Update incident endpoint', incidentId: req.params.id });
});

export default router;
