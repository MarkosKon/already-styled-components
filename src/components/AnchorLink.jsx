import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';
import { FasLink } from './Icons';
import { withScrollTo } from '../utils/smoothScrolling';

const CustomButton = styled(Button)`
  font-size: 20px;
  opacity: ${({ o }) => o};
  border: none;
  cursor: pointer;

  svg {
    padding-right: 5px;
  }
`;
const AnchorLink = ({
  scrollTo, offset, callback, children, className, c, o,
}) => (
  <CustomButton
    className={className}
    c={c}
    o={o}
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
  scrollTo: PropTypes.string.isRequired,
  offset: PropTypes.number,
  callback: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  c: PropTypes.string,
  o: PropTypes.number,
};

AnchorLink.defaultProps = {
  offset: 0,
  callback: null,
  children: null,
  className: null,
  c: 'black',
  o: 1,
};

export default AnchorLink;
