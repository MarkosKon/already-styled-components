import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Centered from './Centered';
import Button from './Button';
import { FasLink } from './Icons';
import { withScrollTo } from '../utils/smoothScrolling';

const CustomCentered = styled(Centered)`
  font-size: ${({ fs }) => fs};
`;
const CustomButton = styled(Button)`
  opacity: ${({ o }) => o};
  border: none;
  padding: 0.16em 0.16em 0.06em;
  cursor: pointer;
`;
const AnchorLink = ({
  scrollTo, offset, callback, children, className, fs, c, o,
}) => (
  <CustomCentered fd="row" className={className} fs={fs} c={c} h={null}>
    <CustomButton
      transparent
      aria-label={`go to ${scrollTo} section`}
      onClick={e => withScrollTo({
        sectionId: scrollTo,
        e,
        offset,
        callback,
      })
      }
      o={o}
      fs={fs}
    >
      <FasLink width={fs} c={c} hc={null} />
    </CustomButton>
    <div>{children}</div>
  </CustomCentered>
);

AnchorLink.propTypes = {
  scrollTo: PropTypes.string.isRequired,
  offset: PropTypes.number,
  callback: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  fs: PropTypes.string,
  c: PropTypes.string,
  o: PropTypes.number,
};

AnchorLink.defaultProps = {
  offset: 0,
  callback: null,
  children: null,
  className: null,
  fs: '20px',
  c: '#000',
  o: 1,
};

export default AnchorLink;
