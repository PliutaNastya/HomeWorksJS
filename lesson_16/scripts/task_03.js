"use strict"

// Задача 03. Задача 3. Об’єкт “Фірма” (використати члени-класи)
// поля
// назва фірми;
// дата заснування(рік, місяць);
// послуги(назва послуги, вартість, термін виконання);
// адреси філіалів(країна, місто, вулиця, номер будинку);
// методи
// визначення кількості років існування фірми;
// виведення всіх філіалів фірми у вказаному місті;
// виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

function checkNaturalNumber(value, message) {
	if (value <= 0 || isNaN(value) || typeof (value) !== "number") throw new Error(message)
}

class FoundationDate {
	#year
	#month
	constructor(year, month) {
		this.Year = year
		this.Month = month
	}

	get Year() {
		return this.#year
	}
	set Year(newYear) {
		checkNaturalNumber(newYear, "Введено некоректний рік заснування")
		this.#year = newYear
	}
	get Month() {
		return this.#month
	}
	set Month(newMonth) {
		if (newMonth < 1 || newMonth > 12 || isNaN(newMonth) || typeof (newMonth) !== "number") throw new Error("Введено некоректний місяць заснування")
		this.#month = newMonth
	}
	toString() {
		return `Дата заснування - ${String(this.Month).padStart(2, "0")}.${this.Year}`
	}
}

class Service {
	#name
	#price
	#deadline
	constructor(name, price, deadline) {
		this.Name = name
		this.Price = price
		this.Deadline = deadline
	}
	get Name() {
		return this.#name
	}
	set Name(newName) {
		if (!newName) throw new Error("Введено некоректну назву послуги")
		this.#name = newName
	}
	get Price() {
		return this.#price
	}
	set Price(newPrice) {
		checkNaturalNumber(newPrice, "Введено некоректну ціну послуги")
		this.#price = newPrice
	}
	get Deadline() {
		return this.#deadline
	}
	set Deadline(newDeadline) {
		checkNaturalNumber(newDeadline, "Введено некоректний термін виконання")
		this.#deadline = newDeadline
	}
	toString() {
		return `Послуга - ${this.Name}; Ціна - ${this.Price}; Термін виконання - ${this.Deadline} <br>`
	}
}

class BranchAddress {
	#country
	#city
	#street
	#houseNumber
	constructor(country, city, street, houseNumber) {
		this.Country = country
		this.City = city
		this.Street = street
		this.HouseNumber = houseNumber
	}
	get Country() {
		return this.#country
	}
	set Country(newCountry) {
		if (!newCountry) throw new Error("Некоректний ввід країни")
		this.#country = newCountry
	}
	get City() {
		return this.#city
	}
	set City(newCity) {
		if (!newCity) throw new Error("Некоректний ввід міста")
		this.#city = newCity
	}
	get Street() {
		return this.#street
	}
	set Street(newStreet) {
		if (!newStreet) throw new Error("Некоректний ввід вулиці")
		this.#street = newStreet
	}
	get HouseNumber() {
		return this.#houseNumber
	}
	set HouseNumber(newHouseNumber) {
		checkNaturalNumber(newHouseNumber, "Введено некоректний номер будинку")
		this.#houseNumber = newHouseNumber
	}
	toString() {
		return `Адреса - ${this.Country}, ${this.City}, ${this.Street}, ${this.HouseNumber} <br>`
	}
}

class Firm {
	#name
	constructor(name, foundationDate, service, branchAddress) {
		branchAddress
		this.Name = name
		this.foundationDate = foundationDate
		this.service = service
		this.branchAddress = branchAddress
	}
	get Name() {
		return this.#name
	}
	set Name(newName) {
		if (!newName) throw new Error("Введена некоректна назва Фірми")
		this.#name = newName
	}

	getFirmYears() {
		const presentDate = {
			month: 4,
			year: 2025
		}
		let firmYears = presentDate.year - this.foundationDate.Year

		if (presentDate.month < this.foundationDate.Month) firmYears--

		return firmYears
	}

	getBranchesInCity(cityName) {
		let res = ""
		this.branchAddress.forEach(el => el.City === cityName ? res += el.toString() : null)
		return res
	}

