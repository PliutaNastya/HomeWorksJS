"use strict"

// Задача 03. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

if (confirm('Почати тестування?')) {

	const createArray = elementsNumbers => new Array(elementsNumbers)

	const fillFirstElements = (arr, value, startPosition, endPosition) => arr.fill(value, startPosition, endPosition)

	const fillLastElements = (arr, value, startPosition) => arr.fill(value, startPosition)

	const getFinalArray = (arr) => {
		fillFirstElements(arr, 1, 0, 5)
		fillLastElements(arr, 7, 5)

		return arr
	}

	const elementsNumbers = parseInt(prompt('Введіть довільну кількість елементів', '8'))

	const array = createArray(elementsNumbers)
	const finalArray = getFinalArray(array)

	document.write(`
		<p>Масив, у якого перші 5 елементів — 1, решта — 7 - <span>${finalArray}</span></p>
		`)
}