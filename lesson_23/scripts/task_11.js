"use strict"

// Задача 11. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.


//! Функція для генерації масиву з рандомних чисел
const getRandomArr = (arrLength, min, max) => {
	let arr = []
	for (let i = 0; i < arrLength; i++) {
		let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
		arr.push(randomNum)
	}
	return arr
}

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

	return arr
}

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
		if (change) swaps++
	}

	return arr
}

const originalArr = getRandomArr(1000, 1, 800)

const arrForBubble = [...originalArr]
const arrForInsertion = [...originalArr]

const startTimeForBubble = new Date()
sortBubble(arrForBubble)
const endTimeForBubble = new Date()
const diffForBubble = endTimeForBubble - startTimeForBubble


const startTimeForInsertion = new Date()
sortInsertion(arrForInsertion)
const endTimeForInsertion = new Date()
const diffForInsertion = endTimeForInsertion - startTimeForInsertion

console.log(diffForBubble)
console.log(diffForInsertion)