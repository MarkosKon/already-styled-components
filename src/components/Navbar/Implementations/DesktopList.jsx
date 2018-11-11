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
    height: 90px;
    transition: height 0.15s ease-out;
  }
  &.fixed-top-exit {
    height: 90px;
  }
  &.fixed-top-exit-done {
    height: 100px;
    transition: height 0.15s ease-out;
  }

  @media screen and (max-width: 600px) {
    padding: 0 0 0 20px;
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

  @media screen and (max-width: 980px) {
    display: none;
  }
`;
const ShowMobileMenuButton = styled(Button)`
  display: inline-block;
  @media screen and (min-width: 980px) {
    display: none;
  }
`;
const DesktopList = ({
  showMobile,
  links,
  brand,
  fixedTop,
  fixedBreakpoint,
  c,
  bc,
  hc,
  className,
}) => (
  <>
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
        {brand}
        <RightPart>
          <DesktopLinks c={c} hc={hc}>
            {links}
          </DesktopLinks>
          <ShowMobileMenuButton transparent onClick={showMobile}>
            <FasBars width="30px" c={c} hc={hc} />
          </ShowMobileMenuButton>
        </RightPart>
      </DesktopListContainer>
    </CSSTransition>
  </>
);
DesktopList.propTypes = {
  links: PropTypes.PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  brand: PropTypes.element,
  showMobile: PropTypes.func,
  fixedTop: PropTypes.bool,
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
};
DesktopList.defaultProps = {
  showMobile: null,
  brand: null,
  fixedTop: false,
  c: 'white',
  bc: '#1d1d1d',
  hc: 'orangered',
};

export default DesktopList;
