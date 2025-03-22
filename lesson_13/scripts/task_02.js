"use strict"

// Задача 02. Дано масив імен спортсменів. Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).

const names = [
	"Andriy", "Natalia", "Viktor"
]


// Всі можливі комбінації
const generateCombinations = (arr) => {
	if (arr.length === 1) return [arr]

	let result = []

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i]

		let rest = arr.slice(0, i).concat(arr.slice(i + 1))

		let subArr = generateCombinations(rest)

		for (let el of subArr) {
			result.push([current, ...el])
		}
	}

	return result
}
const resArr = generateCombinations(names)

for (let rowIndex = 0; rowIndex < resArr.length; rowIndex++) {
	document.write(`
			<p style="background-color: #1FABA4;">Комбінація №${rowIndex + 1}:</p>
			<div>
			`)
	resArr[rowIndex].forEach((el, index) => {
		document.write(`
			<p>Місце <span>№${index + 1}</span> посідає <span>${el}</span></p>
			`)
	})
	document.write(`</div>`)
}



// [Початок]
// 	|
// 	[Отримати масив імен(arr)]
// 	|
// 	[Довжина масиву = 1 ?]
// 	/        \
//  Так        Ні
// 	|          |
// 	[Повернути[Створити порожній список result]
// масив]       |
//   |          |
// 	[Кінець][Вибрати ім’я(current) з масиву]
//              |
// 	[Створити масив(rest) без current]
// 	|
// 	[Отримати перестановки для rest(subPerms)]
// 	|
// 	[Додати current до початку кожної перестановки]
// 	|
// 	[Зберегти в result]
// 	|
// 	[Чи залишились імена для вибору ?]
// 	/        \
//              Так        Ні
// 	|          |
// 	[Вибрати[Повернути result]
// ім’я]       |
// 	[Кінець]