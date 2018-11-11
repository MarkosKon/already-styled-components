import React from 'react';
import PropTypes from 'prop-types';

import DesktopList from './Implementations/DesktopList';
import MobileList from './Implementations/MobileList';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuVisible: false,
      fixedTop: false,
    };

    this.fixedBreakpoint = React.createRef();

    this.showMobile = this.showMobile.bind(this);
    this.hideMobile = this.hideMobile.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    if (props.fixed) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      };
      this.observer = new IntersectionObserver(this.handleScroll, options);
    }
  }

  componentDidMount() {
    const { fixed } = this.props;
    if (fixed) this.observer.observe(this.fixedBreakpoint.current);
  }

  componentWillUnmount() {
    const { fixed } = this.props;
    if (fixed) this.observer.disconnect();
  }

  handleScroll(entries) {
    if (entries[0].isIntersecting) this.setState({ fixedTop: false });
    else this.setState({ fixedTop: true });
  }

  showMobile() {
    this.setState({ mobileMenuVisible: true });
  }

  hideMobile() {
    this.setState({ mobileMenuVisible: false });
  }

  render() {
    const { mobileMenuVisible, fixedTop } = this.state;
    const {
      desktopList, mobileList, children, brand, c, bc, hc,
    } = this.props;
    return (
      <>
        {desktopList({
          showMobile: this.showMobile,
          links: children,
          brand,
          fixedTop,
          fixedBreakpoint: this.fixedBreakpoint,
          c,
          bc,
          hc,
        })}
        {mobileList({
          hideMobile: this.hideMobile,
          links: children,
          mobileMenuVisible,
          c,
          bc,
          hc,
        })}
      </>
    );
  }
}

Navbar.propTypes = {
  desktopList: PropTypes.func,
  mobileList: PropTypes.func,
  brand: PropTypes.element,
  fixed: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
};
Navbar.defaultProps = {
  desktopList: props => <DesktopList {...props} />,
  mobileList: props => <MobileList {...props} />,
  brand: null,
  fixed: true,
  c: 'white',
  bc: '#1d1d1d',
  hc: 'orangered',
};

export default Navbar;
export { DesktopList, MobileList };
