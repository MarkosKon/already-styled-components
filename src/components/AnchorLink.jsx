import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';
import { FasLink } from './Icons';
import { withScrollTo } from '../utils/smoothScrolling';

const CustomButton = styled(Button)`
  font-size: 20px;
  opacity: ${({ opacity }) => opacity};
  border: none;
  cursor: pointer;

  svg {
    padding-right: 5px;
  }
`;
const AnchorLink = ({
  className, c, opacity, scrollTo, offset, children, callback,
}) => (
  <CustomButton
    className={className}
    c={c}
    opacity={opacity}
    transparent
    aria-label={`go to ${scrollTo} section`}
    onClick={e => withScrollTo({
      sectionId: scrollTo,
      e,
      offset,
      callback,
    })
    }
  >
    <FasLink c={c} width="20px" />
    {children}
  </CustomButton>
);

AnchorLink.propTypes = {
  className: PropTypes.string,
  c: PropTypes.string,
  opacity: PropTypes.number,
  scrollTo: PropTypes.string.isRequired,
  offset: PropTypes.number,
  children: PropTypes.node,
  callback: PropTypes.func,
};

AnchorLink.defaultProps = {
  className: null,
  c: 'black',
  opacity: 0.5,
  offset: 0,
  children: null,
  callback: null,
};

export default AnchorLink;
