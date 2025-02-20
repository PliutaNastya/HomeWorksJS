"use strict"

// Задача 06. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

if (confirm('Почати тестування?')) {
	const INCH_IN_ONE_CM = 0.393701
	const POUND_IN_ONE_KG = 2.20462
	const MILE_IN_ONE_KM = 0.621371

	const convertCmInInch = value => value * INCH_IN_ONE_CM
	const convertKgInPound = value => value * POUND_IN_ONE_KG
	const convertKmInMile = value => value * MILE_IN_ONE_KM

	const value = parseFloat(prompt('Введіть число', '4'))

	document.write(`
		<table>
			<caption>
				Конвертер величин
			</caption>
			<thead>
				<tr>
					<th>Сантиметри у дюйми</th>
					<th>Кілограми у фунти</th>
					<th>Кілометри у милі</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>${convertCmInInch(value).toFixed(2)}</td>
					<td>${convertKgInPound(value).toFixed(2)}</td>
					<td>${convertKmInMile(value).toFixed(2)}</td>
				</tr>
			</tbody>
		</table>
		`)
}