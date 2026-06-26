import { Grid, Paper, Stack, Typography, Chip, Box } from '@mui/material';

const labs = [
  { name: 'CBC Panel', status: 'Completed', priority: 'High' },
  { name: 'Lipid Profile', status: 'Pending', priority: 'Medium' },
  { name: 'Blood Culture', status: 'In Progress', priority: 'High' }
];

const pharmacy = [
  { item: 'Amoxicillin 500mg', stock: 120, expiry: '2027-04-10' },
  { item: 'Paracetamol 650mg', stock: 240, expiry: '2026-12-06' },
  { item: 'Insulin Glargine', stock: 40, expiry: '2026-09-22' }
];

export default function LabPharmacyPage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, borderRadius: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h5" fontWeight={700}>Laboratory Module</Typography>
            <Chip label="3 active requests" color="secondary" />
          </Stack>
          <Stack spacing={1.5}>
            {labs.map((lab) => (
              <Box key={lab.name} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 1.5 }}>
                <Typography fontWeight={600}>{lab.name}</Typography>
                <Typography variant="body2" color="text.secondary">Status: {lab.status} • Priority: {lab.priority}</Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, borderRadius: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h5" fontWeight={700}>Pharmacy Module</Typography>
            <Chip label="Stock healthy" color="success" />
          </Stack>
          <Stack spacing={1.5}>
            {pharmacy.map((item) => (
              <Box key={item.item} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 1.5 }}>
                <Typography fontWeight={600}>{item.item}</Typography>
                <Typography variant="body2" color="text.secondary">Stock: {item.stock} units • Expires: {item.expiry}</Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}
