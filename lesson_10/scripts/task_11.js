"use strict"

// Задача 11. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000). Знайти індекс першої ціни, що більше за 1000

if (confirm('Почати тестування?')) {
	const generateArr = (arrLength, min, max) => {
		let arr = []

		for (let i = 0; i < arrLength; i++) {
			let arrElement = Math.floor(Math.random() * (max - min + 1)) + min

			arr.push(arrElement)
		}

		return arr
	}

	const getFirstIndexPriceMore1000 = (arr, value) => {
		return arr.findIndex(el => el > value)
	}

	const arr = generateArr(15, 1, 10000)
	const firstIndexPriceMore1000 = getFirstIndexPriceMore1000(arr, 1000)

	document.write(`
		<p>Згенерований масив - <span>${arr}</span></p>
		<p>Індекс першої ціни, що більша за 1000 - <span>${firstIndexPriceMore1000 !== -1 ? firstIndexPriceMore1000 : 'Нема такої'}</span></p>
		`)
}