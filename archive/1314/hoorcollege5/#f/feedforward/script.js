/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console,confirm,prompt,alert,document,window*/

window.onload = function () {
    'use strict';

    // Test of 'waarde' een emailadres is (reguliere expressies)
    var isEmail = function (waarde) {
        return (/^.+@.+\.\w{2,4}$/.test(waarde));
    };

    var nameField = document.getElementById('naam');
    nameField.onblur = function (event) {
        if(event.target.value === "") {
            event.target.classList.remove('fail');
            event.target.classList.add('fail');
        } else {
            event.target.classList.remove('fail');
            event.target.classList.add('win');
        }
    };

    var mailField = document.getElementById('mailadres');
    mailField.onblur = function (event) {
        if(event.target.value === "" || !isEmail(event.target.value)) {
            event.target.classList.remove('fail');
            event.target.classList.add('fail');
        } else {
            event.target.classList.remove('fail');
            event.target.classList.add('win');
        }
    };
};