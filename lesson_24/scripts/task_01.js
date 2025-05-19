"use strict"

// Задача 01. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)

class PhoneNumber {
	#phoneNumber
	constructor(operatorsList, phoneNumber) {
		this.operatorsList = operatorsList
		this.phoneNumber = phoneNumber
	}

	get phoneNumber() {
		return this.#phoneNumber
	}
	set phoneNumber(newPhoneNumber) {
		if (!newPhoneNumber || typeof newPhoneNumber !== 'string') throw new Error("Некоректно введено номер телефону")
		this.#phoneNumber = newPhoneNumber
	}

	get cleanedPhoneNumber() {
		return this.phoneNumber.replace(/[\s+()-]/g, '')
	}

	isValidPhone() {
		const regex = /^(\+?38)?0\d{9}$/
		return regex.test(this.cleanedPhoneNumber)
	}

	getOperatorPrefix() {
		let prefix = ''
		if (this.isValidPhone()) {
			if (this.cleanedPhoneNumber.startsWith('380')) {
				prefix = this.cleanedPhoneNumber.slice(2, 5)
			} else if (this.cleanedPhoneNumber.startsWith('0')) {
				prefix = this.cleanedPhoneNumber.slice(0, 3)
			} else if (this.cleanedPhoneNumber.startsWith('80')) {
				prefix = this.cleanedPhoneNumber.slice(2, 5)
			}
		} else throw new Error("Некоректно введено номер телефону")

		// console.log('prefix:', prefix)
		// console.log('очищений номер телефону:', this.cleanedPhoneNumber)
		return prefix
	}

	getOperatorName() {
		const prefix = this.getOperatorPrefix()

		for (let obj of this.operatorsList) {
			if (obj.prefixes.includes(prefix)) return obj.name
		}

		return 'Невідомий оператор'
	}

	[Symbol.toPrimitive](hint) {

		const prefix = this.getOperatorPrefix()
		const operatorName = this.getOperatorName()

		if (hint === 'string') {
			return `${prefix} - ${operatorName}`
		}
	}
}

const operators = [
	{
		name: "MTC",
		prefixes: ["050", "066", "095", "099"]
	},
	{
		name: "Kyivstar",
		prefixes: ["067", "068", "096", "097", "098"]
	},
	{
		name: "lifecell",
		prefixes: ["063", "073", "093"]
	},
	{
		name: "Інтертелеком",
		prefixes: ["091", "092", "094"]
	},
	{
		name: "Тримоб",
		prefixes: ["089"]
	}
]

const checkPhoneNumbers = (operators, phoneNum) => {
	try {
		const phoneNumber = new PhoneNumber(operators, phoneNum)
		console.log(String(phoneNumber))
	} catch (error) {
		console.log(`Помилка в номері ${phoneNum}: ${error}`)
	}
}

const phoneNumbers = [
	'+38 050 123 4567',
	'0965566778',
	'067-123-45-67', 
	' 063 987 65 43 ',
	'+380995551122',
	'0895566778',
	'12345',
	'3801234567890',
	'+38 091 1234567',
	'0800500555',
	9501234567,
	'095 123 45 67',
	'+38 (067) 123-45-67',
	'0681234567',
	'+380630000000'
]

for (let phoneNum of phoneNumbers) {
	checkPhoneNumbers(operators, phoneNum)
}