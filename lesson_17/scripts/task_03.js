"use strict"

// Задача 03. Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

class Reminder {
	static reminder = null

	constructor(someInterval, messagesList) {
		if (Reminder.reminder) return Reminder.reminder

		this.someInterval = someInterval
		this.messagesList = messagesList
		this.count = 0
		this.timerId = null

		Reminder.reminder = this
	}

	getRandomMessage() {
		const messageIndex = Math.floor(Math.random() * this.messagesList.length)
		return this.messagesList[messageIndex]
	}

	getRemindMessage() {
		this.timerId = setInterval(() => {
			this.count++
			console.log(this.count, this.getRandomMessage())
		}, this.someInterval)
		return this.timerId
	}

	stopTimer() {
		clearInterval(this.timerId)
		this.timerId = null
		console.log('Таймер зупинено')
	}

	changeMessage() {
		this.count++
		console.log(`Нове повідомлення ${this.count} ` + this.getRandomMessage())
	}

	toString() {
		return `
			<p>Не забудьте про ${this.getRandomMessage()}</p>
		`
	}
}
const reminders = [
	"випити води",
	"зробити зарядку",
	"перевірити пошту",
	"відпочити 5 хвилин",
	"перевірити повідомлення",
	"подихати свіжим повітрям",
	"записати ідею",
	"приготувати чай або каву",
	"зробити глибокий вдих"
]

const reminder = new Reminder(3000, reminders)
console.log(reminder)
console.log(reminder.getRemindMessage())

setTimeout(() => {
	reminder.changeMessage()
}, 7000)


setTimeout(() => {
	reminder.stopTimer()
}, 12000)

