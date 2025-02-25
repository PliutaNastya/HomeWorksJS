"use strict"

// Задача 06. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]

if (confirm('Почати тестування?')) {

	// Функція для створення масиву з доступними цінами
	const getAvailablePrices = (arrPrices, arrTitles, budget) => {

		const productsPrices = []

		for (let i = 0; i < arrPrices.length; i++) {

			if (arrPrices[i] <= budget) {
				productsPrices.push(arrPrices[i])
			}
		}

		return productsPrices
	}

	// Функція для створення масиву з доступними продуктами
	const getAvailableItems = (arrPrices, arrTitles, budget) => {

		const productsTitles = []

		for (let i = 0; i < arrPrices.length; i++) {

			if (arrPrices[i] <= budget) {
				productsTitles.push(arrTitles[i])
			}
		}

		return productsTitles
	}

	const arrPrices = [1000, 20, 30, 50, 500, 1230, 1500, 100]
	const arrTitles = ['tea', 'bread', 'juice', 'cheese', 'apples', 'cabbage', 'ice-cream', 'chocolate']

	document.write(`
		<p>Масив з повним переліком цін - <span>${arrPrices}</span></p>
		<p>Масив з повним переліком продуктів - <span>${arrTitles}</span></p>
		<p>Масив з доступними для Вас цінами на продукти - <span>${getAvailablePrices(arrPrices, arrTitles, 500)}</span></p>
		<p>Масив з доступними для Вас продуктами - <span>${getAvailableItems(arrPrices, arrTitles, 500)}</span></p>
		`)
}