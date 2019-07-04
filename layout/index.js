import Meta from './meta';
import Header from './header';
import Footer from './footer';
import "../styles/core.scss";
import { MuiThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { create } from 'jss';
// import { StylesProvider, jssPreset } from '@material-ui/styles';
import rtl from 'jss-rtl'

// import JssProvider from 'react-jss/lib/JssProvider';
import MuiTheme from '../styles/theme'


// Configure JSS
// const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
// const jss = create({
//   plugins: [...jssPreset().plugins, rtl()],
// });
export default class Layout extends React.Component {
  // handleUpdateRoute = () => window.scrollTo(0, 0);
  // scrollToTop = () => window.scroll(0, 0);
  render() {
    const { children, title = 'تایتل پیش فرض' } = this.props;

    return (
      // <StylesProvider jss={jss}>
        <MuiThemeProvider theme={MuiTheme}>
          <CssBaseline />
          <div>
            <Meta title={title} />
            <Header />
            {children}
            <Footer />
          </div>
        </MuiThemeProvider>
      // </StylesProvider>
    );
  }
}