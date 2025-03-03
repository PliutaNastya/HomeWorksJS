"use strict"

// Задача 09. Дано масив імен. Сформувати масив з перших літер цих імен.

if (confirm('Почати тестування?')) {
	const createArr = () => {
		let arr = []

		let arrayElement = prompt('Введіть будь-якe ім\'я, ввід буде продовжуватись поки Ви не натиснете "Cancel"', 'Іван')

		while (arrayElement !== null) {
			arr.push(arrayElement)
			arrayElement = prompt('Введіть будь-якe ім\'я, ввід буде продовжуватись поки Ви не натиснете "Cancel"', 'Іван')
		}

		return arr
	}

	const getArrWithFirstLetterOfNames = arr => {

		let newArr = arr.map(el => el[0])

		return newArr
	}

	const arr = createArr()

	const arrWithFirstLetterOfNames = getArrWithFirstLetterOfNames(arr)

	document.write(`
		<p>Початковий масив з іменами - <span>${arr}</span></p>
		<p>Масив з перших літер цих імен - <span>${arrWithFirstLetterOfNames}</span></p>
		`)
}