import express from 'express';

const router = express.Router();

router.get('/analytics', (_req, res) => {
  res.json({
    summary: {
      patients: 1248,
      doctors: 86,
      appointments: 74,
      occupancy: 68
    }
  });
});

export default router;
