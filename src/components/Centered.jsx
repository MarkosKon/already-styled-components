import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCentered = styled.div`
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

const Centered = ({
  className = null,
  children = null,
  ai = 'center',
  fd = 'column',
  h = '100%',
  m = null,
  p = null,
  ta = null,
  c = null,
  bc = null,
}) => (
  <StyledCentered className={className} ai={ai} fd={fd} h={h} m={m} p={p} ta={ta} c={c} bc={bc}>
    {children}
  </StyledCentered>
);

if (process.env.NODE_ENV === 'production') {
  Centered.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
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
    className: null,
    children: null,
    ai: 'center',
    fd: 'column',
    h: '100%',
    m: null,
    p: null,
    ta: null,
    c: null,
    bc: null,
  };
}

export default Centered;
