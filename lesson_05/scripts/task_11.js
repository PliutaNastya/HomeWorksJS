"use strict"

// Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
if (confirm('Почати тестування?')) {

	const startUserNumber = parseInt(prompt('Введіть число - початок діапазону', '15'))
	const finishUserNumber = parseInt(prompt('Введіть число - кінець діапазону', '100'))

	let sum = 0
	let count = 0
	let oddNumbers = ''
	for (let i = startUserNumber; i <= finishUserNumber; i++) {

		if (i % 2 !== 0) {
			oddNumbers += i + ' '
			count++
			sum += i
			if(count === 5) break
		}
	}
	document.write(`
		<p>Непарні числа - ${oddNumbers}</p>
		<p>Сума перших 5 непарних чисел у Вашому діапазоні складає ${sum}</p>
		`)
}