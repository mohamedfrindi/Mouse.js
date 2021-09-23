function Mouse (parametars) {

    let par_type = document.querySelector('.par-type');
    let par_color = document.querySelector('.par-color');
    let par_el = document.querySelector('.par-el');
    let par_hover = document.querySelector('.par-hover');
    let par_pointer = document.querySelector('.par-pointer');
    let par_el_hover = document.querySelector('.par-el-hover');
    let par_clicked = document.querySelector('.par-clicked');


    this.defult = {
        mouse : 'cirle',
        color: '#f5cd75',
        mouseHover : false,
        mousePointer: false,
        el: 'a , button',
        el_hover: true,
        mouse_clicked: true,
        clrChanged : false,
    }
    this.options = Object.assign(this.defult , parametars)

    // methods --------
    this.mouse = function () {
        
        // creat span mouse
        let creatMouse = document.createElement('span')
        creatMouse.className = 'mouse'
        document.body.appendChild(creatMouse)

        // change mouse position event
        document.addEventListener('mousemove' , mouseMove)
        document.addEventListener('mouseout' , mouseHide)

        creatMouse.style.display = 'none'

        // change mouse position function
        function mouseMove(e) {
            // document.body.appendChild(creatMouse)
            creatMouse.style.display = 'flex'

            creatMouse.style.left = `${e.pageX}px`
            creatMouse.style.top = `${e.pageY}px`
        }
        function mouseHide () {
            creatMouse.style.display = 'none'
        }
        
        // change mouse type
        function chekedmouseType(par) {
            if (par == 'defult') {
                creatMouse.classList.add('defult')
                creatMouse.classList.remove('cirle')
                creatMouse.classList.remove('point')
            }else if (par == 'cirle') {
                creatMouse.classList.add('cirle')
                creatMouse.classList.remove('defult')
                creatMouse.classList.remove('point')
            }else if (par == 'point') {
                creatMouse.classList.add('point')
                creatMouse.classList.remove('defult')
                creatMouse.classList.remove('cirle')
            }else {
                creatMouse.classList.add('defult')
                creatMouse.classList.remove('cirle')
                creatMouse.classList.remove('point')
            }
        }
        chekedmouseType(this.options.mouse);


        // mouse type template changed xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        let mouse_type = document.querySelectorAll('#mouse-type option');
        document.addEventListener('change' , function () {
            mouse_type.forEach((type) => {
                if (type.selected == true) {
                    if (type.value == 'defult') {
                        par_type.innerHTML = `'defult'`
                        creatMouse.classList.add('defult')
                        creatMouse.classList.remove('cirle')
                        creatMouse.classList.remove('point')
                    }
                    if (type.value == 'cirle') {
                        par_type.innerHTML = `'cirle'`
                        creatMouse.classList.add('cirle')
                        creatMouse.classList.remove('defult')
                        creatMouse.classList.remove('point')
                    }
                    if (type.value == 'point') {
                        par_type.innerHTML = `'point'`
                        creatMouse.classList.add('point')
                        creatMouse.classList.remove('defult')
                        creatMouse.classList.remove('cirle')
                    }
                }
            })
        })


        // mouse pointer
        let html = document.querySelector('html');

        if (this.options.mousePointer == false) {
            html.style.cursor = 'none'
        }else{
            html.style.cursor = 'default'
        }

        // mouse pointer template xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        let mouse_pointer_true = document.querySelector('#mouse-pointer-true');
        let mouse_pointer_false = document.querySelector('#mouse-pointer-false');
        document.addEventListener('change' , function () {
            if (mouse_pointer_true.checked == true) {
                par_pointer.innerHTML = `true`
                html.style.cursor = 'default'
            }
            if (mouse_pointer_false.checked == true) {
                par_pointer.innerHTML = `false`
                html.style.cursor = 'none'
            }
        })


        // element mouse hover xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        let mouse_el = document.querySelector('#mouse-el');
        mouse_el.addEventListener('input' , function (e) {
            par_el.innerHTML = `'${e.target.value}'`
        })


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


                        // mouse hover template xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        el.addEventListener('mouseover' , function (e) {
                            let mouse_hover = document.querySelectorAll('#mouse-hover option');
                            mouse_hover.forEach((type) => {
                                if (type.selected == true) {
                                    if (type.value == 'border') {
                                        e.target.classList.remove('mouse-bg')
                                        e.target.classList.add('mouse-border')
                                        creatMouse.remove()

                                        par_hover.innerHTML = `'border'`
                                    }
                                    if (type.value == 'background') {
                                        e.target.classList.remove('mouse-border')
                                        e.target.classList.add('mouse-bg')
                                        creatMouse.remove()

                                        par_hover.innerHTML = `'background'`
                                    }
                                    if (type.value == 'false') {
                                        e.target.classList.remove('mouse-border')
                                        e.target.classList.remove('mouse-bg')

                                        par_hover.innerHTML = `false`
                                    }
                                }
                            })
                        })

                        let mouse_hover2 = document.querySelectorAll('#mouse-hover option');
                        document.addEventListener('input' , function () {
                            mouse_hover2.forEach((option) => {
                                if (option.selected == true) {
                                    if (option.value == 'border') {
                                        par_hover.innerHTML = `'border'`
                                    }
                                    if (option.value == 'background') {
                                        par_hover.innerHTML = `'background'`
                                    }
                                    if (option.value == 'false') {
                                        par_hover.innerHTML = `false`
                                    }
                                }
                            })
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


                // mouse el hover template xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                let mouse_el_hover_true = document.querySelector('#mouse-el-hover-true');
                let mouse_el_hover_false = document.querySelector('#mouse-el-hover-false');
                document.addEventListener('change' , function () {
                    if (mouse_el_hover_true.checked == true) {
                        par_el_hover.innerHTML = `true`
                        mouseHoverCheked(true)
                    }
                    if (mouse_el_hover_false.checked == true) {
                        par_el_hover.innerHTML = `false`
                        mouseHoverCheked(false)
                    }
                })
            })
        }




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

        // mouse cliked template xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        let mouse_clicked_true = document.querySelector('#mouse-clicked-true');
        let mouse_clicked_false = document.querySelector('#mouse-clicked-false');
        document.addEventListener('change' , function () {
            if (mouse_clicked_true.checked == true) {
                par_clicked.innerHTML = `true`
                clickedMouse(true)
            }
            if (mouse_clicked_false.checked == true) {
                par_clicked.innerHTML = `false`
                clickedMouse(false)
            }
        })



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




        // set functions
        this.color()
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



        // // change mouse color  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        let mouse_color_clr = document.getElementById('mouse-color-clr');
        let mouse_color_txt = document.getElementById('mouse-color-txt');

        mouse_color_txt.value = par
        mouse_color_clr.value = par

        mouse_color_clr.addEventListener('input' , changeColorTemplate)
        mouse_color_txt.addEventListener('input' , changeColorTemplate)

        function changeColorTemplate(e) {
            par_color.innerHTML = `'${e.target.value}'`
            mouse_color_txt.value = e.target.value
            mouse_color_clr.value = e.target.value
            par = e.target.value

            changeColor(par)
        }


    }

}