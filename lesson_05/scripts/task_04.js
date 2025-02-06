"use strict"

// Задача 04. Вивести таблицю з 3 рядків і 7 стовпців
// if (confirm('Почати тестування?')) {
// 	document.write(`<table><tr>`)

// 	for (let i = 1; i <= 7; i++) {
// 		document.write(`<td>${i}</td>`)
// 	}

// 	document.write(`<tr>`)

// 	for (let i = 1; i <= 7; i++) {
// 		document.write(`<td>${i}</td>`)
// 	}

// 	document.write(`</tr>`)

// 	document.write(`<tr>`)

// 	for (let i = 1; i <= 7; i++) {
// 		document.write(`<td>${i}</td>`)
// 	}

// 	document.write(`</tr></table>`)
// }

if (confirm('Почати тестування?')) {
	document.write(`<table>`)

	for (let row = 0; row < 3; row++) {

		document.write(`<tr>`)

		for (let col = 1; col < 7; col++) {
			document.write(`<td>${col}</td>`)
		}
		
		document.write(`</tr>`)
	}

	document.write(`</table>`)

}