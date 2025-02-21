"use strict"

// Задача 05. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

if (confirm('Почати тестування?')) {
	const getEvenNumbers = (a = 1, b = 1, c = 1) => {
		let countEvenNumbers = 0
		let countPositiveNumbers = 0
		let countNumbersOverOneHundred = 0

		if (a % 2 === 0) countEvenNumbers++
		if (b % 2 === 0) countEvenNumbers++
		if (c % 2 === 0) countEvenNumbers++

		if (a > 0) countPositiveNumbers++
		if (b > 0) countPositiveNumbers++
		if (c > 0) countPositiveNumbers++

		if (a > 100) countNumbersOverOneHundred++
		if (b > 100) countNumbersOverOneHundred++
		if (c > 100) countNumbersOverOneHundred++

		return `Кількість парних чисел складає ${countEvenNumbers}, кількість додатних чисел складає ${countPositiveNumbers}, кількість чисел більших за 100 складає ${countNumbersOverOneHundred}`
	}

	const userNumber1 = parseInt(prompt('Введіть перше число'))
	const userNumber2 = parseInt(prompt('Введіть друге число'))
	const userNumber3 = parseInt(prompt('Введіть третє число'))

	document.write(`
		<p>${getEvenNumbers(userNumber1, userNumber2, userNumber3)}</p>
		`)
}