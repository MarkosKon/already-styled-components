/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Centered, Button } from '../src';
import GlobalStyle from './utils/GlobalStyle';

const ButtonDecorator = storyFn => (
  <Centered bc="#1d1d1d" h="100vh">
    <GlobalStyle />
    {storyFn()}
  </Centered>
);

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(ButtonDecorator)
  .add('default props', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some props', () => (
    <Button
      bc="orangered"
      fs="36px"
      ff="Verdana, Geneva, Tahoma, sans-serif"
      onClick={action('clicked')}
    >
      Some props
    </Button>
  ))
  .add('transparent icon button', () => (
    <Button transparent fs="46px" hc="orange" onClick={action('clicked')}>
      X
    </Button>
  ));
