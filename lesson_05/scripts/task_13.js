"use strict"

// Задача 13. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.

if (confirm('Почати тестування?')) {
	const fieldRows = parseInt(prompt("Введіть кількість рядків поля", "5"))
	const fieldCols = parseInt(prompt("Введіть кількість колонок поля", "5"))

	// Генерація позиції корабля
	const shipRowPosition = Math.floor(Math.random() * fieldRows) + 1
	const shipColPosition = Math.floor(Math.random() * fieldCols) + 1

	const attempts = parseInt(prompt("Введіть кількість спроб за які ви хочете вгадати позицію корабля", "5"))

	document.write(`<table>`)

	for (let row = 1; row <= fieldRows; row++) {
		document.write(`<tr>`)
		for (let col = 1; col <= fieldCols; col++) {
			document.write(`<td ${row === shipRowPosition && col === shipColPosition ? 'style="background-color: red;"' : ''}></td>`)
		}
		document.write(`</tr>`)
	}

	document.write(`</table>`)

	for (let attempt = 0; attempt < attempts; attempt++) {
		const userAttemptRow = parseInt(prompt("Спробуйте вгадати на якому рядку корабель", "5"))
		const userAttemptCol = parseInt(prompt("Спробуйте вгадати в якій колонці корабель", "5"))

		if (userAttemptRow === shipRowPosition && userAttemptCol === shipColPosition) {
			alert('Вітаємо ви знищили корабель') 
			break
		} else alert('Нажаль, вам не вдалось знищити корабель') 
	}
}