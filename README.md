# Mouse.Js
Mouse.Js is a javascript library, which changes the shape of the mouse into various shapes with beautiful effects

<a href="https://mohamedfrindi.github.io/Mouse.js/">Demo</a>

## Installation

### CDN


### Put the CSS file to your head tag:
````html
<link rel="stylesheet" href="dist/css/mouse.css" />
````
````html
<link rel="stylesheet" href="dist/css/mouse-min.css" />
````

### Put the JS file at the end of the <code>body</code> tag:
````html
<script type="text/javascript" src="dist/js/mouse.js"></script>
````
````html
<script type="text/javascript" src="dist/js/mouse-min.js"></script>
````

### To run Mouse.Js just add the following code in your script:
````javascript
let mouse = new Mouse()
mouse.mouse()
````

## Options
````javascript
let mouse = new Mouse({
  mouse : 'point',
  color: '#ffda79',
  mouseHover : false,
  mousePointer: false,
  el: 'a',
  el_hover: true,
  mouse_clicked: true,
  clrChanged : false,
})
mouse.mouse()
````
