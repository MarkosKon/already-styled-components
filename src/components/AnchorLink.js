import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.button`
  font-size: 20px;
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const AnchorLink = ({ color, opacity, sectionId, children, callback, overrideOnClick }) => (
  <StyledButton
    color={color}
    opacity={opacity}
    aria-label={`go to ${sectionId} section`}
    onClick={e => overrideOnClick ? overrideOnClick(sectionId, callback, e) : handleClick(sectionId, callback, e)}
  >
    {children}
  </StyledButton>
);

AnchorLink.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.number,
  sectionId: PropTypes.string.isRequired,
  children: PropTypes.element,
  callback: PropTypes.func,
  overrideOnClick: PropTypes.func
};

AnchorLink.defaultProps = {
  color: "black",
  opacity: 0.5,
  children: <FontAwesomeIcon icon={faLink} />,
  callback: null,
  overrideOnClick: null
};

export default AnchorLink;

const handleClick = (sectionId, callback, e) => {
  e.preventDefault();
  document.querySelector(`#${sectionId}`).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  if (callback) callback();
};
