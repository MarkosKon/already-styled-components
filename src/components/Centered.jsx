import PropTypes from 'prop-types';
import styled from 'styled-components';

const Centered = styled.div`
  display: flex;
  align-items: ${({ ai }) => ai};
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
  ai: PropTypes.string,
  fd: PropTypes.string,
  h: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  ta: PropTypes.string,
  c: PropTypes.string,
  bc: PropTypes.string,
};
Centered.defaultProps = {
  ai: 'center',
  fd: 'column',
  h: '100%',
  m: null,
  p: null,
  ta: null,
  c: null,
  bc: null,
};

export default Centered;
