import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../Button';
import { FasTimes } from '../../Icons';

const MobileListContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
MobileListContainer.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
};
MobileListContainer.defaultProps = {
  bgColor: 'black',
  color: 'white',
};
const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
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
  links, hideMobile, bgColor, color,
}) => (
  <MobileListContainer bgColor={bgColor} color={color}>
    <MobileLinks>{links}</MobileLinks>
    <CloseButton transparent onClick={hideMobile}>
      <FasTimes width="30px" />
    </CloseButton>
  </MobileListContainer>
);
MobileList.propTypes = {
  links: PropTypes.PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  hideMobile: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};
MobileList.defaultProps = {
  hideMobile: null,
  bgColor: 'black',
  color: 'white',
};

export default MobileList;
