"use strict"

// Задача 03. Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
// Вивести всіх простих клієнтів;
// Вивести всіх клієнтів GoldenClient;
// Знайти сумарну кількість грошей на рахунку;

class Validator {
	static validateString(value, message) {
		if (!value || typeof value !== 'string') throw new TypeError(message)
	}

	static validateNumber(value, message) {
		if (!isFinite(value) || isNaN(value) || typeof value !== "number") throw new Error(message)
	}
	
	static validateArray(arr, message) {
		if (!Array.isArray(arr) || !arr.length) throw new Error(message)
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

class Bank {
	#clientData
	constructor(clientData) {
		this.clientData = clientData
	}

	get clientData() {
		return this.#clientData
	}
	set clientData(newClientData) {
		Validator.validateArray(newClientData, "Введенні дані не є масивом")
		this.#clientData = newClientData
	}

	countSimpleClients() {
		let count = 0

		for (const client of this.clientData) {
			if (client instanceof Client && !(client instanceof GoldenClient)) count++
		}

		return count
	}

	countGoldenClients() {
		let count = 0

		for (const client of this.clientData) {
			if (client instanceof GoldenClient) count++
		}

		return count
	}

	sumTotalMoney() {
		return this.clientData.reduce((prevTotalSum, client) => prevTotalSum + client.balance, 0)
	}
}

const bankClients = [
	new Client(1, "Іван Петренко", 5000),
	new GoldenClient(2, "Олена Іванова", 15000, 5000, 5),
	new Client(3, "Микола Коваль", 2500),
	new GoldenClient(4, "Марія Шевченко", 20000, 7000, 8),
	new Client(5, "Анна Сидорова", 800),
	new GoldenClient(6, "Андрій Власенко", -1000, 3000, 10),
	new Client(7, "Віктор Мельник", 12000),
	new GoldenClient(8, "Ірина Яценко", 5000, 2000, 6)
]

const b = new Bank(bankClients)
console.log(b.countSimpleClients())
console.log(b.countGoldenClients())
console.log(b.sumTotalMoney())


// Згенеровано чатом GPT (перевірка для себе)
function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log(`✅ ${testName}`);
	} else {
		console.error(`❌ ${testName} (очікувалось ${expected}, отримано ${actual})`);
	}
}
function runTests() {
	console.log("=== Тести для Client ===");

	let client = new Client(1, "Іван Петренко", 5000);
	assertEqual(client.id, 1, "Client ID зберігається правильно");
	assertEqual(client.fullName, "Іван Петренко", "Client ім'я зберігається правильно");
	assertEqual(client.balance, 5000, "Client баланс зберігається правильно");

	client.addMoney(2000);
	assertEqual(client.balance, 7000, "addMoney додає гроші правильно");

	client.removeMoney(1500);
	assertEqual(client.balance, 5500, "removeMoney зменшує баланс правильно");

	console.log("\n=== Тести для GoldenClient ===");

	let gold = new GoldenClient(2, "Олена Іванова", 10000, 5000, 10);
	gold.removeMoney(12000);
	assertEqual(gold.balance, -2000, "GoldenClient може піти в мінус в межах кредиту");

	assertEqual(gold.getCreditPenalty(), 200, "getCreditPenalty рахує штраф правильно");

	console.log("\n=== Тести для Bank ===");

	const clients = [
		new Client(1, "Іван", 1000),
		new GoldenClient(2, "Олена", 5000, 2000, 5),
		new Client(3, "Микола", 300),
		new GoldenClient(4, "Марія", 7000, 3000, 7),
		new Client(5, "Анна", 2000)
	];

	const bank = new Bank(clients);

	assertEqual(bank.countSimpleClients(), 3, "countSimpleClients рахує простих клієнтів");
	assertEqual(bank.countGoldenClients(), 2, "countGoldenClients рахує Golden клієнтів");
	assertEqual(bank.sumTotalMoney(), 15300, "sumTotalMoney підраховує загальний баланс");
}
runTests();