	getAvailableServices(maxPrice, maxDeadline) {
		let res = ""
		this.service.forEach(el => el.Price <= maxPrice && el.Deadline <= maxDeadline ? res += el.toString() : null)
		return res
	}
}

try {
	const foundationDate = new FoundationDate(2021, 2)
	const servicesList = [
		new Service("Service-1", 245, 10),
		new Service("Service-2", 3456, 100),
		new Service("Service-3", 765, 20),
	]
	const branchAddresses = [
		new BranchAddress("Країна-1", "Місто-1", "Вулиця-1", 23),
		new BranchAddress("Країна-2", "Місто-2", "Вулиця-2", 3),
		new BranchAddress("Країна-3", "Місто-3", "Вулиця-3", 5)
	]
	const someFirm = new Firm("Firm Name", foundationDate, servicesList, branchAddresses)
	document.write(`<p>Фірмі існує ${someFirm.getFirmYears()} роки</p>`)
	document.write(`<p>${someFirm.getBranchesInCity("Місто-3")}</p>`)
	document.write(`<p>${someFirm.getAvailableServices(4000, 100)}</p>`)
} catch (error) {
	document.write(error)
}




// Ці тести згенерував чатGPT
function runFirmTests() {
	console.log("🏢 Тести для класу Firm та допоміжних класів");

	// 1. Перевірка створення фірми
	let firm;
	try {
		const foundationDate = new FoundationDate(2015, 5);
		const services = [
			new Service("Розробка сайту", 1000, 10),
			new Service("SEO оптимізація", 500, 5),
			new Service("UX аудит", 300, 3)
		];
		const branches = [
			new BranchAddress("Україна", "Київ", "Хрещатик", 10),
			new BranchAddress("Україна", "Одеса", "Дерибасівська", 5),
			new BranchAddress("Польща", "Варшава", "Маршалковська", 12)
		];
		firm = new Firm("DigitalStudio", foundationDate, services, branches);
		console.log("✅ Створення фірми успішне");
	} catch (err) {
		console.error("❌ Помилка при створенні фірми:", err.message);
	}

	// 2. Перевірка років існування фірми
	try {
		const years = firm.getFirmYears();
		console.assert(years === 9, `❌ Очікувалося 9 років, отримано ${years}`);
		console.log("✅ Тест на обчислення років існування пройдено");
	} catch (err) {
		console.error("❌ Помилка при обчисленні років:", err.message);
	}

	// 3. Перевірка філіалів у місті "Київ"
	console.log("📍 Філіали у місті 'Київ':");
	const kyivBranches = firm.branchAddress.filter(b => b.City === "Київ");
	if (kyivBranches.length === 1) {
		console.log("✅ Знайдено філіал у Києві:");
		console.log(kyivBranches[0].toString());
	} else {
		console.error("❌ Помилка при пошуку філіалів у Києві");
	}

	// 4. Послуги за бюджетом до 500 та терміном до 5 днів
	console.log("💼 Доступні послуги до 500₴ та до 5 днів:");
	const available = firm.service.filter(s => s.Price <= 500 && s.Deadline <= 5);
	if (available.length === 2) {
		console.log("✅ Знайдено послуги:");
		available.forEach(s => console.log(s.toString()));
	} else {
		console.error("❌ Помилка при фільтрації послуг");
	}

	// 5. Перевірка помилок: некоректна дата
	try {
		new FoundationDate(2025, 13);
		console.error("❌ Некоректний місяць не викликав помилку");
	} catch {
		console.log("✅ Некоректний місяць правильно викликав помилку");
	}

	// 6. Перевірка помилок: некоректна ціна послуги
	try {
		new Service("Некоректна послуга", -100, 3);
		console.error("❌ Некоректна ціна не викликала помилку");
	} catch {
		console.log("✅ Некоректна ціна правильно викликала помилку");
	}

	// 7. Перевірка помилок: неправильна адреса
	try {
		new BranchAddress("Україна", "", "Головна", 1);
		console.error("❌ Порожнє місто не викликало помилку");
	} catch {
		console.log("✅ Порожнє місто правильно викликало помилку");
	}

	console.log("🎯 Усі тести завершено");
}
runFirmTests()

