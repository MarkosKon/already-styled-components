import PropTypes from 'prop-types';
import styled from 'styled-components';
import clr from 'onecolor';

const Button = styled.button`
  color: ${({ c }) => c};
  background-color: ${({ transparent, bc }) => (transparent ? 'transparent' : bc)};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 20px;
  outline: 0;
  cursor: pointer;
  ${({ transparent, bc }) => !transparent
    && `
    transition: background-color 0.3s ease-out;
    &:hover {
        background-color: ${clr(bc)
    .darken(0.07)
    .cssa()};
    }
    &:focus {
        box-shadow: 0 0 0 0.2rem ${clr(bc)
    .alpha(0.3)
    .cssa()};
    }
  `};
`;

Button.propTypes = {
  c: PropTypes.string,
  bc: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  transparent: PropTypes.bool,
};

Button.defaultProps = {
  c: '#fff',
  bc: '#00AFB1',
  fontFamily: 'inherit',
  fontSize: '20px',
  transparent: false,
};

export default Button;
