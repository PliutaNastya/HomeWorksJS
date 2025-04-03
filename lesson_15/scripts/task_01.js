"use strict"

// Задача 01. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Тир
// Поля(властивості)
// Масив, у якому зберігається поле з зайцями

// Методи(дії)
// Метод пострілу(задається позиція пострілу)
// Виведення ігрового поля

if (confirm('Почати тестування?')) {
	const range = {
		field: [],
		rabbitNumber: 7,

		getField: function (number) {
			for (let i = 0; i < number; i++) {
				this.field.push(new Array(number).fill('🥕'))
			}
		},

		getPositionForRabbit: function (min = 0, max = this.field.length - 1) {
			return Math.floor(Math.random() * (max - min + 1)) + min
		},

		locateRabbits: function () {
			let rabbitCount = 0
			while (rabbitCount < this.rabbitNumber) {
				let x = this.getPositionForRabbit()
				let y = this.getPositionForRabbit()

				if (this.field[x][y] === '🥕') {
					this.field[x][y] = '🐰'
					rabbitCount++
				}
			}
			return this.field
		},

		renderTable: function () {
			let table = '<table>'

			for (let row of this.field) {
				table += '<tr>'

				for (let col of row) {
					table += `<td>${col}</td>`
				}

				table += '</tr>'
			}

			table += '</table>'

			return table
		},

		shootRabbit: function (shells) {
			let count = 0
			do {
				const x = parseInt(prompt(`Введіть координату X пострілу від 1 до ${this.field.length}`, '5'))
				const y = parseInt(prompt(`Введіть координату Y пострілу від 1 до ${this.field.length}`, '5'))

				// Перевірка діапазону введених даних
				if (x < 1 || x > this.field.length || y < 1 || y > this.field.length) {
					alert('Ви ввели некоректні дані!')
					continue
				}

				// Перевірка на повторне введення координат
				if (this.field[x - 1][y - 1] === '❌' || this.field[x - 1][y - 1] === '⚫') {
					alert('Ви вже стріляли в цю точку, спробуйте заново!')
					continue
				}

				if (this.field[x - 1][y - 1] === '🐰') {
					alert('Ви влучили 🎉')
					this.field[x - 1][y - 1] = '❌'
					this.rabbitNumber--
				} else {
					alert('Ви не влучили 🙁')
					this.field[x - 1][y - 1] = '⚫'
				}

				shells--
				count++
				alert(`У вас залишилось ${shells} снарядів`)

				document.write(`<span>Поле після ${count} спроби</span>`)
				document.write(this.renderTable())

			} while (this.rabbitNumber > 0 && shells > 0)
		}
	}
	range.getField(7)
	range.locateRabbits(7)
	range.shootRabbit(3)

	document.write(range.renderTable())

}