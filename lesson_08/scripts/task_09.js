"use strict"

// Задача 09. Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.

if (confirm('Почати тестування?')) {

	// Отримання данних від користувача
	const fieldSize = parseInt(prompt('Введіть кількість клітинок для гри "Морський бій"', '10'))
	const shipNumbers = parseInt(prompt('Введіть кількість одниночних кораблів', '3'))

	// Функція для створення масиву з нулями
	const getArray = () => {
		const arr = []

		for (let i = 0; i < fieldSize; i++) {
			arr[i] = 0
		}

		return arr
	}

	// Функція для розміщення кораблів
	const getFieldWithShips = (arr) => {
		let randomIndex

		for (let i = 0; i < shipNumbers;) {
			randomIndex = Math.floor(Math.random() * fieldSize)
			if (arr[randomIndex] === 0) {
				arr[randomIndex] = 1
				i++
			}
		}

		return arr
	}

	// Функція для отримання пострілу від користувача
	const getUserNumber = () => parseInt(prompt('Зробіть свій постріл, введіть номер клітинки', '1'))

	// Функція самої гри
	const getGame = (arr, congratsMessage, failMessage, finalMessage) => {
		let userNumber
		let shipsLeft = shipNumbers

		do {
			userNumber = getUserNumber() - 1
			if (arr[userNumber] === 1) {
				alert(congratsMessage)
				arr[userNumber] = 0
				shipsLeft--
			} else alert(failMessage)
		} while (shipsLeft)
		
		alert(finalMessage)
	}

	const arr = getArray()
	const arrWithShips = getFieldWithShips(arr)

	document.write(`
		<p>Ось як виглядало поле з кораблями (1 - корабель, 0 - пусто) - ${arrWithShips}</p>
		`)
	
	// Виклик функції з грою
	getGame(arrWithShips, 'Вітаємо! Ви влучили по кораблю!!', 'Нажаль, ви не влучили!', 'Всі кораблі потоплені!')
}