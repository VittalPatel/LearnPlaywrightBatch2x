import { Grid, Paper, Typography, Stack, Chip, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { appointments, patients, reportMetrics } from '../data/mockData';

const revenueData = [
  { name: 'Jan', revenue: 120 },
  { name: 'Feb', revenue: 180 },
  { name: 'Mar', revenue: 160 },
  { name: 'Apr', revenue: 220 },
  { name: 'May', revenue: 260 },
  { name: 'Jun', revenue: 310 }
];

const departmentData = [
  { name: 'OPD', value: 42 },
  { name: 'IPD', value: 28 },
  { name: 'Labs', value: 15 },
  { name: 'Pharmacy', value: 15 }
];

const COLORS = ['#1976d2', '#009688', '#f57c00', '#7b1fa2'];

export default function DashboardPage() {
  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} mb={3}>
        <Box>
          <Typography variant="h4" fontWeight={700}>HMS Command Center</Typography>
          <Typography color="text.secondary">Real-time visibility for operations, clinicians, and revenue.</Typography>
        </Box>
        <Chip label="Live hospital overview" color="primary" variant="outlined" />
      </Stack>

      <Grid container spacing={3} mb={3}>
        {[
          { label: 'Total Patients', value: patients.length.toString() },
          { label: 'Doctors', value: '86' },
          { label: 'Today Appointments', value: appointments.length.toString() },
          { label: 'Bed Occupancy', value: '68%' }
        ].map((metric) => (
          <Grid item xs={12} sm={6} md={3} key={metric.label}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography color="text.secondary">{metric.label}</Typography>
              <Typography variant="h4" fontWeight={700}>{metric.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" mb={2}>Revenue Overview</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#1976d2" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" mb={2}>Service Mix</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={departmentData} dataKey="value" nameKey="name" outerRadius={90}>
                  {departmentData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" mb={2}>Today’s Appointments</Typography>
            <Stack spacing={1.5}>
              {appointments.map((appointment) => (
                <Box key={appointment.id} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 1.5 }}>
                  <Typography fontWeight={600}>{appointment.patient}</Typography>
                  <Typography variant="body2" color="text.secondary">{appointment.doctor} • {appointment.time}</Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" mb={2}>Operational KPIs</Typography>
            <Stack spacing={1.5}>
              {reportMetrics.map((metric) => (
                <Box key={metric.label} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 1.5 }}>
                  <Typography fontWeight={600}>{metric.label}</Typography>
                  <Typography variant="body2" color="text.secondary">{metric.value} • {metric.trend}</Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
