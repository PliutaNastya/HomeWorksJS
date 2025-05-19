"use strict"

// Задача 07.Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

const students = [
	{ name: "Іваненко Олександр Петрович", course: 1, faculty: "Фізико-математичний" },
	{ name: "Петренко Марія Ігорівна", course: 2, faculty: "Інженерний" },
	{ name: "Сидорчук Андрій Васильович", course: 3, faculty: "Фізико-математичний" },
	{ name: "Коваль Катерина Михайлівна", course: 1, faculty: "Філологічний" },
	{ name: "Гриценко Олег Вікторович", course: 4, faculty: "Інженерний" },
	{ name: "Мельник Наталя Олександрівна", course: 2, faculty: "Інженерний" },
	{ name: "Бондар Тетяна Сергіївна", course: 3, faculty: "Філологічний" },
	{ name: "Шевченко Дмитро Іванович", course: 1, faculty: "Правничий" },
	{ name: "Козак Віктор Павлович", course: 4, faculty: "Правничий" },
	{ name: "Олійник Інна Миколаївна", course: 2, faculty: "Фізико-математичний" },
	{ name: "Койчева Анастасія Сергіївна", course: 3, faculty: "Хімічний" },
	{ name: "Даниленко Ольга Миколаївна", course: 1, faculty: "Хімічний" },
]

//! Функція для знаходження унікальних значень
const getUniqueValues = (list) => {
	const uniqueList = new Set()

	list.forEach(el => uniqueList.add(el.faculty))

	return uniqueList
}

let uniqueFaculties = getUniqueValues(students)

//! Функція для знаходження кількості студентів кожного з курсів
const getStudentsAmountByFaculty = list => {
	const resMap = new Map()

	for (const el of list) {
		const { course } = el
		if (resMap.has(course)) resMap.set(course, resMap.get(course) + 1)
		else resMap.set(course, 1)
	}

	return resMap
}

// Виклик функції
const studentsAmountByFaculty = getStudentsAmountByFaculty(students)

// Вивід результатів в консоль
for (const [course, count] of studentsAmountByFaculty) {
	console.log(`На ${course} курсі вчаться ${count} студентів`)
}