"use strict"

// Задача 08.Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Заокруглити вверх значення та підрахувати кількість різних показів.

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

//! Функція для знаходження кількості входжень кожного із показів
const getOccurrences = list => {
	const resMap = new Map()

	for (const el of list) {
		if (resMap.has(el)) resMap.set(el, resMap.get(el) + 1)
		else resMap.set(el, 1)
	}

	return resMap
}

// Виклик функції
const temperatureOccurrences = getOccurrences(temperatures)

// Вивід результатів в консоль
for (const [temp, count] of temperatureOccurrences) {
	console.log(`Температура ${temp} зустрічається ${count} рази`)
}

//! Функція для заокруглення вверх значень
const roundUpValues = list => list.map(el => Math.ceil(el))

// Виклик функції
const roundedTemperatures = roundUpValues(temperatures)
console.log(roundedTemperatures)

//! Функція для знаходження унікальних значень
const getUniqueValues = list => new Set(list)

// Виклик функції
const uniqueTemperatures = getUniqueValues(roundedTemperatures)

// Вивід результатів в консоль
console.log(
	'Унікальні заокруглені температури-', ...uniqueTemperatures,
	'Їх кількість -', uniqueTemperatures.size
)