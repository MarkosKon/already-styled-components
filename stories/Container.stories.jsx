/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GlobalStyle from './utils/GlobalStyle';
import { Container } from '../src';

const ContainerDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

storiesOf('Container', module)
  .addDecorator(withInfo)
  .addDecorator(ContainerDecorator)
  .add('default props', () => <Container>Container</Container>)
  .add('all props', () => (
    <Container
      fluid
      w="100%"
      h="500px"
      m="0"
      p="40px 20px"
      ta="left"
      c="whitesmoke"
      bc="cornflowerblue"
    >
      Container
    </Container>
  ))
  .add('not fluid but with margin', () => (
    <Container m="0" h="500px" c="whitesmoke" bc="cornflowerblue">
      Container
    </Container>
  ))
  .add('not fluid but with width 300px', () => (
    <Container h="500px" w="300px" c="whitesmoke" bc="cornflowerblue">
      Container
    </Container>
  ))
  .add('fluid and width 300px', () => (
    <Container fluid h="500px" w="300px" c="whitesmoke" bc="cornflowerblue">
      Spoiler: Fluid wins.
    </Container>
  ));
