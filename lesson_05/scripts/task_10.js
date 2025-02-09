"use strict"

// Задача 10. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.
if (confirm('Почати тестування?')) {

	const startUserNumber = parseInt(prompt('Введіть число - початок діапазону', '15'))
	const finishUserNumber = parseInt(prompt('Введіть число - кінець діапазону', '100'))

	let sum = 0
	let oddNumbers = ''
	for (let i = startUserNumber; i <= finishUserNumber; i++) {
		
		if(i % 2 !== 0) {
			oddNumbers += i + ' '
			sum += i
		}
	}
	document.write(`
		<p>Непарні числа - ${oddNumbers}</p>
		<p>Сума непарних чисел у Вашому діапазоні складає ${sum}</p>
		`)
}