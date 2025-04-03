"use strict"

// Задача 02.
// Задача 2. Створити об’єкт «Авто».
// Авто
// Поля(властивості)
	// Марка
	// Розмір бака
	// Кількість наявних літрів
	// Кількість місць
	// Кількість пасажирів
// Методи(дії)
	// Заправка на вказану кількість літрів
	// Виведення кількості пасажирів
	// Додавання пасажирів
	// Висадка пасажирів

if (confirm('Почати тестування?')) {
	const autoObj = {
		brand: "BMW",
		tankCapacity: 20,
		availableLiters: 5,
		seatsNumbers: 4,
		passengersNumbers: 2,

		refuelWithSomeAmoutLiters: function (liters) {
			if (this.availableLiters + liters > this.tankCapacity) this.availableLiters = this.tankCapacity
			else this.availableLiters += liters
		},

		displayPassengersNumbers: function () {
			document.write(`Кількість пасажирів складає: ${this.passengersNumbers}`)
		},

		addPassengers: function (passengersCount) {
			if (this.passengersNumbers + passengersCount > this.seatsNumbers) {
				alert(`Машина заповнена`)
				this.passengersNumbers = this.seatsNumbers
			}
			else this.passengersNumbers += passengersCount
		},

		removePassengers: function (passengersCount) {
			if (this.passengersNumbers - passengersCount < 0) {
				alert(`Нема кого висаджувати`)
				this.passengersNumbers = 0
			}
			else this.passengersNumbers -= passengersCount
		},
	}
}