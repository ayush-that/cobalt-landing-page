import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#22d3ee',
      light: '#67e8f9',
      dark: '#06b6d4',
    },
    secondary: {
      main: '#0ea5e9',
      light: '#38bdf8',
      dark: '#0284c7',
    },
    background: {
      default: '#09090b',
      paper: '#18181b',
    },
    text: {
      primary: '#e4e4e7',
      secondary: '#a1a1aa',
      disabled: '#71717a',
    },
    grey: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    divider: 'rgba(255, 255, 255, 0.1)',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '71.9px',
      fontWeight: 700,
      letterSpacing: '-1.8px',
      lineHeight: '77.04px',
    },
    h2: {
      fontSize: '48.2px',
      fontWeight: 700,
      letterSpacing: '-1.2px',
      lineHeight: '51.36px',
    },
    h3: {
      fontSize: '31.9px',
      fontWeight: 700,
      letterSpacing: '-0.8px',
    },
    h4: {
      fontSize: '17.9px',
      fontWeight: 500,
      lineHeight: '18px',
    },
    body1: {
      fontSize: '17.9px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '13.9px',
      fontWeight: 400,
    },
    caption: {
      fontSize: '13.1px',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '6px',
          fontSize: '13.9px',
          fontWeight: 400,
        },
      },
    },
  },
});

export default theme;