"use strict"

// Задача 09.Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.

const mathClub = [
	"Іваненко", "Петренко", "Сидорчук", "Коваль", "Гриценко",
	"Мельник", "Бондар", "Шевченко", "Козак", "Олійник"
]

const historyClub = [
	"Шевченко", "Коваль", "Антонюк", "Ткаченко", "Іваненко",
	"Романюк", "Кравченко", "Сидорчук", "Мельник", "Литвин"
]

const setMathClub = new Set(mathClub)
const setHistoryClub = new Set(historyClub)

// студенти з гуртка з історії також відвідують гурток з математики
const bothClubsVisiters = setHistoryClub.intersection(setMathClub)
console.log(bothClubsVisiters)
console.log('Студенти, що відвідують обидва гуртки -', ...bothClubsVisiters)

// студенти відвідують хоча б один гурток
const uniqueStudents = new Set([...mathClub, ...historyClub])
console.log(uniqueStudents)
console.log('Студенти, що відвідують хоча б один гурток -', ...uniqueStudents)
// Кількість таких студентів
console.log('Кількість таких студентів -', uniqueStudents.size)