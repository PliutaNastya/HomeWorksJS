"use strict"

// Задача 06. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

/* Позначення
	firstItemPrice - вартість першого товару
	secondItemPrice - вартість другого товару
	thirdItemPrice - вартість третього товару

	firstItemQuantity - кількість одиниць першого товару
	secondItemQuantity - кількість одиниць другого товару
	thirdItemQuantity - кількість одиниць третього товару

	firstItemTotalPrice - вартість першого товару
	secondItemTotalPrice - вартість другого товару
	thirdItemTotalPrice - вартість третього товару

	totalPrice - загальна сума усіх товарів
*/

// Введення необхідних данних

const firstItemPrice = parseFloat(prompt('Введіть вартість першого товару в гривні', '10'));
const secondItemPrice = parseFloat(prompt('Введіть вартість другого товару в гривні', '20'));
const thirdItemPrice = parseFloat(prompt('Введіть вартість третього товару в гривні', '30'));

const firstItemQuantity = parseFloat(prompt('Введіть кількість першого товару', '10'));
const secondItemQuantity = parseFloat(prompt('Введіть кількість другого товару', '10'));
const thirdItemQuantity = parseFloat(prompt('Введіть кількість третього товару', '10'));

// Обчислення результатів

const firstItemTotalPrice = (firstItemPrice * firstItemQuantity).toFixed(2);
const secondItemTotalPrice = (secondItemPrice * secondItemQuantity).toFixed(2);
const thirdItemTotalPrice = (thirdItemPrice * thirdItemQuantity).toFixed(2);

const totalPrice = (parseFloat(firstItemTotalPrice) + parseFloat(secondItemTotalPrice) + parseFloat(thirdItemTotalPrice)).toFixed(2);

// Виведення результатів

document.write(`
	<h2>Ваш чек</h2>
	<table>
		<tr>
			<th>Товар</th>
			<th>Кількість</th>
			<th>Вартість за одиницю товару, грн</th>
			<th>Загальна вартість, грн</th>
		</tr>
		<tr>
			<td>Товар №1</td>
			<td>${firstItemQuantity}</td>
			<td>${firstItemPrice}</td>
			<td>${firstItemTotalPrice}</td>
		</tr>
		<tr>
			<td>Товар №2</td>
			<td>${secondItemQuantity}</td>
			<td>${secondItemPrice}</td>
			<td>${secondItemTotalPrice}</td>
		</tr>
		<tr>
			<td>Товар №3</td>
			<td>${thirdItemQuantity}</td>
			<td>${thirdItemPrice}</td>
			<td>${thirdItemTotalPrice}</td>
		</tr>
		<tr>
			<td colspan="2">Передбачення для Вас:</td>
			<td colspan="2">Ви на вірному шляху</td>
		</tr>
		<tr>
			<td colspan="2">Загальна сума, грн:</td>
			<td colspan="2">${totalPrice}</td>
		</tr>
	</table>
	`)