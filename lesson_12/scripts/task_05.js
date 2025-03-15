"use strict"

// Задача 05. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

const names = [
	"Andriy", "Natalia", "Viktor", "Yulia", "Mykola", "Irina", "Serhiy", "Kateryna",
	"Dmytro", "Olena", "Oleh", "Vladyslav", "Anastasia", "Roman", "Iryna", "Pavlo", "Tetiana",
	"Volodymyr", "Mariana", "Bogdan", "Olga", "Vera", "Yaroslav", "Svitlana", "Denys", "Alina", "Maksym",
	"Oleksandr", "Valeria", "Artur", "Halyna"
]

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

	return { arr, swaps, comparisons }
}

const res = sortInsertion([...names])

document.write(`
	<p>Початковий масив: <span>[${names}]</span></p>
   <p>Відсортований методом включення масив: <span>[${res.arr}]</span></p>
   <p>Кількість обмінів: <span>${res.swaps}</span></p>
	<p>Кількість порівнянь: <span>${res.comparisons}</span></p>
`)

function binarySearch(arr, searchElement, start, end) {
	if (start <= end) {
		const middle = Math.floor((start + end) / 2)
		if (arr[middle] === searchElement) return middle
		if (arr[middle] < searchElement)
			return binarySearch(arr, searchElement, middle + 1, end)
		if (arr[middle] > searchElement)
			return binarySearch(arr, searchElement, start, middle - 1)
	} else return -1
}

let arr = res.arr
let searchName = 'Olga'
let indexOfName = binarySearch(arr, searchName, 0, arr.length - 1)
document.write(`
	<p>Ім'я <span>${searchName}</span> ${indexOfName !== -1 ? `знаходиться під індексом ${indexOfName}` : 'не існує в цьому масиві'}</p>
	`)