import React from 'react';
import renderer from 'react-test-renderer';
import {
  getLuminance, darken, lighten, transparentize,
} from 'polished';
import 'jest-styled-components';

import Button from '../../src/components/Button';

test('Button #1 - Default props.', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#FFF');
  expect(tree).toHaveStyleRule('background-color', '#00AFB1');
  expect(tree).toHaveStyleRule('border-radius', '20px');
  expect(tree).toHaveStyleRule('font-family', 'inherit');
  expect(tree).toHaveStyleRule('font-size', '20px');
  expect(tree).not.toHaveStyleRule('color', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#008c8d', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,175,177,0.3)', {
    modifier: '&:focus',
  });
});

test('Button #2 - All props present.', () => {
  const tree = renderer
    .create(<Button transparent c="yellow" bc="black" hc="blue" br="0" ff="Arial" fs="32px" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'yellow');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('border-radius', '0');
  expect(tree).toHaveStyleRule('font-family', 'Arial');
  expect(tree).toHaveStyleRule('font-size', '32px');
  expect(tree).toHaveStyleRule('color', 'blue', {
    modifier: '&:hover',
  });
  expect(tree).not.toHaveStyleRule('background-color', {
    modifier: '&:hover',
  });
  expect(tree).not.toHaveStyleRule('box-shadow', {
    modifier: '&:focus',
  });
});

test('Button #3 - Background-color, hover-color.', () => {
  const tree = renderer.create(<Button bc="azure" hc="yellow" />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#FFF');
  expect(tree).toHaveStyleRule('background-color', 'azure');
  expect(tree).toHaveStyleRule('color', 'yellow', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule(
    'background-color',
    `${getLuminance('azure') < 0.06 ? lighten(0.15, 'azure') : darken(0.07, 'azure')}`,
    {
      modifier: '&:hover',
    },
  );
  expect(tree).toHaveStyleRule(
    'box-shadow',
    `0 0 0 0.2rem ${
      getLuminance('azure') > 0.8 ? darken(0.15, 'azure') : transparentize(0.7, 'azure')
    }`,
    {
      modifier: '&:focus',
    },
  );
});
