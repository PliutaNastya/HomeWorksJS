"use strict"

// Задача 09. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.

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

const isMaternityLeaveInProgress = (year, month, day) => {
	const currentTime = new Date()
	
	const start = new Date(year, month - 1, day)

	const end = new Date(start)
	end.setDate(start.getDate() + 200)

	return currentTime >= start && currentTime <= end
}

const render = (containerSelector) => {
	const container = document.querySelector(containerSelector)

	const inputDay = renderInputContainer('Введіть день початку дектретної відпустки', 'day')
	const inputMonth = renderInputContainer('Введіть місяць початку дектретної відпустки', 'month')
	const inputYear = renderInputContainer('Введіть рік початку дектретної відпустки', 'year')
	const button = renderButton('Розрахувати чи триває ще відпустка')

	const res = document.createElement('p')

	button.onclick = () => {
		const day = parseInt(document.getElementById('day').value)
		const month = parseInt(document.getElementById('month').value)
		const year = parseInt(document.getElementById('year').value)

		res.innerText = isMaternityLeaveInProgress(year, month, day) ? 'Декретна відпустка ще триває' : 'Декретна відпустка вже завершилась'
	}

	if (container) {
		container.append(inputDay)
		container.append(inputMonth)
		container.append(inputYear)
		container.append(button)
		container.append(res)
	}
}
render('.container')



