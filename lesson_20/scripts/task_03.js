"use strict"

// Задача 03. На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата, стаж, номер відділу, порядковий номер). Додати подію обробки події click на форму і якщо клік на внутрішньому input, то автоматично замінювати значення його на 0. Використати делегування

class InputElement {
	constructor() {
	}

	render(labelName) {
		const inputContainer = document.createElement('div')

		const inputEl = document.createElement('input')
		inputEl.type = 'number'
		this.inputEl = inputEl

		const label = document.createElement('label')
		label.innerText = labelName
		label.append(inputEl)

		inputContainer.append(label)
		return inputContainer
	}
}

class Form {
	constructor(labelNamesList) {
		this.labelNamesList = labelNamesList
	}

	render(containerSelector) {

		const formContainer = document.createElement('div')

		this.labelNamesList.forEach(el => {
			const input = new InputElement().render(el)
			formContainer.append(input)
		})

		formContainer.addEventListener('click', (e) => {
			const currentElement = e.target
			if (currentElement.tagName === 'INPUT') {
				currentElement.value = 0
			}
		})

		if (containerSelector) {
			document.querySelector(containerSelector).append(formContainer)
		}
	}
}

const labelNamesList = [
	'Вік',
	'Зріст',
	'Вага',
	'Заробітна плата',
	'Стаж',
	'Номер відділу',
	'Порядковий номер'
]

const form = new Form(labelNamesList)
form.render('#form')