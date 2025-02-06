"use strict"

// Задача 06. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
let count = 0

if (confirm('Почати тестування?')) {

	for (let table = 0; table < 3; table++) {
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

}