import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  direction: "rtl",
  palette: {
    primary: { 
      light: '#00446A',
      main: '#00446A',
      // main: purple[500],
      dark: '#00446A',
    },
    secondary: {
      light: '#EF4044',
      main: '#EF4044',
      dark: '#EF4044',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'iransans',
  },
});

