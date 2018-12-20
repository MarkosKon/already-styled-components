import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
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
  z-index: 1;
`;
const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
const MobileListEmpty = ({
  mobileMenuVisible,
  hideMobile,
  timeout,
  children,
  c,
  bc,
  hc,
  className,
}) => (
  <CSSTransition in={mobileMenuVisible} timeout={timeout} classNames="mobile-list" unmountOnExit>
    <MobileListContainer c={c} bc={bc} className={className}>
      <CloseButton transparent onClick={hideMobile}>
        <FasTimes width="30px" c={c} hc={hc} />
      </CloseButton>
      {children}
    </MobileListContainer>
  </CSSTransition>
);

MobileListEmpty.propTypes = {
  mobileMenuVisible: PropTypes.bool.isRequired,
  hideMobile: PropTypes.func,
  timeout: PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  children: PropTypes.node,
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
  className: PropTypes.string,
};
MobileListEmpty.defaultProps = {
  hideMobile: null,
  timeout: { enter: 150, exit: 150 },
  children: null,
  c: '#FFF',
  bc: '#1D1D1D',
  hc: 'orangered',
  className: null,
};

export default MobileListEmpty;
