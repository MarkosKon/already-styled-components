/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import LinkTo from '@storybook/addon-links/react';
import styled from 'styled-components';

import { Container, Navbar, DesktopList } from '../src';
import GlobalStyle from './utils/GlobalStyle';

const NavbarDecorator = storyFn => (
  <Container fluid>
    <GlobalStyle />
    {storyFn()}
  </Container>
);

const Brand = () => <h1>Brand</h1>;
const NonSticky = styled(DesktopList)`
  position: relative;
`;
const StyleComponents = styled.div`
  font-size: 36px;
  font-style: italic;
  color: white;
`;
const WhiteWhenFixed = styled(DesktopList)`
  box-shadow: 0 0 3px 0 black;
  transition: all 0.3s ease-in-out !important;
  background-color: ${({ isAtTop }) => isAtTop && 'white'};
  a,
  div {
    color: ${({ isAtTop }) => isAtTop && 'black'};
  }
  path {
    fill: ${({ isAtTop }) => isAtTop && 'black'};
  }
`;

storiesOf('Navbar', module)
  .addDecorator(withInfo)
  .addDecorator(NavbarDecorator)
  .add('simple', () => (
    <>
      <Navbar>
        <LinkTo story="simple">simple</LinkTo>
        <LinkTo story="some props">Props</LinkTo>
        <LinkTo story='no "top" effect'>topEffect</LinkTo>
      </Navbar>
      <Container h="200vh" />
    </>
  ))
  .add('some props', () => (
    <>
      <Navbar brand={<Brand />} bc="pink" c="black" hc="blue">
        <LinkTo story="simple">simple</LinkTo>
        <LinkTo story="some props">Props</LinkTo>
        <LinkTo story='no "top" effect'>topEffect</LinkTo>
      </Navbar>
      <Container h="200vh" />
    </>
  ))
  .add('no "top" effect', () => (
    <>
      <Navbar brand={<h2>topEffect= &#123;false&#125;</h2>} bc="pink" c="black" topEffect={false}>
        <LinkTo story="simple">simple</LinkTo>
        <LinkTo story="some props">Props</LinkTo>
        <LinkTo story='no "top" effect'>topEffect</LinkTo>
      </Navbar>
      <Container h="200vh" />
    </>
  ))
  .add(
    'customizing default DesktopList',
    () => (
      <>
        <Navbar
          brand={<h1>Non sticky</h1>}
          topEffect={false}
          desktopList={props => <NonSticky {...props} />}
        >
          <LinkTo story="customizing default DesktopList">customizing DesktopList</LinkTo>
          <LinkTo story="DesktopList white top effect">white top effect</LinkTo>
        </Navbar>
        <Container h="200vh" />
      </>
    ),
    {
      info: {
        text: `
            example code:
            ~~~js
            import { Navbar, DesktopList } from "already-styled-components";

            const NonSticky = styled(DesktopList)\`
              position: relative;
            \`;

            <Navbar
              brand={<h1>Non sticky</h1>}
              topEffect={false}
              desktopList={props => <NonSticky {...props} />}
            >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to='/contact'>Contact</Link>
            </Navbar>
            ~~~
          `,
      },
    },
  )
  .add('DesktopList white top effect', () => (
    <>
      <Navbar
        brand={<StyleComponents>Styled Components</StyleComponents>}
        desktopList={props => <WhiteWhenFixed {...props} suppressClassNameWarning />}
      >
        <LinkTo story="customizing default DesktopList">customizing DesktopList</LinkTo>
        <LinkTo story="DesktopList white top effect">white top effect</LinkTo>
      </Navbar>
      <Container h="200vh" />
    </>
  ));
