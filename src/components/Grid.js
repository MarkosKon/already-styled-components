import PropTypes from "prop-types"
import styled from "styled-components"

export const Container = styled.div`
  width: ${({ fluid }) => (fluid ? `100%` : "80%")};
  margin: auto;
  text-align: ${({ textAlign }) => textAlign};
`

Container.propTypes = {
  fluid: PropTypes.bool,
  textAlign: PropTypes.string
}
Container.defaultProps = {
  fluid: false,
  textAlign: "initial"
}

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  padding: 0;
  margin: ${({ gutters }) => (gutters ? `-1em 0 1em -1em` : 0)};
  & > div {
    padding: ${({ gutters }) => (gutters ? `1em 0 0 1em` : 0)};
  }
`

Row.propTypes = {
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  gutters: PropTypes.bool
}
Row.defaultProps = {
  alignItems: "initial",
  justifyContent: "initial",
  gutters: false
}

export const Column = styled.div`
  flex: ${({ flexWidth }) => (flexWidth ? `0 0 ${flexWidth}` : 1)};
  display: ${({ flex }) => (flex ? `flex` : `block`)};
  align-self: ${({ alignSelf }) => alignSelf};
  text-align: ${({ textAlign }) => textAlign};

  @media screen and (max-width: ${({ breakPoint }) => breakPoint}) {
    flex: 0 0 100%;
  }
`

Column.propTypes = {
  flex: PropTypes.bool,
  flexWidth: PropTypes.string,
  alignSelf: PropTypes.string,
  breakPoint: PropTypes.string,
  textAlign: PropTypes.string
}
Column.defaultProps = {
  flex: false,
  alignSelf: "initial",
  breakPoint: "576px",
  textAlign: "initial"
}
