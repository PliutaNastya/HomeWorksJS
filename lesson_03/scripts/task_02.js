"use strict"

// Задача 2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

/* Позначення
itemPrice - ціна товару
moneyQuantity - кількість грошей

loteryPrice - ціна лотереї
loteryQuantity - кількість лотерейних квитків, які можна купити на залишок грошей
*/

// Введення необхідних данних
const itemPrice = parseFloat(prompt('Введіть ціну товару', '23'))
const moneyQuantity = parseFloat(prompt('Введіть наявну у вас кількість грошей', '230'))

const loteryPrice = 4

// Обчислення результатів
const loteryQuantity = Math.floor((moneyQuantity - itemPrice) / loteryPrice)

// Виведення результатів

if (Number.isNaN(itemPrice) || Number.isNaN(moneyQuantity)) 
	document.write(`Ви ввели некоректні дані, будь ласка введіть число`)
else if (moneyQuantity >= itemPrice) 
	document.write(`Вам вистачає грошей, тому ви можете придбати цей товар. А на залишок пропонуємо вам придбати лотерейний квиток. Ціна одного лотерейного квитка складає ${loteryPrice}грн. Ви можете придбати максимум ${loteryQuantity} лотерейних квитків.`)
else 
	document.write(`Вам не вистачає грошей, ви не можете придбати цей товар`)