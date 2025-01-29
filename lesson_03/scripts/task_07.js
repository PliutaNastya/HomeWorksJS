"use strict"

// Задача 07. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

/* Позначення
monthNumber - номер місяця
*/

// Введення необхідних данних

const monthNumber = parseInt(prompt('Введіть номер місяця від 1 до 12 та дізнайтесь до якої пори роки він відноситься', '3'))

const spring = monthNumber >= 3 && monthNumber <= 5
const summer = monthNumber >= 6 && monthNumber <= 8
const autumn = monthNumber >= 9 && monthNumber <= 11
const winter = monthNumber === 12 || monthNumber >= 1 && monthNumber <= 2

// Обчислення та виведення результатів

switch (true) {
	case spring:
		document.write(`Номер місяця - ${monthNumber} відноситься до пори року - весна <br>`)
		break
	case summer:
		document.write(`Номер місяця - ${monthNumber} відноситься до пори року - літо <br>`)
		break
	case autumn:
		document.write(`Номер місяця - ${monthNumber} відноситься до пори року - осінь <br>`)
		break
	case winter:
		document.write(`Номер місяця - ${monthNumber} відноситься до пори року - зима <br>`)
		break
	default:
		document.write('Ви ввели некоректні дані! <br>')
}


// ==============================або з використання if else без зайвих констант============================

if (isNaN(monthNumber) || monthNumber <= 0 || monthNumber > 12)
	document.write('Ви ввели некоректні дані!')
else if (monthNumber >= 3 && monthNumber <= 5)
	document.write(`Номер місяця - ${monthNumber} відноситься до пори року - весна`)
else if (monthNumber >= 6 && monthNumber <= 8) 
	document.write(`Номер місяця - ${monthNumber} відноситься до пори року - літо`)
else if (monthNumber >= 9 && monthNumber <= 11)
	document.write(`Номер місяця - ${monthNumber} відноситься до пори року - осінь`)
else 
	document.write(`Номер місяця - ${monthNumber} відноситься до пори року - зима`)