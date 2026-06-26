import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App';
import store from './store';

function ThemeApp() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: '#2563eb' },
          secondary: { main: '#14b8a6' },
          background: {
            default: mode === 'light' ? '#f4f7fb' : '#020617',
            paper: mode === 'light' ? '#ffffff' : '#0f172a'
          },
          text: {
            primary: mode === 'light' ? '#0f172a' : '#f8fafc',
            secondary: mode === 'light' ? '#475569' : '#cbd5e1'
          }
        },
        typography: {
          fontFamily: 'Inter, Roboto, Arial, sans-serif',
          h4: { fontWeight: 700 },
          h5: { fontWeight: 700 },
          h6: { fontWeight: 700 }
        },
        shape: { borderRadius: 16 },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                boxShadow: mode === 'light' ? '0 10px 30px rgba(15, 23, 42, 0.07)' : '0 10px 30px rgba(2, 6, 23, 0.4)',
                transition: 'transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease'
              }
            }
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 999
              }
            }
          }
        }
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} onToggleMode={() => setMode(mode === 'light' ? 'dark' : 'light')} />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
