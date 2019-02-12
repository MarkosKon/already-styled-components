/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import GlobalStyle from './utils/GlobalStyle';
import { Centered, Fab } from '../src';
import { FasLink } from '../src/components/Icons';

const FabDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

storiesOf('Fab', module)
  .addDecorator(withInfo)
  .addDecorator(FabDecorator)
  .add('default props', () => (
    <Fab aria-label="do things" onClick={action('clicked')}>
      <FasLink />
    </Fab>
  ))
  .add('presentation props', () => (
    <Fab
      bc="#1d1d1d"
      c="pink"
      fs="3em"
      w="100px"
      aria-label="do more things"
      onClick={action('clicked')}
    >
      <span>Hey</span>
    </Fab>
  ))
  .add('positioning top left', () => (
    <Fab aria-label="do things" t="0" l="0" onClick={action('clicked')}>
      <FasLink />
    </Fab>
  ))
  .add('positioning bottom left with percentages', () => (
    <Fab aria-label="do things" b="5%" l="5%" onClick={action('clicked')}>
      <FasLink />
    </Fab>
  ))
  .add('Cheching z-index', () => (
    <>
      <Centered
        h="100vh"
        bc="pink"
        c="#400440"
        style={{
          zIndex: 2,
          position: 'fixed',
          top: 0,
          width: '100vw',
        }}
      >
        <code>z-index: 2</code>
      </Centered>
      <Fab aria-label="do things" w="200px" zi={2} onClick={action('clicked')}>
        <code>z-index: 2</code>
      </Fab>
    </>
  ))
  .add('pulse no ripple', () => (
    <Fab aria-label="do things" bc="purple" pulse ripple={false} onClick={action('clicked')}>
      <FasLink />
    </Fab>
  ))
  .add('stop pulse after 10 seconds', () => {
    class FabWrapper extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          pulsate: true,
        };
      }

      componentDidMount() {
        setTimeout(() => this.setState({ pulsate: false }), 10000);
      }

      render() {
        const { pulsate } = this.state;
        return (
          <Fab aria-label="do things" bc="purple" pulse={pulsate} onClick={action('clicked')}>
            <FasLink />
          </Fab>
        );
      }
    }
    return <FabWrapper />;
  });
