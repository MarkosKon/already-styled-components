import PropTypes from "prop-types"
import styled from "styled-components"

export const Container = styled.div`
  width: ${({ fluid }) => (fluid ? `100%` : "80%")};
  margin: auto;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`

Container.propTypes = {
  fluid: PropTypes.bool,
  textAlign: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
}
Container.defaultProps = {
  fluid: false,
  textAlign: "unset",
  color: "unset",
  bgColor: "unset",
}

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  padding: 0;
  margin: ${({ gutters, gutterSize }) => (gutters ? `-${gutterSize} 0 ${gutterSize} -${gutterSize}` : 0)};
  & > div {
    padding: ${({ gutters, gutterSize }) => (gutters ? `${gutterSize} 0 0 ${gutterSize}` : 0)};
  }
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`

Row.propTypes = {
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  gutters: PropTypes.bool,
  gutterSize: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
}
Row.defaultProps = {
  alignItems: "initial",
  justifyContent: "initial",
  gutters: false,
  gutterSize: "1em",
  color: "unset",
  bgColor: "unset",
}

export const Column = styled.div`
  flex: ${({ flexWidth }) => (flexWidth ? `0 0 ${flexWidth}` : 1)};
  display: ${({ flex }) => (flex ? `flex` : `block`)};
  align-self: ${({ alignSelf }) => alignSelf};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};

  @media screen and (max-width: ${({ breakPoint }) => breakPoint}) {
    flex: 0 0 100%;
  }
`

Column.propTypes = {
  flex: PropTypes.bool,
  flexWidth: PropTypes.string,
  alignSelf: PropTypes.string,
  breakPoint: PropTypes.string,
  textAlign: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
}
Column.defaultProps = {
  flex: false,
  alignSelf: "initial",
  breakPoint: "576px",
  textAlign: "unset",
  color: "unset",
  bgColor: "unset",
}
