import { Grid, Paper, Typography, Stack, Chip, Box } from '@mui/material';
import { doctors } from '../data/mockData';

export default function DoctorsPage() {
  return (
    <Grid container spacing={3}>
      {doctors.map((doctor) => (
        <Grid item xs={12} md={6} key={doctor.id}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography variant="h6">{doctor.name}</Typography>
              <Chip label={doctor.availability} color="success" size="small" />
            </Stack>
            <Typography color="text.secondary">{doctor.specialty}</Typography>
            <Box mt={2}>
              <Typography variant="body2">Shift: {doctor.shift}</Typography>
              <Typography variant="body2">Patients today: {doctor.patientsToday}</Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
