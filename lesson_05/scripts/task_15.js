"use strict"

// Задача 15. Користувача поступово вводить показники температури протягом року. Знайти середню температуру.


if (confirm('Почати тестування?')) {
	let sum = 0
	
	for (let i = 1; i <= 12; i++) {
		const userAnswer = parseInt(prompt(`Введіть температуру за ${i} місяць`, '21'))

		sum += userAnswer
	}

	const averageTemperature = (sum / 12).toFixed(2)
	document.write(`<p>Середня температура протягом року склала: ${averageTemperature}&#8451;</p>`)
}