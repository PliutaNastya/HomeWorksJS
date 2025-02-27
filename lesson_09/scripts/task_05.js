"use strict"

// Задача 05. Тут використати цикл for..of
// Дано масив елементів. Знайти добуток додатних елементів

if (confirm('Почати тестування?')) {
	const createArr = () => {
		let arr = []

		let arrayElement = parseInt(prompt('Введіть будь-яке число, ввід буде продовжуватись, поки Ви не натиснете "Cancel"', '3'))

		while (!isNaN(arrayElement)) {
			arr.push(arrayElement)
			arrayElement = parseInt(prompt('Введіть будь-яке число, ввід буде продовжуватись, поки Ви не натиснете "Cancel"', '3'))
		}

		return arr
	}

	const getProductOfPositiveElements = arr => {
		let product = 1

		for (let el of arr) {
			if (el > 0) product *= el
		}

		return product
	}

	const arr = createArr()
	const productOfPositiveElements = getProductOfPositiveElements(arr)

	document.write(`
		<p>Повний масив - <span>${arr}</span></p>
		<p>Добуток додатних елементів складає <span>${productOfPositiveElements}</span></p>
		`)
}