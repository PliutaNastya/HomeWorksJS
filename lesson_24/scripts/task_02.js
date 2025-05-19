"use strict"

// Задача 02. Дано Shop -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»

class Validator {
	static validateString(value, message) {
		if (!value || typeof value !== 'string') throw new TypeError(message)
	}

	static validateNumber(value, message) {
		if (value < 0 || !isFinite(value) || isNaN(value) || typeof value !== "number") throw new Error(message)
	}

	static validateArray(arr, message) {
		if (!Array.isArray(arr) || !arr.length) throw new Error(message)
	}
}

class Product {
	#name
	#price
	#amount
	constructor(name, price, amount) {
		this.name = name
		this.price = price
		this.amount = amount
	}

	get name() {
		return this.#name
	}
	set name(newName) {
		Validator.validateString(newName, "Некоректно введено назву товару")
		this.#name = newName
	}

	get price() {
		return this.#price
	}
	set price(newPrice) {
		Validator.validateNumber(newPrice, "Некоректно введено ціну")
		this.#price = newPrice
	}

	get amount() {
		return this.#amount
	}
	set amount(newAmount) {
		Validator.validateNumber(newAmount, "Некоректно введено кількість товару")
		this.#amount = newAmount
	}
}

class Shop {
	#productsList
	constructor(productsList) {
		this.productsList = productsList
	}

	get productsList() {
		return this.#productsList
	}
	set productsList(newProductsList) {
		Validator.validateArray(newProductsList, "Введенні дані не є масивом")
		this.#productsList = newProductsList
	}

	[Symbol.iterator]() {
		this.current = 0
		return this
	}

	next() {
		if (this.current < this.productsList.length) {

			const currentProduct = this.productsList[this.current++]
			const { name, price, amount } = currentProduct
			return {
				done: false,
				value: `${name} - ${price * amount}грн`
			}
		} else {
			return {
				done: true
			}
		}
	}
}

const products = [
	{ name: "Молоко", price: 32, amount: 2 },
	{ name: "Хліб", price: 22, amount: 1 },
	{ name: "Сир", price: '140', amount: 0.5 },
	{ name: "Яйця", price: 60, amount: 1 },
	{ name: "Яблука", price: 28, amount: 3 },
	{ name: "Картопля", price: 18, amount: 4 },
	{ name: null, price: 40, amount: 1.5 },
	{ name: "Шоколад", price: 55, amount: 2 },
	{ name: "Чай", price: 90, amount: "1" },
	{ name: "Кава", price: 130, amount: -6 }
]

const productsItems = []

const checkProduct = (product) => {
	try {
		const { name, price, amount } = product
		const newProduct = new Product(name, price, amount)
		productsItems.push(newProduct)
	} catch (error) {
		console.log(error)
	}
}
for (let product of products) {
	checkProduct(product)
}

try {
	const shop = new Shop(productsItems)

	for (const product of shop) {
		console.log(product)
	}
} catch (error) {
	console.log(error)
}
