import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  getLuminance, darken, lighten, transparentize,
} from 'polished';

const StyledButton = styled.button`
  color: ${({ c }) => c};
  background-color: ${({ transparent, bc }) => (transparent ? 'transparent' : bc)};
  font-family: ${({ ff }) => ff};
  font-size: ${({ fs }) => fs};
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 20px;
  outline: 0;
  cursor: pointer;
  transition: color 0.3s ease-out, background-color 0.3s ease-out;
  ${({ hc }) => hc
    && `
    &:hover {
      color: ${hc};
    }
  `}
  ${({ transparent, bc }) => !transparent
    && `
    &:hover {
        background-color: ${getLuminance(bc) < 0.06 ? lighten(0.15, bc) : darken(0.07, bc)};
    }
    &:focus {
        box-shadow: 0 0 0 0.2rem ${
  getLuminance(bc) > 0.8 ? darken(0.15, bc) : transparentize(0.7, bc)
};
    }
  `};
`;

const Button = ({
  transparent = false,
  className = null,
  children = null,
  c = '#FFF',
  bc = '#00AFB1',
  hc = null,
  ff = 'inherit',
  fs = '20px',
}) => (
  <StyledButton
    transparent={transparent}
    className={className}
    c={c}
    bc={bc}
    hc={hc}
    ff={ff}
    fs={fs}
  >
    {children}
  </StyledButton>
);

if (process.env.NODE_ENV !== 'production') {
  Button.propTypes = {
    transparent: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    c: PropTypes.string,
    bc: PropTypes.string,
    hc: PropTypes.string,
    ff: PropTypes.string,
    fs: PropTypes.string,
  };
  Button.defaultProps = {
    transparent: false,
    className: null,
    children: null,
    c: '#FFF',
    bc: '#00AFB1',
    hc: null,
    ff: 'inherit',
    fs: '20px',
  };
}

export default Button;
