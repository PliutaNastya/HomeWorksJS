"use strict"

// Задача 04. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// починаються на букву «А»;
// перша і остання літери співпадають;
// складаються з більше ніж 5 символів;

if (confirm('Почати тестування?')) {

	// Функція для визначення кількості номерів, які починаються на букву «А»
	const getNumbersWithFirstLetterA = (arr) => {
		let sum = 0

		for (let i = 0; i < arr.length; i++) {
			if (arr[i][0] === 'A') sum++
		}

		return sum
	}

	// Функція для визначення кількості номерів, у яких перша і остання літери співпадають
	const getNumbersWithSimilarFirstAndLastLetter = (arr) => {
		let sum = 0

		for (let i = 0; i < arr.length; i++) {
			if (arr[i][0] === arr[i][arr[i].length - 1]) sum++
		}

		return sum
	}

	// Функція для визначення кількості номерів, які складаються з більше ніж 5 символів
	const getNumbersWithMoreThan5Symbols = (arr) => {
		let sum = 0

		for (let i = 0; i < arr.length; i++) {
			if (arr[i].length > 5) sum++
		}

		return sum
	}

	const arr = ['AHT54K', 'AHT547654K', 'AHT54KA', 'JHT5654334J', 'OAHT54KSAFGS']

	document.write(`
		<p>Масив номерів - <span>${arr}</span></p>
		<p>Кількість номерв, які починаються на букву «А» - <span>${getNumbersWithFirstLetterA(arr)}</span></p>
		<p>Кількість номерв, у яких перша і остання літери співпадають - <span>${getNumbersWithSimilarFirstAndLastLetter(arr)}</span></p>
		<p>Кількість номерв, які складаються з більше ніж 5 символів - <span>${getNumbersWithMoreThan5Symbols(arr)}</span></p>
		`)
}