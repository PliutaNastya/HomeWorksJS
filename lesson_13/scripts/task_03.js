"use strict"

// Задача 03. Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.

const arr = [
	["x", " ", " "],
	[" ", "o", " "],
	[" ", " ", "x"]
]

const getAllCombinations = arr => {
	let result = []

	// Функція для копіювання поля
	const copyArr = (board) => {
		return JSON.parse(JSON.stringify(board))
	}

	// Функція для заповнення пробілів
	const fillBoard = (currentArr, row, col) => {

		if (row >= 3) {
			result.push(copyArr(currentArr))
			return
		}

		let nextRow = row, nextCol = col + 1

		if (col >= 3) {
			nextRow++
			nextCol = 0
		}

		if (currentArr[row][col] === " ") {
			currentArr[row][col] = "x"
			fillBoard(currentArr, nextRow, nextCol)

			currentArr[row][col] = "o"
			fillBoard(currentArr, nextRow, nextCol)

			currentArr[row][col] = " "
		} else fillBoard(currentArr, nextRow, nextCol)
	}

	fillBoard(arr, 0, 0)
	return result
}



const resArr = getAllCombinations(arr)


// Вивід результату

for (let arr of resArr) {
	document.write(`<table style="font-weight: 700; display: inline-block; margin-inline-end: 10px;">`)

	for (let el of arr) {
		
		document.write(`<tr>`)

		for (let i = 0; i < el.length; i++) {
			document.write(`<td style="${el[i] === "x" ? `color : yellow;` : `color: green;`}">${el[i]}</td>`)
		}

		document.write(`</tr>`)
	}

	document.write(`</table>`)
}


// [Початок]
// 	|
// 	[Отримати поле гри]
// 	|
// 	[Знайти всі пробіли]
// 	|
// 	[Чи є ще пробіли ?]
// 	/        \
//  Так        Ні
// 	|          |
// 	[Взяти[Показати поле]
// перший |
// 	пробіл][Кінець]
// 		|
// 		[Поставити "X"]
// 		|
// 		[Далі шукати пробіли]
// 		|
// 		[Повернутися назад]
// 		|
// 		[Поставити "0"]
// 		|
// 		[Далі шукати пробіли]  