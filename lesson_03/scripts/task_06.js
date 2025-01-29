"use strict"

// Задача 06. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

/* Позначення
dayNumber - номер дня тижня
dayName - назва дня
*/

// Введення необхідних данних

const dayNumber = parseInt(prompt('Щоб дізнатись який день тижня введіть число від 1 до 7', '3'))
let dayName

// Обчислення результатів

switch (dayNumber) {
	case 1:
		dayName = 'понеділок'
		break
	case 2:
		dayName = 'вівторок'
		break
	case 3:
		dayName = 'середа'
		break
	case 4:
		dayName = 'четвер'
		break
	case 5:
		dayName = 'п\'ятниця'
		break
	case 6:
		dayName = 'субота'
		break
	case 7:
		dayName = 'неділя'
		break
}
// Виведення результатів
dayName ? document.write(`Числу ${dayNumber} відповідає день тижня - ${dayName}`) : document.write(`Ви ввели некоректні дані!`)