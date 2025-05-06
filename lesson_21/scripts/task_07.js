"use strict"

// Задачі з уроку

//! ======================================================================
// 1. Створити клас Dice, який представляє гральний кубик (одне поле faceCount - кліькістьграней) і дозволяє генерувати випадкове число від 1 до кількості граней.

// class Dice {
// 	constructor(faceCount) {
// 		this.faceCount = faceCount
// 	}
// 	getRandomScore() {
// 		return 1 + Math.floor(Math.random() * this.faceCount)
// 	}
// }

// //Потім на основі цього класу створити клас , який дозволяє вказати не тільки кількість граней, а й кількість спроб - attemptCount (при цьому як випадкове число повертається середнє значення).

// class SuperDice extends Dice {
// 	constructor(faceCount, attemptCount) {
// 		super(faceCount)
// 		this.attemptCount = attemptCount
// 	}
// 	// так як ми використовуємо ту ж назву, що у батьківсього класу
// 	// тоді треба при виклику методу/функції використати super замість this
// 	getRandomScore() {
// 		let sum = 0
// 		for (let i = 0; i < this.attemptCount; i++) {
// 			const randNum = super.getRandomScore()
// 			sum += randNum
// 		}
// 		return sum / this.attemptCount
// 	}
// }

// let s1 = new SuperDice(6, 3)
// document.write(s1.getRandomScore())

//! ======================================================================
//Створити контрольований елемент для введення числа у межах заданого діапазону. Оформити у вигляді користувацького тегу.

//https://learn.javascript.ru/custom-elements
//https://web.dev/custom-elements-v1/
// class RangeInput extends HTMLElement {
// 	constructor() {
// 		super()
// 	}
// 	onChange() {
// 		const minV = parseInt(this.getAttribute('min-v'))
// 		const maxV = parseInt(this.getAttribute('max-v'))
// 		const val = parseInt(this.input.value)
// 		if (val < minV || val > maxV) this.input.style.backgroundColor = 'red'
// 		else this.input.style.backgroundColor = 'green'
// 	}
// 	connectedCallback() {
// 		const contentElement = this.createContentElement()
// 		this.append(contentElement)
// 		contentElement.addEventListener('change', this.onChange.bind(this))
// 	}
// 	createContentElement() {
// 		this.input = document.createElement('input')
// 		this.input.type = 'number'
// 		this.input.min = this.getAttribute('min-v')
// 		this.input.max = this.getAttribute('max-v')

// 		return this.input
// 	}
// }

// window.customElements.define('range-input', RangeInput)

// function onInp(e) {
// 	console.log(e.lastChild.value)
// }

//! ======================================================================

//Створити контрольований елемент для введення числа у межах заданого діапазону. Оформити у вигляді користувацького тегу. Ізолювати контент з використанням shadow dom.

//https://web.dev/custom-elements-v1/
//https://learn.javascript.ru/custom-elements

//1.Створюємо клас на основі предка HTMLElement
// class RangeInput extends HTMLElement {
// 	constructor() {
// 		super()
// 	}
// 	onChange() {
// 		const minV = parseInt(this.getAttribute('min-v'))
// 		const maxV = parseInt(this.getAttribute('max-v'))
// 		const val = parseInt(this.input.value)
// 		if (val < minV || val > maxV) this.input.style.backgroundColor = 'red'
// 		else this.input.style.backgroundColor = 'green'
// 	}
// 	//2.Метод, який викликаєтсья коли елемент вставляється у DOM дерево
// 	connectedCallback() {
// 		const contentElement = this.createContentElement()
// 		this.append(contentElement)
// 		// Attach a shadow root to the element.
// 		let shadowRoot = this.attachShadow({ mode: 'open' })
// 		shadowRoot.appendChild(contentElement)

// 		contentElement.addEventListener('change', this.onChange.bind(this))
// 	}
// 	createContentElement() {
// 		this.input = document.createElement('input')
// 		this.input.type = 'number'
// 		this.input.min = this.getAttribute('min-v')
// 		this.input.max = this.getAttribute('max-v')

// 		return this.input
// 	}
// }

