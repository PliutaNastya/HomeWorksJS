"use strict"

// Задача 01.  Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm('Почати тестування?')) {
	const getSeasonOfYear = monthNumber => {
		let res
		switch (monthNumber) {
			case 1:
			case 2:
			case 12:
				res = 'зима'
				break
			case 3:
			case 4:
			case 5:
				res = 'весна'
				break
			case 6:
			case 7:
			case 8:
				res = 'літо'
				break
			case 9:
			case 10:
			case 11:
				res = 'осінь'
				break
		}
		return res
	}

	const monthNumber = parseInt(prompt('Введіть назву місяця', '4'))

	document.write(`<p>Місяцю під номером ${monthNumber} відповідає пора року - ${getSeasonOfYear(monthNumber)}</p>`)
}
