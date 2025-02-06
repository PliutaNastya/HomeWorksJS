"use strict"

// Задача 09. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача

if (confirm('Почати тестування?')) {
	const userNumber = parseInt(prompt('Загадайте будь-яке число починаючи з 1', '15'))

	document.write(`<p>Ви загадали число: ${userNumber}</p>`)

	let attempt

	do {
		attempt = Math.floor(Math.random() * userNumber) + 1

		confirm(`Ви це число загадали? ${attempt} `)

		if (attempt === userNumber) break

	} while (attempt !== userNumber)
}