// //3. Реєструємо тег користувача (у назві повинен бути символ дефіса "-")
// window.customElements.define('range-input', RangeInput)

//! ======================================================================

/**
		 * Клас авто:
		 *     Властивості: марка, рік випуску
		 *     Методи: toString, визначеня кількості років
		 */
// class Car {
// 	constructor(model, prodYear) {
// 		this.model = model
// 		this.prodYear = prodYear
// 	}
// 	getAge() {
// 		const currentYear = new Date().getFullYear()
// 		return currentYear - this.prodYear
// 	}
// 	toString() {
// 		return `${this.model} - ${this.prodYear}`
// 	}
// }

//---- КЛАС НАЩАДОК -----
/*
	Клас авто-таксі:
 * Властивості: марка, рік випуску, назва служби таксі, тариф на 1 км., мін.ціна замовлення
 * Методи: toString, визначеня кількості років, визначення вартості замовлення
*/
// class Taxi extends Car {
// 	constructor(model, prodYear, companyTitle, ratePerKm, minOrderPrice) {
// 		super(model, prodYear)

// 		this.companyTitle = companyTitle
// 		this.ratePerKm = ratePerKm
// 		this.minOrderPrice = minOrderPrice
// 	}
// 	getOrderPrice(tripKm) {
// 		return Math.max(tripKm * this.ratePerKm, this.minOrderPrice)
// 	}
// 	toString() {
// 		return (
// 			super.toString() + `, ${this.companyTitle}: ${this.ratePerKm}грн/км`
// 		)
// 	}
// }
//=======================
// const t1 = new Taxi('Audi', 2020, 'Vizut', 52, 200)
// document.write(t1.getOrderPrice(100))

//! ======================================================================

//---- КЛАС ПРЕДОК -----
/** Нагадувач. Дозволяє виводити повідомлення через вказану кількість мілісекунд
 * Клас Reminder:
 *     Властивості: текст повідомлення, кількість мілісекунд затримки
 *     Методи: toString, run (старт таймера для повідомлення)
 */
// class Reminder {
// 	constructor(message, delayIntervalSeconds) {
// 		this.message = message
// 		this.delayIntervalSeconds = delayIntervalSeconds
// 	}
// 	run() {
// 		return setTimeout(() => {
// 			alert(this.message)
// 		}, this.delayIntervalSeconds * 1000)
// 	}
// 	toString() {
// 		return `${this.message} : ${this.delayIntervalSeconds}`
// 	}
// }
// //---- КЛАС НАЩАДОК -----
// /*  Нагадувач з звороним відліком. Дозволяє виводити повідомлення через вказану кількість мілісекунд (на екрані відображаєтсья кількість секунд, яка залишилась)
//  * Клас ReminderWithCountdown:
//  *     Властивості: текст повідомлення, кількість мілісекунд затримки
//  *     Методи: toString, run (старт таймера для повідомлення), render
//  */
// class ReminderWithCountdown extends Reminder {
// 	constructor(message, delayIntervalSeconds) {
// 		super(message, delayIntervalSeconds)
// 		this.currentSeconds = delayIntervalSeconds
// 	}
// 	displayCounter() {
// 		this.$el.innerText = this.currentSeconds
// 	}
// 	displayMessage() {
// 		alert(this.message)
// 	}
// 	run() {
// 		this.intervalId = setInterval(() => {
// 			if (this.currentSeconds > 0) {
// 				this.displayCounter()
// 				this.currentSeconds--
// 			} else {
// 				clearInterval(this.intervalId)
// 				this.displayMessage()
// 			}
// 		}, 1000)
// 	}
// 	render(containerSelector) {
// 		const containerEl = document.createElement('div')

// 		this.$el = containerEl

// 		if (containerSelector) {
// 			const parentContainer = document.querySelector(containerSelector)
// 			if (parentContainer) parentContainer.append(containerEl)
// 			else throw new Error('Батьківського елемента не знайдено!!')
// 		}
// 		return containerEl
// 	}
// }

// ///=============
// window.onload = function () {
// 	const t1 = new ReminderWithCountdown('Ok', 5)
// 	t1.render('.container')
// 	t1.run()
// }

