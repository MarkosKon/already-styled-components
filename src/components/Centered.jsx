import PropTypes from 'prop-types';
import styled from 'styled-components';

const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: ${({ fd }) => fd};
  height: ${({ h }) => h};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  text-align: ${({ ta }) => ta};
  color: ${({ c }) => c};
  background-color: ${({ bc }) => bc};
`;

Centered.propTypes = {
  fd: PropTypes.string,
  h: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  ta: PropTypes.string,
  c: PropTypes.string,
  bc: PropTypes.string,
};
Centered.defaultProps = {
  fd: 'column',
  h: null,
  m: null,
  p: null,
  ta: null,
  c: 'black',
  bc: 'white',
};

export default Centered;
