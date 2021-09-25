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
    }
    this.options = Object.assign(this.default , parametars)

    // methods --------
    this.mouse = function () {
        
        // creat span mouse
        let creatMouse = document.createElement('span')
        creatMouse.classList.add('mouse')
        document.body.appendChild(creatMouse)
        
        // change mouse position event
        document.addEventListener('mousemove' , mouseMove)
        document.addEventListener('mouseout' , mouseHide)

        creatMouse.style.display = 'none'

        // change mouse position function
        function mouseMove(e) {
            creatMouse.style.display = 'flex'

            creatMouse.style.left = `${e.pageX}px`
            creatMouse.style.top = `${e.pageY}px`
        }
        function mouseHide () {
            creatMouse.style.display = 'none'
        }



        // set functions
        this.mouseType()
        this.pointer()
        this.color()
        this.mouseElHover()
        this.mouseClicked()
        this.mouseFilterColor()
    }

    this.mouseType = function () {
        let mouseEl = document.querySelector('.mouse');

        // mouse type 
        function chekedmouseType(par) {
            if (par == 'defult') {
                mouseEl.classList.add('defult')
                mouseEl.classList.remove('cirle')
                mouseEl.classList.remove('point')
            }else if (par == 'cirle') {
                mouseEl.classList.add('cirle')
                mouseEl.classList.remove('defult')
                mouseEl.classList.remove('point')
            }else if (par == 'point') {
                mouseEl.classList.add('point')
                mouseEl.classList.remove('defult')
                mouseEl.classList.remove('cirle')
            }else {
                mouseEl.classList.add('defult')
                mouseEl.classList.remove('cirle')
                mouseEl.classList.remove('point')
            }
        }

        // run to func
        chekedmouseType(this.options.mouse);

    }

    this.pointer = function () {

        // mouse pointer
        let html = document.querySelector('html');

        if (this.options.mousePointer == false) {
            html.style.cursor = 'none'
        }else{
            html.style.cursor = 'default'
        }

    }

    this.color = function () {

        // mouse color daynamic
        let root = document.querySelector(':root')
        let par = this.options.color;

        // creat func
        function changeColor(parametar) {
            root.style.setProperty('--bg' , parametar)
        }
        // run func
        changeColor(par)

    }

    this.mouseElHover = function () {
        let mouseEl = document.querySelector('.mouse');
        creatMouse = mouseEl

        // mouse element hover
        let element = document.querySelectorAll(this.options.el);
        let par = this.options.mouseHover;
        let par2 = this.options.el_hover;

        mouseHover(par, par2)

        function mouseHover(par , par2) {
            element.forEach((el) => {

                function mouseHoverCheked(p) {
                    if (p == true) {
                        par2 = true

                        el.addEventListener('mousemove' , function (e) {
                            if (e.target == el) {
                                creatMouse.classList.add('mouse-hover')
                            }
                        })
            
                        el.addEventListener('mouseover' , function (e) {

                            if (par == 'border') {
                                e.target.classList.add('mouse-border')
                                creatMouse.remove()
                            }else if (par == 'background') {
                                e.target.classList.add('mouse-bg')
                                creatMouse.remove()
                            }

                        })

                        el.addEventListener('mouseout' , function (e) {
                            document.body.appendChild(creatMouse)
                            creatMouse.classList.remove('mouse-hover')
            
                            // remove all style for elment target
                            e.target.style = 'none'
            
                            // remove class
                            e.target.classList.remove('mouse-border')
                            e.target.classList.remove('mouse-bg')
                        })

                    }
                    if (p == false) {
                        par2 = false

                        el.addEventListener('mousemove' , function (e) {
                            if (e.target == el) {
                                creatMouse.classList.remove('mouse-hover')
                            }
                        })
                    }
                }
                mouseHoverCheked(par2)
            })
        }

    }

    this.mouseClicked = function () {

        // mouse clicked 
        let spnClicked = document.createElement('span')
        spnClicked.className = 'mouse-clicked'

        function clickedMouse (bol) {

            if (bol == true) {
                document.body.appendChild(spnClicked)

                spnClicked.style.display = 'none'

                // clicked event
                document.addEventListener('click' , clicked)

                // clicked func
                function clicked (e) {
                    spnClicked.style.display = 'block'

                    spnClicked.style.top = `${e.pageY}px`
                    spnClicked.style.left = `${e.pageX}px`

                    spnClicked.addEventListener('animationend' , function () {
                        spnClicked.style.display = 'none'
                    })
                }
            }
            if (bol == false){
                spnClicked.remove()
                spnClicked.style.display = 'none'
            }
        }

        if (this.options.mouse_clicked == true)  {
            clickedMouse(true)
        }
        if (this.options.mouse_clicked == false) {
            clickedMouse(false)
        }

    }

    this.mouseFilterColor = function () {

        let mouseEl = document.querySelector('.mouse');
        creatMouse = mouseEl

        // curuser changed color daynamic
        let clr = this.options.clrChanged;
        function colorChangeDaynamic(bol) {

            let star = 0;
            let intervalID;
            
            if (bol == true) {
                intervalID = setInterval(myCallbackStar, 50 , true);
            }
            if (bol == false) {
                clearInterval(intervalID)
            }

            function myCallbackStar(par){

                if (par == false) {
                    clearInterval(intervalID)
                    star = 0;
                    creatMouse.style.filter = `none`
                }

                if (par == true) {
                    star++;
                    if (star >= 360) {
                        star = 0
                    }else{
                        creatMouse.style.filter = `hue-rotate(${star}deg)`
                    }
                }
            }
        
        }
    
        if (this.options.clrChanged == true) {
            colorChangeDaynamic(true)
        }
        if (this.options.clrChanged == false) {
            colorChangeDaynamic(false)
        }

    }

}