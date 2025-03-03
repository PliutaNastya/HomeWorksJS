"use strict"

// Задача 13. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000). Знайти індекс останньої ціни, що більше за 1000

if (confirm('Почати тестування?')) {
	const generateArr = (arrLength, min, max) => {
		let arr = []

		for (let i = 0; i < arrLength; i++) {
			let arrElement = Math.floor(Math.random() * (max - min + 1)) + min

			arr.push(arrElement)
		}

		return arr
	}

	const getLastIndexPriceMore1000 = (arr, value) => {
		return arr.findLastIndex(el => el > value)
	}

	const arr = generateArr(15, 1, 10000)
	const lastIndexPriceMore1000 = getLastIndexPriceMore1000(arr, 1000)

	document.write(`
		<p>Згенерований масив - <span>${arr}</span></p>
		<p>Індекс останньої ціни, що більша за 1000 - <span>${lastIndexPriceMore1000 !== -1 ? lastIndexPriceMore1000 : 'Нема такої'}</span></p>
		`)
}