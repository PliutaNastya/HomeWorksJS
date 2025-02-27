"use strict"

// Задача 08. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

if (confirm('Почати тестування?')) {
	const createArr = () => {
		let arr = []

		let arrayElement = prompt('Введіть будь-який номер авто, ввід буде продовжуватись поки Ви не натиснете "Cancel"', 'AА456О')

		while (arrayElement !== null) {
			arr.push(arrayElement)
			arrayElement = prompt('Введіть будь-який номер авто, ввід буде продовжуватись поки Ви не натиснете "Cancel"', 'AА456О')
		}

		return arr
	}

	const getNewArrOfAutoNumbersBeginningWith = (arr, letter) => {
		let newArr = []
		arr.map(el => el[0].toUpperCase() === letter ? newArr.push(el) : null)

		return newArr
	}

	const arr = createArr()
	const newArrOfAutoNumbersBeginningWithA = getNewArrOfAutoNumbersBeginningWith(arr, 'A')

	document.write(`
		<p>Початковий масив з номерами автомобілів - <span>${arr}</span></p>
		<p>Новий масив з номерами автомобілів, що починаються на букву "А" - <span>${newArrOfAutoNumbersBeginningWithA}</span></p>
		`)
}