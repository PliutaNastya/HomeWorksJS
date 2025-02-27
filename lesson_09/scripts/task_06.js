"use strict"

// Задача 06. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

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

	const multiplyElements = (arr, value) => {

		arr.forEach((el, index, arr) => el > arr[0] ? arr[index] = el * value : el)

		return arr
	}

	const arr = createArr()
	const copyArr = [...arr]
	const modifyArr = multiplyElements(copyArr, 2)

	document.write(`
		<p>Початковий масив - <span>${arr}</span></p>
		<p>Масив з елементами, які більші за перший елемент, помножені на 2 - <span>${modifyArr}</span></p>
		`)
}