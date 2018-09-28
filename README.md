# Already styled-components

> A collection of some regularly used and moderately customizable components styled with [styled-components](https://github.com/styled-components/styled-components). Depends on [onecolor](https://github.com/One-com/one-color) for color shades and contains inline svg's from [fontawesome](https://fontawesome.com/).

## Install

`npm i already-styled-components`

## Available components

```
* Grid components (Container, Row, Column)
* Button
* Navbar
* AnchorLink
* Fab
* ProgressBar
```

## Usage

```
import { Button } from "already-styled-components"

export default () => (
    <div>
        <h1>A button follows</h1>
        <Button>Click me</Button>
    </div>
)
```

## Extending styles

[Source](https://www.styled-components.com/docs/basics#styling-any-components)

You may want to change something in a component that a prop doesn't cover (or just don't want to use props). For example the ProgressBar component is positioned fixed at the top of the screen. You may want to place it at the top of a section.

```
    import styled from 'styled-components'
    import { ProgressBar } from 'already-styled-components'

    const Section = styled.section`
        position: relative; /* important for the container */
        min-height: 70vh;
        background-color: ${({ bgColor }) => bgColor}
    `
    const CustomProgressBar = styled(ProgressBar)`
        position: absolute;
    `
    export default () => (
        <div>
            <ProgressBar/>
            <Section bgColor="beige"/>
            <Section bgColor="whitesmoke">
                <CustomProgressBar bgColor="black"/>
            </Section>
        </div>
    )
```

## Components

### 1. Grid

A grid layout with flexbox taken from [Philip Walton](https://github.com/philipwalton/solved-by-flexbox/tree/master/demos). What he describes as Grid is a Row component here and a Grid Cell is a Column. Most of the code he lists is implemented by passing pros to the components.

##### Example

```
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
    <Row bgColor="#eee" height="15vh">
      <Column>
        Header
      </Column>
    </Row>
    <Row height="70vh">
      <Column bgColor="#ddd">
        Left sidebar
      </Column>
      <Column bgColor="#bbb">
        Content
      </Column>
      <Column bgColor="#aaa">
        Right sidebar
      </Column>
    </Row>
    <Row bgColor="#999" height="15vh">
      <Column>
        Footer
      </Column>
    </Row>
  </Container>
);
```

#### i) Container

##### Property types

```
* fluid: bool (80% width or 100%),
* width: string (fluid prop wins over width prop),
* height: string,
* margin: string,
* padding: string,
* textAlign: string,
* color: string,
* bgColor: string
```

##### Default values

```
* fluid: false,
* width: null,
* height: null,
* margin: "auto",
* padding: null,
* textAlign: null,
* color: null,
* bgColor: null
```

#### ii) Row

##### Property types

```
* width: string,
* height: string,
* alignItems: string,
* justifyContent: string,
* gutters: bool (changes margin for Row component and padding for immediate child Column components. It's visible if you add a div with a background color inside a Column not if you use the Column directly.),
* gutterSize: string,
* margin: string (if you use the gutters property this will get overridden),
* padding: string,
* color: string,
* bgColor: string
```

##### Default values

```
* width: null,
* height: null,
* alignItems: null,
* justifyContent: null,
* gutters: false,
* gutterSize: "1em",
* margin: 0,
* padding: 0,
* color: null,
* bgColor: null
```

#### iii) Column

##### Property types

```
* height: string
* margin: string,
* padding: string (if you use gutters on the parent Row component this property will get overridden),
* flex: bool, (true = display: flex, false = display: block)
* flexWidth: string (equal sized columns or a string percentage e.g. '50%'),
* alignSelf: string,
* breakPoint: string (the mobile breakpoint where the column will take the whole row.),
* textAlign: string,
* color: string,
* bgColor: string
```

##### Default values

```
* height: null,
* margin: null,
* padding: null,
* flex: false,
* alignSelf: null,
* breakPoint: "576px",
* textAlign: null,
* color: null,
* bgColor: null
```

### 2. Button

A slightly round button that is similar to the Bootstrap 4 button.

##### Property types

```
* color: string
* bgColor: string
* fontFamily: string
* fontSize: string
* transparent: boolean (main use case as an icon button)
```

##### Default values

```
* color: "#fff"
* bgColor: "#00AFB1"
* fontFamily: "inherit"
* fontSize: "20px"
* transparent: false
```

### 3. Navbar

A simple navigation bar with a mobile full screen menu. You should pass the brand content as a component through the brand prop. Additionally you should pass the links as children (see the following example).

##### Example

```
    import { Navbar } from "already-styled-components"

    const BrandContent = () => <div>Brand Name</div>

    export default () => (
    <div>
        <Navbar brand={<BrandContent />}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
        </Navbar>
        <h1>There is a navbar above me</h1>
    </div>
)
```

##### Property types

```
* color: string
* bgColor: string
* hoverColor: string
* mobileZIndex: number
* brand: A React element
* children: A React element or more
```

##### Default values

```
* color: "#fff"
* bgColor: "#313131"
* hoverColor: "orangered"
* mobileZIndex: 1
* brand: <h2>Brand Name</h2>
```

### 4. AnchorLink

A button that will smooth scroll the provided section into the view (top portion). It uses [scrollIntoView](https://developer.mozilla.org/en/docs/Web/API/Element/scrollIntoView) method with the **smooth** scrolling option which [works](https://caniuse.com/#feat=scrollintoview) on Chrome (Opera) and Firefox.

##### Example

```
    import { AnchorLink } from "already-styled-components"

    export default () => (
    <div>
        <AnchorLink sectionId="first-section">First section</AnchorLink>
        <div
            id="first-section"
            style={{ backgroundColor: "#333", width: "100%", height: "200vh", color: "white"}}>
            <h2>First section</h2>
        </div>
        <AnchorLink sectionId="second-section">Second section</AnchorLink>
        <div
            id="second-section"
            style={{ backgroundColor: "azure", width: "100%", height: "200vh" }}
        >
            <h2>Second section</h2>
        </div>
    </div>
)
```

If you want to use an animation library you can override the default onClick method by using the overrideOnClick property

##### example with [animejs](https://github.com/juliangarnier/anime/)

```
    import { AnchorLink } from "already-styled-components"
    import anime from "animejs";

    const smoothScroll = (sectionId, callback, e) => {
        const sectionRect = document
            .querySelector(`#${sectionId}`)
            .getBoundingClientRect();
        anime({
            targets: "html, body",
            scrollTop: [window.pageYOffset, sectionRect.top + window.pageYOffset],
            duration: 300,
            easing: "easeInSine"
        });
        if (callback) callback();
    };

    export default () => (
        <div>
            <div
                id="first-section"
                style={{backgroundColor: "#333", width: "100%", height: "30vh", color: "white"}}
            >
                <h2>First section</h2>
            </div>
            <AnchorLink sectionId="second-section" overrideOnClick={smoothScroll} /> Second Section
            <div
                id="second-section"
                style={{ backgroundColor: "beige", width: "100%", height: "200vh", color: "black"}}
            >
                <h2>second section</h2>
            </div>
        </div>
    );
```

##### Property types

```
* sectionId: string (required, the id without the # sign),
* color: string,
* opacity: number,
* children: anything,
* callback: A function that you want to execute (e.g close a modal or a menu),
* overrideOnClick: A function that overrides the default on click method. Arguments: sectionId prop, callback prop and click event. overrideOnClick(sectionId, callback, e)
```

##### Default values

```
  * color: "black",
  * opacity: 0.5,
  * callback: null,
  * overrideOnClick: null
```

### 5. Floating Action Button

A material [floating action button](https://material.io/design/components/buttons-floating-action-button.html) that represents the primary action of the page. You can pass as child your own icon (it's empty by default). The default **position** is at the bottom right corner of the screen. It has a **ripple** effect on click and an optional **pulse** animation to draw the attention of the user.

##### Example with icons from [fortawesome](https://github.com/FortAwesome/react-fontawesome#installation)

```
    import { Fab } from "already-styled-components"
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

    export default () => (
        <div>
            <Fab aria-label="send email" onClick={e => console.log('click')}>
                <FontAwesomeIcon icon={faPaperPlane}/>
            </Fab>
        </div>
    );
)
```

##### Property types

```
* color: string,
* bgColor: string,
* fontSize: string,
* width: string,
* top: string,
* right: string,
* bottom: string,
* left: string,
* zIndex: number,
* pulse: bool,
* ripple: bool
```

##### Default values

```
* color: "white",
* bgColor: "crimson",
* fontSize: "30px",
* width: "80px",
* top: null,
* right: "3%",
* bottom: "3%",
* left: null,
* zIndex: 1,
* pulse: false,
* ripple: true
```

### 6. Progress Bar

A YouTube like progress bar positioned at the top of the screen.

##### Example

```
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
            <ProgressBar bgColor="rebeccapurple" visible={this.state.loading}/>
            <div
                style={{
                    minHeight: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Button bgColor="rebeccapurple" onClick={this.toggleProgressBar}>Stop the progress bar</Button>
            </div>
        </div>
        );
    }
}
```

##### Property types

```
* visible: bool,
* bgColor: string,
* zIndex: number
```

##### Default values

```
* visible: true,
* bgColor: "orange",
* zIndex: 1
```
