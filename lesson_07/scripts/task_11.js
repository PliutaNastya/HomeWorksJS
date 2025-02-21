"use strict"

// Задача 11. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

if (confirm('Почати тестування?')) {
	const tempNumbers = parseInt(prompt('Вкажіть скільки показів температури плануєте залишити', '5'))

	const getAverageFromPositiveTempValues = () => {
		let sum = 0
		let count = 0

		for (let i = 1; i <= tempNumbers; i++) {
			const tempValue = parseInt(prompt(`Вкажіть ${i} показник температури`, '5'))
			if (tempValue > 0) {
				sum += tempValue
				count++
			}
		}
		const average = sum / count
		return average
	}

	document.write(`
		<p>Середнє значення для додатних показів температури складає ${getAverageFromPositiveTempValues()}</p>`)
}