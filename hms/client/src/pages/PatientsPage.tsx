import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Chip, Stack } from '@mui/material';
import { patients } from '../data/mockData';

export default function PatientsPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight={700}>Patient Registry</Typography>
        <Chip label="4 active records" color="primary" />
      </Stack>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id} hover>
                <TableCell>{patient.id}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.ailment}</TableCell>
                <TableCell>{patient.doctor}</TableCell>
                <TableCell><Chip size="small" label={patient.status} color={patient.status === 'Critical' ? 'error' : 'success'} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
