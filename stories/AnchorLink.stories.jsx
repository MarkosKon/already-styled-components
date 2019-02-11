/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import GlobalStyle from './utils/GlobalStyle';
import {
  Container, Row, Column, Centered, AnchorLink,
} from '../src';

const AnchorLinkDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

storiesOf('Ancholink', module)
  .addDecorator(withInfo)
  .addDecorator(AnchorLinkDecorator)
  .add('minimum', () => (
    <Container fluid>
      <Row id="empty" h="500px" c="white" bc="#1d1d1d">
        <Column>
          <Centered>
            <p>Empty space, scroll down</p>
          </Centered>
        </Column>
      </Row>
      <Row id="section-1" h="110vh" bc="beige">
        <Column p="2em">
          <AnchorLink scrollTo="section-1" onClick={action('clicked')}>
            Section 1
          </AnchorLink>
        </Column>
      </Row>
    </Container>
  ))
  .add('with offset', () => (
    <Container fluid>
      <Centered
        bc="#1d1d1d"
        c="white"
        h="80px"
        style={{
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0,
        }}
      >
        I&apos;m fixed
      </Centered>
      <Row id="empty" h="500px" bc="whitesmoke">
        <Column>
          <Centered>
            <p>Empty space</p>
          </Centered>
        </Column>
      </Row>
      <Row id="section-1" h="110vh" bc="beige">
        <Column p="2em">
          <AnchorLink scrollTo="section-1" offset={80} onClick={action('clicked')}>
            Section 1
          </AnchorLink>
        </Column>
      </Row>
    </Container>
  ))
  .add('with callback', () => (
    <Container fluid>
      <Row id="empty" h="500px" bc="whitesmoke">
        <Column>
          <Centered>
            <p>Empty space</p>
          </Centered>
        </Column>
      </Row>
      <Row id="section-1" h="110vh" bc="beige">
        <Column p="2em">
          <AnchorLink
            scrollTo="section-1"
            callback={() => setTimeout(() => console.log('Hello from callback'), 500)}
            onClick={action('clicked')}
          >
            Section 1
          </AnchorLink>
        </Column>
      </Row>
    </Container>
  ));
