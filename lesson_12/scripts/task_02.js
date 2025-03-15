"use strict"

// Задача 02. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.

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

//! Функція для сортування змішуванням
const sortCoctail = arr => {
	let leftIndex = 0, rightIndex = arr.length - 1, swaps = 0, comparisons = 0
	
	while (leftIndex < rightIndex) {
		let change = false
		
		for (let i = leftIndex + 1; i <= rightIndex; i++) {
			comparisons++
			if (arr[i - 1] > arr[i]) {
				let tmp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = tmp
				change = true
				swaps++
			}
		}
		rightIndex--
		if (!change) break
		
		for (let i = rightIndex; i > leftIndex; i--) {
			comparisons++
			if (arr[i - 1] > arr[i]) {
				let tmp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = tmp
				change = true
				swaps++
			}
		}
		leftIndex++
	}

	return { arr, swaps, comparisons }
}
const res = sortCoctail(arr)

document.write(`
	<p>Початковий масив: <span>[${startArr}]</span></p>
   <p>Відсортований методом змішування масив: <span>[${res.arr}]</span></p>
   <p>Кількість обмінів: <span>${res.swaps}</span></p>
	<p>Кількість порівнянь: <span>${res.comparisons}</span></p>
`)