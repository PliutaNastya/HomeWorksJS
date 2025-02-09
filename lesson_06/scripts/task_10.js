"use strict"

// Задача 10. Вивести на екран
//                         1 1
//                         2 1 2
//                         3 1 2 3
//                         4 1 2 3 4
//                         …
//                         i 1 2 3 ..i
//                         23 1 2 3 .. 22 23
let string = ''
document.write(`<div style="display: grid">`)
for(let i=1; i<=23; i++) {
    string += `${i}` + ` `
    for(let j=1; j<=i; j++) {
        string += `${j}`
    }
    document.write(`<span>${string}</span>`)
    string = ''
}
document.write(`</div>`)