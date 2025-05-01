"use strict"

// Задача 04. На сторінці міститься певна кількість кнопок і інпутів. Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.

class Input {
	constructor() {
		this.clickCount = 0
	}

	renderInput(labelName, inputType) {

		const inputEl = document.createElement('input')
		inputEl.type = inputType

		const label = document.createElement('label')
		label.innerText = labelName
		label.append(inputEl)


		return label
	}

	render(containerSelector, labelName, inputType) {
		const inputContainer = document.createElement('div')

		const inputEl = this.renderInput(labelName, inputType)

		if (containerSelector) {
			document.querySelector(containerSelector).append(inputEl)
		}
	}
}

class Button {
	constructor() {

	}

	render(containerSelector) {
		const button = document.createElement('button')
		button.innerText = 'Тицьни на мене'

		if (containerSelector) {
			document.querySelector(containerSelector).append(button)
		}
	}
}

class ClickManager {

	constructor(containerSelector) {
		this.container = document.querySelector(containerSelector)
		this.inputClicks = 0
		this.buttonClicks = 0
	}

	renderTitle(titleName, spanId) {
		const title = document.createElement('h2')
		title.innerText = titleName

		const span = document.createElement('span')
		span.id = spanId
		span.innerText = 0
		title.append(span)

		this.container.append(title)

		return span
	}

	init() {
		const inputSpan = this.renderTitle('Кліків по інпутах - ', 'input-counter')
		const buttonSpan= this.renderTitle('Кліків по кнопкам - ', 'button-counter')

		document.addEventListener('click', (e) => {
			if (e.target.tagName === 'INPUT') {
				this.inputClicks++
				inputSpan.innerText = this.inputClicks
			}

			if (e.target.tagName === 'BUTTON') {
				this.buttonClicks++
				buttonSpan.innerText = this.buttonClicks
			}
		})
	}
}

const clicksManager = new ClickManager('#container')
clicksManager.init()

for (let i = 1; i <= 10; i++) {
	const input = new Input()
	input.render('#container', `Input#${i}`, 'number')

	const button = new Button()
	button.render('#container')
}
