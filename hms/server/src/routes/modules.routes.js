import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({
    modules: [
      { name: 'Dashboard', description: 'Operational overview' },
      { name: 'Patients', description: 'Patient registration and history' },
      { name: 'Appointments', description: 'Scheduling and calendar' },
      { name: 'Doctors', description: 'Doctor roster and shifts' },
      { name: 'Beds', description: 'Bed allocation and occupancy' },
      { name: 'Billing', description: 'Invoices and payment status' },
      { name: 'Reports', description: 'Analytics and KPIs' }
    ]
  });
});

export default router;
