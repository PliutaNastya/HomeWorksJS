"use strict"

// Задача 04. Створити окремі функції, які для 4 чисел знаходять:
// 1) суму;
// 2) добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

if (confirm('Почати тестування?')) {
	const getSum = (a = 1, b = 2, c = 3, d = 4) => a + b + c + d
	const getProduct = (a = 1, b = 2, c = 3, d = 4) => a * b * c * d
	const getAverage = (a = 1, b = 2, c = 3, d = 4) => (getSum(a, b, c, d)) / 4
	const getMin = (a = 1, b = 2, c = 3, d = 4) => Math.min(a, b, c, d)

	const userNumber1 = parseInt(prompt('Введіть перше число', '1'))
	const userNumber2 = parseInt(prompt('Введіть друге число', '1'))
	const userNumber3 = parseInt(prompt('Введіть третє число', '1'))
	const userNumber4 = parseInt(prompt('Введіть четверте число', '1'))

	document.write(`
		<table>
			<caption>
				Операції з числами
			</caption>
			<thead>
				<tr>
					<th>Сума</th>
					<th>Добуток</th>
					<th>Середнє арифметичне</th>
					<th>Мінімальне значення</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>${getSum(userNumber1, userNumber2, userNumber3, userNumber4)}</td>
					<td>${getProduct(userNumber1, userNumber2, userNumber3, userNumber4)}</td>
					<td>${getAverage(userNumber1, userNumber2, userNumber3, userNumber4)}</td>
					<td>${getMin(userNumber1, userNumber2, userNumber3, userNumber4)}</td>
				</tr>
			</tbody>
		</table>
		`)
}