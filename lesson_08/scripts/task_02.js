"use strict"

// Задача 02. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

if (confirm('Почати тестування?')) {

	// Функція для створення масиву
	const getArray = () => {
		const arr = []

		for (let i = 1; i <= 7; i++) {
			const dayVisitorsQuantity = parseInt(prompt('Введіть кількість відвідувачів', '20'))

			arr.push(dayVisitorsQuantity)
		}

		return arr
	}

	// Функція для отримання номерів днів, протягом яких кількість відвідувачів була меншою за 20
	const getDaysWithVisitorsUnder20 = (arr) => {
		let days = ''

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < 20) days += i + 1 + ' '
		}

		return days || 'Нема таких днів'
	}

	// Функція для отримання номерів днів, коли кількість відвідувачів була мінімальною
	const getDaysWithMinVisitors = (arr) => {

		let min = arr[0]
		for (let i = 0; i < arr.length; i++) {
			if(arr[i] < min) min = arr[i]
		}

		let days = ''

		for(let i = 0; i < arr.length; i++) {
			if (arr[i] === min) days += i + 1 + ' '
		}

		return days
	}

	// Функція для отримання номерів днів, коли кількість відвідувачів була максимальною
	const getDaysWithMaxVisitors = (arr) => {

		let max = arr[0]
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) max = arr[i]
		}

		let days = ''

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === max) days += i + 1 + ' '
		}

		return days
	}

	// Функція для отримання загальної кількості клієнтів у робочі дні
	const getVisitorsInWorkingDays = (arr) => {
		let count = 0

		for (let i = 0; i < arr.length; i++) {
			if (i < 5) count += arr[i]
		}

		return count
	}

	// Функція для отримання загальної кількості клієнтів на вихідних
	const getVisitorsInWeekendDays = (arr) => {
		let count = 0

		for (let i = 0; i < arr.length; i++) {
			if (i >= 5) count += arr[i]
		}

		return count
	}

	const arr = getArray()

	document.write(`
		<p>Кількість відвідувачів за тиждень по дням складає <span>${arr}</span></p>
		<p>Номери днів, протягом яких кількість відвідувачів була меншою за 20 - <span>${getDaysWithVisitorsUnder20(arr)}</span></p>
		<p>Номери днів, коли кількість відвідувачів була мінімальною - це <span>${getDaysWithMinVisitors(arr)}</span></p>
		<p>Номери днів, коли кількість відвідувачів була максимальною - це <span>${getDaysWithMaxVisitors(arr)}</span></p>
		<p>Загальна кількість клієнтів у робочі дні складає <span>${getVisitorsInWorkingDays(arr)}</span>, у вихідні - <span>${getVisitorsInWeekendDays(arr)}</span></p>
		`)
}