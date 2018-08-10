# Already styled-components

> A collection of some regularly used and moderately customizable components styled with styled-components.

## Install

`npm i already-styled-components`

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

## Components

### 1. Button component

All properties are optional. Colors can be hex, rgb, rgba.

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

### 2. Navbar component

A simple navigation bar with a mobile full screen menu. You should pass the brand content as a component through the brand prop. Additionally you should pass the links as children (see the following example).

##### Example

```
    import { Navbar } from "already-styled-components"

    const NavbarContent = () => <div>Brand Name</div>

    export default () => (
    <div>
        <Navbar brand={<NavbarContent />}>
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
* brand: A React element
* children: A React element or more
```

##### Default values

```
* color: "#fff"
* bgColor: "#313131"
* hoverColor: "orangered"
* brand: <h2>Brand Name</h2>
```
