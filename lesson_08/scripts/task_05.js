"use strict"

// Задача 05. Дано послідовність оцінок учня. Підрахувати кількість:
// двійок
// кількість хороших оцінок(добре, відмінно);
// кількість оцінок, які нижче середнього.

if (confirm('Почати тестування?')) {

	// Функція для створення масиву
	const getArray = () => {
		const arr = []
		let mark = parseInt(prompt('Введіть оцінки учня від 1 до 12', '12'))
		while (!isNaN(mark)) {
			arr.push(mark)
			mark = parseInt(prompt('Введіть оцінки учня від 1 до 12', '12'))
		} 
		return arr
	}

	// Функція для підрахунку кількості двійок
	const getNumbersOfTwo = (arr) => {
		let count = 0

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 2) count++
		}
		return count
	}

	// Функція для підрахунку кількості хороших оцінок(добре, відмінно)
	const getNumbersOfGoodMarks = (arr) => {
		let count = 0

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] >= 10 && arr[i] <= 12) count++
		}
		return count
	}

	// Функція для підрахунку кількості оцінок, які нижче середнього
	const getNumbersOfMarksUnderAverage = (arr) => {
		let count = 0
		let sum = 0

		for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}

		const average = sum / arr.length

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < average) count++
		}
		return count
	}

	const arr = getArray()

	document.write(`
		<p>Кількість двійок - ${getNumbersOfTwo(arr)}</p>
		<p>Кількість хороших оцінок(добре, відмінно) - ${getNumbersOfGoodMarks(arr)}</p>
		<p>Кількість оцінок, які нижче середнього - ${getNumbersOfMarksUnderAverage(arr)}</p>
		`)
}