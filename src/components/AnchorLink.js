import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FasLink } from "../components/Icons"

const StyledButton = styled.button`
  font-size: 20px;
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    padding-right: 5px;
  }
`

const AnchorLink = ({
  className,
  color,
  opacity,
  sectionId,
  children,
  callback,
  overrideOnClick
}) => (
  <StyledButton
    className={className}
    color={color}
    opacity={opacity}
    aria-label={`go to ${sectionId} section`}
    onClick={e =>
      overrideOnClick
        ? overrideOnClick(sectionId, callback, e)
        : handleClick(sectionId, callback, e)
    }
  >
    <FasLink color={color} width="20px"/>
    {children}
  </StyledButton>
)

AnchorLink.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  sectionId: PropTypes.string.isRequired,
  children: PropTypes.any,
  callback: PropTypes.func,
  overrideOnClick: PropTypes.func
}

AnchorLink.defaultProps = {
  color: "black",
  opacity: 0.5,
  callback: null,
  overrideOnClick: null
}

export default AnchorLink

const handleClick = (sectionId, callback, e) => {
  e.preventDefault()
  document.querySelector(`#${sectionId}`).scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
  if (callback) callback()
}
