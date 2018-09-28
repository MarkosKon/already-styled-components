import PropTypes from "prop-types"
import styled from "styled-components"

export const Container = styled.div`
  width: ${({ fluid, width }) => (fluid ? `100%` : width)};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`

Container.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  fluid: PropTypes.bool,
  textAlign: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string
}
Container.defaultProps = {
  width: "80%",
  height: null,
  margin: "auto",
  padding: null,
  fluid: false,
  textAlign: null,
  color: null,
  bgColor: null
}

export const Row = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ gutters, gutterSize, margin }) =>
    gutters ? `-${gutterSize} 0 ${gutterSize} -${gutterSize}` : margin};
  padding: ${({ padding }) => padding};
  & > div {
    padding: ${({ gutters, gutterSize }) =>
      gutters && `${gutterSize} 0 0 ${gutterSize}`};
  }
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`

Row.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  gutters: PropTypes.bool,
  gutterSize: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string
}
Row.defaultProps = {
  width: null,
  height: null,
  alignItems: null,
  justifyContent: null,
  gutters: false,
  gutterSize: "1em",
  margin: "0",
  padding: "0",
  color: null,
  bgColor: null
}

export const Column = styled.div`
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
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
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  flex: PropTypes.bool,
  flexWidth: PropTypes.string,
  alignSelf: PropTypes.string,
  breakPoint: PropTypes.string,
  textAlign: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string
}
Column.defaultProps = {
  height: null,
  margin: null,
  padding: null,
  flex: false,
  alignSelf: null,
  breakPoint: "576px",
  textAlign: null,
  color: null,
  bgColor: null
}
