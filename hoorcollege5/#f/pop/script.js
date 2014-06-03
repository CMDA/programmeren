/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console,confirm,prompt,alert,document,window*/

window.onload = function () {
    'use strict';

    var pop = new Audio('pop.wav');

    var balloon = document.createElement('div');
    document.body.appendChild(balloon);

    // mouseover, mouseout, click, dblclick, mousedown, mouseup, mousemove
    //
    balloon.onclick = function (event) {
        document.body.style.background = 'url(pop.png) no-repeat';
        document.body.style.backgroundSize = 'cover';

        document.querySelector('div').style.display = 'none';

        pop.play();
    };

};