import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import clr from 'onecolor';
import animation from '../utils/animations';

const ProgressIndicator = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: none;
  -webkit-transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 436ms;
  -moz-transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 436ms;
  transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 436ms;
  z-index: ${({ zi }) => zi};
`;
const ProgressIndicatorHead = styled.div`
  background-color: ${({ bc }) => clr(bc)
    .alpha(0.3)
    .cssa()};
  height: 4px;
  overflow: hidden;
  position: relative;
`;
const Indicator = styled.div`
  background-color: ${({ bc }) => bc};
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  transform-origin: left center;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  transform: scaleX(0);
  animation: ${({ anim }) => anim} 2000ms linear infinite;
`;

const ProgressBar = ({
  visible, className, bc, zi,
}) => (
  <ProgressIndicator className={className} visible={visible} zi={zi}>
    <ProgressIndicatorHead bc={bc}>
      <Indicator anim={animation.firstIndicator} bc={bc} />
      <Indicator anim={animation.secondIndicator} bc={bc} />
    </ProgressIndicatorHead>
  </ProgressIndicator>
);

ProgressBar.propTypes = {
  visible: PropTypes.bool,
  className: PropTypes.string,
  bc: PropTypes.string,
  zi: PropTypes.number,
};
ProgressBar.defaultProps = {
  visible: true,
  className: null,
  bc: 'orange',
  zi: 1,
};
export default ProgressBar;
