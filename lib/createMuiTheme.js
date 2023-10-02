import { createTheme } from '@mui/material'

export const createMuiTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            background: 'linear-gradient(90deg,#71e2b3,#58d1c3 35%,#48bcd1)',
            borderRadius: '30px',
            textTransform: 'uppercase',
            boxSizing: 'border-box',
            padding: '15px 40px',
            fontWeight: 400,
            fontSize: '14px'
          }
        }
      ]
    }
  },
  palette: {
    primary: {
      main: '#71e2b3',
      secondary: '#000',
      blue: '#0367bf'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em'
    },
    h2: {
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em'
    },
    h3: {
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '0em,'
    },
    h4: {
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em'
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em'
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em'
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em'
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.375em'
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    }
  }
})
