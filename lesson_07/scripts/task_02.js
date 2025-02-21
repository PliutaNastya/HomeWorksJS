"use strict"

// Задача 02. Створити функцію, яка за номером місяця повертає його назву.

if (confirm('Почати тестування?')) {
	function getMonthName(monthNumber) {
		let monthName
		switch (monthNumber) {
			case 1:
				monthName = 'Січень'
				break
			case 2:
				monthName = 'Лютий'
				break
			case 3:
				monthName = 'Березень'
				break
			case 4:
				monthName = 'Квітень'
				break
			case 5:
				monthName = 'Травень'
				break
			case 6:
				monthName = 'Червень'
				break
			case 7:
				monthName = 'Липень'
				break
			case 8:
				monthName = 'Серпень'
				break
			case 9:
				monthName = 'Вересень'
				break
			case 10:
				monthName = 'Жовтень'
				break
			case 11:
				monthName = 'Листопад'
				break
			case 12:
				monthName = 'Грудень'
				break
		}
		return monthName
	}

	const monthNumber = parseInt(prompt('Введіть номер місяця', '2'))

	document.write(`<p>Номеру місяця - ${monthNumber} відповідає назва ${getMonthName(monthNumber)}</p>`)
}