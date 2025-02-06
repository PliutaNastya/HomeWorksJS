"use strict"

// Задача 01. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.



if (confirm('Почати тестування?')) {
	const itemNumbers = parseInt(prompt('Введіть довільне число', '18'))

	document.write(`<ul>`)

	for (let i = 0; i < itemNumbers; i++) {
		const randomNumber = Math.floor(Math.random() * (100)) + 1

		document.write(`<li>${randomNumber}</li>`)
	}

	document.write(`</ul>`)

}