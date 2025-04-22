"use strict"

// Задача 03. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

const listContainer = document.querySelector('.list-container')

const getRandomNumber = (min = 1, max = 10) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const renderList = (listAmount = 5) => {
	// очистка контейнера для оновлення списків
	listContainer.innerHTML = ''

	while (listAmount) {
		const list = document.createElement('ol')

		let liAmount = getRandomNumber()

		while (liAmount) {
			const liItem = document.createElement("li")
			liItem.innerText = getRandomNumber(1, 100)
			list.append(liItem)

			liAmount--
		}

		listContainer.append(list)

		listAmount--
	}
}

const changeListBg = () => {
	const listItems = document.querySelectorAll('ol')
	console.log(listItems)
	for (const listItem of listItems) {
		if (listItem.children.length % 2 === 0) {
			listItem.style.backgroundColor = "#00ff00"
		} else listItem.style.backgroundColor = "#ff0000"
	}
}

const generateButton = document.querySelector('.button-generate')
generateButton.addEventListener('click', () => renderList())

const paintButton = document.querySelector('.paint-button')
paintButton.addEventListener('click', changeListBg)