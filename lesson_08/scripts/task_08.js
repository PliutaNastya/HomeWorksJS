"use strict"

// Задача 08. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.

if (confirm('Почати тестування?')) {

	const arrLength = parseInt(prompt('Введіть кількість виграшів', '10'))

	// Функція для створення масиву
	const getArray = () => {
		const arr = []
		for (let i = 1; i <= arrLength; i++) {
			const arrElement = Math.floor(Math.random() * (500 + 500 + 1)) - 500
			arr.push(arrElement)
		}
		return arr
	}

	// Функція для отримання номеру елемента від користувача
	const getUserAnswer = () => parseInt(prompt(`Введіть номер елемента, який бажаєте відкрити від 1 до ${arrLength}`, '1'))

	// Функція для знаходження кінцевої суми виграшу
	const getTotallyWinnings = (arr) => {
		let userAnswer
		let sum = 0

		do {
			userAnswer = getUserAnswer()
			sum += arr[userAnswer]
		} while (confirm('Бажаєте відкрити ще один номер?'))
		
		return sum
	}

	const arr = getArray()

	document.write(`
		<p>Масив - <span>${arr}</span></p>
		<p>Ваш загальний виграш становить - <span>${getTotallyWinnings(arr)}</span></p>`)
}