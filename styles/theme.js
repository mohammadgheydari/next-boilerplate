import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/deepPurple'
export default createMuiTheme({
  direction: "rtl",
  palette: {
    primary: { 
      light: purple[500],
      main: purple[500],
      dark: purple[700],
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


