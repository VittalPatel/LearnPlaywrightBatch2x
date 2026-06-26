import express from 'express';

const router = express.Router();

/**
 * @openapi
 * /api/patients:
 *   get:
 *     summary: List patients
 *     responses:
 *       200:
 *         description: Patients retrieved
 */
router.get('/', (_req, res) => {
  res.json({
    patients: [
      { id: 'PT-1001', name: 'Asha Sharma', status: 'Active' },
      { id: 'PT-1002', name: 'Rakesh Verma', status: 'Follow-up' }
    ]
  });
});

router.post('/', (req, res) => {
  const patient = { id: `PT-${Date.now()}`, ...req.body };
  res.status(201).json(patient);
});

export default router;
