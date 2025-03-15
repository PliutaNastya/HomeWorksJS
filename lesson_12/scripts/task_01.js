"use strict"

// Задача 01. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою

//! Функція для генерації масиву з рандомних чисел
const getRandomArr = (arrLength, min, max) => {
	let arr = []
	for (let i = 0; i < arrLength; i++) {
		let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
		arr.push(randomNum)
	}
	return arr
}

//! Викликаємо функцію
const arr = getRandomArr(30, 0, 100)

// Просто щоб показати початковий масив
const startArr = [...arr]

//! Функція сортування бульбашковим методом
const sortBubble = arr => {
	let change, swaps = 0, comparisons = 0, endIndex = arr.length
	do {
		change = false
		for (let i = 1; i < endIndex; i++) {
			comparisons++
			if (arr[i - 1] > arr[i]) {
				const tmp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = tmp
				change = true
				swaps++
			}
		}
		endIndex--
	} while (change)

	return { arr, swaps, comparisons }
}

const res = sortBubble(arr)

document.write(`
	<p>Початковий масив: <span>[${startArr}]</span></p>
   <p>Відсортований бульбашковим методом масив: <span>[${res.arr}]</span></p>
   <p>Кількість обмінів: <span>${res.swaps}</span></p>
	<p>Кількість порівнянь: <span>${res.comparisons}</span></p>
`)
