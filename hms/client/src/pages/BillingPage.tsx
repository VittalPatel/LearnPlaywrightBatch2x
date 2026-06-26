import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Chip, Stack } from '@mui/material';
import { invoices } from '../data/mockData';

export default function BillingPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight={700}>Billing & Invoices</Typography>
        <Chip label="₹32.3K pending" color="warning" />
      </Stack>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invoice ID</TableCell>
              <TableCell>Patient</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id} hover>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.patient}</TableCell>
                <TableCell>₹{invoice.amount.toLocaleString()}</TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell><Chip size="small" label={invoice.status} color={invoice.status === 'Paid' ? 'success' : invoice.status === 'Pending' ? 'warning' : 'error'} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
