"use strict"

// Задача 02. Зробити конвертер валют (курси валют – константи у скрипті)
const converterContainer = document.getElementById("converter")
const resultSpan = document.getElementById("resultValue")
const buttonConvert = document.querySelector(".button-convert")

const EXCHANGE_RATE_LIST = {
	euro: 46.72,
	dol: 41.22,
	pound: 54.51,
	zloty: 10.82,
	norKrone: 3.87
}

const checkValues = (value, message) => {
	if (value < 0 || isNaN(value) || !isFinite(value)) throw new Error(message)
}

const convert = (exchangeRateList) => {

	const sumInUah = parseFloat(document.getElementById("uahSum").value)
	const choosingCurrency = document.getElementById("currencySelect").value

	checkValues(sumInUah, "Некоректно вказано суму в гривні")
	return (sumInUah / exchangeRateList[choosingCurrency]).toFixed(3)
}

const showMistake = (error) => {
	const errorMessage = document.createElement('p')
	errorMessage.innerText = error
	errorMessage.style.color = "#ff0000"
	converterContainer.append(errorMessage)

	setTimeout(() => {
		errorMessage.remove()
	}, 3000)
}


const handleClick = (exchangeRateList) => {
	try {
		resultSpan.innerText = convert(exchangeRateList)

	} catch (error) {
		showMistake(error)
	}
}

buttonConvert.onclick = () => handleClick(EXCHANGE_RATE_LIST)