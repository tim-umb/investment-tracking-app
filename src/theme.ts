import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003C6E', // umbBlue.600
      dark: '#003264', // umbBlue.900
      light: '#42A5F5', // umbBlue.300
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0', // purple.500
      dark: '#7b1fa2', // purple.700
      light: '#ba68c8', // purple.300
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f', // red.700
      dark: '#c62828', // red.800
      light: '#ef5350', // red.400
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ed6c02', // Hardcoded in base.json
      dark: '#e65100', // orange.900
      light: '#ff9800', // orange.500
      contrastText: '#ffffff',
    },
    info: {
      main: '#0288d1', // lightBlue.700
      dark: '#01579b', // lightBlue.900
      light: '#03a9f4', // lightBlue.500
      contrastText: '#ffffff',
    },
    success: {
      main: '#2e7d32', // green.800
      dark: '#1b5e20', // green.900
      light: '#4caf50', // green.500
      contrastText: '#ffffff',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(0, 0, 0, 0.56)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 300, // Light
      fontSize: '96px',
      lineHeight: 1.167,
      letterSpacing: '-1.5px',
    },
    h2: {
      fontWeight: 300, // Light
      fontSize: '60px',
      lineHeight: 1.2,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontWeight: 400, // Regular
      fontSize: '48px',
      lineHeight: 1.167,
      letterSpacing: '0px',
    },
    h4: {
      fontWeight: 400, // Regular
      fontSize: '34px',
      lineHeight: 1.235,
      letterSpacing: '0.25px',
    },
    h5: {
      fontWeight: 400, // Regular
      fontSize: '24px',
      lineHeight: 1.334,
      letterSpacing: '0px',
    },
    h6: {
      fontWeight: 500, // Medium
      fontSize: '20px',
      lineHeight: 1.6,
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontWeight: 400, // Regular
      fontSize: '16px',
      lineHeight: 1.75,
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontWeight: 500, // Medium
      fontSize: '14px',
      lineHeight: 1.57,
      letterSpacing: '0.1px',
    },
    body1: {
      fontWeight: 400, // Regular
      fontSize: '16px',
      lineHeight: 1.5,
      letterSpacing: '0.15px',
    },
    body2: {
      fontWeight: 400, // Regular
      fontSize: '14px',
      lineHeight: 1.43,
      letterSpacing: '0.17px',
    },
    caption: {
      fontWeight: 400, // Regular
      fontSize: '12px',
      lineHeight: 1.66,
      letterSpacing: '0.4px',
    },
    overline: {
      fontWeight: 400, // Regular
      fontSize: '12px',
      lineHeight: 2.66,
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8, // spacing.base
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Using elevation 4 shadow as default for app bar if needed, or custom
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
          backgroundColor: '#f5f5f5', // appbar.defaultFill (grey.100)
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: 1.73, // 26px / 15px
          letterSpacing: '0.46px',
          textTransform: 'uppercase',
        },
        sizeMedium: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: 1.71, // 24px / 14px
          letterSpacing: '0.4px',
          textTransform: 'uppercase',
        },
        sizeSmall: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 500,
          fontSize: '13px',
          lineHeight: 1.69, // 22px / 13px
          letterSpacing: '0.46px',
          textTransform: 'uppercase',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: 1, // 12px / 12px
          letterSpacing: '0.15px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: 1.66,
          letterSpacing: '0.4px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: 1.5, // 24px / 16px
          letterSpacing: '0.15px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: 1.38, // 18px / 13px
          letterSpacing: '0.16px',
        },
        root: {
          // defaultEnabledBorder: grey.700 (#616161)
          borderColor: '#616161',
        },
        // defaultCloseFill: rgba(0,0,0, 1)
        // defaultHoverFill: rgba(0,0,0,0.12)
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 500,
          fontSize: '10px',
          lineHeight: 1.4, // 14px / 10px
          letterSpacing: '0px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: 1.5,
          letterSpacing: '0.15px',
          '&.Mui-dense': {
             fontSize: '14px',
             lineHeight: 1.71, // 24px / 14px
             letterSpacing: '0.17px',
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: 3.42, // 48px / 14px
          letterSpacing: '0.1px',
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        label: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: 1.66,
          letterSpacing: '0.4px',
          '&.Mui-selected': {
            fontSize: '14px', // Ensure size stays consistent if desired, or follow active-label token
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        thumb: {
          // knobFill: grey.50 (#fafafa)
          backgroundColor: '#fafafa',
        },
        track: {
          // slideFill: rgba(0,0,0,1) - This might be too dark for a track, usually opacity is applied.
          // But following token literally:
          backgroundColor: 'rgba(0,0,0,1)',
          opacity: 0.38, // Standard MUI opacity for track
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          // fill: grey.400 (#bdbdbd)
          backgroundColor: '#bdbdbd',
          // avatar-initials typography
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: 1, // 20px / 20px
          letterSpacing: '0.14px',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          color: '#541313',
          backgroundColor: '#FBEAEA',
        },
        standardWarning: {
          color: '#5F2B01',
          backgroundColor: '#FDF0E6',
        },
        standardInfo: {
          color: '#013654',
          backgroundColor: '#E6F3FA',
        },
        standardSuccess: {
          color: '#123214',
          backgroundColor: '#EAF2EA',
        },
        message: {
          // alert-title typography
          '& .MuiAlertTitle-root': {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.5,
            letterSpacing: '0.15px',
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          // enabledBorder: rgba(0,0,0,0.23) - Rating usually uses color for active/inactive
          // This might refer to the empty icon color
          color: 'rgba(0,0,0,0.23)',
          '&.Mui-focusVisible .MuiRating-label': {
             outline: '1px solid rgba(0,0,0,0.23)',
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          // badge-label typography
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: 1.66, // 20px / 12px
          letterSpacing: '0.14px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          // table-header typography
          '& .MuiTableCell-head': {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: 1.71, // 24px / 14px
            letterSpacing: '0.17px',
          },
        },
      },
    },
  },
  shadows: [
    'none',
    '0px 1px 3px 0px #0000001f, 0px 1px 1px 0px #00000024, 0px 2px 1px -1px #00000033', // 1
    '0px 1px 5px 0px #0000001f, 0px 2px 2px 0px #00000024, 0px 3px 1px -2px #00000033', // 2
    '0px 1px 8px 0px #0000001f, 0px 3px 4px 0px #00000024, 0px 3px 3px -2px #00000033', // 3
    '0px 1px 10px 0px #0000001f, 0px 4px 5px 0px #00000024, 0px 2px 4px -1px #00000033', // 4
    '0px 1px 14px 0px #0000001f, 0px 5px 8px 0px #00000024, 0px 3px 5px -1px #00000033', // 5
    '0px 1px 18px 0px #0000001f, 0px 6px 10px 0px #00000024, 0px 3px 5px -1px #00000033', // 6
    '0px 2px 16px 1px #0000001f, 0px 7px 10px 1px #00000024, 0px 4px 5px -2px #00000033', // 7
    '0px 3px 14px 2px #0000001f, 0px 8px 10px 1px #00000024, 0px 5px 5px -3px #00000033', // 8
    '0px 3px 16px 2px #0000001f, 0px 9px 12px 1px #00000024, 0px 5px 6px -3px #00000033', // 9
    '0px 4px 18px 3px #0000001f, 0px 10px 14px 1px #00000024, 0px 6px 6px -3px #00000033', // 10
    '0px 4px 20px 3px #0000001f, 0px 11px 15px 1px #00000024, 0px 6px 7px -4px #00000033', // 11
    '0px 5px 22px 4px #0000001f, 0px 12px 17px 2px #00000024, 0px 7px 8px -4px #00000033', // 12
    '0px 5px 24px 4px #0000001f, 0px 13px 19px 2px #00000024, 0px 7px 8px -4px #00000033', // 13
    '0px 5px 26px 4px #0000001f, 0px 14px 21px 2px #00000024, 0px 7px 9px -4px #00000033', // 14
    '0px 6px 28px 5px #0000001f, 0px 15px 22px 2px #00000024, 0px 8px 9px -5px #00000033', // 15
    '0px 6px 30px 5px #0000001f, 0px 16px 24px 2px #00000024, 0px 8px 10px -5px #00000033', // 16
    '0px 6px 32px 5px #0000001f, 0px 17px 26px 2px #00000024, 0px 8px 11px -5px #00000033', // 17
    '0px 7px 34px 6px #0000001f, 0px 18px 28px 2px #00000024, 0px 9px 11px -5px #00000033', // 18
    '0px 7px 36px 6px #0000001f, 0px 19px 29px 2px #00000024, 0px 9px 12px -6px #00000033', // 19
    '0px 8px 38px 7px #0000001f, 0px 20px 31px 3px #00000024, 0px 10px 13px -6px #00000033', // 20
    '0px 8px 40px 7px #0000001f, 0px 21px 33px 3px #00000024, 0px 10px 13px -6px #00000033', // 21
    '0px 8px 42px 7px #0000001f, 0px 22px 35px 3px #00000024, 0px 10px 14px -6px #00000033', // 22
    '0px 9px 44px 8px #0000001f, 0px 23px 36px 3px #00000024, 0px 11px 14px -7px #00000033', // 23
    '0px 9px 46px 8px #0000001f, 0px 24px 38px 3px #00000024, 0px 11px 15px -7px #00000033', // 24
  ],
});

export default theme;
