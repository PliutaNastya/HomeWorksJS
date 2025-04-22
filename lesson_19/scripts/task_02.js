"use strict"

// Задача 02. Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)


const fillInput = (event) => {
	const currentInput = event.target

	if (currentInput.tagName !== "INPUT") return

	const allInputs = document.querySelectorAll(".inputs-container input")

	// https://stackoverflow.com/questions/73811889/how-to-get-an-index-of-event-element-in-a-nodelist-with-indexof
	const currentIndex = [...allInputs].indexOf(currentInput)
	
	let currentInputValue = parseInt(currentInput.value)

	for (let i = currentIndex + 1; i < allInputs.length; i++) {
		allInputs[i].value = currentInputValue + (i - currentIndex)
	}

	for (let i = currentIndex - 1; i >= 0; i--) {
		allInputs[i].value = currentInputValue - (currentIndex - i)
	}
}

const inputsContainer = document.querySelector(".inputs-container")
inputsContainer.addEventListener('input', fillInput)