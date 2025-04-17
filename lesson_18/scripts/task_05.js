"use strict"

// Задача 05. Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

const tableContainer = document.querySelector(".table-container")

const getRandomNum = (min = 0, max = 100) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const renderTable = (rowsNum, colsNum) => {
	let table = ""

	table += "<table>"
	for (let i = 0; i < rowsNum; i++) {
		table += "<tr>"
		
		for (let j = 0; j < colsNum; j++) {
			table += `<td>${getRandomNum()}</td>`
		}

		table += "</tr>"
	}
	table += "</table>"

	return table
}

window.onload = () => tableContainer.innerHTML = renderTable(3, 4)