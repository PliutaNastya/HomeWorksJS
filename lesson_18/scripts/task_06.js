"use strict"

// Задача 06. Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.

const marksContainer = document.getElementById('marks-container')
const buttonRender = document.querySelector('.button-render')

const checkValues = (value, message) => {
	if (value <= 0 || isNaN(value) || !isFinite(value)) throw new Error(message)
}

const renderInputs = () => {
	const inputNums = parseInt(document.getElementById('marks-numbers').value)

	checkValues(inputNums, "Ви ввели некоректні данні")

	const inputsBlock = document.createElement('div')
	inputsBlock.classList.add('input-container')

	for (let i = 1; i <= inputNums; i++) {
		let inputWrapper = document.createElement('div')
		inputWrapper.classList.add('input-wrapper')

		inputWrapper.innerHTML += `<label for="mark-${i}">Введіть оцінку №${i}</label>`
		inputWrapper.innerHTML += `<input type="number" name="mark-${i}" id="mark-${i}">`

		inputsBlock.append(inputWrapper)
	}

	const buttonCalculate = document.createElement('button')
	buttonCalculate.setAttribute("type", "button")
	buttonCalculate.className = "button button-calculate"
	buttonCalculate.innerText = 'Отримати середню оцінку'

	buttonCalculate.onclick = showResult

	marksContainer.append(inputsBlock)

	marksContainer.append(buttonCalculate)

	return marksContainer
}

const getUserMarks = () => {
	const marksNums = document.querySelectorAll("[id^=mark-]")
	let userMarks = []

	for (let el of marksNums) {
		const mark = parseInt(el.value)

		if (mark === "") throw new Error("Будь ласка заповніть всі поля")
		checkValues(mark, "Введено некоректні данні")
		
		userMarks.push(mark)
	}

	return userMarks
}

const calculateAverageMark = () => {
	const userMarks = getUserMarks()

	const sum = userMarks.reduce((prevSum, el) => prevSum + el, 0)

	return (sum / userMarks.length).toFixed(2)
}

const showMistake = (error) => {
	const errorMessage = document.createElement('p')
	errorMessage.innerText = error
	errorMessage.style.color = "#ff0000"
	marksContainer.append(errorMessage)

	setTimeout(() => {
		errorMessage.remove()
	}, 3000)
}

const showResult = () => {
	try {
		let resDiv = document.createElement('div')
		resDiv.classList.add("result")

		resDiv.innerText = `Результат: ${calculateAverageMark()}`

		marksContainer.append(resDiv)
	} catch (error) {
		showMistake(error)
	}
}

const handleClick = () => {
	try {
		renderInputs()
	} catch (error) {
		showMistake(error)
	}
}

buttonRender.onclick = () => handleClick()
