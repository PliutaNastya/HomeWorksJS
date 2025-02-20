"use strict"

// Задача 07. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

if (confirm('Почати тестування?')) {
	const createTable = (rows, cols, message) => {
		let table = ``
		table += `<table>`
		for (let i = 1; i <= rows; i++) {
			table += `<tr>`

			for (let j = 1; j <= cols; j++) {
				table += `<td>${message}</td>`
			}
			table += `</tr>`
		}
		table += `</table>`
		return table
	}

	const rows = parseInt(prompt('Введіть бажану кількість рядків', '7'))
	const cols = parseInt(prompt('Введіть бажану кількість колонок', '7'))
	const message = prompt('Введіть контент, яким бажаєте заповнити таблицю', 'JS')
	
	document.write(createTable(rows, cols, message))
}