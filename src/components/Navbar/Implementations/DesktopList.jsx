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
  display: flex;
  align-items: center;
  padding: 0 40px;
  font-size: 22px;
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

  @media screen and (max-width: 600px) {
    padding: 0 0 0 20px;
  }
`;

const RightPart = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DesktopLinks = styled.div`
  display: block;
  font-size: 1.7rem;

  a {
    color: ${({ c }) => c};
    text-decoration: none;
    margin-left: 1.5rem;
    transition: color 0.2s ease-in;
  }

  a:hover {
    color: ${({ hc }) => hc};
  }

  @media screen and (max-width: ${({ mobileBreakpoint }) => `${mobileBreakpoint}px`}) {
    display: none;
  }
`;
const ShowMobileMenuButton = styled(Button)`
  display: inline-block;
  @media screen and (min-width: ${({ mobileBreakpoint }) => `${mobileBreakpoint}px`}) {
    display: none;
  }
`;
const DesktopList = ({
  showMobile,
  links,
  brand,
  fixedTop,
  fixedBreakpoint,
  mobileBreakpoint,
  timeout,
  c,
  bc,
  hc,
  className,
}) => (
  <React.Fragment>
    <div ref={fixedBreakpoint} />
    <CSSTransition in={fixedTop} timeout={timeout} classNames="fixed-top">
      <DesktopListContainer bc={bc} c={c} className={className}>
        {brand}
        <RightPart>
          <DesktopLinks c={c} hc={hc} mobileBreakpoint={mobileBreakpoint}>
            {links}
          </DesktopLinks>
          <ShowMobileMenuButton
            transparent
            onClick={showMobile}
            mobileBreakpoint={mobileBreakpoint}
          >
            <FasBars width="30px" c={c} hc={hc} />
          </ShowMobileMenuButton>
        </RightPart>
      </DesktopListContainer>
    </CSSTransition>
  </React.Fragment>
);
DesktopList.propTypes = {
  links: PropTypes.PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  brand: PropTypes.element,
  showMobile: PropTypes.func,
  fixedTop: PropTypes.bool,
  fixedBreakpoint: PropTypes.node.isRequired,
  mobileBreakpoint: PropTypes.number,
  timeout: PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
  className: PropTypes.string,
};
DesktopList.defaultProps = {
  showMobile: null,
  brand: null,
  fixedTop: false,
  mobileBreakpoint: 980,
  timeout: { enter: 150, exit: 150 },
  c: 'white',
  bc: '#1d1d1d',
  hc: 'orangered',
  className: null,
};

export default DesktopList;
