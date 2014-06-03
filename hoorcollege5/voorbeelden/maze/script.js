/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console,confirm,prompt,alert,document,window*/

window.onload = function () {
    'use strict';

    var handler = function () {
        document.querySelector('p').innerHTML += '╱╲'[Math.round(Math.random()*1)];
    };

    var i = setInterval(handler, 10);
};