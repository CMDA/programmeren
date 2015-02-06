/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console,confirm,prompt,alert,document,window*/

window.onload = function () {
    'use strict';

    var tieSound = new Audio('tie.wav');
    var lazer = new Audio('lazer.wav');

    var tie = document.createElement('div');
    tie.style.left = '50%';
    tie.style.top = '50%';
    document.body.appendChild(tie);


    // mouseover, mouseout, click, dblclick, mousedown, mouseup, mousemove
    tie.onmouseover = function (event) {
        event.target.style.WebkitAnimation = "spin 1s ease infinite";
        event.target.style.MozAnimation = "spin 1s ease infinite";
        event.target.style.animation = "spin 1s ease infinite";

        tieSound.play();
    };

    tie.onmouseout = function (event) {
        event.target.style.WebkitAnimation = "";
        event.target.style.MozAnimation = "";
        event.target.style.animation = "";

        tieSound.pause();
        tieSound.currentTime = 0;
    };

    // tie.onclick = function (event) {
    //     lazer.pause();
    //     lazer.currentTime = 0;
    //     lazer.play();
    // }
    //
    // De andere manier:
    var clickHandler = function (event) {
        lazer.pause();
        lazer.currentTime = 0;
        lazer.play();
    };

    tie.addEventListener("click", clickHandler);

    // keydown, keyup, keypress
    window.onkeydown = function (event) {
        var tie = document.querySelector('div');
        console.log(event.keyCode);
        switch(event.keyCode){
            case 37: // links
                // if(tie.style.left === '90%') {
                //     tie.style.left = '50%';
                // }else{
                //     tie.style.left = '10%';
                // }
                tie.style.left = tie.style.left === '90%' ? '50%' : '10%';
                break;
            case 38: // boven
                tie.style.top = tie.style.top === '90%' ? '50%' : '10%';
                break;
            case 39: // rechts
                tie.style.left = tie.style.left === '10%' ? '50%' : '90%';
                break;
            case 40: // onder
                tie.style.top = tie.style.top === '10%' ? '50%' : '90%';
                break;
            case 32: // fire!!!
                lazer.pause();
                lazer.currentTime = 0;
                lazer.play();
                break;
        }
    };

    // blur, change, focus, reset, select, submit








};