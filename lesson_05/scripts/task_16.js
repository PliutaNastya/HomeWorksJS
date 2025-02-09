"use strict"

// Задача 16. Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

if (confirm('Почати тестування?')) {
	const weeksNumbers = parseInt(prompt('Введіть кількість тижнів', '2'))

	let totalProfit = 0

	for (let i = 1; i <= weeksNumbers; i++) {
		
		let weekProfit = 0

		for (let j = 1; j <= 7; j++) {
			const dayProfit = parseInt(prompt(`Введіть прибуток магазину (у грн) за ${j} день ${i} тижня`, '100'))

			weekProfit += dayProfit
		}

		document.write(`<p>Прибуток за ${i} тиждень складає ${weekProfit}</p>`)

		totalProfit += weekProfit
	}
	document.write(`<p>Загальний прибуток за ${weeksNumbers} тижнів складає ${totalProfit}</p>`)
}

