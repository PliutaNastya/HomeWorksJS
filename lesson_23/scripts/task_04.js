"use strict"

// Задача 04. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)


const isDateInCurrentWeek = date => {

	const dateToCheck = new Date(date)

	if (isNaN(dateToCheck)) {
		throw new Error(`Недійсний формат дати: ${date}`)
	}

	const currentDate = new Date()

	const currentDayOfTheWeek = currentDate.getDay()

	let daysFromNowToMonday
	if (currentDayOfTheWeek === 0) {
		daysFromNowToMonday = -6
	} else daysFromNowToMonday = 1 - currentDayOfTheWeek

	const startOfTheWeek = new Date(currentDate)
	startOfTheWeek.setDate(currentDate.getDate() + daysFromNowToMonday)
	startOfTheWeek.setHours(0, 0, 0, 0)

	const endOfTheWeek = new Date(startOfTheWeek)
	endOfTheWeek.setDate(startOfTheWeek.getDate() + 6)
	endOfTheWeek.setHours(23, 59, 59, 999)

	const dateToCheckinMs = dateToCheck.getTime()

	return dateToCheckinMs <= endOfTheWeek.getTime() && dateToCheckinMs >= startOfTheWeek.getTime()
}

console.log(isDateInCurrentWeek(new Date("2025.05.4")))
