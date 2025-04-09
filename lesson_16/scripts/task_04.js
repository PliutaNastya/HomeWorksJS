"use strict"

// Задача 04. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.


function checkNaturalNumber(value, message) {
	if (value <= 0 || isNaN(value) || typeof (value) !== "number") throw new Error(message)
}

class Banknote {
	#banknote
	#amount
	constructor(banknote, amount) {
		this.banknote = banknote
		this.amount = amount
	}
	get banknote() {
		return this.#banknote
	}
	set banknote(newBanknote) {
		checkNaturalNumber(newBanknote, "Невірно введений номінал банкноти")
		this.#banknote = newBanknote
	}
	get amount() {
		return this.#amount
	}
	set amount(newAmount) {
		checkNaturalNumber(newAmount, "Введено некоректну кількість купюр")
		this.#amount = newAmount
	}
}

class TBankomat {
	constructor(banknotesList) {
		this.banknotesList = banknotesList
	}

	getMaxAvailableSum() {
		const sum = this.banknotesList.reduce((prevSum, el) => prevSum + (el.banknote * el.amount), 0)
		return sum
	}

	getMinAvailableSum() {
		let amountList = []
		for (let el of this.banknotesList) {
			if (el.amount) {
				amountList.push(el.banknote)
			}
		}

		const minSum = Math.min(...amountList)

		return minSum
	}

	withdrawMoney(moneyAmount) {
		if (moneyAmount > this.getMaxAvailableSum()) throw new Error("В банкоматі не вистачає купюр")
		
		const sortList = this.banknotesList.slice().sort((a, b) => b.banknote - a.banknote)

		let result = {}

		while (moneyAmount > 0) {
			for (let el of sortList) {
				if (el.amount) {
					const banknoteAmountNeed = Math.floor(moneyAmount / el.banknote)
					const banknoteAmountTake = Math.min(banknoteAmountNeed, el.amount)

					if (banknoteAmountTake > 0) {
						moneyAmount = moneyAmount - (banknoteAmountTake * el.banknote)
						// зберігаю результат скільки видано яких купюр
						result[el.banknote] = banknoteAmountTake

						el.amount -= banknoteAmountTake;
					}
				}
			}
		}
		return result
	}
}

const banknotesList = [
	new Banknote(5, 5),
	new Banknote(10, 5),
	new Banknote(20, 5),
	new Banknote(50, 5),
	new Banknote(100, 5),
	new Banknote(200, 5)
]

const atm = new TBankomat(banknotesList)

console.log("Максимальна сума:", atm.getMaxAvailableSum()) 
console.log("Мінімальна сума:", atm.getMinAvailableSum())

console.log("Зняття 385 грн:")
console.log(atm.withdrawMoney(385))
console.log(banknotesList)



// Ці тести згенерував чатGPT
function runTests() {
	console.log("🔍 Тести для класів TBankomat та Banknote");

	// Створюємо список купюр
	const banknotes = [
		new Banknote(5, 5),    // 25
		new Banknote(10, 5),   // 50
		new Banknote(20, 5),   // 100
		new Banknote(50, 5),   // 250
		new Banknote(100, 5),  // 500
		new Banknote(200, 5)   // 1000
	];
	const atm = new TBankomat(banknotes);

	// Тест 1: Максимальна сума
	const maxSum = atm.getMaxAvailableSum();
	console.assert(maxSum === 1925, `❌ Помилка в getMaxAvailableSum. Очікувалося 1925, отримано ${maxSum}`);

	// Тест 2: Мінімальна сума
	const minSum = atm.getMinAvailableSum();
	console.assert(minSum === 5, `❌ Помилка в getMinAvailableSum. Очікувалося 5, отримано ${minSum}`);

	// Тест 3: Успішне зняття
	const result = atm.withdrawMoney(385);
	const expected = { 200: 1, 100: 1, 50: 1, 20: 1, 10: 1, 5: 1 };
	console.assert(JSON.stringify(result) === JSON.stringify(expected), `❌ Помилка при знятті 385. Отримано: ${JSON.stringify(result)}`);

	// Тест 4: Помилка при знятті занадто великої суми
	let errorCaught = false;
	try {
		atm.withdrawMoney(9999);
	} catch (err) {
		errorCaught = true;
	}
	console.assert(errorCaught, "❌ Очікувалася помилка при знятті суми, більшої за наявну");

	// Тест 5: Некоректний номінал
	try {
		new Banknote(-10, 5);
		console.error("❌ Помилка: некоректний номінал не викликав винятку");
	} catch (e) {
		console.log("✅ Тест на некоректний номінал пройдено");
	}

	// Тест 6: Некоректна кількість купюр
	try {
		new Banknote(10, -5);
		console.error("❌ Помилка: некоректна кількість купюр не викликала винятку");
	} catch (e) {
		console.log("✅ Тест на некоректну кількість купюр пройдено");
	}

	console.log("✅ Усі тести завершено");
}
runTests()