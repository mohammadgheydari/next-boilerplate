import Meta from './meta'
import Header from './header'
import Footer from './footer'
import "../styles/core.scss"

export default class Layout extends React.Component {
  componentDidMount() {
    console.log('mount');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    const { children, title = 'تایتل پیش فرض' } = this.props;
    return (
      <div>
        <Meta title={title} />
        <Header />
        {children}
        <Footer/>
      </div>
    );
  }
}