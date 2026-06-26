import { useState } from 'react';
import { Alert, Box, Button, Chip, Grid, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material';

const STORAGE_KEY = 'hms-patients';

export default function PatientRegistrationPage() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    ailment: '',
    insurance: '',
    consent: 'Yes'
  });
  const [message, setMessage] = useState('');

  const handleSave = () => {
    const patientRecord = {
      id: `PT-${Date.now()}`,
      ...form,
      registeredAt: new Date().toISOString()
    };

    const existing = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
    const patients = existing ? JSON.parse(existing) : [];
    patients.push(patientRecord);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
    setMessage(`Patient registered successfully with ID ${patientRecord.id}.`);
    setForm({ name: '', age: '', bloodGroup: '', ailment: '', insurance: '', consent: 'Yes' });
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h5" fontWeight={700}>Patient Registration</Typography>
          <Typography color="text.secondary">Capture core information for admissions, appointments, and claims.</Typography>
        </Box>
        <Chip label="Auto Patient ID enabled" color="primary" />
      </Stack>

      {message ? <Alert severity="success" sx={{ mb: 3 }}>{message}</Alert> : null}

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}><TextField label="Full Name" fullWidth value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Grid>
        <Grid item xs={12} md={6}><TextField label="Age" fullWidth value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} /></Grid>
        <Grid item xs={12} md={6}><TextField select label="Blood Group" fullWidth value={form.bloodGroup} onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}>
          <MenuItem value="A+">A+</MenuItem><MenuItem value="A-">A-</MenuItem><MenuItem value="B+">B+</MenuItem><MenuItem value="O+">O+</MenuItem>
        </TextField></Grid>
        <Grid item xs={12} md={6}><TextField label="Primary Ailment" fullWidth value={form.ailment} onChange={(e) => setForm({ ...form, ailment: e.target.value })} /></Grid>
        <Grid item xs={12} md={6}><TextField label="Insurance Provider" fullWidth value={form.insurance} onChange={(e) => setForm({ ...form, insurance: e.target.value })} /></Grid>
        <Grid item xs={12} md={6}><TextField select label="Consent" fullWidth value={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.value })}>
          <MenuItem value="Yes">Yes</MenuItem><MenuItem value="No">No</MenuItem>
        </TextField></Grid>
        <Grid item xs={12}><TextField label="Medical History" multiline minRows={4} fullWidth /></Grid>
      </Grid>

      <Stack direction="row" spacing={2} mt={3}>
        <Button variant="contained">Save Registration</Button>
        <Button variant="outlined">Reset</Button>
      </Stack>
    </Paper>
  );
}
