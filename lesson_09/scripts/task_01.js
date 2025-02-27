"use strict"

// Задача 01. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

if (confirm('Почати тестування?')) {
	
	const createArray = itemsNumber => {
		
		if(isNaN(itemsNumber) || itemsNumber < 0) throw new Error("Введене число некоректне");
		
		let arr = new Array(itemsNumber)
		return arr
	}

	const fillArray = (arr) => {
		return arr.fill(0)
	}

	const itemsNumber = parseInt(prompt('Введіть кількість елементів в масиві', '5'))

	const arr = createArray(itemsNumber)
	const arrWith0 = fillArray(arr)

	document.write(`
		<p>Отриманий масив складається з ${arrWith0.length} елементів, заповнених 0 - <span>${arrWith0}</span></p>
		`)
	
	// ==================АБО=====================================================================================

	const getArrWith0 = itemsNumber => new Array(itemsNumber).fill(0)

	const array = getArrWith0(itemsNumber)

	document.write(`
		<p>Отриманий масив складається з ${array.length} елементів, заповнених 0 - <span>${array}</span></p>
		`)
}