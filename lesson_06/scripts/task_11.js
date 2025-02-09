"use strict"

// Задача 11. Вивести на екран
//                         1 1
//                         2 1234
//                         3 123456789
//                         4 1234…16
//                         5 1 … 25
//                         6 1…36


let string = ''
document.write(`<div style="display: grid">`)
for(let i=1; i<=6; i++) {
    string += `${i}` + ` `
    for(let j=1; j<=i*i; j++) {
        string += `${j} `
    }
    document.write(`<span>${string}</span>`)
    string = ''
}
document.write(`</div>`)