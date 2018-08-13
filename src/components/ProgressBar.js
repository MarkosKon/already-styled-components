import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import clr from "onecolor";
import animation from "../utils/animations";

const ProgressIndicator = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  position: fixed;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: none;
  -webkit-transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 436ms;
  -moz-transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 436ms;
  transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 436ms;
  z-index: ${({ zIndex }) => zIndex};
`;
const ProgressIndicatorHead = styled.div`
  background-color: ${({ bgColor }) =>
    clr(bgColor)
      .alpha(0.3)
      .cssa()};
  height: 4px;
  overflow: hidden;
  position: relative;
`;

const Indicator = styled.div`
  background-color: ${({ bgColor }) => bgColor};
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
  animation: ${({ animation }) => animation} 2000ms linear infinite;
`;

const ProgressBar = ({ visible, bgColor, zIndex }) => (
  <ProgressIndicator
    visible={visible}
    zIndex={zIndex}
  >
    <ProgressIndicatorHead bgColor={bgColor}>
      <Indicator animation={animation.firstIndicator} bgColor={bgColor} />
      <Indicator animation={animation.secondIndicator} bgColor={bgColor} />
    </ProgressIndicatorHead>
  </ProgressIndicator>
);

ProgressBar.protoTypes = {
  visible: PropTypes.bool,
  bgColor: PropTypes.string,
  zIndex: PropTypes.number
};
ProgressBar.defaultProps = {
  visible: true,
  bgColor: "orange",
  zIndex: 1
};
export default ProgressBar;
