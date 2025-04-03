"use strict"

// Задача 05. Розробити клас «Керівник танців»
// Поля
	// Масив імен хлопців
	// Масив імен дівчат
	
// Методи
	// Метод випадкового вибору імені хлопця
	// Метод випадкового вибору імені дівчини
	// Метод виведення пари для танців
	// Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців
	

if (confirm('Почати тестування?')) {
	class DanceDirector {
		constructor(girlsList, boysList) {
			this.girlsList = girlsList
			this.boysList = boysList
		}

		chooseRandomGirlIndex() {
			return Math.floor(Math.random() * this.girlsList.length)
		}

		chooseRandomBoyIndex() {
			return Math.floor(Math.random() * this.boysList.length)
		}

		displayTheDancePair() {
			const girl = this.girlsList[this.chooseRandomGirlIndex()]
			const boy = this.boysList[this.chooseRandomBoyIndex()]
			return `
		<p>Пара для танців: <span>${boy}</span> та <span>${girl}</span></p>
		`
		}

		run() {
			setInterval(() => {
				document.write(this.displayTheDancePair())
			}, 5000);
		}
	}

	const girlsList = [
		"Ольга", "Анна", "Марія", "Наталія", "Ірина",
		"Софія", "Тетяна", "Вікторія", "Аліса", "Анастасія",
		"Юлія", "Людмила", "Катерина", "Оксана", "Дарина",
		"Валентина", "Зоряна", "Лілія", "Богдана", "Христина"
	]
	const boysList = [
		"Артем", "Максим", "Олександр", "Іван", "Дмитро",
		"Богдан", "Владислав", "Юрій", "Тарас", "Андрій",
		"Роман", "Михайло", "Сергій", "Олег", "Євген",
		"Павло", "Василь", "Ігор", "Станіслав", "Володимир"
	]

	const res = new DanceDirector(girlsList, boysList)

	res.run()
}