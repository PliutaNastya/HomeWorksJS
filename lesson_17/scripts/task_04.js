"use strict"

// Задача 04. Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми

// агрегація, масив товарів

const checkNumberValue = (value, message) => {
	if (value < 0 || isNaN(value) || !isFinite(value) || typeof(value) !== "number") throw new Error(message)
}
const checkStringValue = (value, message) => {
	if (!value || typeof(value) !== "string") throw new Error(message)
	
}
const checkCompany = (company, message) => {
	if (!(company instanceof Company)) throw new Error(message)
}

class Company {
	#name
	#regNum
	constructor(name, regNum) {
		this.name = name
		this.regNum = regNum
	}

	get name() {
		return this.#name
	}
	set name(newName) {
		checkStringValue(newName, "Введено некоректну назву Компанії")
		this.#name = newName
	}

	get regNum() {
		return this.#regNum
	}
	set regNum(newRegNum) {
		checkStringValue(newRegNum, "Введено некоректний регістраційний номер компанії")
		this.#regNum = newRegNum
	}
}

class Product {
	#id
	#name
	#unit
	#quantity
	#company
	constructor(id, name, unit, quantity, company) {
		this.id = id
		this.name = name
		this.unit = unit
		this.quantity = quantity
		this.company = company
	}

	get id() {
		return this.#id
	}
	set id(newId) {
		checkNumberValue(newId, "Введено некоректний id")
		this.#id = newId
	}

	get name() {
		return this.#name
	}
	set name(newName) {
		checkStringValue(newName, "Введено некоректну назву продукту")
		this.#name = newName
	}

	get unit() {
		return this.#unit
	}
	set unit(newUnit) {
		checkStringValue(newUnit, "Введено некоректну назву одиниці вимірювання")
		this.#unit = newUnit
	}

	get quantity() {
		return this.#quantity
	}
	set quantity(newQuantity) {
		checkNumberValue(newQuantity, "Введено некоректну кількість продукту")
		this.#quantity = newQuantity
	}

	get company() {
		return this.#company
	}
	set company(newCompany) {
		checkCompany(newCompany, "Компанія повинна бути об'єктом типу Company")
		this.#company = newCompany
	}
}

class Storage {
	constructor(name) {
		this.name = name
		this.productList = []
	}

	addProduct(product) {
		let existingProd = this.productList.find(el => el.id === product.id)
		if (!existingProd) this.productList.push(product)
		else existingProd.quantity += product.quantity
		
		return this.productList
	}

	removeProduct(productId) {
		this.productList = this.productList.filter(el => el.id !== productId)
	}

	filterByProductName(prodName) {
		const filteredByNameProductList = this.productList.filter(el => el.name === prodName)
		return filteredByNameProductList
	}

	filterByCompanyName(companyName) {
		const filteredByCompanyNameProdList = this.productList.filter(el => el.company.name === companyName)
		return filteredByCompanyNameProdList
	}
}

// Тести згенеровано чатом GPT
function runTests() {
	try {
		// Тест 1: Створення компанії з некоректним ім'ям
		const company1 = new Company("ABC Ltd.", "12345");
		console.log("Тест 1 (Company): ✔ Створено компанію");

		// Тест 2: Створення компанії з некоректним реєстраційним номером
		try {
			const company2 = new Company("XYZ Ltd.", "");
			console.log("Тест 2 (Company): ❌ Невірно встановлено реєстраційний номер");
		} catch (error) {
			console.log("Тест 2 (Company): ✔ Викидається помилка для порожнього реєстраційного номера");
		}

		// Тест 3: Створення продукту з некоректним id
		try {
			const product1 = new Product(1, "Продукт 1", "шт", -5, company1);
			console.log("Тест 3 (Product): ❌ Невірно встановлено кількість");
		} catch (error) {
			console.log("Тест 3 (Product): ✔ Викидається помилка для некоректної кількості");
		}

		// Тест 4: Створення продукту з некоректною назвою
		try {
			const product2 = new Product(2, "", "шт", 20, company1);
			console.log("Тест 4 (Product): ❌ Невірно встановлено назву продукту");
		} catch (error) {
			console.log("Тест 4 (Product): ✔ Викидається помилка для порожньої назви продукту");
		}

		// Тест 5: Додавання продукту в склад
		const storage = new Storage("Склад 1");
		const product3 = new Product(3, "Продукт 3", "шт", 30, company1);
		storage.addProduct(product3);
		if (storage.productList.length === 1) {
			console.log("Тест 5 (Storage): ✔ Продукт успішно додано");
		} else {
			console.log("Тест 5 (Storage): ❌ Продукт не додано");
		}

		// Тест 6: Додавання того ж продукту ще раз
		storage.addProduct(new Product(3, "Продукт 3", "шт", 10, company1));
		if (storage.productList.find(el => el.id === 3).quantity === 40) {
			console.log("Тест 6 (Storage): ✔ Кількість продукту оновлена");
		} else {
			console.log("Тест 6 (Storage): ❌ Кількість продукту не оновлена");
		}

		// Тест 7: Видалення продукту
		storage.removeProduct(3);
		if (storage.productList.length === 0) {
			console.log("Тест 7 (Storage): ✔ Продукт успішно видалено");
		} else {
			console.log("Тест 7 (Storage): ❌ Продукт не видалено");
		}

		// Тест 8: Фільтрація по назві продукту
		const filteredByName = storage.filterByProductName("Продукт 3");
		if (filteredByName.length === 0) {
			console.log("Тест 8 (Storage): ✔ Фільтрація за назвою працює");
		} else {
			console.log("Тест 8 (Storage): ❌ Фільтрація за назвою не працює");
		}

		// Тест 9: Фільтрація по назві компанії
		const company2 = new Company("XYZ Ltd.", "54321");
		const product4 = new Product(4, "Продукт 4", "шт", 50, company2);
		storage.addProduct(product4);
		const filteredByCompany = storage.filterByCompanyName("XYZ Ltd.");
		if (filteredByCompany.length === 1) {
			console.log("Тест 9 (Storage): ✔ Фільтрація за компанією працює");
		} else {
			console.log("Тест 9 (Storage): ❌ Фільтрація за компанією не працює");
		}

	} catch (error) {
		console.log(`Помилка тесту: ${error.message}`);
	}
}
runTests();
