"use strict"

// Задача 07. Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

if (confirm('Почати тестування?')) {
	const createArr = () => {
		let arr = []

		let arrayElement = parseInt(prompt('Введіть будь-яку ціну товарів, ввід буде продовжуватись, поки Ви не натиснете "Cancel"', '1000'))

		while (!isNaN(arrayElement)) {
			arr.push(arrayElement)
			arrayElement = parseInt(prompt('Введіть будь-яке число, ввід буде продовжуватись, поки Ви не натиснете "Cancel"', '1000'))
		}

		return arr
	}

	const getArrayWithDiscount = (arr, value, discount) => {
		
		arr.forEach((el, index, arr) => el > value ? arr[index] = el - (el * discount) : el)

		return arr
	}

	const arr = createArr()
	const copyArr = [...arr]
	const modifyArr = getArrayWithDiscount(copyArr, 1000, 0.3)

	document.write(`
		<p>Масив з початковими цінами - <span>${arr}</span></p>
		<p>Масив зі зниженими цінами - <span>${modifyArr}</span></p>
		`)
}
