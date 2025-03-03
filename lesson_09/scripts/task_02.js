"use strict"

// Задача 02. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

if (confirm('Почати тестування?')) {

	const createArray = elementsNumbers => {

		if (isNaN(elementsNumbers) || elementsNumbers < 0) throw new Error("Введене число некоректне");

		let arr = new Array(elementsNumbers)

		return arr
	}
	const halfArr = Math.floor(arr.length / 2)
	const fillFirstHalf = (arr, value) => arr.fill(value, 0, halfArr)
	const fillSecondHalf = (arr, value) => arr.fill(value, halfArr)

	const getFinalArray = (arr) => {
		fillFirstHalf(arr, 1)
		fillSecondHalf(arr, 7)

		return arr
	}

	const elementsNumbers = parseInt(prompt('Введіть довільну кількість елементів', '8'))

	const array = createArray(elementsNumbers)
	const finalArray = getFinalArray(array)

	document.write(`
		<p>Масив, у якого перша половина заповнена 1-цями, а друга - 7-ками- <span>${finalArray}</span></p>
		`)
}