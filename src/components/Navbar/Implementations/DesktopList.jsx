import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import Button from '../../Button';
import { FasBars } from '../../Icons';

const DesktopListContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  padding: 0 40px;
  font-size: 22px;
  height: 100px;

  &.fixed-top-enter {
    height: 100px;
  }
  &.fixed-top-enter-done {
    height: 74px;
    transition: height 0.15s ease-out;
  }
  &.fixed-top-exit {
    height: 74px;
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
  bgColor: PropTypes.string,
  color: PropTypes.string,
};
DesktopListContainer.defaultProps = {
  bgColor: 'black',
  color: 'white',
};
const RightPart = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DesktopLinks = styled.div`
  display: block;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  font-size: 1.7rem;

  a {
    color: ${({ color }) => color};
    text-decoration: none;
    margin-left: 1.5rem;
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
  links, brand, showMobile, bgColor, color, fixedTop, fixedBreakpoint,
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
      <DesktopListContainer bgColor={bgColor} color={color}>
        {brand}
        <RightPart>
          <DesktopLinks color={color}>{links}</DesktopLinks>
          <ShowMobileMenuButton transparent onClick={showMobile}>
            <FasBars width="30px" />
          </ShowMobileMenuButton>
        </RightPart>
      </DesktopListContainer>
    </CSSTransition>
  </>
);
DesktopList.propTypes = {
  links: PropTypes.PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  brand: PropTypes.element.isRequired,
  showMobile: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  fixedTop: PropTypes.bool,
};
DesktopList.defaultProps = {
  showMobile: null,
  bgColor: 'black',
  color: 'white',
  fixedTop: false,
};

export default DesktopList;
