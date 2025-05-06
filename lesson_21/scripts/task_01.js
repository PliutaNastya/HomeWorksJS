"use strict"

// Задача 01. Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження). На основі класу Person  розробити клас Worker (додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування; методи:визначення кількості виплачених коштів за рік, та визначення розміру податків)


class Validator {
	static validateString(value, message) {
		if (!value || typeof value !== 'string') throw new TypeError(message)
	}
	
	static validateNumber(value, message) {
		if (value < 0 || !isFinite(value) || isNaN(value) || typeof value !== "number") throw new Error(message)
	}
}
class Person {
	#name
	#age
	#address
	constructor(name, age, address) {
		this.name = name
		this.age = age
		this.address = address
	}

	get name() {
		return this.#name
	}
	set name(newName) {
		Validator.validateString(newName, "Некоректно введене ім'я")
		this.#name = newName
	}

	get age() {
		return this.#age
	}
	set age(newAge) {
		Validator.validateNumber(newAge, "Некоректно введено вік")
		this.#age = newAge
	}

	get address() {
		return this.#address
	}
	set address(newAddress) {
		Validator.validateString(newAddress, "Некоректно введено адресу")
		this.#address = newAddress
	}

	getBirthdayYear() {
		const presentYear = new Date().getFullYear()

		return presentYear - this.age
	}

	toString() {
		return `Ви народилися у ${this.getBirthdayYear()} році.`
	}
}

class Worker extends Person {
	#position
	#salary
	#taxPercent

	constructor(name, age, address, position, salary, taxPercent) {
		super(name, age, address)

		this.position = position
		this.salary = salary
		this.taxPercent = taxPercent
	}

	get position() {
		return this.#position
	}
	set position(newPosition) {
		Validator.validateString(newPosition, "Некоректно введено посаду")
		this.#position = newPosition
	}

	get salary() {
		return this.#salary
	}
	set salary(newSalary) {
		Validator.validateNumber(newSalary, "Некоректно введене розмір заробітної плати")
		this.#salary = newSalary
	}

	get taxPercent() {
		return this.#taxPercent
	}
	set taxPercent(newTaxPercent) {
		Validator.validateNumber(newTaxPercent, "Некоректно введене розмір податків")
		this.#taxPercent = newTaxPercent
	}

	getYearOutcome() {
		const yearlyOutcome = this.getTaxAmount()

		return this.salary - yearlyOutcome
	}

	getTaxAmount() {
		return (this.taxPercent / 100) * this.salary
	}
}

const p = new Person('Alisa', 4, 'Ireland')
console.log(p.toString())

const p1 = new Worker('Kostiantyn', 28, 'Ireland', 'chemist', 65000, 18)
console.log(p1.getYearOutcome())
console.log(p1.getTaxAmount())



// Згенеровано чатом GPT (перевірка для себе)
function assert(condition, message) {
	if (condition) {
		console.log(`✅ ${message}`)
	} else {
		console.error(`❌ ${message}`)
	}
}
function assertThrows(fn, message) {
	try {
		fn()
		console.error(`❌ ${message} (Очікувався виняток)`)
	} catch (e) {
		console.log(`✅ ${message} (Очікуваний виняток: ${e.message})`)
	}
}
function runTests() {
	console.log("=== Тестування Validator ===")
	assertThrows(() => Validator.validateString('', "тестове поле"), "Порожній рядок має спричинити виняток")
	assertThrows(() => Validator.validateString(123, "тестове поле"), "Число замість рядка має спричинити виняток")
	assert(() => { Validator.validateString("John", "name"); return true }, "Рядок має пройти валідацію")

	assertThrows(() => Validator.validateNumber("abc", "тестове поле"), "Рядок замість числа має спричинити виняток")
	assertThrows(() => Validator.validateNumber(NaN, "тестове поле"), "NaN має спричинити виняток")
	assert(() => { Validator.validateNumber(42, "age"); return true }, "Число має пройти валідацію")

	console.log("\n=== Тестування Person ===")
	const person = new Person("Ivan", 30, "Kyiv")
	assert(person.name === "Ivan", "Геттер name повертає правильне значення")
	assert(person.age === 30, "Геттер age повертає правильне значення")
	assert(person.address === "Kyiv", "Геттер address повертає правильне значення")

	assert(typeof person.getBirthdayYear() === "number", "Метод getBirthdayYear повертає число")
	assert(person.toString().includes(person.getBirthdayYear()), "toString містить рік народження")

	assertThrows(() => new Person("", 30, "Kyiv"), "Порожнє ім'я має спричинити виняток")
	assertThrows(() => new Person("Ivan", "not-a-number", "Kyiv"), "Некоректний вік має спричинити виняток")
	assertThrows(() => new Person("Ivan", 30, ""), "Порожня адреса має спричинити виняток")

	console.log("\n=== Тестування Worker ===")
	const worker = new Worker("Oksana", 40, "Lviv", "Designer", 100000, 20)

	assert(worker.position === "Designer", "Геттер position працює")
	assert(worker.salary === 100000, "Геттер salary працює")
	assert(worker.taxPercent === 20, "Геттер taxPercent працює")

	assert(worker.getTaxAmount() === 20000, "getTaxAmount повертає правильну суму")
	assert(worker.getYearOutcome() === 80000, "getYearOutcome повертає правильну суму")

	assertThrows(() => new Worker("Petro", 25, "Odesa", "", 50000, 10), "Порожня посада має спричинити виняток")
	assertThrows(() => new Worker("Petro", 25, "Odesa", "Dev", "not-a-number", 10), "Некоректна зарплата має спричинити виняток")
	assertThrows(() => new Worker("Petro", 25, "Odesa", "Dev", 50000, "bad-tax"), "Некоректний податок має спричинити виняток")
}
runTests()
