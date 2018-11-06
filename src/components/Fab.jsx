import PropTypes from 'prop-types';
import styled from 'styled-components';
import clr from 'onecolor';
import animation from '../utils/animations';

const Fab = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  z-index: ${({ zIndex }) => zIndex};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  font-size: ${({ fontSize }) => fontSize};
  border: 0;
  border-radius: 100%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  -webkit-transition: background-color 0.5s ease-in, right 1s;
  transition: background-color 0.5s ease-in, right 1s;
  ${({ ripple }) => ripple && 'overflow: hidden; transform: translate3d(0, 0, 0);'}
  animation: ${({ pulse, bgColor }) => pulse
    && `${animation.pulse(
      clr(bgColor)
        .alpha(0.5)
        .cssa(),
    )} 4s 2s infinite`};

  &:hover {
    animation: none;
    background-color: ${({ bgColor }) => clr(bgColor)
    .darken(0.07)
    .cssa()};
  }

  &:focus {
    ${({ bgColor }) => `box-shadow: 0 0 0 0.2rem ${clr(bgColor)
    .alpha(0.3)
    .cssa()};`};
  }

  &:after {
    ${({ ripple }) => ripple
      && `
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform 0.5s, opacity 1s;
    `};
  }

  &:active&:after {
    ${({ ripple }) => ripple && 'transform: scale(0, 0); opacity: 0.2; transition: 0s;'};
  }
`;

Fab.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  zIndex: PropTypes.number,
  pulse: PropTypes.bool,
  ripple: PropTypes.bool,
};

Fab.defaultProps = {
  color: 'white',
  bgColor: 'crimson',
  fontSize: '30px',
  width: '80px',
  top: null,
  right: '3%',
  bottom: '3%',
  left: null,
  zIndex: 1,
  pulse: false,
  ripple: true,
};

export default Fab;
