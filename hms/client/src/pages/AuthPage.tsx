import { useState } from 'react';
import { Alert, Box, Button, Chip, Stack, TextField, Typography, Paper } from '@mui/material';

type Mode = 'login' | 'signup';

type DemoUser = {
  email: string;
  password: string;
  name: string;
  role: string;
};

const STORAGE_KEY = 'hms-demo-users';

const getStoredUsers = (): DemoUser[] => {
  if (typeof window === 'undefined') return [];
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

const saveUsers = (users: DemoUser[]) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>('login');
  const [form, setForm] = useState({ email: '', password: '', name: '', role: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const users = getStoredUsers();

    if (mode === 'signup') {
      const exists = users.some((user) => user.email.toLowerCase() === form.email.toLowerCase());
      if (exists) {
        setMessage('An account with this email already exists.');
        return;
      }

      const newUser: DemoUser = {
        email: form.email,
        password: form.password,
        name: form.name,
        role: form.role || 'Staff'
      };

      const updatedUsers = [...users, newUser];
      saveUsers(updatedUsers);
      setMessage(`Account created for ${newUser.name}. You can now log in.`);
      setForm({ email: '', password: '', name: '', role: '' });
      setMode('login');
      return;
    }

    const found = users.find((user) => user.email.toLowerCase() === form.email.toLowerCase() && user.password === form.password);
    if (found) {
      setMessage(`Welcome back, ${found.name} (${found.role}).`);
    } else {
      setMessage('Invalid email or password. Please create an account first.');
    }
  };

  return (
    <Box sx={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ width: { xs: '100%', md: 480 }, p: 3, borderRadius: 3 }}>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" fontWeight={700}>Hospital Access</Typography>
            <Chip label={mode === 'login' ? 'Secure login' : 'New account'} color="primary" variant="outlined" />
          </Stack>

          <Typography color="text.secondary">Role-based access for clinicians, staff, and administrators.</Typography>

          {message ? <Alert severity={message.includes('Welcome') || message.includes('created') ? 'success' : 'info'}>{message}</Alert> : null}

          <TextField label="Email" fullWidth value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <TextField label="Password" type="password" fullWidth value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

          {mode === 'signup' && (
            <>
              <TextField label="Full Name" fullWidth value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <TextField label="Role" fullWidth placeholder="Doctor / Nurse / Admin" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
            </>
          )}

          <Stack direction="row" spacing={1}>
            <Button variant="contained" fullWidth onClick={handleSubmit}>{mode === 'login' ? 'Login' : 'Register'}</Button>
            <Button variant="outlined" onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setMessage(''); }}>
              Switch
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
