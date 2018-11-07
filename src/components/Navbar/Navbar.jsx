import React from 'react';
import PropTypes from 'prop-types';

import DesktopList from './Implementations/DesktopList';
import MobileList from './Implementations/MobileList';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuVisible: false,
    };

    this.showMobile = this.showMobile.bind(this);
    this.hideMobile = this.hideMobile.bind(this);
  }

  showMobile() {
    this.setState({ mobileMenuVisible: true });
  }

  hideMobile() {
    this.setState({ mobileMenuVisible: false });
  }

  render() {
    const { mobileMenuVisible } = this.state;
    const {
      desktopList, mobileList, children, brand,
    } = this.props;
    return (
      <>
        {desktopList(this.showMobile, children, brand)}
        {mobileList(this.hideMobile, children, mobileMenuVisible)}
      </>
    );
  }
}

Navbar.propTypes = {
  desktopList: PropTypes.func,
  mobileList: PropTypes.func,
  brand: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};
Navbar.defaultProps = {
  desktopList: (showMobile, links, brand) => (
    <DesktopList showMobile={showMobile} links={links} brand={brand} />
  ),
  mobileList: (hideMobile, links, mobileMenuVisible) => (
    <MobileList hideMobile={hideMobile} links={links} mobileMenuVisible={mobileMenuVisible} />
  ),
  brand: <h2>Brand</h2>,
};

export default Navbar;
