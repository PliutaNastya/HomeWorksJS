"use strict"

// Задача 03. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

if (confirm('Почати тестування?')) {
	let field = []
	for (let i = 0; i < 6; i++) {
		field.push(new Array(6).fill('🌊'))
	}
	// Просто для краси, вивід масиву у вигляді таблиці
	const renderTable = arr => {
		let table = '<table>'

		for (let row of arr) {
			table += '<tr>'

			for (let col of row) {
				table += `<td>${col}</td>`
			}

			table += '</tr>'
		}

		table += '</table>'

		return table
	}

	const getPositionForShip = (min = 0, max = 5) => Math.floor(Math.random() * (max - min + 1)) + min

	const locateShips = (arr, shipsNumber) => {
		let shipsCount = 0
		while (shipsCount < shipsNumber) {
			let x = getPositionForShip()
			let y = getPositionForShip()

			if (arr[x][y] === '🌊') {
				arr[x][y] = '⚓'
				shipsCount++
			}
		}
		return arr
	}

	locateShips(field, 5)

	const playGame = (arr, ships, shells) => {
		let count = 0
		do {
			const x = parseInt(prompt('Введіть координату X пострілу від 1 до 6', '5'))
			const y = parseInt(prompt('Введіть координату Y пострілу від 1 до 6', '5'))

			// Перевірка діапазону введених даних
			if (x < 1 || x > 6 || y < 1 || y > 6) {
				alert('Ви ввели некоректні дані!')
				continue
			}

			// Перевірка на повторне введення координат
			if (arr[x - 1][y - 1] === '❌' || arr[x - 1][y - 1] === '⚫') {
				alert('Ви вже стріляли в цю точку, спробуйте заново!')
				continue
			}

			if (arr[x - 1][y - 1] === '⚓') {
				alert('Ви влучили 🎉')
				arr[x - 1][y - 1] = '❌'
				ships--
			} else {
				alert('Ви не влучили 🙁')
				arr[x - 1][y - 1] = '⚫'
			}

			shells--
			count++
			alert(`У вас залишилось ${shells} снарядів`)

			document.write(`<span>Поле після ${count} спроби</span>`)
			document.write(renderTable(field))

		} while (ships > 0 && shells > 0)
	}

	playGame(field, 5, 10)
}