"use strict"

// Задача 03. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

/* Позначення
	oneItemPrice - вартість одиниці товару
	itemsQuantity - кількість товару
	
	totalCost - загальна вартість
	vatInPercent - ставка ПДВ
	vatValue - ПДВ від загальної вартості товару
*/

// Введення необхідних данних

const oneItemPrice = parseFloat(prompt('Введіть вартість одиниці товару в гривні', '10'));
const itemsQuantity = parseFloat(prompt('Введіть кількість товару', '10'));
const vatInPercent = 5;


// Обчислення результатів

const totalCost = oneItemPrice * itemsQuantity;
const vatValue = totalCost * 5 / 100;

// Виведення результатів

document.write(`Загальна вартість товару становить ${totalCost} гривень <br>
					ПДВ (5%) в даному випадку становить ${vatValue.toFixed(2)} гривень	
	`)