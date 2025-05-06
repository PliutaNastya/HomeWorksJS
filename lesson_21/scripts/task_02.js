"use strict"

// Задача 02. Створити клас Client
// Властивості
	// ID
	// ПІБ
	// Кількість грошей на рахунку
// Методи
	// Додавання грошей
	// Зняття грошей
	// ToString
	// На основі цього класу створити клас GoldenClient
// Властивості
	// ID
	// ПІБ
	// Кількість грошей на рахунку
	// Ліміт кредитних коштів
	// Відсоток за використання кредитних коштів
// Методи
	// Додавання грошей
	// Зняття грошей
	// Визначення пені за використання кредитних коштів
	// ToString

class Validator {
	static validateString(value, message) {
		if (!value || typeof value !== 'string') throw new TypeError(message)
	}

	static validateNumber(value, message) {
		if (!isFinite(value) || isNaN(value) || typeof value !== "number") throw new Error(message)
	}
}

class Client {
	#id
	#fullName
	#balance
	constructor(id, fullName, balance) {
		this.id = id
		this.fullName = fullName
		this.balance = balance
	}
	get id() {
		return this.#id
	}
	set id(newId) {
		Validator.validateNumber(newId, "Некоректно введене значення id")
		this.#id = newId
	}

	get fullName() {
		return this.#fullName
	}
	set fullName(newFullName) {
		Validator.validateString(newFullName, "Некоректно введено ПІБ")
		this.#fullName = newFullName
	}

	get balance() {
		return this.#balance
	}
	set balance(newBalance) {
		Validator.validateNumber(newBalance, "Некоректно введено баланс рахунку")
		this.#balance = newBalance
	}

	addMoney(moneyAmount) {
		return this.balance += moneyAmount
	}

	removeMoney(moneyAmount) {
		return this.balance -= moneyAmount
	}

	toString() {
		return `На балансі у вас - ${this.balance} грн`
	}
}

class GoldenClient extends Client {
	#creditLimit
	#creditPercent
	constructor(id, fullName, balance, creditLimit, creditPercent) {
		super(id, fullName, balance)
		this.creditLimit = creditLimit
		this.creditPercent = creditPercent
	}

	get creditLimit() {
		return this.#creditLimit
	}
	set creditLimit(newCreditLimit) {
		Validator.validateNumber(newCreditLimit, "Некоректно введено кредитний ліміт")
		this.#creditLimit = newCreditLimit
	}

	get creditPercent() {
		return this.#creditPercent
	}
	set creditPercent(newCreditPercent) {
		Validator.validateNumber(newCreditPercent, "Некоректно введено кредитний ліміт")
		this.#creditPercent = newCreditPercent
	}

	removeMoney(moneyAmount) {
		const availableMoneyAmount = this.balance + this.creditLimit
		if (moneyAmount <= availableMoneyAmount) {
			this.balance -= moneyAmount
			return this.balance
		} else throw new Error("Неможливо зняти більше ніж дозволено кредитним лімітом.")
		
	}

	getCreditPenalty() {
		let penalty = 0
		if (this.balance < 0) {
			const userCredit = Math.abs(this.balance)
			penalty = userCredit * (this.#creditPercent / 100)
		}
		return penalty
	}
}

try {
	const c = new Client(1, 'Плюта Аліса Костянтинівна', 56000)
	console.log(c.toString())

	c.addMoney(5600)
	console.log(c.toString())

	c.removeMoney(61606)
	console.log(c.toString())

	const c1 = new GoldenClient(1, 'Плюта Аліса Костянтинівна', 56000, 4000, 4)
	console.log(c1.toString())
	c1.removeMoney(60000)
	console.log(c1.toString())
	console.log(c1.getCreditPenalty())
	c1.removeMoney(3000)
	console.log(c1.getCreditPenalty())
} catch (error) {
	console.log(error)
}

// Згенеровано чатом GPT (перевірка для себе)
try {
	console.log("=== Тест класу Client ===")
	const client = new Client(1, "Іваненко Марія", 10000)
	console.log("✅ Створено клієнта:", client.fullName)
	console.log("💰 Початковий баланс:", client.balance)

	client.addMoney(5000)
	console.log("💳 Після додавання 5000 грн:", client.balance)

	client.removeMoney(3000)
	console.log("💸 Після зняття 3000 грн:", client.balance)

	console.log("ℹ️ ToString:", client.toString())

	console.log("\n=== Тест класу GoldenClient ===")
	const golden = new GoldenClient(2, "Петренко Ігор", 10000, 2000, 5)
	console.log("🌟 Створено GoldenClient:", golden.fullName)
	console.log("💰 Баланс:", golden.balance)
	console.log("💳 Кредитний ліміт:", golden.creditLimit)
	console.log("📈 Відсоток за кредит:", golden.creditPercent + "%")

	golden.removeMoney(11000)
	console.log("💸 Після зняття 11000 грн (в кредит):", golden.balance)
	console.log("⚠️ Пеня за використання кредиту:", golden.getCreditPenalty())

	// Проба перевищити кредитний ліміт
	try {
		golden.removeMoney(2000)
	} catch (e) {
		console.log("❌ Спроба перевищити ліміт:", e.message)
	}

	console.log("ℹ️ ToString:", golden.toString())
	console.log("✅ Поточна пеня:", golden.getCreditPenalty())

} catch (error) {
	console.log("❌ Помилка:", error.message)
}
