"use strict"

// Задача 05. З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.

const counter = (min, max) => {

	if (min > max) throw new Error('Мінімум не може бути більше за максимум')
	
	let current = min

	function increment() {
		const value = current

		if (current === max) {
			current = min
		} else current++

		return value
	}
	return increment
}

// const iterator = counter(1, 3)

// console.log(iterator())
// console.log(iterator())
// console.log(iterator())
// console.log(iterator())

const monthNumbers = counter(1, 12)

for (let i = 0; i < 15; i++) {
	document.write(`<p>Місяць <span>№${monthNumbers()}</span></p>`)
}


// [Початок]
// 	|
// 	[Створити ітератор із min і max]
// 	|
// 	[Встановити current = min]
// 	|
// 	[Повернути функцію - ітератор]
// 	|
// 	[Викликати ітератор]
// 	/        \
//   Так        Ні
// 	|          |
// 	[Зберегти[Кінець]
// current у value]
// 	|
// 	[Чи current = max ?]
// 	/        \
//  Так        Ні
// 	|          |
// 	[current = [current += 1]
// min]
// 	|
// 	[Повернути value]
// 	|
// 	[Викликати ітератор знову ?]