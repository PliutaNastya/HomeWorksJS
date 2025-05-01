"use strict"

// Задача 19. У таблиці випадковим чином розташовуємо зайця. Користувач розміщує пастку. Заєць робить хід у випадковому напрямку. Якщо заєць потрапив у пастку, то гру закінчено. Інакше пастка зникає з попередньої позиції і користувач має можливість поставити пастку у іншій клітинці клікнувши на неї.


class Table {
	constructor(rowsNums, colsNums) {
		this.rowsNums = rowsNums
		this.colsNums = colsNums
	}

	renderTable() {
		const table = document.createElement('table')

		const tBody = document.createElement('table')

		for (let row = 0; row < this.rowsNums; row++) {
			const rowEl = document.createElement('tr')

			for (let col = 0; col < this.colsNums; col++) {
				const colEl = document.createElement('td')
				colEl.style.width = '60px'
				colEl.style.height = '60px'
				colEl.style.border = '3px solid #fff'
				colEl.style.fontSize = '40px'

				rowEl.append(colEl)
			}

			tBody.append(rowEl)
		}

		table.append(tBody)

		return table
	}

	render(containerSelector) {
		const table = this.renderTable()

		if (containerSelector) {
			document.querySelector(containerSelector).append(table)
		}

		return table
	}
}

class Game {
	constructor(rowsNums, colsNums) {
		this.rowsNums = rowsNums
		this.colsNums = colsNums
		this.table = new Table(rowsNums, colsNums)
		this.rabbitPosition = {}
		this.trapPosition = {}
		this.isGameOver = false
	}


	placeRabbit() {
		const randomRow = Math.floor(Math.random() * this.rowsNums)
		const randomCol = Math.floor(Math.random() * this.colsNums)

		this.rabbitPosition.row = randomRow
		this.rabbitPosition.col = randomCol

		this.updateRabbitPosition()
	}

	findCurrentRabbitPosition() {
		const trElements = document.querySelectorAll('tr')
		const tdElements = trElements[this.rabbitPosition.row].children
		const tdElement = tdElements[this.rabbitPosition.col]

		return tdElement
	}

	updateRabbitPosition() {
		const tdElement = this.findCurrentRabbitPosition()
		if(tdElement) tdElement.innerText = '🐇'
	}

	clearRabbit() {
		const tdElement = this.findCurrentRabbitPosition()
		if (tdElement) tdElement.innerText = ''
	}

	placeTrap(e) {
		if (this.isGameOver) return
		
		const currentTd = e.target

		if (currentTd && currentTd.tagName === 'TD' && currentTd.classList.contains('trap')) {
			currentTd.classList.remove('trap')
		}

		if (currentTd && currentTd.tagName === 'TD') {
			const prevTrap = document.querySelector('.trap')
			if(prevTrap) prevTrap.classList.remove('trap')

			currentTd.classList.add('trap')

			const trapRowIndex = currentTd.parentElement.rowIndex
			this.trapPosition.row = trapRowIndex

			const trapColIndex = Array.from(currentTd.parentElement.children).indexOf(currentTd)
			this.trapPosition.col = trapColIndex
		}

		setTimeout(() => {
			this.moveRabbit()
		}, 500);
	}

	moveRabbit() {
		this.clearRabbit()

		let direction = ''
		const randomNum = Math.floor(Math.random() * 4)

		switch (randomNum) {
			case 0:
				direction = 'вгору'
				break
			case 1:
				direction = 'вправо'
				break
			case 2:
				direction = 'вниз'
				break
			case 3:
				direction = 'вліво'
				break
		}

		switch (direction) {
			case 'вгору':
				if (this.rabbitPosition.row > 0) this.rabbitPosition.row -= 1
				break
			case 'вправо':
				if (this.rabbitPosition.col < this.colsNums - 1) this.rabbitPosition.col += 1
				break
			case 'вниз':
				if (this.rabbitPosition.row < this.rowsNums - 1) this.rabbitPosition.row += 1
				break
			case 'вліво':
				if (this.rabbitPosition.col > 0) this.rabbitPosition.col -= 1
				break
		}

		this.updateRabbitPosition()
		this.checkRabbitTrap()
	}

	checkRabbitTrap() {
		if (this.rabbitPosition.col === this.trapPosition.col && this.rabbitPosition.row === this.trapPosition.row) {
			alert('Ви виграли')
			this.isGameOver = true
		} 
		else alert('Ви програли')
	}

	render(containerSelector) {
		const table = this.table.render(containerSelector)
		this.placeRabbit()

		table.addEventListener('click', (e) => {
			this.placeTrap(e)
		})

	}
}
const game = new Game(5, 5)
game.render('#container')