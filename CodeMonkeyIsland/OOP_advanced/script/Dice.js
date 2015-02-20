/* Copyleft 2014*/
/* L. Benvenuti*/
/*globals console, confirm, prompt, document, window*/

/* constructor */
function Dice() {
    this.value = Math.floor(6 * Math.random()) + 1;  //ogen
    this.img = ""
};

Dice.prototype = {

    roll: function() {
        this.value = Math.floor(6 * Math.random()) + 1;
        this.setImg();
     },

    getValue: function() {

        return this.value;
    },

    getImg: function() {

        return this.img;
    },

    setImg: function() {
        switch (this.value) {
        case 1:
            this.img = "one.png";
            break;
        case 2:
            this.img = "two.png";
            break;
        case 3:
            this.img = "three.png";
            break;
        case 4:
            this.img = "four.png";
            break;
        case 5:
            this.img = "five.png";
            break;
        case 6:
            this.img = "six.png";
            break;
        }
    },

    isEven: function() {

        return (this.value % 2 === 0);
    }
}
