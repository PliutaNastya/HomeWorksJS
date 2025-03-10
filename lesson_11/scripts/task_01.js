"use strict"

// Задача 01.  Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
// 1)номери рядків від 0 до половини, стовпці від 0 до половини
// 2)номери рядків від 0 до половини, стовпці від половини до кінця
// 3)номери рядків(від половини до кінця, стовпці від 0 до половини
// 4) номери рядків від половини до кінця, стовпці від половини до кінця
// 5) Суму парних рядків
// 6) Суму непарних стовпців
// 7) У парних рядках – непарні стовпці, у непарних – парні.


//! Генеруємо багатовимірний масив
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
const getArrayTable = (rows, cols, min = 1, max = 100) => {
	let arrTable = []
	for (let i = 0; i < rows; i++) {
		const randomArr = getRandomArray(cols, min, max)
		arrTable.push(randomArr)
	}
	return arrTable
}

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

// Отримання масиву
const arrTable = getArrayTable(4, 8)

//! Функція для знаходження суми елементів по вказаним індексам
const sumMatrixQuadrant = (arr, startRowIndex, endRowIndex, startColIndex, endColIndex) => {
	let sum = 0
	for (let rowIndex = startRowIndex; rowIndex < endRowIndex; rowIndex++) {
		for (let colIndex = startColIndex; colIndex < endColIndex; colIndex++) {
			sum += arr[rowIndex][colIndex]
		}
	}
	return sum
}

//! Функція для розрахунку суми парних рядків

const sumEvenRows = (arr) => {
	let sum = 0
	for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
		if (rowIndex % 2 === 0) {
			sum += arr[rowIndex].reduce((accum, el) => accum + el)
		}
	}
	return sum
}

//! Функція для розрахунку суми непарних стовпців
const sumOddCols = (arr) => {
	let sum = 0
	for (let row of arr) {
		for (let colIndex = 0; colIndex < row.length; colIndex++)
			if (colIndex % 2 !== 0) {
				sum += row[colIndex]
			}
	}
	return sum
}

//! Функція для розрахунку суми у парних рядках – непарні стовпці, у непарних – парні
const sumSomeElements = (arr) => {
	let sum = 0
	for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
		for (let colIndex = 0; colIndex < arr[rowIndex].length; colIndex++) {
			if ((rowIndex % 2 === 0 && colIndex % 2 !== 0) || (rowIndex % 2 !== 0 && colIndex % 2 === 0)) sum += arr[rowIndex][colIndex]
		}
	}
	return sum
}

//! АБО загальна ФУНКЦІЯ для трьох останніх завдань
const sumSomeOfElements = (arr, callback) => {
	let sum = 0
	for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
		for (let colIndex = 0; colIndex < arr[rowIndex].length; colIndex++) {
			if (callback(rowIndex, colIndex)) sum += arr[rowIndex][colIndex]
		}
	}
	return sum
}

// ==========================================================================================
// Вивід результатів
// ==========================================================================================

// Вивід масиву у вигляді таблиці
document.write(renderTable(arrTable))

// ==========================================================================================

// Вивід суми четвертинок матриці
const halfRows = Math.floor(arrTable.length / 2)
const halfCols = Math.floor(arrTable[0].length / 2)
const rowsNumbers = arrTable.length
const colsNumbers = arrTable[0].length

// ---------------------------------------------------------------------------------------
const firstQuadrantSum = sumMatrixQuadrant(arrTable, 0, halfRows, 0, halfCols)
const secondQuadrantSum = sumMatrixQuadrant(arrTable, 0, halfRows, halfCols, colsNumbers)
const thirdQuadrantSum = sumMatrixQuadrant(arrTable, halfRows, rowsNumbers, 0, halfCols)
const fourthQuadrantSum = sumMatrixQuadrant(arrTable, halfRows, rowsNumbers, halfCols, colsNumbers)

document.write(`
		<p>Сума елементів рядків від 0 до половини, стовпців від 0 до половини складає <span>${firstQuadrantSum}</span></p>
		<p>Сума елементів рядків від 0 до половини, стовпців від половини до кінця складає <span>${secondQuadrantSum}</span></p> 
		<p>Сума елементів рядків від половини до кінця, стовпців від 0 до половини складає <span>${thirdQuadrantSum}</span></p> 
		<p>Сума елементів рядків від половини до кінця, стовпців від половини до кінця складає <span>${fourthQuadrantSum}</span></p> 
		`)
// ---------------------------------------------------------------------------------------
// Вивід суми елементів матриці в залежності від певної умови
// ---------------------------------------------------------------------------------------
// 5) Суму парних рядків
const evenRowsSum = sumEvenRows(arrTable)
// 6) Суму непарних стовпців
const oddColsSum = sumOddCols(arrTable)
// 7) У парних рядках – непарні стовпці, у непарних – парні.
const sumOddColsInEvenRowsEvenColsInOddRows = sumSomeElements(arrTable)

document.write(`
		<p>Сума елементів парних рядків складає <span>${evenRowsSum}</span></p>
		<p>Сума елементів непарних стовпців складає <span>${oddColsSum}</span></p>
		<p>Сума елементів непарних стовпців у парних рядках та парних стовпців в непарних рядках складає <span>${sumOddColsInEvenRowsEvenColsInOddRows}</span></p>
		`)

// ---------------------------------------------------------------------------------------
// Виклик функцій знаходження суми елементів матриці в залежності від певної умови (використання загальної функції)
// ---------------------------------------------------------------------------------------
// 5) Суму парних рядків
const sumInEvenRows = sumSomeOfElements(arrTable, (rowIndex, colIndex) => rowIndex % 2 === 0)
// ---------------------------------------------------------------------------------------
// 6) Суму непарних стовпців
const sumInOddCols = sumSomeOfElements(arrTable, (rowIndex, colIndex) => colIndex % 2 !== 0)
// ---------------------------------------------------------------------------------------
// 7) У парних рядках – непарні стовпці, у непарних – парні.
const sumOddColsInEvenRowsEvenColsInOddRows2 = sumSomeOfElements(arrTable, (rowIndex, colIndex) => (rowIndex % 2 === 0 && colIndex % 2 !== 0) || (rowIndex % 2 !== 0 && colIndex % 2 === 0))
