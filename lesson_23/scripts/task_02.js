"use strict"

// Задача 02. Вводимо час початку процедури(процедура триває 30хв).Визначити, чи процедура ще триває.


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

const isProcedureInProgress = (hour, minute) => {
	const currentTime = new Date()
	console.log(currentTime)
	const start = new Date()
	start.setHours(hour, minute)
	console.log(start)

	const end = new Date(start.getTime() + 30 * 60 * 1000)
	console.log(end)

	return currentTime < end
}

const render = (containerSelector) => {
	const container = document.querySelector(containerSelector)

	const inputHours = renderInputContainer('Введіть яка була година на момент початку процедури', 'hour')
	const inputMinutes = renderInputContainer('Введіть яка була хвилина на момент початку процедури', 'minutes')
	const button = renderButton('Розрахувати чи триває ще процедура')

	const res = document.createElement('p')

	button.onclick = () => {
		const hour = parseInt(document.getElementById('hour').value)
		const minute = parseInt(document.getElementById('minutes').value)

		res.innerText = isProcedureInProgress(hour, minute) ? 'Процедура ще триває' : 'Процедура вже завершилась'
	}

	if (container) {
		container.append(inputHours)
		container.append(inputMinutes)
		container.append(button)
		container.append(res)
	}
}
render('.container')



