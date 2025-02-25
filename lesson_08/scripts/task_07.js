"use strict"

// Задача 07. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці(з парними номерами);
// за місяці, які є початковими у сезоні(весна, літо, осінь, зима).

if (confirm('Почати тестування?')) {
	
	// Функція для знаходження сумарної кількості грошей за весь рік
	const getTotalSumPerYear = (arr) => {
		let sum = 0

		for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}

		return sum
	}

	// Функція для знаходження сумарної кількості грошей у першій половині року
	const getSumPerFirstHalfOfYear = (arr) => {
		let sum = 0
		const halfArr = arr.length / 2

		for (let i = 0; i < halfArr; i++) {
			sum += arr[i]
		}

		return sum
	}

	// Функція для знаходження сумарної кількості грошей у другій половині року
	const getSumPerSecondHalfOfYear = (arr) => {
		let sum = 0
		const halfArr = Math.floor(arr.length / 2)

		for (let i = halfArr; i < arr.length; i++) {
			sum += arr[i]
		}

		return sum
	}

	// Функція для знаходження сумарної кількості грошей за літо
	const getTotalSumPerSummer = (arr) => {
		let sum = 0

		for (let i = 5; i <= 7; i++) {
			sum += arr[i]
		}

		return sum
	}
	// Функція для знаходження сумарної кількості грошей за ІІ квартал
	const getTotalSumPerSecondQuarter = (arr) => {
		let sum = 0

		for (let i = 3; i <= 5; i++) {
			sum += arr[i]
		}

		return sum
	}
	// Функція для знаходження сумарної кількості грошей за парні місяці(з парними номерами)
	const getTotalSumPerEvenNumbers = (arr) => {
		let sum = 0

		for (let i = 1; i < arr.length; i+=2) {
			sum += arr[i]
		}

		return sum
	}

	// Функція для знаходження сумарної кількості грошей за місяці, які є початковими у сезоні(весна, літо, осінь, зима)
	const getSumPerStartSeasons = (arr) => {
		let sum = 0

		for (let i = 2; i < arr.length; i+=3) {
			sum += arr[i]
		}

		return sum
	}

	const arr = [10, 111, 234, 250, 140, 190, 35, 25, 10, 10, 358, 345]

	document.write(`
		<p>Платіжки за рік - <span>${arr}</span></p>
		<p>Сумарна кількість грошей за рік - <span>${getTotalSumPerYear(arr)}</span></p>
		<p>Сумарна кількість грошей у першій половині року - <span>${getSumPerFirstHalfOfYear(arr)}</span></p>
		<p>Сумарна кількість грошей у другій половині року - <span>${getSumPerSecondHalfOfYear(arr)}</span></p>
		<p>Сумарна кількість грошей за літо - <span>${getTotalSumPerSummer(arr)}</span></p>
		<p>Сумарна кількість грошей за ІІ квартал - <span>${getTotalSumPerSecondQuarter(arr)}</span></p>
		<p>Сумарна кількість грошей за парні місяці(з парними номерами) - <span>${getTotalSumPerEvenNumbers(arr)}</span></p>
		<p>Сумарна кількість грошей за за місяці, які є початковими у сезоні(весна, літо, осінь, зима) - <span>${getSumPerStartSeasons(arr)}</span></p>
		`)
}
