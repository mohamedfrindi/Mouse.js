'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".mouse.defult {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  border-radius: 50%;\n  box-shadow: 0 0 10px var(--bg), 0 0 10px var(--bg);\n  position: absolute;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  z-index: 9999; }\n  .mouse.defult::after {\n    content: \"\";\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: var(--bg);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: all .3s ease-in-out; }\n\n.mouse.defult.mouse-hover {\n  width: 35px;\n  height: 35px;\n  box-shadow: 0 0 10px var(--bg), 0 0 0px var(--bg);\n  opacity: .3;\n  transition: width .3s ease-in-out , height .3s ease-in-out; }\n  .mouse.defult.mouse-hover::after {\n    width: 30px;\n    height: 30px;\n    transition: width .3s ease-in-out , height .3s ease-in-out; }\n\n.mouse.cirle {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  border-radius: 50%;\n  border: 1px solid var(--bg);\n  position: absolute;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  z-index: 9999; }\n  .mouse.cirle::after {\n    content: \"\";\n    width: 3px;\n    height: 3px;\n    background: var(--bg);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%; }\n\n.mouse.cirle.mouse-hover {\n  transform-origin: center;\n  opacity: .5;\n  transform: translate(-50%, -50%) scale(1.5);\n  transition: transform  .3s ease-in-out; }\n  .mouse.cirle.mouse-hover::after {\n    display: none; }\n\n.mouse.point {\n  width: 10px;\n  height: 10px;\n  display: flex;\n  border-radius: 50%;\n  background: var(--bg);\n  box-shadow: none;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  z-index: 9999; }\n  .mouse.point::after {\n    display: none; }\n\n.mouse.point.mouse-hover {\n  opacity: 1;\n  transform-origin: center;\n  transform: translate(-50%, -50%) scale(3);\n  transition: transform .3s ease-in-out;\n  mix-blend-mode: difference; }\n\n.mouse-border {\n  position: relative; }\n  .mouse-border::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n    border: 1px solid var(--bg);\n    animation: scl .3s ease-in-out; }\n\n.mouse-bg {\n  position: relative; }\n  .mouse-bg::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: var(--bg);\n    filter: opacity(0.2);\n    animation: scl .3s ease-in-out; }\n\n@keyframes scl {\n  0% {\n    opacity: 0;\n    transform: scale(0); }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n.mouse-clicked {\n  width: 20px;\n  height: 20px;\n  border: 1px solid var(--bg);\n  display: block;\n  border-radius: 50%;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  animation: mouseClicked .7s ease-in-out; }\n\n@keyframes mouseClicked {\n  0% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(0); }\n  100% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(3); } }\n";
styleInject(css_248z);

