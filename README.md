# Mouse.Js
Mouse.Js is a javascript library, which changes the shape of the mouse into various shapes with beautiful effects

<a href="https://mohamedfrindi.github.io/Mouse.js/">Demo</a>

## Installation

##### Put the CSS file to your <code>head</code> tag:
````html
<link rel="stylesheet" href="dist/css/mouse.css" />
<!-- or -->
<link rel="stylesheet" href="dist/css/mouse-min.css" />
````

##### Put the JS file at the end of the <code>body</code> tag:
````html
<script type="text/javascript" src="dist/js/mouse.js"></script>
<!-- or -->
<script type="text/javascript" src="dist/js/mouse-min.js"></script>
````

#### CDN
````html
<!-- css -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mohamedfrindi/Mouse.js/dist/css/mouse.css" />
<!-- js -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mohamedfrindi/Mouse.js/dist/js/mouse.js" />
````


##### To run Mouse.Js just add the following code in your <code>script</code>:
````javascript
let mouse = new Mouse()
mouse.mouse()
````

## Options
````javascript
let mouse = new Mouse({

  mouse : 'cirle',
  // To change the type of mouse
  // Accepts 3 options : defult / cirle / point
  // default option : cirle
  
  color: '#ffda79',
  // To change the color of the mouse
  // default option : #ffda79
  
  mouseHover : false,
  // Adds a hover effect to the element on which the mouse is on
  // Accepts 3 options : false / border / background
  // default option : false
  
  mousePointer: false,
  // To show or hide the mouse from the page
  // Accepts 2 options : false / true
  // default option : false
  
  el: 'a',
  // The items you want to hover effect
  // accept any item
  // Should be placed ; etween the elements
  // default option : a
  
  el_hover: true,
  // Activate or disable hover effect on items
  // Accepts 2 options : false / true
  // default option : true
  
  mouse_clicked: true,
  // To activate or disable the effect of clicking on the page
  // Accepts 2 options : false / true
  // default option : true
  
  clrChanged : false,
  // Change the color of the mouse automatically
  // Accepts 2 options : false / true
  // default option : false
  
});
mouse.mouse();
````
