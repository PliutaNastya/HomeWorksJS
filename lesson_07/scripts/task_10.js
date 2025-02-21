"use strict"

// Задача 10. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

if (confirm('Почати тестування?')) {
	const tempNumbers = parseInt(prompt('Вкажіть скільки показів температури плануєте залишити', '5'))

	const getNegativeTempValues = () => {
		let count = 0

		for (let i = 1; i <= tempNumbers; i++) {
			const tempValue = parseInt(prompt(`Вкажіть ${i} показник температури`, '5'))
			if (tempValue < 0) count++
		}
		return count
	}

	document.write(`
		<p>Кількість від’ємних показів температури складає ${getNegativeTempValues()}</p>`)
}