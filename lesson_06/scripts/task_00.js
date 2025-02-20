"use strict"

// Задача 00. 0. Вивести на екран
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I

/* Позначення
    firstLetter
*/

// Введення необхідних данних
const firstLetter = 'A'.charCodeAt(0)

// Обчислення результатів
document.write(`<table>`)
for (let row = 0; row < 10; row++) {
    document.write(`<tr>`)
        for( let col=0; col<10; col++) {
            document.write(`<td>${String.fromCharCode(firstLetter + row + col)}</td>`)
        }

    document.write(`</tr>`)
}
document.write(`</table>`)