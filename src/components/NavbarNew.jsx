import React from 'react';

class NavbarNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobile: false,
    };

    this.showMobile = this.showMobile.bind(this);
    this.hideMobile = this.hideMobile.bind(this);
  }

  showMobile() {
    this.setState({ showMobile: true });
  }

  hideMobile() {
    this.setState({ showMobile: false });
  }

  render() {
    const { showMobile } = this.state;
    return (
      <>
        <div>Hello world </div>
        {showMobile ? (
          <div>We are in mobile</div>
        ) : (
          <div>We are in desktop</div>
        )}
      </>
    );
  }
}

export default NavbarNew;
