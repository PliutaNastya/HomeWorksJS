"use strict"

// Задача 06. Реалізувати класи TTime (“години.хвилини”) та TMoney (“гривні.копійки”), які містять методи збільшення/зменшення величин на 1 та додавання двох величин. Згенерувати поступово випадковим чином   пар (час, гроші), де час – тривалість виконання роботи, а гроші – вартість однієї хвилини роботи працівників. Обчислити витрати на виконання кожної із робіт.

// Як бачимо, у обох класах є два поля, для кожного з яких можна задати мінімальне та мксимальне значення.. Тому, щоб не дублювати код можна описати спільного предка - клас TPair, який представляє пару чисел і містить методи для їх збільшення/зменшення  на 1 та додавання двох величин.

//       Pair
// --- властивості ---
//number1 (maxLimit2)
// number2 (maxLimit1)
// --- методи ----
// increase
// decrease
// add

class LimitedNumber {
	#value

	constructor(value, limitValue) {
		this.limitValue = limitValue

		this.value = value
	}

	get value() {
		return this.#value
	}
	set value(newValue) {

		if (typeof newValue !== "number" || isNaN(newValue)) throw new Error("Некоректно введене число")

		if (isFinite(this.limitValue)) {
			if (newValue < 0) {
				const diff = -newValue % this.limitValue
				this.#value = this.limitValue - diff
			} else this.#value = newValue % this.limitValue
		} else this.#value = newValue
	}
}

class Pair {
	constructor(val2, val1, minLimit, maxLimit) {
		this.maxLimit = maxLimit
		this.minLimit = minLimit

		this.val2 = new LimitedNumber(val2, maxLimit)
		this.val1 = new LimitedNumber(val1, minLimit)
	}
	increase() {
		let newVal = this.val1.value + 1
		if (newVal === this.maxLimit) {
			this.val1.value = 0
			this.val2.value += 1
		} else this.val1.value = newVal
	}
	decrease() {
		let newVal = this.val1.value - 1
		if (newVal < 0) {
			this.val1.value = this.maxLimit - 1
			this.val2.value -= 1
		} else this.val1.value = newVal
	}

	toString() {
		return `${this.val2.value} : ${this.val1.value}`;
	}


	toString() {
		return `${this.val2.value} : ${this.val1.value}`
	}
}
//------ Time
class Time extends Pair {
	constructor(h, m) {
		super(h, m, 24, 60)
	}
	get h() {
		return this.val2.value
	}
	set h(val) {
		this.val2.value = val
	}

	get m() {
		return this.val1.value
	}
	set m(val) {
		this.val1.value = val
	}
	toMinutes() {
		return this.h * 60 + this.m
	}

	add(otherTime) {
		const totalMinutes = this.toMinutes() + otherTime.toMinutes()
		const h = Math.floor(totalMinutes / 60) % 24
		const m = totalMinutes % 60
		return new Time(h, m)
	}

	toString() {
		const pad = val => val.toString().padStart(2, '0')
		return `${pad(this.h)} год. ${pad(this.m)} хв.`
	}
}

//-----
const t1 = new Time(23, 45)
document.write(t1.h)

//---- Money
class Money extends Pair {
	constructor(grn, coins) {
		super(grn, coins, Infinity, 100)
	}
	get grn() {
		return this.val2.value
	}
	set grn(val) {
		this.val2.value = val
	}

	get coins() {
		return this.val1.value
	}
	set coins(val) {
		this.val1.value = val
	}

	toCents() {
		return this.grn * 100 + this.coins
	}

	add(otherMoney) {
		const totalCents = this.toCents() + otherMoney.toCents()
		const grn = Math.floor(totalCents / 100)
		const coins = totalCents % 100
		return new Money(grn, coins)
	}

	toString() {
		const pad = val => val.toString().padStart(2, '0')
		return `${this.grn} грн. ${pad(this.coins)} коп.`
	}
}

const generateRandomPair = () => {
	const randomHours = Math.floor(Math.random() * 24)
	const randomMinutes = Math.floor(Math.random() * 60)
	const randomGrn = Math.floor(Math.random() * 1000)
	const randomCoins = Math.floor(Math.random() * 100)

	const time = new Time(randomHours, randomMinutes)
	const money = new Money(randomGrn, randomCoins)

	return { time, money }
}

