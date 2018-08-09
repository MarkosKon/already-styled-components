import PropTypes from "prop-types";
import styled from "styled-components"

const Button = styled.button`
  color: #fff;
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#00AFB1"};
  font-family: 'Inconsolata', monospace;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  ${({ transparent }) =>
    !transparent &&
    `
    transition: background-color 0.3s ease-out;
    &:hover {
        background-color: #038486;
    }
  `};
`;

Button.propTypes = {
  transparent: PropTypes.bool,
  fontSize: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  transparent: false,
  fontSize: "20px"
};

export default Button;