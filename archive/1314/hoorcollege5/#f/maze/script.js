
// window.onload = function () {
//     var doolhof = "";

//     while(doolhof.length < 20000) {
//         doolhof += '​╱╲'[Math.round(Math.random()*2)];
//     }

//     document.querySelector('p').innerHTML = doolhof;
// };

var i = setInterval(function () {
    document.querySelector('p').innerHTML+= '​╱╲'[Math.round(Math.random()*2)];

    if(document.querySelector('p').clientHeight > window.innerHeight+50){
        clearInterval(i);
    }

},1);