const calculateCosts = (time, money) => {
	const timeInMinutes = time.toMinutes()
	const moneyInCents = money.toCents()

	const totalCostInCents = timeInMinutes * moneyInCents
	const grn = Math.floor(totalCostInCents / 100)
	const coins = totalCostInCents % 100

	return new Money(grn, coins)
}

const { time, money } = generateRandomPair()
console.log(`Час роботи складає: ${time.toString()}, а вартість за хвилину: ${money.toString()}`)

const cost = calculateCosts(time, money)
console.log(`Робітник отримав: ${cost.toString()}`)


// Згенеровано чатом GPT (перевірка для себе)
function assertEquals(actual, expected, message) {
	const passed = actual === expected
	console.log(`${passed ? '✅' : '❌'} ${message} | Отримано: ${actual}, Очікувалося: ${expected}`)
}
// Тест LimitedNumber
function testLimitedNumber() {
	console.log("=== Тести LimitedNumber ===")
	const limited = new LimitedNumber(65, 60)
	assertEquals(limited.value, 5, "LimitedNumber: Перевірка обмеження (value % limit)")

	limited.value = -5
	assertEquals(limited.value, 55, "LimitedNumber: Перевірка від’ємного значення")

	const noLimit = new LimitedNumber(123, Infinity)
	assertEquals(noLimit.value, 123, "LimitedNumber: Без обмеження (Infinity)")
}
// Тест Pair increase/decrease
function testPair() {
	console.log("=== Тести Pair ===")
	const p = new Pair(1, 59, 60, 100) // val2 = 1, val1 = 59 (maxLimit = 60)
	p.increase()
	assertEquals(p.val1.value, 0, "Pair.increase: val1 має обнулитися")
	assertEquals(p.val2.value, 2, "Pair.increase: val2 має збільшитись")

	p.decrease()
	assertEquals(p.val1.value, 59, "Pair.decrease: val1 має бути 59")
	assertEquals(p.val2.value, 1, "Pair.decrease: val2 має зменшитись")
}
// Тест Time
function testTime() {
	console.log("=== Тести Time ===")
	const t1 = new Time(2, 30)
	const t2 = new Time(1, 45)
	const t3 = t1.add(t2)
	assertEquals(t3.h, 4, "Time.add: Сума годин")
	assertEquals(t3.m, 15, "Time.add: Сума хвилин")

	const t4 = new Time(23, 59)
	t4.increase()
	assertEquals(t4.h, 0, "Time.increase: Перехід доби")
	assertEquals(t4.m, 0, "Time.increase: Перехід хвилини")

	const t5 = new Time(0, 0)
	t5.decrease()
	assertEquals(t5.h, 23, "Time.decrease: Перехід у попередній день")
	assertEquals(t5.m, 59, "Time.decrease: Перехід хвилини")
}
// Тест Money
function testMoney() {
	console.log("=== Тести Money ===")
	const m1 = new Money(10, 90)
	const m2 = new Money(5, 25)
	const m3 = m1.add(m2)
	assertEquals(m3.grn, 16, "Money.add: Сума гривень")
	assertEquals(m3.coins, 15, "Money.add: Сума копійок")

	const m4 = new Money(0, 0)
	m4.decrease()
	assertEquals(m4.grn, -1, "Money.decrease: Від’ємна гривня")
	assertEquals(m4.coins, 99, "Money.decrease: Перехід копійок")
}
// Тест розрахунку витрат
function testCalculateCosts() {
	console.log("=== Тест calculateCosts ===")
	const time = new Time(1, 30) // 90 хвилин
	const rate = new Money(1, 50) // 1.50 грн => 150 коп
	const cost = calculateCosts(time, rate) // 90 * 150 = 13500 коп = 135 грн

	assertEquals(cost.grn, 135, "calculateCosts: Перевірка гривень")
	assertEquals(cost.coins, 0, "calculateCosts: Перевірка копійок")
}
// Виконати всі тести
function runTests() {
	testLimitedNumber()
	testPair()
	testTime()
	testMoney()
	testCalculateCosts()
}
runTests()
