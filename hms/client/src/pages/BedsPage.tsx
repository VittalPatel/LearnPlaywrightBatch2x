import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Chip, Stack } from '@mui/material';
import { beds } from '../data/mockData';

export default function BedsPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight={700}>Bed Management</Typography>
        <Chip label="4 bed records" color="info" />
      </Stack>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Bed ID</TableCell>
              <TableCell>Ward</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Patient</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {beds.map((bed) => (
              <TableRow key={bed.id} hover>
                <TableCell>{bed.id}</TableCell>
                <TableCell>{bed.ward}</TableCell>
                <TableCell>{bed.type}</TableCell>
                <TableCell>{bed.patient || '—'}</TableCell>
                <TableCell><Chip size="small" label={bed.status} color={bed.status === 'Available' ? 'success' : bed.status === 'Occupied' ? 'error' : 'warning'} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
