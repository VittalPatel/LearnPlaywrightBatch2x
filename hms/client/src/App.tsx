import { useMemo, useState } from 'react';
import { Box, CssBaseline, Drawer, List, ListItemButton, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, Container, Divider, IconButton, Avatar, Stack, Switch, FormControlLabel } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HotelIcon from '@mui/icons-material/Hotel';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import BiotechIcon from '@mui/icons-material/Biotech';
import DashboardPage from './pages/DashboardPage';
import PatientsPage from './pages/PatientsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import DoctorsPage from './pages/DoctorsPage';
import BedsPage from './pages/BedsPage';
import BillingPage from './pages/BillingPage';
import ReportsPage from './pages/ReportsPage';
import AuthPage from './pages/AuthPage';
import PatientRegistrationPage from './pages/PatientRegistrationPage';
import LabPharmacyPage from './pages/LabPharmacyPage';

const drawerWidth = 240;

const modules = [
  { label: 'Authentication', icon: <LockIcon />, component: <AuthPage /> },
  { label: 'Dashboard', icon: <DashboardIcon />, component: <DashboardPage /> },
  { label: 'Patients', icon: <PeopleIcon />, component: <PatientsPage /> },
  { label: 'Patient Registration', icon: <PersonAddAltIcon />, component: <PatientRegistrationPage /> },
  { label: 'Appointments', icon: <CalendarMonthIcon />, component: <AppointmentsPage /> },
  { label: 'Doctors', icon: <MedicalServicesIcon />, component: <DoctorsPage /> },
  { label: 'Beds', icon: <HotelIcon />, component: <BedsPage /> },
  { label: 'Billing', icon: <ReceiptLongIcon />, component: <BillingPage /> },
  { label: 'Lab & Pharmacy', icon: <BiotechIcon />, component: <LabPharmacyPage /> },
  { label: 'Reports', icon: <AssessmentIcon />, component: <ReportsPage /> }
];

export default function App({ mode, onToggleMode }: { mode: 'light' | 'dark'; onToggleMode: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const activeComponent = useMemo(() => modules[activeModule].component, [activeModule]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: 'linear-gradient(90deg, #2563eb 0%, #14b8a6 100%)', backdropFilter: 'blur(16px)' }}>
        <Toolbar sx={{ py: 1 }}>
          <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(!mobileOpen)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ flexGrow: 1 }}>
            <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 36, height: 36 }}>H</Avatar>
            <Box>
              <Typography variant="h6" noWrap>Hospital Management System</Typography>
              <Typography variant="body2" sx={{ opacity: 0.85 }}>Care, operations, and analytics in one place</Typography>
            </Box>
          </Stack>
          <FormControlLabel
            control={<Switch checked={mode === 'dark'} onChange={onToggleMode} color="default" />}
            label={mode === 'dark' ? 'Dark' : 'Light'}
            sx={{ color: 'white', ml: 1 }}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: '#0f172a', color: 'white' } }}
      >
        <Toolbar />
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.7)', letterSpacing: 1.2, textTransform: 'uppercase' }}>Modules</Typography>
        </Box>
        <List>
          {modules.map((module, index) => (
            <ListItemButton key={module.label} selected={activeModule === index} onClick={() => { setActiveModule(index); setMobileOpen(false); }} sx={{ mx: 1, borderRadius: 2, color: 'white', transition: 'all 180ms ease', '&.Mui-selected': { backgroundColor: 'rgba(255,255,255,0.16)', transform: 'translateX(4px)' }, '&:hover': { backgroundColor: 'rgba(255,255,255,0.12)', transform: 'translateX(4px)' } }}>
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{module.icon}</ListItemIcon>
              <ListItemText primary={module.label} />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.16)' }} />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3 }, background: mode === 'light' ? 'linear-gradient(180deg, #f8fbff 0%, #f4f7fb 100%)' : 'linear-gradient(180deg, #020617 0%, #0f172a 100%)', minHeight: '100vh', transition: 'background 220ms ease' }}>
        <Toolbar />
        <Container maxWidth="xl" sx={{ py: 1 }}>{activeComponent}</Container>
      </Box>
    </Box>
  );
}
