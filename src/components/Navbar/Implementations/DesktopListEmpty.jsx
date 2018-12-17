import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import Button from '../../Button';
import { FasBars } from '../../Icons';

const DesktopListContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ bc }) => bc};
  color: ${({ c }) => c};
  height: 100px;

  &.fixed-top-enter {
    height: 100px;
  }
  &.fixed-top-enter-done {
    height: 80px;
    transition: height 0.15s ease-out;
  }
  &.fixed-top-exit {
    height: 80px;
  }
  &.fixed-top-exit-done {
    height: 100px;
    transition: height 0.15s ease-out;
  }
`;
DesktopListContainer.propTypes = {
  bc: PropTypes.string,
  c: PropTypes.string,
};
DesktopListContainer.defaultProps = {
  bc: 'black',
  c: 'white',
};

const ShowMobileMenuButton = styled(Button)`
  display: inline-block;
  position: absolute;
  right: 0;
  top: calc(50% - 30px);
  @media screen and (min-width: ${({ mobileBreakpoint }) => `${mobileBreakpoint}px`}) {
    display: none;
  }
`;

const DesktopListEmpty = ({
  showMobile,
  fixedTop,
  fixedBreakpoint,
  mobileBreakpoint,
  children,
  c,
  bc,
  hc,
  className,
}) => (
  <React.Fragment>
    <div ref={fixedBreakpoint} />
    <CSSTransition
      in={fixedTop}
      timeout={{
        enter: 150,
        exit: 150,
      }}
      classNames="fixed-top"
    >
      <DesktopListContainer bc={bc} c={c} className={className}>
        {children}
        <ShowMobileMenuButton transparent onClick={showMobile} mobileBreakpoint={mobileBreakpoint}>
          <FasBars width="30px" c={c} hc={hc} />
        </ShowMobileMenuButton>
      </DesktopListContainer>
    </CSSTransition>
  </React.Fragment>
);

DesktopListEmpty.propTypes = {
  showMobile: PropTypes.func,
  fixedTop: PropTypes.bool,
  fixedBreakpoint: PropTypes.node.isRequired,
  mobileBreakpoint: PropTypes.number,
  children: PropTypes.node,
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
  className: PropTypes.string,
};
DesktopListEmpty.defaultProps = {
  showMobile: null,
  fixedTop: false,
  mobileBreakpoint: 980,
  children: null,
  c: 'white',
  bc: '#1d1d1d',
  hc: 'orangered',
  className: null,
};

export default DesktopListEmpty;
