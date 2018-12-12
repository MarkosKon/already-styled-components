# Already styled-components

> React UI components styled with [styled-components](https://github.com/styled-components/styled-components).
> Depends on [polished](https://github.com/styled-components/polished) for color shades and contains inline SVG from [fontawesome](https://fontawesome.com/). Also uses [react-transition-group](https://github.com/reactjs/react-transition-group) to animate the Navbar component.

## Install

`npm i already-styled-components styled-components`

## Available components

- [Grid components](#1-grid) ([Container](#i-container), [Row](#ii-row), [Column](#iii-column))
- [Button](#2-button)
- [Navbar](#3-navbar)
- [AnchorLink](#4-anchorlink)
- [Fab](#5-floating-action-button)
- [ProgressBar](#6-progress-bar)

Also includes some minor [smooth scrolling](https://github.com/MarkosKon/already-styled-components/blob/master/src/utils/smoothScrolling.js) and [animation](https://github.com/MarkosKon/already-styled-components/blob/master/src/utils/animations.js) utilities.

## Usage

```jsx
import React from "react";
import { Button } from "already-styled-components";

export default () => (
  <div>
    <h1>A button follows</h1>
    <Button>Click me</Button>
  </div>
);
```

## Extending styles

[Source](https://www.styled-components.com/docs/basics#styling-any-components)

You may want to change something in a component that a prop doesn't cover (or just don't want to use props). For example the ProgressBar component is positioned fixed at the top of the screen. You may want to place it at the top of a section.

```jsx
import React from "react";
import styled from "styled-components";
import { ProgressBar } from "already-styled-components";

const Section = styled.section`
  position: relative; /* important for the container */
  min-height: 40vh;
  background-color: ${({ bc }) => bc};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CustomProgressBar = styled(ProgressBar)`
  position: absolute;
  top: 100%;
`;
export default () => (
  <div>
    <ProgressBar />
    <Section bc="beige">
      <h2>
        The orange progress bar is at the default position (fixed top of the
        screen)
      </h2>
    </Section>
    <Section bc="azure">
      <h2>
        The black one (CustomProgressBar) is at the bottom of this section.
      </h2>
      <CustomProgressBar bc="black" />
    </Section>
  </div>
);
```

\*\* **Note for extending components with styled(Component):** If we take the ProgressBar example above, the original ProgressBar has `top: 0`. If you want to position it at the bottom of the section, you'll have to override the `top` property with `top: 100%` in order to work. For example, it won't work with `bottom: 0`.

## Components

### 1. Grid

A grid layout with flexbox taken from [Philip Walton](https://github.com/philipwalton/solved-by-flexbox/tree/master/demos). What he describes as Grid is a Row component here and a Grid Cell is a Column. Most of the code he lists is implemented by passing props to the components.

##### Example (holy grail layout)

```jsx
// A holy grail layout.
import React from "react";
import { createGlobalStyle } from "styled-components";
import { Container, Row, Column } from "already-styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export default () => (
  <>
    <GlobalStyle />
    <Container fluid textAlign="center">
      <Row bc="#eee" h="15vh">
        <Column>Header</Column>
      </Row>
      <Row h="70vh">
        <Column bc="#ddd">Left sidebar</Column>
        <Column bc="#bbb" flexWidth="50%">
          Content
        </Column>
        <Column bc="#aaa">Right sidebar</Column>
      </Row>
      <Row bc="#999" h="15vh">
        <Column>Footer</Column>
      </Row>
    </Container>
  </>
);
```

\*\* **Note for Grid component props:** The first props in the following lists are the "important" ones (that provide some logic). Props like height, color, padding etc are for convenience and you can easily override them if you [extend the components](#extending-styles).

#### i) Container

##### Prop types

- `fluid`: `bool` (80% **width** or 100%)
- `w`: (width) `string` (**fluid prop wins** over width prop)
- `h`: (height) `string`
- `m`: (margin) `string`
- `p`: (padding) `string`
- `ta`: (text align) `string`
- `c`: (color) `string`
- `bc`: (background color) `string`

##### Default values

- `fluid`: `false`
- `w`: (width) `"80%"`
- `h`: (height) `null`
- `m`: (margin) `"auto"`
- `p`: (padding) `null`
- `ta`: (text align) `null`
- `c`: (color) `null`
- `bc`: (background color) `null`

#### ii) Row

##### Prop types

- `gutters`: `bool` (changes margin for **Row** component and padding for immediate child **Column** components. It's visible if you add a div with a background color inside a Column. Not if you change the color of the Column directly.)
- `gutterSize`: `string`
- `w`: (width) `string`
- `h`: (height) `string`
- `ai`:(align-items) `string`
- `jc`: (justify-content) `string`
- `m`: (margin) `string` (if you use the gutters property this will get overridden)
- `p`: (padding) `string`
- `c`: (color) `string`
- `bc`: (background color) `string`

##### Default values

- `gutters`: `false`
- `gutterSize`: `"1em"`
- `w`: (width) `null`
- `h`: (height) `null`
- `ai`: (align-items) `null`
- `jc`: (justify-content) `null`
- `m`: (margin) `"0"`
- `p`: (padding) `"0"`
- `c`: (color) `null`
- `bc`: (background color) `null`

#### iii) Column

##### Prop types

- `flex`: `bool`, (true = display: flex, false = display: block)
- `flexWidth`: `string` (the default is equal sized columns or you can change it with a string percentage e.g. '50%')
- `breakpoint`: `string` (the mobile breakpoint where the column will take the whole row.)
- `h`: (height) `string`
- `m`: (margin) `string`
- `p`: (padding) `string` (if you use gutters on the parent Row component this property will get overridden)
- `as`: (align-self) `string`
- `ta`: (text-align) `string`
- `c`: (color) `string`
- `bc`: (background color) `string`

##### Default values

- `flex`: `false`
- `breakpoint`: `"576px"`
- `h`: (height) `null`
- `m`: (margin) `null`
- `p`: (padding) `null`
- `as`: (align-self) `null`
- `ta`: (text-align) `null`
- `c`: (color) `null`
- `bc`: (background color) `null`

### 2. Button

A slightly round button that is similar to the **Bootstrap 4** button. **One cool thing it does**, is that automatically calculates the `background-color` on `hover` and adds an `outline` from the `bgColor` prop you specify. So if you want to [extend](#extending-styles) it with `styled(Button)`, I suggest to pass the bgColor as a prop to keep the functionality mentioned above.

##### Example

```jsx
import React from "react";
import { Button } from "already-styled-components";

export default () => (
  <div>
    <Button>Click me</Button>
    <Button transparent c="black">
      "Icon" button
    </Button>
  </div>
);
```

##### Example (extending Button)

```jsx
import React from "react";
import styled from "styled-components";
import { Button } from "already-styled-components";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const OrangeButton = styled(Button)`
  border-radius: 0px;
  background-color: orange;
  color: black;
`;
const PinkButton = styled(Button)`
  border-radius: 0px;
  font-size: 24px;
`;
export default () => (
  <Center>
    <OrangeButton>Not so good</OrangeButton>
    <PinkButton bc="pink" c="black">
      Better
    </PinkButton>
  </Center>
);
```

##### Prop types

- `transparent`: `bool` (main use case as an icon button)
- `c`: (color) `string`
- `bc`: (background color) `string`
- `ff`: (font-family) `string`
- `fs`: (font-size) `string`

##### Default values

- `transparent`: `false`
- `c`: (color) `"#fff"`
- `bc`: (background color) `"#00AFB1"`
- `ff`: (font-family) `"inherit"`
- `fs`: (font-size) `"20px"`

### 3. Navbar

This is a _render props_ component that renders a Navigation bar, **fixed top**, with a **mobile full screen menu**. By default renders a [DesktopList](#3-i-desktoplist-props) and a [MobileList](#3-ii-mobilelist-props) component. You can provide your own implementations if you like. You pass the **links** via the children prop.

##### Example 1 (minimal)

```jsx
import React from "react";
import styled from "styled-components";
import { Container, Navbar } from "already-styled-components";

const Brand = styled.div`
  font-size: 36px;
  font-style: italic;
  color: white;
`;
export default () => (
  <Container h="200vh" fluid>
    <Navbar brand={<Brand>Styled Components</Brand>}>
      <a href="/">Home</a>
      <a href="/About">About</a>
      <a href="/Contact">Contact</a>
    </Navbar>
  </Container>
);
```

The props for the **Navbar** component are the following:

##### Prop types

- `desktopList`: `function`, A function that returns the desktop navbar (render prop)
- `mobileList`: `function`, A function that returns the mobile navbar (render prop)
- `brand`: `A React element`
- `fixed`: `bool`
- `children`: `A React element or more`
- `c`: (color) `string`
- `bc`: (background color) `string`
- `hc`: (hover color) `string`

##### Default values

- `desktopList`: `props => <DesktopList {...props} />`
- `mobileList`: `props => <MobileList {...props} />`
- `brand`: `null`
- `fixed`: `true`
- `c`: (color) `"#fff"`
- `bc`: (background color) `"#313131"`
- `hc`: (hover color) `"orangered"`

##### Example 2 (extending DesktopList)

In this example we change the colors of the DesktopList when we scroll down. That is, if the Navbar is fixed.

```jsx
import React from "react";
import styled from "styled-components";
import { Container, Navbar, DesktopList } from "already-styled-components";

const Brand = styled.div`
  font-size: 36px;
  font-style: italic;
  color: white;
`;

const WhiteWhenFixed = styled(DesktopList)`
  box-shadow: 0 0 3px 0 black;
  transition: all 0.3s ease-in-out !important;
  background-color: ${({ fixedTop }) => fixedTop && `white`};
  a,
  div {
    color: ${({ fixedTop }) => fixedTop && `black`};
  }
  path {
    fill: ${({ fixedTop }) => fixedTop && `black`};
  }
`;
export default () => (
  <Container fluid h="200vh" bc="beige">
    <Navbar
      brand={<Brand>Styled Components</Brand>}
      desktopList={props => (
        <WhiteWhenFixed {...props} suppressClassNameWarning />
      )}
    >
      <a href="/">Home</a>
      <a href="/About">About</a>
      <a href="/Contact">Contact</a>
    </Navbar>
  </Container>
);
```

You can also provide your own implementation. For example you may want a completely different DesktopList but you want to keep the mobile menu. For reference these are the **props** of the **DesktopList** component:

#### 3. i) DesktopList props

##### Prop types

- `showMobile`: `function` (show the mobile menu)
- `links`: one `element` or more (the children of the Navbar)
- `brand`: `element`
- `fixedTop`: `bool` (is the Navbar fixed top now?)
- `fixedBreakpoint`: a `ref` used by the IntersectionObserver of the Navbar
- `c`: (color) `string`
- `bc`: (background color) `string`
- `hc`: (hover color) `string`
- `className`: `string`, for extending with styled-components

##### Default values

- `showMobile`: `null`
- `brand`: `null`
- `fixedTop`: `true`
- `c`: `'white'`
- `bc`: `'#1d1d1d'`
- `hc`: `'orangered'`

##### Example 3 (extending mobile list)

In this example we change the transition of the mobile menu from **fade-in** to **slide-in** from top.

```jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Navbar, MobileList } from "already-styled-components";

const Brand = styled.div`
  font-size: 36px;
  font-style: italic;
  color: white;
`;

const SlidingMobileList = styled(MobileList)`
  opacity: 1 !important; /* important, because we transition the opacity in the original */

  &.mobile-list-enter {
    transform: translateY(-100%);
  }
  &.mobile-list-enter-active {
    transform: translateY(0);
    transition: transform 0.3s ease-out;
  }
  &.mobile-list-exit {
    transform: translateY(0);
  }
  &.mobile-list-exit-active {
    transform: translateY(-100%);
    transition: transform 0.3s ease-out;
  }
`;
export default () => (
  <Container fluid h="200vh" bc="beige">
    <Navbar
      brand={<Brand>Styled Components</Brand>}
      mobileList={props => <SlidingMobileList {...props} />}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Navbar>
  </Container>
);
```

Again you can provide you own implementation instead of just extending the MobileList. The following are the props of the **MobileList** component:

#### 3. ii) MobileList props

##### Prop types

- `links`: (required) `element` of array of elements (The children of the Navbar, links)
- `mobileMenuVisible`: (required) `bool`, is the mobile menu visible now?
- `hideMobile`: `function`
- `c`: (color) `string`
- `bc`: (background color) `string`
- `hc`: (hover color, for the links) `string`
- `className`: a className for extending with styled components

##### Default values

- `hideMobile`: `null`
- `c`: `"white"`
- `bc`: `'#1d1d1d'`
- `hc`: `'orangered'`
- `className`: `null`

### 4. AnchorLink

A button that'll smooth scroll to the specified section on click. Similar to GitHub heading links in markdown. Under the hood, is basically a slightly different [Button](#2-button) component with a `transparent` prop. You can also provide an **offset** prop (if you have a fixed/sticky navbar) or a **callback** (e.g close a modal or a menu after click).

##### Example

```jsx
import React from "react";
import styled from "styled-components";
import { AnchorLink } from "already-styled-components";

const Navigation = styled.nav`
  height: 74px;
  background-color: #1d1d1d;
  position: sticky;
  top: 0;
`;
const FirstSection = styled.div`
  height: 50vh;
  color: white;
  background-color: #333;
`;
const SecondSection = styled.div`
  height: 150vh;
  background-color: azure;
`;
export default () => (
  <div>
    <Navigation />
    <FirstSection id="first-section">
      <AnchorLink scrollTo="first-section" c="white">
        First section
      </AnchorLink>
      <p>Close :(</p>
    </FirstSection>
    <SecondSection id="second-section">
      <AnchorLink scrollTo="second-section" offset={74}>
        Second section
      </AnchorLink>
      <p>Perfect!</p>
    </SecondSection>
  </div>
);
```

##### Prop types

- `scrollTo`: `string`, **(required)** it's the section id without the # sign)
- `offset`: `number`, You can use it if you have a fixed navbar for example
- `callback`: A `function` that you want to execute.
- `children`: `anything`
- `c`: (color) `string`, It's the text color
- `o`: (opacity) `number`

##### Default values

- `offset`: `0`
- `callback`: `null`
- `c`: (color) `"black"`
- `o`: (opacity) `1`

### 5. Floating Action Button

A material [floating action button](https://material.io/design/components/buttons-floating-action-button.html) that represents the primary action of the page. You can pass, as child, your own icon (it's empty by default). The default **position** is at the bottom right corner of the screen. It has a **ripple** effect on click and an optional **pulse** animation to draw the attention of the user.

##### Example with icons from [fortawesome](https://github.com/FortAwesome/react-fontawesome#installation)

```bash
npm i @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/fontawesome-svg-core

```

```jsx
import React from "react";
import { Fab } from "already-styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faStar } from "@fortawesome/free-regular-svg-icons";

export default () => (
  <div>
    <Fab aria-label="send email" onClick={e => console.log("Email sent!")}>
      <FontAwesomeIcon icon={faPaperPlane} />
    </Fab>
    <Fab
      bc="#20c7b6"
      w="50px"
      fs="22px"
      t="20px"
      pulse
      aria-label="do more stuff"
      onClick={() => console.log("More stuff done!")}
    >
      <FontAwesomeIcon icon={faStar} />
    </Fab>
  </div>
);
```

##### Prop types

- `ripple`: `bool`
- `pulse`: `bool`,
- `c`: (color) `string`,
- `bc`: (background color) `string`,
- `fs`: (fontSize) `string`,
- `w`: (width) `string`,
- `t`: (top) `string`,
- `r`: (right) `string`,
- `b`: (bottom) `string`,
- `l`: (left) `string`,
- `zi`: (zIndex) `number`,

##### Default values

- `pulse`: `false`,
- `ripple`: `true`
- `c`: (color) `"white`",
- `bc`: (background color) `"crimson"`,
- `fs`: (fontSize) `"30px"`,
- `w`: (width) `"80px"`,
- `t`: (top) `null`,
- `r`: (right) `"3%"`,
- `b`: (bottom) `"3%"`,
- `l`: (left) `null`,
- `zi`: (zIndex) `1`,

### 6. Progress Bar

A YouTube/Stack Overflow like progress bar, positioned at the top of the screen.

##### Example

```jsx
import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "already-styled-components";

const Section = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    this.toggleProgressBar = this.toggleProgressBar.bind(this);
  }

  toggleProgressBar() {
    this.setState({ loading: !this.state.loading });
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <ProgressBar bc="rebeccapurple" visible={loading} />
        <Section>
          <Button bc="rebeccapurple" onClick={this.toggleProgressBar}>
            {loading ? "Stop" : "Start"} the progress bar
          </Button>
        </Section>
      </div>
    );
  }
}
```

##### Property types

- `visible`: `bool`,
- `bc`: (background color) `string`,
- `zi`: (zIndex) `number`

##### Default values

- `visible`: `true`,
- `bc`: (background color) `"orange"`,
- `zi`: (zIndex) `1`
