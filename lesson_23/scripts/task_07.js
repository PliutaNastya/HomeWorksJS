"use strict"

// Задача 07. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента

const students = [
	{ name: "Олена Іваненко", birthday: "14.03.2001" },
	{ name: "Андрій Ковальчук", birthday: "25.12.2000" },
	{ name: "Марина Петренко", birthday: "08.07.2002" },
	{ name: "Сергій Бондар", birthday: "19.11.2001" },
	{ name: "Ірина Шевченко", birthday: "30.01.1999" },
	{ name: "Юрій Ткаченко", birthday: "10.06.2000" },
	{ name: "Наталя Гриценко", birthday: "03.09.2001" },
	{ name: "Олег Дорошенко", birthday: "22.05.1998" }
]

const parseDate = (string) => {
	const [day, month, year] = string.split('.')
	return new Date(`${year}-${month}-${day}`)
}

const findOldestStudent = (students) => {
	let oldestStudent = students[0]

	for (let student of students) {

		if (parseDate(student.birthday) < parseDate(oldestStudent.birthday)) {
			oldestStudent = student
		}
	}

	return oldestStudent
}

console.log(`Найстарший студент: ${findOldestStudent(students).name}. Дата народження: ${findOldestStudent(students).birthday}`)