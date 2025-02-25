"use strict"

// Задача 01. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

if (confirm('Почати тестування?')) {

	// Функція для створення масиву
	const getArray = (subjectsQuantity) => {

		const arr = []

		for (let i = 1; i <= subjectsQuantity; i++) {
			const score = parseInt(prompt(`Введіть оцінку за ${i} предмет (від 1 до 5)`, '5'))
			arr.push(score)
		}

		return arr
	}

	// Функція для знаходження середнього балу
	const getAverageScore = arr => {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum / arr.length
	}

	// Функція для визначення до якої категорії учень відноситься
	const getPupilCategory = (arr) => {
		let isVeryBad = false
		let isBad = false
		let isGood = true
		let isExcellent = true

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 1 || arr[i] === 2) isVeryBad = true
			if (arr[i] === 3) isBad = true
			if (arr[i] < 4) isGood = false
			if (arr[i] < 5) isExcellent = false
		}

		if (isVeryBad) return 'Двійочник'
		if (isBad) return 'Трійочник'
		if (isExcellent) return 'Відмінник'
		if (isGood) return 'Хорошист'

	}

	const subjectsQuantity = parseInt(prompt('Введіть кількість предметів', '5'))
	const subjectsScoresList = getArray(subjectsQuantity)
	
	document.write(`
		<p>Середній бал учня складає <span>${getAverageScore(subjectsScoresList).toFixed(2)}</span></p>
		<p>Даний учень відноситься до категорії - <span>"${getPupilCategory(subjectsScoresList)}"</span></p>
		`)
}