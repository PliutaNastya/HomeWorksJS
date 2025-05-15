"use strict"

// Задача 10. Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.

const renderInputContainer = (labelMessage, inputId) => {
	const label = document.createElement('label')
	const input = document.createElement('input')
	input.type = 'number'
	input.id = inputId
	label.innerText = labelMessage
	label.append(input)

	return label
}
const renderButton = (buttonMessage) => {
	const button = document.createElement('button')
	button.type = 'submit'
	button.innerText = buttonMessage

	return button
}

const isGoodYogurt = (year, month, day, expirationDays) => {
	const currentTime = new Date()

	const start = new Date(year, month - 1, day)

	const end = new Date(start)
	end.setDate(start.getDate() + expirationDays)

	return currentTime >= start && currentTime <= end
}

const render = (containerSelector) => {
	const container = document.querySelector(containerSelector)

	const inputDay = renderInputContainer('Введіть день виробництва йогурту', 'day')
	const inputMonth = renderInputContainer('Введіть місяць виробництва йогурту', 'month')
	const inputYear = renderInputContainer('Введіть рік виробництва йогурту', 'year')
	const inputExpirationDate = renderInputContainer('Введіть кількість днів придатності', 'expiration-days')

	const button = renderButton('Розрахувати чи хороший ще йогурт')

	const res = document.createElement('p')

	button.onclick = () => {
		const day = parseInt(document.getElementById('day').value)
		const month = parseInt(document.getElementById('month').value)
		const year = parseInt(document.getElementById('year').value)
		const expirationDate = parseInt(document.getElementById('expiration-days').value)

		res.innerText = isGoodYogurt(year, month, day, expirationDate) ? 'Йогурт ще хороший' : 'Термін придатності йогурта вже закінчився'
	}

	if (container) {
		container.append(inputDay)
		container.append(inputMonth)
		container.append(inputYear)
		container.append(inputExpirationDate)
		container.append(button)
		container.append(res)
	}
}
render('.container')
