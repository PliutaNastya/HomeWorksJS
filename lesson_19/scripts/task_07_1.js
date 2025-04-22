"use strict"

// Задача 07. Відобразити падаючий сніг. Через Canvas і RequestAnimationFrame


const snowCanvas = document.getElementById('snow')
const snowCtx = snowCanvas.getContext("2d")

// Створюємо масив сніжинок
const snowflakes = []

for (let i = 0; i < 500; i++) {
	snowflakes.push({
		x: Math.random() * snowCanvas.width, // X-позиція
		y: Math.random() * snowCanvas.height, // Y-позиція
		radius: Math.random() * 1 + 1, // радіус сніжинки
		speedY: Math.random() * 1 + 0.1, // швидкість падіння
		angle: Math.random() * 2 * Math.PI, // початковий кут (для коливань)
		angleSpeed: Math.random() * 0.01 + 0.005 // швидкість зміни кута
	})
}

// Функція малювання сніжинок
function drawSnowflakes() {
	snowCtx.clearRect(0, 0, snowCanvas.width, snowCanvas.height) // очищення

	snowCtx.fillStyle = '#fff'

	for (let flake of snowflakes) {
		flake.angle += flake.angleSpeed // змінюємо кут
		flake.y += flake.speedY // рух вниз
		flake.x += Math.sin(flake.angle) // плавний коливальний рух вліво-вправо

		// Якщо сніжинка впала — повертаємо наверх
		if (flake.y > snowCanvas.height) {
			flake.y = -flake.radius
			flake.x = Math.random() * snowCanvas.width
		}

		snowCtx.beginPath()
		snowCtx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2) // малюємо коло
		snowCtx.fill()
	}
	requestAnimationFrame(drawSnowflakes) // анімація
}
drawSnowflakes() // запускаємо ефект снігу
