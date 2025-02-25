"use strict"

// Задача 03. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm('Почати тестування?')) {

	// Функція для створення масиву
	const getArray = () => {
		const arr = []
		let i = 1
		let pupilName
		do {
			pupilName = prompt(`Введіть ім'я ${i} учня`, 'Іван')
			if (pupilName !== null) {
				arr.push(pupilName)
				i++
			}
			
		} while (pupilName !== null)

		return arr
	}

	// Функція для знаходження кількості дітей з певним ім'ям
	const getNumbersSomePupilName = (pupilName, arr) => {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === pupilName) count++
		}
		return count
	}

	// Функція для виводу списку імен учнів
	const getPupilsList = (arr) => {
		let list = '<ul>'

		for (let i = 0; i < arr.length; i++) {
			list += `<li>${arr[i]}</li>`
		}
		list += '</ul>'

		return list
	}
	
	const arr = getArray()
	const namesList = getPupilsList(arr)

	document.write(`
		${namesList}
		<p>Кількість учнів, які мають ім'я "Іван" складає - <span>${getNumbersSomePupilName('Іван', arr)} учнів</span></p>
		`)
}