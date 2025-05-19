"use strict"

// Задача 03. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

//! Функція створення генератора
function* generateRandomEvenNumbers(amount, min, max) {
	while (amount) {
		const randomNumber = Math.floor(Math.random() * (max - min) + 1) + min

		if (randomNumber % 2 === 0) {
			yield randomNumber
			amount--
		}
	}
}

// Вивід результатів в консоль
const res = generateRandomEvenNumbers(10, 2, 100)
for (const evenNumber of res) {
	console.log(evenNumber)
}