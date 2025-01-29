"use strict"

// Задача 04. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

/* Позначення
humanAge - вік людини
*/

// Введення необхідних данних

const humanAge = parseInt(prompt(`Введіть свій вік`, '28'))

// Обчислення результатів та виведення результатів

if (Number.isNaN(humanAge) || humanAge < 0) 
	document.write(`Ви ввели некоректні дані! <br>`)
else if (humanAge >= 0 && humanAge < 3) 
	document.write(`Ви ще малюк <br>`)
else if (humanAge >= 3 && humanAge < 6)
	document.write(`Ви ходите в садочок <br>`)
else if (humanAge >= 6 && humanAge < 17)
	document.write(`Ви школяр <br>`)
else if (humanAge >= 17 && humanAge < 22)
	document.write(`Ви студент <br>`)
else if (humanAge >= 22 && humanAge < 66)
	document.write(`Ви працівник <br>`)
else
	document.write(`Ви пенсіонер <br>`)

// ===========================з використанням конструкції switch - case===============================================================

const newborn = humanAge >= 0 && humanAge < 3
const childInKindergarten = humanAge >= 3 && humanAge < 6
const pupil = humanAge >= 6 && humanAge < 17
const student = humanAge >= 17 && humanAge < 22
const worker = humanAge >= 22 && humanAge < 66
const pensioner = humanAge >= 66

switch (true) {
	case newborn:
		document.write(`Ви ще малюк`)
		break
	case childInKindergarten:
		document.write(`Ви ходите в садочок`)
		break
	case pupil:
		document.write(`Ви школяр`)
		break
	case student:
		document.write(`Ви студент`)
		break
	case worker:
		document.write(`Ви працівник`)
		break
	case pensioner:
		document.write(`Ви пенсіонер`)
		break
	default:
		document.write(`Ви ввели некоректні дані!`)
}