//  const r1 = new Reminder('Ok', 2)
//  r1.run()

//! ======================================================================

//---- КЛАС ПРЕДОК -----
/** Table. Дозволяє виводити переданий двовимірний масиву у формі таблиці
 * Клас Table:
 *     Властивості: двовимірний масив
 *     Методи: render
 */
// class Table {
// 	constructor(arrData) {
// 		this.arrData = this.getArrDataCopy(arrData)
// 	}
// 	getArrDataCopy(arrData) {
// 		return JSON.parse(JSON.stringify(arrData))
// 	}
// 	createCell(cellData) {
// 		const tdEl = document.createElement('td')
// 		tdEl.innerText = cellData
// 		return tdEl
// 	}
// 	createRow(rowArrData) {
// 		const trEl = document.createElement('tr')
// 		for (const elData of rowArrData) {
// 			trEl.append(this.createCell(elData))
// 		}
// 		return trEl
// 	}
// 	createTable(arrData) {
// 		const tableEl = document.createElement('table')
// 		for (const rowData of arrData) {
// 			tableEl.append(this.createRow(rowData))
// 		}
// 		return tableEl
// 	}
// 	render(containerSelector) {
// 		const containerEl = document.createElement('div')

// 		const table = this.createTable(this.arrData)
// 		containerEl.append(table)
// 		this.$table = table

// 		this.$el = containerEl
// 		if (containerSelector) {
// 			const parentContainer = document.querySelector(containerSelector)
// 			if (!parentContainer)
// 				throw new Error('Батьківський елемент не знайдено !')
// 			parentContainer.append(containerEl)
// 		}
// 		return containerEl
// 	}
// }

//---- КЛАС НАЩАДОК -----
/*  ColoredMaxTable. Дозволяє виділяти максимальний елемент певним стилем
 * Клас ColoredMaxTable:
 *     Властивості: двовимірний масив, стилі для максимального
 *     Методи: знаходження максимального, render, піднесення усіх елементів до вказаної степені,  виділення максимального
 */
// class ColoredMaxTable extends Table {
// 	constructor(arrData, cssObj) {
// 		super(arrData)
// 		this.cssObj = cssObj
// 	}
// 	getMax() {
// 		return Math.max(...this.arrData.flat())
// 	}
// 	getMaxElementsPositionsList() {
// 		const maxValue = this.getMax()
// 		const maxElementsPositionsList = []
// 		for (let i = 0; i < this.arrData.length; i++) {
// 			for (let j = 0; j < this.arrData[i].length; j++) {
// 				if (this.arrData[i][j] === maxValue)
// 					maxElementsPositionsList.push({
// 						rowIndex: i,
// 						colIndex: j,
// 					})
// 			}
// 		}
// 		return maxElementsPositionsList
// 	}
// 	usePowerForItems(powerValue) {
// 		for (let i = 0; i < this.arrData.length; i++) {
// 			for (let j = 0; j < this.arrData[i].length; j++) {
// 				this.arrData[i][j] = Math.pow(this.arrData[i][j], powerValue)
// 			}
// 		}
// 		return this
// 	}
// 	highlightMax(maxPosition, rowsRefsList) {
// 		const row = rowsRefsList[maxPosition.rowIndex]
// 		const cellsList = row.querySelectorAll('td')
// 		const cell = cellsList[maxPosition.colIndex]
// 		cell.style.color = 'red'
// 	}
// 	highlightMaxElements() {
// 		const maxElementsPositionsList = this.getMaxElementsPositionsList()

// 		const rowsRefsList = this.$table.querySelectorAll('tr')

// 		for (const pos of maxElementsPositionsList) {
// 			this.highlightMax(pos, rowsRefsList)
// 		}
// 	}
// }
// //=================
// const arr = [
// 	[1, 2, 300],
// 	[10, 2000, 30],
// 	[100, 200, 300],
// ]
// window.onload = function () {
// 	const t1 = new ColoredMaxTable(arr)
// 	t1.usePowerForItems(2).render('.container')
// 	t1.highlightMaxElements()
// }

//! ======================================================================
