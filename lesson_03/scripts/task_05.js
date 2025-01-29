"use strict"

// Задача 05. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

/* Позначення
driverCategory - категорії водія
*/

// Введення необхідних данних
const driverCategory = prompt('Введіть вашу категорію водія (A, B або C)').toUpperCase()

let category
let imageUrl 

// Обчислення результатів
switch (driverCategory) {
	case 'A':
		category = 'мотоцикл'
		imageUrl = 'https://images.unsplash.com/photo-1552306062-29a5560e1c31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		break
	case 'B':
		category = 'легковий автомобіль'
		imageUrl = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		break
	case 'C':
		category = 'вантажний автомобіль'
		imageUrl = 'https://images.unsplash.com/photo-1591706515036-cb0f48dc5e62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		break
	default:
		document.write('Ви ввели некоректні дані!')
}

if (category && imageUrl) {
	let template = `
	<p>Вітаємо! Транспортний засіб, яким ви можете керувати - це ${category}</p>
	<img src="${imageUrl}" width="100%">
	`
	document.write(template)
}