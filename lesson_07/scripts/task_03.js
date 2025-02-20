"use strict"

// Задача 03.  Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm('Почати тестування?')) {
	const isWorkingDay = (dayNumber) => dayNumber >= 1 && dayNumber <= 5

	const dayNumber = parseInt(prompt('Введіть день тижня', '2'))

	if (isWorkingDay(dayNumber)) alert('Вам пора йти на роботу!')
	else alert('Можна ще поспати. Сьогодні вихідний!')
}