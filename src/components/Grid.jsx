import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ fluid, w }) => (fluid ? '100%' : w)};
  height: ${({ h }) => h};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  text-align: ${({ ta }) => ta};
  color: ${({ c }) => c};
  background-color: ${({ bc }) => bc};
`;

Container.propTypes = {
  fluid: PropTypes.bool,
  w: PropTypes.string,
  h: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  ta: PropTypes.string,
  c: PropTypes.string,
  bc: PropTypes.string,
};
Container.defaultProps = {
  fluid: false,
  w: '80%',
  h: null,
  m: 'auto',
  p: null,
  ta: null,
  c: null,
  bc: null,
};

export const Row = styled.div`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};
  margin: ${({ gutters, gutterSize, m }) => (gutters ? `-${gutterSize} 0 ${gutterSize} -${gutterSize}` : m)};
  padding: ${({ p }) => p};
  & > div {
    padding: ${({ gutters, gutterSize }) => gutters && `${gutterSize} 0 0 ${gutterSize}`};
  }
  color: ${({ c }) => c};
  background-color: ${({ bc }) => bc};
`;

Row.propTypes = {
  gutters: PropTypes.bool,
  gutterSize: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  ai: PropTypes.string,
  jc: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  c: PropTypes.string,
  bc: PropTypes.string,
};
Row.defaultProps = {
  gutters: false,
  gutterSize: '1em',
  w: null,
  h: null,
  ai: null,
  jc: null,
  m: '0',
  p: '0',
  c: null,
  bc: null,
};

export const Column = styled.div`
  height: ${({ h }) => h};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  flex: ${({ flexWidth }) => (flexWidth ? `0 0 ${flexWidth}` : 1)};
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  align-self: ${({ alignSelf }) => alignSelf};
  text-align: ${({ ta }) => ta};
  color: ${({ c }) => c};
  background-color: ${({ bc }) => bc};

  @media screen and (max-width: ${({ breakpoint }) => breakpoint}) {
    flex: 0 0 100%;
  }
`;

Column.propTypes = {
  flex: PropTypes.bool,
  flexWidth: PropTypes.string,
  breakpoint: PropTypes.string,
  h: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  alignSelf: PropTypes.string,
  ta: PropTypes.string,
  c: PropTypes.string,
  bc: PropTypes.string,
};
Column.defaultProps = {
  flex: false,
  flexWidth: null,
  breakpoint: '576px',
  h: null,
  m: null,
  p: null,
  alignSelf: null,
  ta: null,
  c: null,
  bc: null,
};
