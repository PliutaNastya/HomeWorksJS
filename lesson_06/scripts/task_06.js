"use strict"

// Задача 06. Побудувати спіраль

for (let i = 0; i <30; i++) {
    document.write(`<div style="width: ${5*i}px; height: ${5*i}px; background-color: hsl(${10*i}, 50%, 50%); position: absolute;top: calc(50% - ${10*i *Math.sin(30*i*Math.PI/180)}px); left: calc(50% - ${10*i *Math.cos(30*i*Math.PI/180)}px); transform: translate(-50%, -50%); border-radius: 50%;"></div>`)
}

// for (let i = 80; i >0; i--) {
//     document.write(`<div style="width: ${5*i}px; height: ${5*i}px; background-color: hsl(${10*i}, 50%, 50%); position: absolute;top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>`)
// }