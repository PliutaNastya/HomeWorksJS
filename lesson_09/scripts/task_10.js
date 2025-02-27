"use strict"

// Задача 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

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

	const getArrOfTaxes = (arr, tax) => {
		const newArr = []

		arr.map(el => newArr.push(el * tax))
		
		return newArr
	}

	const arr = createArr()
	const copyArr = [...arr]
	const arrOfTaxes = getArrOfTaxes(copyArr, 0.2)

	document.write(`
		<p>Початковий масив з цінами - <span>${arr}</span></p>
		<p>Масив, що містить величину сплаченого податку - <span>${arrOfTaxes}</span></p>
		`)
}