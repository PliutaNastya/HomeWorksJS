"use strict"

// Задача 04. Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).

const getRandomNumber = (min = 1, max = 100) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const renderTable = (rowNums = 3, colNums = 3) => {
	const table = document.createElement('table')
	const tBody = document.createElement('tbody')

	table.append(tBody)

	for (let row = 0; row < rowNums; row++) {
		const tr = document.createElement('tr')

		for (let col = 0; col < colNums; col++) {
			const td = document.createElement('td')
			td.innerText = getRandomNumber()

			tr.append(td)
		}

		table.append(tr)
	}

	return table
}

const renderTableContainer = (tableNumber) => {

	let clickCount = 0

	const table = renderTable()

	const tableContainer = document.createElement('div')
	tableContainer.className = `table-container table-container-${tableNumber}`
	
	const tableTitle = document.createElement('h2')
	tableTitle.innerText = `Таблиця №${tableNumber} | `

	const clickNumsSpan = document.createElement('span')

	table.querySelectorAll('td').forEach(td => {
		td.addEventListener('click', () => {
			table.classList.add('selected')
			clickCount++
			clickNumsSpan.innerText = `${clickCount} кліків`
		})
	})

	tableTitle.append(clickNumsSpan)

	tableContainer.append(tableTitle)
	tableContainer.append(table)

	return tableContainer
}

const renderTables = (tableNums = 3) => {
	const tablesContainer = document.querySelector('.tables-container')
	let clickNums = 0

	for (let i = 1; i <= tableNums; i++) {
		const tableContainer = renderTableContainer(i)

		tablesContainer.append(tableContainer)
	}
	return tablesContainer
}

renderTables()