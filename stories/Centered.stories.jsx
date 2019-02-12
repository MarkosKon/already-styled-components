/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GlobalStyle from './utils/GlobalStyle';
import { Container, Centered } from '../src';

const CenteredDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

storiesOf('Centered', module)
  .addDecorator(withInfo)
  .addDecorator(CenteredDecorator)
  .add('minimal', () => (
    <Container fluid h="100vh" bc="lightgoldenrodyellow" c="darkblue">
      <Centered>
        <h1>This thing is centered</h1>
      </Centered>
    </Container>
  ))
  .add('with align items', () => (
    <Container fluid h="100vh" bc="lightgoldenrodyellow" c="darkblue">
      <Centered ai="left">
        <h1>The content here is aligned left</h1>
        <p>
          Nunc vel sapien nec mi interdum tempor. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Aliquam quis ex ut justo sagittis
          sollicitudin.
        </p>
        <p>
          Vivamus iaculis ullamcorper posuere. Sed blandit lobortis convallis. Aenean et fringilla
          enim. Duis et viverra nulla, eu euismod erat. Sed dignissim, metus id efficitur posuere,
          tellus risus scelerisque tortor, sit amet elementum nisi lorem in dolor.
        </p>
      </Centered>
    </Container>
  ))
  .add('with flex direction', () => (
    <Container fluid h="100vh" bc="lightgoldenrodyellow" c="darkblue">
      <Centered fd="row">
        <h1>
          Here we have
          <code> flex-direction: row</code>
        </h1>
        <h3>
          The default is
          <code> flex-direction: column</code>
        </h3>
        <p>
          Nunc vel sapien nec mi interdum tempor. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Aliquam quis ex ut justo sagittis
          sollicitudin.
        </p>
        <p>
          Vivamus iaculis ullamcorper posuere. Sed blandit lobortis convallis. Aenean et fringilla
          enim. Duis et viverra nulla, eu euismod erat. Sed dignissim, metus id efficitur posuere,
          tellus risus scelerisque tortor, sit amet elementum nisi lorem in dolor.
        </p>
      </Centered>
    </Container>
  ))
  .add('with height', () => (
    <Container fluid h="100vh" bc="lightgoldenrodyellow" c="darkblue">
      <Centered>
        <h1>
          The default:
          <code> height: 100%</code>
        </h1>
        <p>(scroll down)</p>
      </Centered>
      <Centered h="400px">
        <h1>
          <code> height: 400px</code>
        </h1>
        <p>This overflows the parent because the first has 100% height</p>
      </Centered>
    </Container>
  ));
