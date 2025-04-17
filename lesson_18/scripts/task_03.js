"use strict"

// Задача 03. Користувач задає рік народження. Визначити кількість років користувача.

const ageContainer = document.getElementById("age-block")
const buttonCalculate = document.querySelector(".button-calculate")

const presentDate = {
	year: 2025,
	month: 3,
	day: 15
}

const convertDateObj = date => {
	const dateArr = date.split("-")
	const dateObj = {
		year: parseInt(dateArr[0]),
		month: parseInt(dateArr[1]),
		day: parseInt(dateArr[2])
	}
	return dateObj
}

const calculateAge = (presentDate) => {

	const dateOfBirth = document.getElementById("birthdayDate").value

	if (!dateOfBirth) throw new Error("Ви ввели некоректні данні")

	const userDate = convertDateObj(dateOfBirth)

	if (userDate.year > presentDate.year) throw new Error("Дата народження не можу бути в майбутньому")

	let userAge = presentDate.year - userDate.year 

	if ((presentDate.month < userDate.month) && (userDate.year < presentDate.year)) userAge = userAge - 1

	return userAge
}

const showMistake = (error) => {
	const errorMessage = document.createElement('p')
	errorMessage.innerText = error
	errorMessage.style.color = "#ff0000"
	ageContainer.append(errorMessage)

	setTimeout(() => {
		errorMessage.remove()
	}, 3000)
}

const handleClick = (presentDate) => {
	try {

		const existingDiv = document.querySelector('.result')
		if (existingDiv) existingDiv.remove()

		const userAge = calculateAge(presentDate)

		const resultDiv = document.createElement("div")
		resultDiv.classList.add("result")
		resultDiv.innerText = `Вам повних ${userAge} років`

		ageContainer.append(resultDiv)
	} catch (error) {
		showMistake(error)
	}
}

buttonCalculate.onclick = () => handleClick(presentDate)