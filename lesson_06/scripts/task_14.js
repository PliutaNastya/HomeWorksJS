"use strict"

// Задача 14. Написати програму виведення на екран кожного символу латинського алфавіту та поруч з кожним з них символу, що передує йому та що слідує за ним.

const firstLetter = 'a'.charCodeAt(0)
const lastLetter = 'z'.charCodeAt(0)

let string = ``
for (let i=firstLetter; i<=lastLetter; i++) {

    i > firstLetter ? string +=  String.fromCharCode(i - 1) + ' ' : ' '
    string += String.fromCharCode(i) + ' '
    i < lastLetter ? string += String.fromCharCode(i + 1) : ' '

    string += `<br>`
}
document.write(string)