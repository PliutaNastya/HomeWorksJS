"use strict"

// Задача 06. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

const visitors = [
	"ivanov123",
	"petrenko_olga",
	"ivanov123",
	"andriy_syd",
	"petrenko_olga",
	"marina.koval",
	"ivanov123",
	"andriy_syd",
	"marina.koval",
	"stepan99",
	"petrenko_olga",
	"andriy_syd",
	"ivanov123",
	"katya-star",
	"katya-star",
	"petrenko_olga"
]

//! Функція для отримання кількості входжень кожного зі значень
const getOccurrencesCount = list => {
	const resMap = new Map()

	for (const el of list) {
		if (resMap.has(el)) resMap.set(el, resMap.get(el) + 1)
		else resMap.set(el, 1)
	}

	return resMap
}

// Виклик функції
const loginsOccurrences = getOccurrencesCount(visitors)

// Вивід результатів в консоль
for (const [visitor, count] of loginsOccurrences) {
	console.log(`${visitor} відвідувала сайт ${count} разів`)
}