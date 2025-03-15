"use strict"

// Задача 03. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

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

//! Функція сортування включеннями
const sortInsertion = arr => {
	let swaps = 0, comparisons = 0

	for (let i = 1; i < arr.length; i++) {
		let current = arr[i]
		let j = i - 1
		let change = false

		while (j >= 0 && arr[j] > current) {
			comparisons++
			arr[j + 1] = arr[j] 
			j--
			change = true
		}
		arr[j + 1] = current
		if(change) swaps++
	}

	return { arr, swaps, comparisons }
}

const res = sortInsertion(arr)

document.write(`
	<p>Початковий масив: <span>[${startArr}]</span></p>
   <p>Відсортований методом включення масив: <span>[${res.arr}]</span></p>
   <p>Кількість обмінів: <span>${res.swaps}</span></p>
	<p>Кількість порівнянь: <span>${res.comparisons}</span></p>
`)