"use strict"

// Задача 08. Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача

if (confirm('Почати тестування?')) {
	const userNumber = parseInt(prompt('Загадайте будь-яке число починаючи з 1', '15'))

	document.write(`<p>Ви загадали число: ${userNumber}</p>`)

	for (let i = 1; i <= 3; i++) {
		const attempt = Math.floor(Math.random() * userNumber) + 1

		document.write(`<p>${i} загадане число комп'ютером: ${attempt}</p>`)

		if (userNumber === attempt) {
			alert(`Комп'ютер вгадав загадане вами число за ${i} спробу.`)
			break
		} else
			alert(`Комп'ютер не вгадав загадане вами число за ${i} спробу.`)
	}
}