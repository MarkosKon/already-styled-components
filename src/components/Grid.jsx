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
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  align-self: ${({ alignSelf }) => alignSelf};
  text-align: ${({ ta }) => ta};
  color: ${({ c }) => c};
  background-color: ${({ bc }) => bc};

  flex: ${({ xl }) => (xl ? `0 0 ${xl}` : 1)};
  @media screen and (max-width: 1200px) {
    flex: ${({ lg }) => lg && `0 0 ${lg}`};
  }
  @media screen and (max-width: 992px) {
    flex: ${({ md }) => md && `0 0 ${md}`};
  }
  @media screen and (max-width: 768px) {
    flex: ${({ sm }) => sm && `0 0 ${sm}`};
  }
  @media screen and (max-width: 576px) {
    flex: ${({ xs }) => xs && `0 0 ${xs}`};
  }
`;

Column.propTypes = {
  flex: PropTypes.bool,
  xl: PropTypes.string,
  lg: PropTypes.string,
  md: PropTypes.string,
  sm: PropTypes.string,
  xs: PropTypes.string,
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
  xl: null,
  lg: null,
  md: null,
  sm: null,
  xs: '100%',
  h: null,
  m: null,
  p: null,
  alignSelf: null,
  ta: null,
  c: null,
  bc: null,
};
