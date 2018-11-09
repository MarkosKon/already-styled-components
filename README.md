# Already styled-components

> Some UI React components styled with [styled-components](https://github.com/styled-components/styled-components). 
> Depends on [onecolor](https://github.com/One-com/one-color) for color shades and contains inline SVG from [fontawesome](https://fontawesome.com/). Also uses react-transition-group to animate the Navbar.

## Install

`npm i already-styled-components`

## Available components

- Grid components ([Container](#i-container), [Row](#ii-row), [Column](#iii-column))
- [Button](#2-button)
- [Navbar](#3-navbar)
- [AnchorLink](#4-anchorlink)
- [Fab](#5-floating-action-button)
- [ProgressBar](#6-progress-bar)

## Available Utilities

## Usage

```jsx
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
import styled from "styled-components";
import { ProgressBar } from "already-styled-components";

const Section = styled.section`
  position: relative; /* important for the container */
  min-height: 70vh;
  background-color: ${({ bc }) => bc};
`;
const CustomProgressBar = styled(ProgressBar)`
  position: absolute;
`;
export default () => (
  <div>
    <ProgressBar />
    <Section bc="beige" />
    <Section bc="whitesmoke">
      <CustomProgressBar bc="black" />
    </Section>
  </div>
);
```

## Components

### 1. Grid

A grid layout with flexbox taken from [Philip Walton](https://github.com/philipwalton/solved-by-flexbox/tree/master/demos). What he describes as Grid is a Row component here and a Grid Cell is a Column. Most of the code he lists is implemented by passing props to the components.

##### Example

```jsx
// A holy grail layout.
import React from "react";
import { injectGlobal } from "styled-components";
import { Container, Row, Column } from "already-styled-components";

injectGlobal`
  body {
    margin: 0;
  }
`;

export default () => (
  <Container fluid textAlign="center">
    <Row bc="#eee" height="15vh">
      <Column>Header</Column>
    </Row>
    <Row height="70vh">
      <Column bc="#ddd">Left sidebar</Column>
      <Column bc="#bbb">Content</Column>
      <Column bc="#aaa">Right sidebar</Column>
    </Row>
    <Row bc="#999" height="15vh">
      <Column>Footer</Column>
    </Row>
  </Container>
);
```

#### i) Container

##### Property types

- `fluid`: bool (80% width or 100%)
- `width`: string (fluid prop wins over width prop)
- `height`: string
- `margin`: string
- `padding`: string
- `textAlign`: string
- `c`: (color) string
- `bc`: (background color) string

##### Default values

- `fluid`: false
- `width`: null
- `height`: null
- `margin`: "auto"
- `padding`: null
- `textAlign`: null
- `c`: (color) null
- `bc`: (background color) null

#### ii) Row

##### Property types

- `width`: string
- `height`: string
- `alignItems`: string
- `justifyContent`: string
- `gutters`: bool (changes margin for Row component and padding for immediate child Column components. It's visible if you add a div with a background color inside a Column not if you use the Column directly.)
- `gutterSize`: string
- `margin`: string (if you use the gutters property this will get overridden)
- `padding`: string
- `c`: (color) string
- `bc`: (background color) string

##### Default values

- `width`: null
- `height`: null
- `alignItems`: null
- `justifyContent`: null
- `gutters`: false
- `gutterSize`: "1em"
- `margin`: 0
- `padding`: 0
- `c`: (color) null
- `bc`: (background color) null

#### iii) Column

##### Property types

- `height`: string
- `margin`: string
- `padding`: string (if you use gutters on the parent Row component this property will get overridden)
- `flex`: bool, (true = display: flex, false = display: block)
- `flexWidth`: string (equal sized columns or a string percentage e.g. '50%')
- `alignSelf`: string
- `breakPoint`: string (the mobile breakpoint where the column will take the whole row.)
- `textAlign`: string
- `c`: (color) string
- `bc`: (background color) string

##### Default values

- `height`: null
- `margin`: null
- `padding`: null
- `flex`: false
- `alignSelf`: null
- `breakPoint`: "576px"
- `textAlign`: null
- `c`: (color) null
- `bc`: (background color) null

### 2. Button

A slightly round button that is similar to the Bootstrap 4 button. One cool thing it does, is that automatically calculates the `background-color` on `hover` and an outline from the `bgColor` prop you specify. So if you want [extend](#extending-styles) it with `styled(Button)`, I suggest to pass the bgColor as a prop.

##### Example

```jsx
import { Button } from "already-styled-components";

export default () => (
  <div>
    <h1>A button follows</h1>
    <Button>Click me</Button>
  </div>
);
```

##### Property types

- `c`: (color) string
- `bc`: (background color) string
- `fontFamily`: string
- `fontSize`: string
- `transparent`: boolean (main use case as an icon button)

##### Default values

- `c`: (color) "#fff"
- `bc`: (background color) "#00AFB1"
- `fontFamily`: "inherit"
- `fontSize`: "20px"
- `transparent`: false

### 3. Navbar

This is a _render props_ component that renders a simple Navbar with a mobile full screen menu. By default renders a DesktopList and a MobileList component. You can provide your own implementations if you like. You pass the links via the children prop.

##### Example 1 (minimal)

```jsx
import React from "react";
import { Navbar } from "already-styled-components";

const IndexPage = () => (
  <div>
    <Navbar>
      <a href="/">Home</a>
      <a href="/About">About</a>
      <a href="/Contact">Contact</a>
    </Navbar>
  </div>
);
```

##### Property types

- `c`: (color) string
- `bc`: (background color) string
- `hc`: (hover color) string
- `mobileZIndex`: number
- `brand`: A React element
- `children`: A React element or more

##### Default values

- `c`: (color) "#fff"
- `bc`: (background color) "#313131"
- `hc`: (hover color) "orangered"
- `mobileZIndex`: 1
- `brand`: `<h2>Brand Name</h2>`

### 4. AnchorLink

A button that'll smooth scroll to the specified section on click. It's basically a slightly different [Button](#2-button) component with a `transparent` prop. You can also provide an offset prop or a callback.

##### Example

```jsx
import { AnchorLink } from "already-styled-components";

export default () => (
  <div>
    <AnchorLink sectionId="first-section">First section</AnchorLink>
    <div
      id="first-section"
      style={{
        backgroundColor: "#333",
        width: "100%",
        height: "200vh",
        color: "white"
      }}
    >
      <h2>First section</h2>
    </div>
    <AnchorLink sectionId="second-section" offset={74}>
      Second section
    </AnchorLink>
    <div
      id="second-section"
      style={{ backgroundColor: "azure", width: "100%", height: "200vh" }}
    >
      <h2>Second section</h2>
    </div>
  </div>
);
```

##### Property types

- `scrollTo`: string, **(required)** it's the section id without the # sign)
- `offset`: number, You can use it if you have a fixed navbar for example
- `c`: (color) string, It's the text color
- `opacity`: number
- `children`: anything
- `callback`: A function that you want to execute (e.g close a modal or a menu)

##### Default values

- `offset`: 0
- `c`: (color) "black"
- `opacity`: 0.5
- `callback`: null

### 5. Floating Action Button

A material [floating action button](https://material.io/design/components/buttons-floating-action-button.html) that represents the primary action of the page. You can pass as child your own icon (it's empty by default). The default **position** is at the bottom right corner of the screen. It has a **ripple** effect on click and an optional **pulse** animation to draw the attention of the user.

##### Example with icons from [fortawesome](https://github.com/FortAwesome/react-fontawesome#installation)

```jsx
import { Fab } from "already-styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default () => (
  <div>
    <Fab aria-label="send email" onClick={e => console.log("Click!")}>
      <FontAwesomeIcon icon={faPaperPlane} />
    </Fab>
  </div>
);
```

##### Property types

- `c`: (color) string,
- `bc`: (background color) string,
- `fontSize`: string,
- `width`: string,
- `top`: string,
- `right`: string,
- `bottom`: string,
- `left`: string,
- `zIndex`: number,
- `pulse`: bool,
- `ripple`: bool

##### Default values

- `c`: (color) "white",
- `bc`: (background color) "crimson",
- `fontSize`: "30px",
- `width`: "80px",
- `top`: null,
- `right`: "3%",
- `bottom`: "3%",
- `left`: null,
- `zIndex`: 1,
- `pulse`: false,
- `ripple`: true

### 6. Progress Bar

A YouTube/Stack Overflow like progress bar, positioned at the top of the screen.

##### Example

```jsx
import React from "react";
import { ProgressBar, Button } from "already-styled-components";

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
    return (
      <div>
        <ProgressBar bc="rebeccapurple" visible={this.state.loading} />
        <div
          style={{
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button bc="rebeccapurple" onClick={this.toggleProgressBar}>
            Stop the progress bar
          </Button>
        </div>
      </div>
    );
  }
}
```

##### Property types

- `visible`: bool,
- `bc`: (background color) string,
- `zIndex`: number

##### Default values

- `visible`: true,
- `bc`: (background color) "orange",
- `zIndex`: 1

## Utilities