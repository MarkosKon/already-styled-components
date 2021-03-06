import React from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from 'styled-components';

import Button from '../../Button';
import { FasTimes } from '../../Icons';

const MobileListContainer = styled.div`
  background-color: ${({ bc }) => bc};
  color: ${({ c }) => c};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.mobile-list-enter {
    opacity: 0.01;
  }
  &.mobile-list-enter-active {
    opacity: 1;
    transition: opacity 0.3s ease-out;
  }
  &.mobile-list-exit {
    opacity: 1;
  }
  &.mobile-list-exit-active {
    opacity: 0.01;
    transition: opacity 0.15s ease-in;
  }
`;
const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  text-align: center;

  a {
    color: ${({ c }) => c};
    text-decoration: none;
    transition: color 0.2s ease-in;
  }

  a:hover {
    color: ${({ hc }) => hc};
  }

  @media screen and (max-width: 576px) {
    font-size: 3rem;
  }
`;
const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
const MobileList = ({
  links, mobileMenuVisible, hideMobile, timeout, c, bc, hc, className,
}) => (
  <CSSTransition in={mobileMenuVisible} timeout={timeout} classNames="mobile-list" unmountOnExit>
    <MobileListContainer bc={bc} c={c} className={className}>
      <MobileLinks c={c} hc={hc}>
        {links}
      </MobileLinks>
      <CloseButton transparent onClick={hideMobile} aria-label="close mobile menu">
        <FasTimes width="30px" c={c} hc={hc} />
      </CloseButton>
    </MobileListContainer>
  </CSSTransition>
);
MobileList.propTypes = {
  links: PropTypes.PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mobileMenuVisible: PropTypes.bool.isRequired,
  hideMobile: PropTypes.func,
  timeout: PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
  className: PropTypes.string,
};
MobileList.defaultProps = {
  hideMobile: null,
  timeout: { enter: 300, exit: 150 },
  c: '#FFF',
  bc: '#1D1D1D',
  hc: 'orangered',
  className: null,
};

export default MobileList;
