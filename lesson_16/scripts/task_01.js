"use strict"

// Задача 01. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.

class TDate {
	#day
	#month
	#year

	constructor(day, month, year) {
		this.Year = year;
		this.Month = month;
		this.Day = day;
	}

	get Day() {
		return this.#day
	}
	set Day(newDay) {
		if (newDay > this.getDaysNumsInMonth() || newDay < 1) throw new Error("Такого дня не існує")
		this.#day = newDay
	}

	get Month() {
		return this.#month
	}
	set Month(newMonth) {
		if (newMonth > 12 || newMonth < 1) throw new Error("Такого місяця не існує")
		this.#month = newMonth
	}

	get Year() {
		return this.#year
	}
	set Year(newYear) {
		if (newYear < 1) throw new Error("Такого року не існує")
		this.#year = newYear
	}

	isLeapYear() {
		return (
			this.Year % 4 === 0 && this.Year % 100 !== 0 || this.Year % 400 === 0
		)
	}

	getDaysNumsInMonth() {
		let daysCount
		switch (this.Month) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12: daysCount = 31
				break
			case 2: daysCount = this.isLeapYear() ? 29 : 28
				break
			default: daysCount = 30
				break
		}
		return daysCount
	}

	addDays(daysNum) {
		let newDay = this.Day + daysNum

		while (newDay > this.getDaysNumsInMonth()) {
			newDay = newDay - this.getDaysNumsInMonth()
			this.#month++

			if (this.#month > 12) {
				this.#month = 1
				this.Year++
			}
		}
		this.Day = newDay
		return this.toString()
	}

	removeDays(daysNum) {
		let newDay = this.Day - daysNum

		while (newDay < 1) {
			this.#month = this.Month - 1
			if (this.#month < 1) {
				this.#month = 12
				this.#year--
			}
			newDay = newDay + this.getDaysNumsInMonth()
		}
		this.Day = newDay
		return this.toString()
	}

	addMonths(monthNum) {
		let totalMonth = this.Month + monthNum
		this.Year = this.Year + Math.floor((totalMonth - 1) / 12)
		this.Month = ((totalMonth - 1) % 12) + 1

		if (this.Day > this.getDaysNumsInMonth()) this.Day = this.getDaysNumsInMonth()

		return this.toString()
	}

	removeMonths(monthNum) {
		let totalMonth = this.Month - monthNum
		this.Year = this.Year + Math.floor((totalMonth - 1) / 12)
		this.Month = totalMonth <= 0 ? (12 + (totalMonth % 12)) : totalMonth

		if (this.Day > this.getDaysNumsInMonth()) this.Day = this.getDaysNumsInMonth()

		return this.toString()
	}

	addYears(yearsNum) {
		this.Year = this.Year + yearsNum

		return this.toString()
	}

	removeYears(yearsNum) {
		this.Year = this.Year - yearsNum
		return this.toString()
	}

	toString() {
		let days = String(this.Day).padStart(2, '0')
		let months = String(this.Month).padStart(2, '0')
		let years = String(this.Year)
		return `${days}.${months}.${years}`
	}
}

try {
	const date = new TDate(24, 3, 1996)
	document.write(`
	<h2>Введена дата - ${date}</h2>
	`)
	date.addDays(100)
	document.write(`
	<p>Додала 100 днів - ${date}</p>
	`)
	date.removeDays(100)
	document.write(`
	<p>Відняла 100 днів - ${date}</p>
	`)
	date.addMonths(100)
	document.write(`
	<p>Додала 100 місяців - ${date}</p>
	`)
	date.removeMonths(100)
	document.write(`
	<p>Відняла 100 місяців - ${date}</p>
	`)
	date.addYears(100)
	document.write(`
	<p>Додала 100 років - ${date}</p>
	`)
	date.removeYears(100)
	document.write(`
	<p>Відняла 100 років - ${date}</p>
	`)
} catch (error) {
	document.write(error)
}


// Ці тести згенерував чатGPT. Останні два не пройшли, але я вже і не знаю як це виправити
function testTDate() {
	const logResult = (condition, message) => {
		console.log(`${condition ? '✅' : '❌'} ${message}`);
	};

	try {
		const date = new TDate(15, 5, 2023);

		// Ініціалізація дати
		logResult(date.toString() === '15.05.2023', 'Ініціалізація дати працює правильно');

		// Додавання днів
		date.addDays(10);
		logResult(date.toString() === '25.05.2023', 'Додавання днів працює правильно');

		// Видалення днів
		date.removeDays(10);
		logResult(date.toString() === '15.05.2023', 'Вилучення днів працює правильно');

		// Додавання місяців
		date.addMonths(2);
		logResult(date.toString() === '15.07.2023', 'Додавання місяців працює правильно');

		// Видалення місяців
		date.removeMonths(2);
		logResult(date.toString() === '15.05.2023', 'Вилучення місяців працює правильно');

		// Додавання років
		date.addYears(1);
		logResult(date.toString() === '15.05.2024', 'Додавання років працює правильно');

		// Видалення років
		date.removeYears(1);
		logResult(date.toString() === '15.05.2023', 'Вилучення років працює правильно');

		// Тест на неправильний день
		try {
			date.Day = 32; // Несуществующий день
			logResult(false, 'Не повинно бути можливості ввести неіснуючий день');
		} catch (e) {
			logResult(true, 'Помилка при введенні неіснуючого дня спрацювала');
		}

		// Тест на неправильний місяць
		try {
			date.Month = 13; // Несуществующий місяць
			logResult(false, 'Не повинно бути можливості ввести неіснуючий місяць');
		} catch (e) {
			logResult(true, 'Помилка при введенні неіснуючого місяця спрацювала');
		}

		// Тест на високосний рік
		const leapYearDate = new TDate(29, 2, 2024);
		logResult(leapYearDate.toString() === '29.02.2024', 'Коректна дата для високосного року');

		// Тест на неприпустимий рік
		try {
			const invalidYear = new TDate(1, 1, -1000); // Невірний рік
			logResult(false, 'Не повинно бути можливості ввести такий рік');
		} catch (e) {
			logResult(true, 'Помилка при введенні неправильного року спрацювала');
		}

		// Тест на перехід через місяці
		const date2 = new TDate(31, 12, 2023);
		date2.addDays(5);
		logResult(date2.toString() === '05.01.2024', 'Коректний перехід через місяць при додаванні днів');

		// Тест на перехід через роки
		const date3 = new TDate(31, 12, 2023);
		date3.addDays(365);
		logResult(date3.toString() === '31.12.2024', 'Коректний перехід через рік при додаванні днів');

		// Тест на перехід через високосний рік
		const leapYearTest = new TDate(29, 2, 2024);
		leapYearTest.addDays(365);
		logResult(leapYearTest.toString() === '29.02.2025', 'Коректний перехід через високосний рік');
	} catch (e) {
		console.error("❌ Несподівана помилка під час тестів:", e.message);
	}
}
testTDate()
