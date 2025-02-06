"use strict"

// Задача 05. Вивести таблицю з 3 рядків 
let count = 0

if (confirm('Почати тестування?')) {
	document.write(`<table>`)

	for (let row = 0; row < 3; row++) {

		document.write(`<tr>`)

		for (let col = 1; col <= 3; col++) {
			document.write(`<td>${++count}</td>`)
		}
		
		document.write(`</tr>`)
	}

	document.write(`</table>`)

}