function Mouse (parametars) {

    this.default = {
        mouse : 'cirle',
        color: '#ffda79',
        mouseHover : false,
        mousePointer: false,
        el: 'a',
        el_hover: true,
        mouse_clicked: true,
        clrChanged : false,
    };
    this.options = Object.assign(this.default , parametars);

    // methods --------
    this.mouse = function () {
        
        // creat span mouse
        let creatMouse = document.createElement('span');
        creatMouse.classList.add('mouse');
        document.body.appendChild(creatMouse);
        
        // change mouse position event
        document.addEventListener('mousemove' , mouseMove);
        document.addEventListener('mouseout' , mouseHide);

        creatMouse.style.display = 'none';

        // change mouse position function
        function mouseMove(e) {
            creatMouse.style.display = 'flex';

            creatMouse.style.left = `${e.pageX}px`;
            creatMouse.style.top = `${e.pageY}px`;
        }
        function mouseHide () {
            creatMouse.style.display = 'none';
        }



        // set functions
        this.mouseType();
        this.pointer();
        this.color();
        this.mouseElHover();
        this.mouseClicked();
        this.mouseFilterColor();
    };

    this.mouseType = function () {
        let mouseEl = document.querySelector('.mouse');

        // mouse type 
        function chekedmouseType(par) {
            if (par == 'defult') {
                mouseEl.classList.add('defult');
                mouseEl.classList.remove('cirle');
                mouseEl.classList.remove('point');
            }else if (par == 'cirle') {
                mouseEl.classList.add('cirle');
                mouseEl.classList.remove('defult');
                mouseEl.classList.remove('point');
            }else if (par == 'point') {
                mouseEl.classList.add('point');
                mouseEl.classList.remove('defult');
                mouseEl.classList.remove('cirle');
            }else {
                mouseEl.classList.add('defult');
                mouseEl.classList.remove('cirle');
                mouseEl.classList.remove('point');
            }
        }

        // run to func
        chekedmouseType(this.options.mouse);

    };

    this.pointer = function () {

        // mouse pointer
        let html = document.querySelector('html');

        if (this.options.mousePointer == false) {
            html.style.cursor = 'none';
        }else {
            html.style.cursor = 'default';
        }

    };

    this.color = function () {

        // mouse color daynamic
        let root = document.querySelector(':root');
        let par = this.options.color;

        // creat func
        function changeColor(parametar) {
            root.style.setProperty('--bg' , parametar);
        }
        // run func
        changeColor(par);

    };

    this.mouseElHover = function () {
        let mouseEl = document.querySelector('.mouse');

        // mouse element hover
        let element = document.querySelectorAll(this.options.el);
        let par = this.options.mouseHover;
        let par2 = this.options.el_hover;

        mouseHover(par, par2);

        function mouseHover(par , par2) {
            element.forEach((el) => {

                function mouseHoverCheked(p) {
                    if (p == true) {
                        par2 = true;

                        el.addEventListener('mousemove' , function (e) {
                            if (e.target == el) {
                                mouseEl.classList.add('mouse-hover');
                            }
                        });
            
                        el.addEventListener('mouseover' , function (e) {

                            if (par == 'border') {
                                e.target.classList.add('mouse-border');
                                mouseEl.remove();
                            }else if (par == 'background') {
                                e.target.classList.add('mouse-bg');
                                mouseEl.remove();
                            }

                        });

                        el.addEventListener('mouseout' , function (e) {
                            document.body.appendChild(mouseEl);
                            mouseEl.classList.remove('mouse-hover');
            
                            // remove all style for elment target
                            e.target.style = 'none';
            
                            // remove class
                            e.target.classList.remove('mouse-border');
                            e.target.classList.remove('mouse-bg');
                        });

                    }
                    if (p == false) {
                        par2 = false;

                        el.addEventListener('mousemove' , function (e) {
                            if (e.target == el) {
                                mouseEl.classList.remove('mouse-hover');
                            }
                        });
                    }
                }
                mouseHoverCheked(par2);
            });
        }

    };

    this.mouseClicked = function () {

        // mouse clicked 
        let spnClicked = document.createElement('span');
        spnClicked.className = 'mouse-clicked';

        function clickedMouse (bol) {

            if (bol == true) {
                document.body.appendChild(spnClicked);

                spnClicked.style.display = 'none';

                // clicked event
                document.addEventListener('click' , clicked);

                // clicked func
                function clicked (e) {
                    spnClicked.style.display = 'block';

                    spnClicked.style.top = `${e.pageY}px`;
                    spnClicked.style.left = `${e.pageX}px`;

                    spnClicked.addEventListener('animationend' , function () {
                        spnClicked.style.display = 'none';
                    });
                }
            }
            if (bol == false){
                spnClicked.remove();
                spnClicked.style.display = 'none';
            }
        }

        if (this.options.mouse_clicked == true)  {
            clickedMouse(true);
        }
        if (this.options.mouse_clicked == false) {
            clickedMouse(false);
        }

    };

    this.mouseFilterColor = function () {

        let mouseEl = document.querySelector('.mouse');

        // curuser changed color daynamic
        this.options.clrChanged;
        function colorChangeDaynamic(bol) {

            let star = 0;
            let intervalID;
            
            if (bol == true) {
                intervalID = setInterval(myCallbackStar, 50 , true);
            }
            if (bol == false) {
                clearInterval(intervalID);
            }

            function myCallbackStar(par){

                if (par == false) {
                    clearInterval(intervalID);
                    star = 0;
                    mouseEl.style.filter = `none`;
                }

                if (par == true) {
                    star++;
                    if (star >= 360) {
                        star = 0;
                    }else {
                        mouseEl.style.filter = `hue-rotate(${star}deg)`;
                    }
                }
            }
        
        }
    
        if (this.options.clrChanged == true) {
            colorChangeDaynamic(true);
        }
        if (this.options.clrChanged == false) {
            colorChangeDaynamic(false);
        }

    };
}

exports.Mouse = Mouse;
