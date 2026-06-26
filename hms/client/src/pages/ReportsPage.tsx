import { Grid, Paper, Typography, Stack, Box } from '@mui/material';
import { reportMetrics } from '../data/mockData';

export default function ReportsPage() {
  return (
    <Grid container spacing={3}>
      {reportMetrics.map((metric) => (
        <Grid item xs={12} md={6} key={metric.label}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6">{metric.label}</Typography>
            <Typography variant="h4" fontWeight={700} mt={1}>{metric.value}</Typography>
            <Typography color="text.secondary" mt={1}>{metric.trend}</Typography>
          </Paper>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Paper sx={{ p: 3, borderRadius: 3 }}>
          <Typography variant="h6" mb={2}>Clinical Performance Summary</Typography>
          <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 2 }}>
            <Typography>Admissions are stable, ICU occupancy is trending high, and pharmacy sales are above target for the current month.</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
