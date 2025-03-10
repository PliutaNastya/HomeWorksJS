"use strict"

// Задача 02. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
// 2) загальний прибуток усіх магазинів по дням(загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список(одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні(рядки) за спаданням максимального елементи у цьому тижні(рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні(рядки) за спаданням суми елементів у рядку(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

//! Генеруємо масив із прибутку протягом тижня певної кількості магазинів
// Крок 1. Функція отримання рандомного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Крок 2. Функція для генерації одновимірного масиву
const getRandomArray = (arrayLength, min, max) => {
	let arr = []
	for (let i = 0; i < arrayLength; i++) {
		let randomNumber = getRandomNumber(min, max)
		arr.push(randomNumber)
	}
	return arr
}

// Крок 3. Функція для додавання одновимірних масивів в один - отримуємо багатовимірний масив.
const getArrayTable = (rows, cols, min = 100, max = 1000) => {
	let arrTable = []
	for (let i = 0; i < rows; i++) {
		const randomArr = getRandomArray(cols, min, max)
		arrTable.push(randomArr)
	}
	return arrTable
}
// Виклик функції генерації масиву
const shopsProfitList = getArrayTable(4, 7)

// Просто для краси, вивід масиву у вигляді таблиці
const renderTable = arr => {
	let table = '<table>'

	for (let row of arr) {
		table += '<tr>'

		for (let col of row) {
			table += `<td>${col}</td>`
		}

		table += '</tr>'
	}

	table += '</table>'

	return table
}

// Виклик функції генерації масиву і одразу вивід на екран
document.write(renderTable(shopsProfitList))

//! Функція для знаходження загального прибутку кожного магазину за тиждень
const getTotalProfitInShop = (arr) => {
	let totalProfitInShop = []
	for (let shop of arr) {
		let totalProfit = shop.reduce((accum, el) => accum + el)
		totalProfitInShop.push(totalProfit)
	}
	return totalProfitInShop
}

//! Функція для знаходження загального прибутку усіх магазинів по дням(загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.)
const getTotalProfitByDay = (arr) => {
	let totalProfitByDay = []
	for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
		let sum = 0
		for (let shop of arr) {
			sum += shop[dayIndex]
		}
		totalProfitByDay.push(sum)
	}
	return totalProfitByDay
}

//! Функція для знаходження загального прибутку усіх магазинів за певні дні
const getTotalProfit = (arr, startDay, endDay) => {
	let totalSum = arr.reduce((prevTotalSum, shop) => {
		let sum = shop.reduce((shopProfit, profit, index) => {
			if (index >= startDay && index <= endDay) shopProfit += profit
			return shopProfit
		}, 0)
		return prevTotalSum + sum
	}, 0)
	return totalSum
}

//! Функція для знаходження максимального прибутку за середу 
const getMaxProfitPerDay = (arr, dayIndex) => {
	let maxProfitPerDay = -Infinity
	for (let row of arr) {
		if (row[dayIndex]) {
			maxProfitPerDay = Math.max(maxProfitPerDay, row[dayIndex])
		}
	}
	return maxProfitPerDay
}

//! Функція для формування загального списку(одновимірний масив) зі значенням, які більші за 200
const getCommonArrWithProfitMore200 = arr => arr.flat().filter(el => el > 200)

//! Функція для сортування кожного тижня за зростанням
const sortEveryWeek = (arr) => {
	return arr.map(row => row.sort((a, b) => a - b))
}

//! Функція для сортування  тижнів(рядків) за спаданням максимального елементаи у цьому тижні(рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
const sortEveryWeekByMax = (arr) => {
	return [...arr].sort((a, b) => Math.max(...b) - Math.max(...a))
}

//! Функція для сортування тижнів(рядків) за спаданням суми елементів у рядку(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
const sortEveryWeekBySum = (arr) => {
	return [...arr].sort((a, b) => b.reduce((accum, el) => accum + el) - a.reduce((accum, el) => accum + el))
}

// ========================================================================================================
//! Вивід результатів
// ========================================================================================================

// --------------------------------------------------------------------------------------------------------
// 1) загальний прибуток кожного магазину за тиждень;
const totalProfitInShop = getTotalProfitInShop(shopsProfitList)

// Вивід результату
document.write(`
	<span>Загальний прибуток кожного магазину за тиждень</span>
	<table>`)
for (let i = 0; i < totalProfitInShop.length; i++) {
	document.write(`<tr>`)
	document.write(`<td>${i + 1} магазин</td>`)
	document.write(`<td>${totalProfitInShop[i]}</td>`)
	document.write(`</tr>`)
}
document.write(`</table>`)

// --------------------------------------------------------------------------------------------------------
// 2) загальний прибуток усіх магазинів по дням(загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
const totalProfitByDay = getTotalProfitByDay(shopsProfitList)
const days = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П\'ятниця', 'Субота', 'Неділя']
// Вивід результату
document.write(`
	<span>Загальний прибуток усіх магазинів по дням</span>
	<table>`)
for (let i = 0, j = 0; i < totalProfitByDay.length, j < days.length; i++, j++) {
	document.write(`<tr>`)
		document.write(`<td>${days[j]}</td>`)
		document.write(`<td>${totalProfitByDay[i]}</td>`)
	document.write(`</tr>`)
}
document.write(`</table>`)

// --------------------------------------------------------------------------------------------------------
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
const totalProfitPerWorkingDays = getTotalProfit(shopsProfitList, 0, 4)
const totalProfitPerWeekends = getTotalProfit(shopsProfitList, 5, 6)
document.write(`
	<p>Загальний прибуток усіх магазинів за робочі дні складає <span>${totalProfitPerWorkingDays}</span></p>
	<p>Загальний прибуток усіх магазинів за вихідні дні складає <span>${totalProfitPerWeekends}</span></p>
	`)

// --------------------------------------------------------------------------------------------------------
// 5) максимальний прибуток за середу
const maxProfitPerWednesday = getMaxProfitPerDay(shopsProfitList, 2)
document.write(`
	<p>Максимальний прибуток за середу складає <span>${maxProfitPerWednesday}</span></p>
	`)

// --------------------------------------------------------------------------------------------------------
// 6) сформувати загальний список(одновимірний масив) зі значенням, які що більші за 200
const commonArrWithProfitMore200 = getCommonArrWithProfitMore200(shopsProfitList)
document.write(`
	<p>Загальний масив зі значеннями, що більші за 200 - <span>[${commonArrWithProfitMore200}]</span></p>
	`)

// --------------------------------------------------------------------------------------------------------
// 7) відсортувати кожен тиждень за зростанням
const sortArr = sortEveryWeek(shopsProfitList)
document.write(`<span>Відсортований кожен киждень за зростанням</span>`)
document.write(renderTable(sortArr))

// --------------------------------------------------------------------------------------------------------
// 8) відсортувати тижні(рядки) за спаданням максимального елемента у цьому тижні(рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
const sortArrByMax = sortEveryWeekByMax(shopsProfitList)
document.write(`<span>Відсортовані тижні(рядки) за спаданням максимального елемента у цьому тижні(рядку)</span>`)
document.write(renderTable(sortArrByMax))

// --------------------------------------------------------------------------------------------------------
// 9) упорядкувати тижні(рядки) за спаданням суми елементів у рядку(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
const sortArrBySum = sortEveryWeekBySum(shopsProfitList)
document.write(`<span>Відсортовані тижні(рядки) за спаданням суми елементів у рядку</span>`)
document.write(renderTable(sortArrBySum))