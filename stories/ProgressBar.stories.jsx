/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Centered, ProgressBar } from '../src';
import GlobalStyle from './utils/GlobalStyle';

const ProgressBarDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

storiesOf('ProgressBar', module)
  .addDecorator(withInfo)
  .addDecorator(ProgressBarDecorator)
  .add('default props', () => <ProgressBar />)
  .add('dark background color', () => <ProgressBar bc="darkblue" />)
  .add('light background color', () => <ProgressBar bc="lightblue" />)
  .add('checking z-index', () => (
    <>
      <Centered
        h="100vh"
        bc="darkblue"
        c="white"
        style={{
          position: 'fixed',
          top: 0,
          width: '100vw',
          zIndex: 1,
        }}
      >
        <span>The background is fixed and has </span>
        <code>z-index: 1</code>
        <span>The ProgressBar has </span>
        <code>z-index: 2</code>
      </Centered>
      <ProgressBar zi={2} />
    </>
  ))
  .add('chechking z-index (below)', () => (
    <>
      <Centered
        h="100vh"
        bc="darkblue"
        c="white"
        style={{
          position: 'fixed',
          top: 0,
          width: '100vw',
          zIndex: 2,
        }}
      >
        <span>The background is fixed and has </span>
        <code>z-index: 2</code>
        <span>The ProgressBar has </span>
        <code>z-index: 1</code>
      </Centered>
      <ProgressBar zi={1} />
    </>
  ));
