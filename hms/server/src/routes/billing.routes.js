import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ billing: [{ id: 'INV-1001', patient: 'Asha Sharma', amount: 5200 }] });
});

export default router;
