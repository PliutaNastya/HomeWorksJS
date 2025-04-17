"use strict"

// Задача 01. Розробити калькулятор
const calcContainer = document.getElementById("calculator")
const resultSpan = document.getElementById("result")

const checkValues = (value, message) => {
	if (isNaN(value) || !isFinite(value)) throw new Error(message)
}

const getCalculateResult = (operation) => {
	const firstNum = parseFloat(document.getElementById("firstNumber").value)
	const secondNum = parseFloat(document.getElementById("secondNumber").value)

	checkValues(firstNum, "Некоректно введене перше число")
	checkValues(firstNum, "Некоректно введене друге число")

	if (operation === "/" && secondNum === 0) throw new Error("На нуль ділити не можна")


	let result
	switch (operation) {
		case "+": result = (firstNum + secondNum).toFixed(2)
			break
		case "-": result = (firstNum - secondNum).toFixed(2)
			break
		case "*": result = (firstNum * secondNum).toFixed(2)
			break
		case "/": result = (firstNum / secondNum).toFixed(2)
			break
	}
	return result
}

const showMistake = (error) => {
	const errorMessage = document.createElement('p')
	errorMessage.innerText = error
	errorMessage.style.color = "#ff0000"
	calcContainer.append(errorMessage)

	setTimeout(() => {
		errorMessage.remove()
	}, 3000)
}

const handleClick = (operation) => {
	try {
		resultSpan.innerText = getCalculateResult(operation)
	} catch (error) {
		showMistake(error)
	}
}

document.querySelector(".button-plus").onclick = () => handleClick("+")
document.querySelector(".button-minus").onclick = () => handleClick("-")
document.querySelector(".button-multiply").onclick = () => handleClick("*")
document.querySelector(".button-division").onclick = () => handleClick("/")


