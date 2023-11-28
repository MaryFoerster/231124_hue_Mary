'use strict'

// // for Schleife
// let x = 150;

// for (let i = 0; i <= 15; i++) {
//     let ergebniseins = x - 21;
//     let ergebniszwei = ergebniseins + 2;
    
//     let span = document.createElement('span');
//     span.innerHTML = x + '<br>' + ergebniseins + '<br>';
    
//     document.body.appendChild(span);
    
//     x = ergebniszwei;
// }




// for Schleife
const forSchleife = document.querySelector('.for-schleife');
let a = 150;

for (let i = 0; i < 32; i++) {
    if (i % 3 === 0) {
        forSchleife.innerHTML += `<span style="color:violet;">${a}</span><br>`;
    } else {
        forSchleife.innerHTML += `<span style="color:black;">${a}</span><br>`;
    }

    if (i % 2 === 0) {
        a = a - 21;
    } else {
        a = a + 2;
    }
}

// while Schleife
const whileSchleife = document.querySelector('.while-schleife');
let b = 150;
let l = 0;

while (l < 32) {
    if (l % 3 === 0) {
        whileSchleife.innerHTML += `<span style="color:violet;">${b}</span><br>`;
    } else {
        whileSchleife.innerHTML += `<span style="color:black;">${b}</span><br>`;
    }

    if (l % 2 === 0) {
        b = b - 21;
    } else {
        b = b + 2;
    }
    l++;
}

// do while Schleife
const doWhileSchleife = document.querySelector('.doWhile-schleife');
let c = 150;
let i = 0;

 do {
    if (i % 3 === 0) {
        doWhileSchleife.innerHTML += `<span style="color:violet;">${c}</span><br>`;
    } else {
        doWhileSchleife.innerHTML += `<span style="color:black;">${c}</span><br>`;
    }

    if (i % 2 === 0) {
        c = c - 21;
    } else {
        c = c + 2;
    }
    i++;
}

while (i < 32);

