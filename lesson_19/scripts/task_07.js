"use strict"

// Задача 07. Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану (top =0) і з випадковою швидкістю рухається вниз (у setInterval викликати метод, у якому додавати крок до top). Як тільки сніжинка досягає нижньої частини екрану (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateSnowflake = () => {
	const snowflake = document.createElement("span")
	snowflake.style.width = getRandomValue(10, 30) + 'px'
	snowflake.style.aspectRatio = 1
	snowflake.style.borderRadius = "50%"
	const snowflakeColor = "white"
	snowflake.style.backgroundColor = snowflakeColor
	snowflake.style.filter = `blur(${getRandomValue(1, 3)}px)`
	snowflake.style.boxShadow = `0 0 10px white, 0 0 20px ${snowflakeColor}`

	snowflake.style.position = 'absolute'

	// Задання початкових позицій
	let topPosition = 0
	let randomLeftPosition = getRandomValue(0, window.innerWidth)

	// Додавання початкових позицій в стилі
	snowflake.style.left = randomLeftPosition + 'px'
	snowflake.style.top = topPosition + 'px'

	// Додавання сніжинки в ДОМ
	document.body.append(snowflake)

	// Визначення рандомно швидкості (кількість пікселів, на яку за один раз опускається сніжинка)
	let randomSpeed = getRandomValue(5, 40)

	// Анімація падіння сніжинки
	setInterval(() => {

		topPosition += randomSpeed
		snowflake.style.top = topPosition + 'px'

		if (topPosition > window.innerHeight) {
			topPosition = 0
			randomLeftPosition = getRandomValue(0, window.innerWidth)
			randomSpeed = getRandomValue(1, 20)
			snowflake.style.left = randomLeftPosition + 'px'
		}
	}, 100)
}

for (let i = 0; i < 100; i++) {
	generateSnowflake()
}


