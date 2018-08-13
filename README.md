# Already styled-components

> A collection of some regularly used and moderately customizable components styled with [styled-components](https://github.com/styled-components/styled-components). Also uses [fortawesome](https://github.com/FortAwesome/react-fontawesome) for some default fontawesome icons and [onecolor](https://github.com/One-com/one-color) for color shades. 
> Because the package is heavy on dependencies better use it only if you already use styled-components and fortawesome in your project to avoid huge file sizes.
## Install

`npm i already-styled-components`

## Available components
```
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

### 1. Button

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
* fontFamily: inherit'
* fontSize: "20px"
* transparent: false
```

### 2. Navbar

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

### 3. AnchorLink

A button that will smooth scroll the provided section into the view (top portion). It uses [scrollIntoView](https://developer.mozilla.org/en/docs/Web/API/Element/scrollIntoView) method with the **smooth** scrolling option which [works](https://caniuse.com/#feat=scrollintoview) on Chrome (Opera) and Firefox. 

##### Example
```
    import { AnchorLink } from "already-styled-components"

    export default () => (
    <div>
        <AnchorLink sectionId="first-section"/>First section
        <div
            id="first-section" 
            style={{ backgroundColor: "#333", width: "100%", height: "200vh", color: "white"}}>
            <h2>First section</h2>
        </div>
        <AnchorLink sectionId="second-section"/>Second section
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
* children: A React element of more (Use it if you want another icon),
* callback: A function that you want to execute (e.g close a modal or a menu),
* overrideOnClick: A function that overrides the default on click method. Arguments: sectionId prop, callback prop and click event. overrideOnClick(sectionId, callback, e)
```

##### Default values

```
  * color: "black",
  * opacity: 0.5,
  * children: <FontAwesomeIcon icon={faLink} />,
  * callback: null,
  * overrideOnClick: null
```

### 4. Floating Action Button

A material [floating action button](https://material.io/design/components/buttons-floating-action-button.html) that represents the primary action of the page. You can pass as child your own icon (it's empty by default). The default **position** is at the bottom right corner of the screen. It has a **ripple** effect on click and an optional **pulse** animation to draw the attention of the user.

##### Example
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

### 5. Progress Bar 

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
