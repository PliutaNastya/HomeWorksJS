"use strict"

// Задача 02. Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

class CompanyCar {
	static car = null

	constructor(driver, model, number) {
		if (CompanyCar.car) return CompanyCar.car
		
		this.driver = driver
		this.model = model
		this.number = number
		CompanyCar.car = this
	}

	toString() {
		return `
			<p>Водій - ${CompanyCar.car.driver}</p>
			<p>Марка авто - ${CompanyCar.car.model}</p>
			<p>Номер авто - ${CompanyCar.car.number}</p>
		`
	}
}

const car = new CompanyCar('Дмитро', "ЗАЗ", "ВН34567")

document.write(car)

const car2 = new CompanyCar('Анатолій', "BMW", "ОД98457")

document.write(car2)