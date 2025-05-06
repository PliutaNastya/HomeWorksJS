"use strict"

// Задача 05. Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.

class IsNotNumberError extends Error {
	constructor() {
		super()
		this.message = 'Введене значення не є числом'
		this.name = 'isNotNumberError'
	}
}

class IsNegativeNumberError extends Error {
	constructor() {
		super()
		this.message = 'Введене значення не може бути від\'ємним'
		this.name = 'isNotNumberError'
	}
}

class IsTooHighNumberError extends Error {
	constructor(value) {
		super()
		this.message = `Не може бути більшим за ${value}`
		this.name = 'isTooHighNumberError'
	}
}

class IsTooLowNumberError extends Error {
	constructor(value) {
		super()
		this.message = `Не може бути меншим за ${value}`
		this.name = 'isTooLowNumberError'
	}
}

function validate(expression, min, max) {
	try {
		if (isNaN(expression)) throw new IsNotNumberError()
		if (expression < 0) throw new IsNegativeNumberError()
		if (expression < min) throw new IsTooLowNumberError(min)
		if (expression > max) throw new IsTooHighNumberError(max)
	} catch (error) {
		console.log(error.message)
		return false
	}
	return true
}

class Input {
	constructor(labelMessage, inputType) {
		this.labelMessage = labelMessage
		this.inputType = inputType
	}

	renderLabel() {
		const label = document.createElement('label')
		label.innerText = this.labelMessage
		
		return label
	}
	renderInput() {
		const input = document.createElement('input')
		input.type = this.inputType
		this.input = input

		return input
	}
	render(containerSelector) {
		const label = this.renderLabel()
		const input = this.renderInput()
		label.append(input)
		if (containerSelector) {
			document.querySelector(containerSelector).append(label)
		}
	}
}

class Form {
	constructor() {
		
	}

	renderInputMonth(labelMessage, inputType) {
		const input = new Input(labelMessage, inputType)
	}
}

class MarkManager {
	constructor(monthInput, markInput) {
		this.monthInput = monthInput
		this.markInput = markInput
		this.container = document.querySelector('#container')
	}
	getValues() {
		const month = parseInt(this.monthInput.input.value)
		const mark = parseInt(this.markInput.input.value)

		return( { month, mark})
	}
	isVacation(month) {
		return month >= 6 && month <= 8
	}
	isLastMonthOfSemester(month) {
		return month === 5 || month === 12
	}
	isBadMark(mark) {
		return mark < 60
	}
	canFixMark(month, mark) {
		return this.isBadMark(mark) && !this.isLastMonthOfSemester(month)
	}
	renderResult(message) {
		if (!this.resultBlock) {
			this.resultBlock = document.createElement('p')
			this.container.append(this.resultBlock)
		}
		this.resultBlock.innerText = message
	}
	check() {
		const { month, mark } = this.getValues()

		if (!validate(month, 1, 12)) {
			this.renderResult('Місяць має бути від 1 до 12.')
			return
		}
		if (!validate(mark, 1, 100)) {
			this.renderResult('Оцінка має бути від 1 до 100.')
			return
		}

		if (this.isVacation(month)) {
			this.renderResult('Зараз літні канікули')
			return
		}

		if (this.canFixMark(month, mark)) {
			this.renderResult('Так, ви можете виправити оцінку.')
		} else this.renderResult('Ні, ви не можете виправити оцінку.')
	}
}

const monthInput = new Input('Введіть номер місяця (1–12):', 'number')
monthInput.render('#container')
const markInput = new Input('Введіть оцінку (1–100):', 'number')
markInput.render('#container')

const button = document.createElement('button')
button.type = 'submit'
button.innerText = 'Перевірити'
document.querySelector('#container').append(button)

const markManager = new MarkManager(monthInput, markInput)
button.onclick = () => markManager.check()