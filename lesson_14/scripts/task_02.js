"use strict"

// Задача 02.  Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
const dateObj = {
	day: 24,
	month: 3,
	year: 1996,
}

const getYearAfterNMonth = ({ year, month }, monthNumbers) => {
	
	return year + Math.floor((month + monthNumbers - 1) / 12)

}

console.log(getYearAfterNMonth(dateObj, 22))
console.log(getYearAfterNMonth(dateObj, 220))
console.log(getYearAfterNMonth(dateObj, 2))
console.log(getYearAfterNMonth(dateObj, 87))
console.log(getYearAfterNMonth(dateObj, 19))
console.log(getYearAfterNMonth(dateObj, 26))