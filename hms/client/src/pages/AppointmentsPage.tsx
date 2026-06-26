import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Chip, Stack } from '@mui/material';
import { appointments } from '../data/mockData';

export default function AppointmentsPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight={700}>Appointment Scheduler</Typography>
        <Chip label="4 scheduled visits" color="secondary" />
      </Stack>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Appointment ID</TableCell>
              <TableCell>Patient</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Room</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id} hover>
                <TableCell>{appointment.id}</TableCell>
                <TableCell>{appointment.patient}</TableCell>
                <TableCell>{appointment.doctor}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.room}</TableCell>
                <TableCell><Chip size="small" label={appointment.status} color={appointment.status === 'Confirmed' ? 'primary' : 'default'} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
