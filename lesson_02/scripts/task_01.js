"use strict"

// Задача 01. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

/* Позначення
	firstNumber - перше введене дійсне число
	secondNumber - друге введене дійсне число
	sumResult - їх сума
	multiplyResult - їх добуток
	divisionResult - їх частку
*/

// Введення необхідних данних

const firstNumber = parseFloat(prompt('Введіть перше будь-яке дійсне число', '1'));
const secondNumber = parseFloat(prompt('Введіть друге будь-яке дійсне число', '1'));

// Обчислення результатів

const sumResult = firstNumber + secondNumber;
const multiplyResult = firstNumber * secondNumber;
const divisionResult = firstNumber / secondNumber;

// Виведення результатів у вигляді таблиці

document.write(
	`
	<table>
		<tr>
			<th>Сума</th>
			<th>Добуток</th>
			<th>Частка</th>
		</tr>
		<tr>
			<td>${sumResult}</td>
			<td>${multiplyResult}</td>
			<td>${divisionResult}</td>
		</tr>
	</table>
	`
)