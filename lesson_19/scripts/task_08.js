"use strict"

// Експерименти з Canvas
// 🧱 Базове знайомство з canvas
	// 🔲 Створити canvas в HTML та отримати до нього доступ через JS.
	// ✏️ Намалювати просту лінію.
	// ⚫ Намалювати коло та прямокутник.
	// 🎨 Спробувати різні кольори заливки(fillStyle) та обводки(strokeStyle).
	// 🖋️ Написати текст на canvas.

// 🧩 Робота з координатами та формами
	// 🔃 Намалювати декілька фігур у різних позиціях.
	// 📐 Додати функцію малювання за кліком миші.
	// 🧮 Попрактикуватися з координатами: центр, кути, відносне позиціонування.
	// 🧊 Намалювати сітку(grid) з ліній.

// 🌀 Анімації
	// ⏳ Використати requestAnimationFrame для створення базової анімації(рух кола).
	// ⚙️ Додати контроль швидкості та напрямку руху.
	// 🚀 Створити bounce - ефект(відскок від країв canvas).
	// 🌈 Анімувати зміну кольору або розміру об’єкта.

// 🖱️ Інтерактивність
	// 🖱️ Додати реакцію на рух миші — малювати лінії курсором.
	// ✨ Зробити ефект “trail” (слідування за мишкою).
	// 🎯 Реалізувати клік по фігурі(виявлення попадання в зону).
	// 💥 Зробити ефект “вибуху” фігур при кліку.

// 💡 Цікаві ефекти
	// 	🌌 Створити ефект "зоряного неба" або "падаючого дощу"
	// 	🌌 Створити ефект "падаючого дощу"
	// 	🌌 Створити ефект "падаючих сніжинок"
	// 	🐍 Реалізувати міні - змійку або кулю, що рухається по синусоїді

//!-------------------------------------------------------------------------------------------------
// 🧱 Базове знайомство з canvas
	
const baseCanvas = document.getElementById('base-canvas')

// Вказуємо висоту
baseCanvas.height = "200"
// Вказуємо ширину
baseCanvas.width = "200"
// HTML-атрибут moz-opaque елемента <canvas> повідомляє полотну чи буде присутня прозорість
// baseCanvas.mozOpaque = true
// getContext("2d") дозволяє малювати на полотні
const ctx = baseCanvas.getContext("2d")

//!-------------------------------------------------------------------------------------------------

// ✏️ Намалювати просту лінію.
// Починаємо шлях
ctx.beginPath()
// Встановлюємо стартову точку
ctx.moveTo(10, 10)
// Малюємо лінію до нової точки
ctx.lineTo(190, 190)
// Задаємо колір лінії
ctx.strokeStyle = 'black'
// Малюємо лінію
ctx.stroke()

// Додала ще лінію і вийшов хрестик
ctx.beginPath()
// Встановлюємо стартову точку
ctx.moveTo(10, 190)
// Малюємо лінію до нової точки
ctx.lineTo(190, 10)
// Задаємо колір лінії
ctx.strokeStyle = 'black'
// Малюємо лінію
ctx.stroke()

//!-------------------------------------------------------------------------------------------------

// ⚫ Намалювати коло та прямокутник.
// Прямокутник
ctx.fillStyle = "#ff23ff" // колір заливки
ctx.fillRect(85, 100, 30, 50) // x, y, width, height
// Коло
ctx.beginPath()
ctx.arc(40, 50, 20, 0, Math.PI * 2) // x, y, радіус, стартовий кут, кінець
ctx.fillStyle = '#ccc'
ctx.fill()

// Коло
ctx.beginPath()
ctx.arc(40, 50, 5, 0, Math.PI * 2) // x, y, радіус, стартовий кут, кінець
ctx.fillStyle = 'black'
ctx.fill()

// Коло
ctx.beginPath()
ctx.arc(150, 50, 20, 0, Math.PI * 2) // x, y, радіус, стартовий кут, кінець
ctx.fillStyle = '#ccc'
ctx.fill()

// Коло
ctx.beginPath()
ctx.arc(150, 50, 5, 0, Math.PI * 2) // x, y, радіус, стартовий кут, кінець
ctx.fillStyle = 'black'
ctx.fill()

// 🎨 Спробувати різні кольори заливки(fillStyle) та обводки(strokeStyle).
ctx.beginPath();
ctx.rect(20, 170, 160, 20); // x, y, width, height
ctx.fillStyle = 'pink';
ctx.fill();
ctx.lineWidth = 5
ctx.strokeStyle = 'red'
ctx.stroke()

// Написати текст на canvas.
ctx.fillStyle = 'yellow'
ctx.font = '68px Arial'
ctx.fillText('JS', 60, 120)

//!-------------------------------------------------------------------------------------------------

// 🧩 Робота з координатами та формами
const formCanvas = document.getElementById('form-canvas')
// Вказуємо висоту
formCanvas.height = "200"
// Вказуємо ширину
formCanvas.width = "200"

const formCtx = formCanvas.getContext("2d")

formCtx.fillStyle = "#eeee2f"
formCtx.fillRect(0, 0, formCanvas.width, formCanvas.height)

function drawGrid (step = 20) {
	formCtx.strokeStyle = '#141414'
	formCtx.lineWidth = 1

	for (let x = 0; x <= formCanvas.width; x += step) {
		formCtx.beginPath()
		formCtx.moveTo(x, 0)
		formCtx.lineTo(x, formCanvas.height)
		formCtx.stroke()
	}

	for (let y = 0; y <= formCanvas.height; y += step) {
		formCtx.beginPath()
		formCtx.moveTo(0, y)
		formCtx.lineTo(formCanvas.width, y)
		formCtx.stroke()
	}
}

drawGrid()

formCanvas.addEventListener('click', (event) => {
	// отримуємо координати прямокутника
	const rect = formCanvas.getBoundingClientRect()
	const x = event.clientX - rect.left
	const y = event.clientY - rect.top

	// малюємо точку
	formCtx.beginPath()
	formCtx.arc(x, y, 10, 0, Math.PI * 2)
	formCtx.fillStyle = 'pink'
	formCtx.fill()

	// показуємо координати точки
	formCtx.fillStyle = '#1A1A1A'
	formCtx.font = '12px Arial'
	formCtx.fillText(`${Math.round(x)}, ${Math.round(y)}`, x + 10, y - 10)
})

//!-------------------------------------------------------------------------------------------------

// 🌀 Анімації

const animCanvas = document.getElementById('anim-canvas')
// Вказуємо висоту
animCanvas.height = "200"
// Вказуємо ширину
animCanvas.width = "200"

const animCtx = animCanvas.getContext("2d")

// Коло
let ball = {
	x: 50,
	y: 50,
	radius: 20,
	dx: 3, // швидкість по x
	dy: 2, // швидкість по y
	color: '#ff0000'
}

// Функція генерації випадкового кольору
function getRandomColor() {
	const letters = "0123456789ABCDEF"

	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}

	return color
}

// Функція для створення анімації

function animate() {
	animCtx.clearRect(0, 0, animCanvas.width, animCanvas.height)

	// Малюємо коло
	animCtx.beginPath()
	animCtx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
	animCtx.fillStyle = ball.color
	animCtx.fill()

	// Змінюємо позицію
	ball.x += ball.dx
	ball.y += ball.dy

	// Відскоки м'яча анімація
	if (ball.x + ball.radius > animCanvas.width || ball.x - ball.radius < 0) {
		// зміна напрямку руху кола по відповідній осі
		// Наприклад:
		// Якщо dx = 3, куля рухається вправо.
		// Якщо dx = -3, вона рухається вліво.
		ball.dx = -ball.dx
		ball.color = getRandomColor() //змінюємо колір при зіткненні
	}

	if (ball.y + ball.radius > animCanvas.height || ball.y - ball.radius < 0) {
		ball.dy = -ball.dy
		ball.color = getRandomColor() //змінюємо колір при зіткненні
	}

	requestAnimationFrame(animate) //рекурсивний виклик - означає: "після цього кадру, покажи наступний, знову викликавши animate()".

	// 🌀 requestAnimationFrame(animate)
	// Це спеціальна функція від браузера, яка:
	// Викликає анімаційну функцію(в нашому випадку animate) близько 60 разів на секунду.
	// Автоматично синхронізується з частотою оновлення монітора.
	// Ефективніша та плавніша, ніж setInterval.
}

// Запуск анімації 🔛
animate()

//!-------------------------------------------------------------------------------------------------

// 🖱️ Інтерактивність
const writeCanvas = document.getElementById('write-on-canvas')
// Вказуємо висоту
writeCanvas.height = "200"
// Вказуємо ширину
writeCanvas.width = "200"

const writeCtx = writeCanvas.getContext("2d")
writeCtx.fillStyle = '#eee'
writeCtx.fillRect(0, 0, writeCanvas.width, writeCanvas.height);


// Малюємо лінії мишею
let isDrawing = false
let prevX = 0
let prevY = 0

writeCanvas.addEventListener('mousedown', (e) => {
	isDrawing = true
	prevX = e.offsetX
	prevY = e.offsetY
})

writeCanvas.addEventListener('mouseup', () => {
	isDrawing = false
})

writeCanvas.addEventListener('mousemove', (e) => {
	if (isDrawing) {
		writeCtx.beginPath()
		writeCtx.moveTo(prevX, prevY)
		writeCtx.lineTo(e.offsetX, e.offsetY)
		interactiveCtx.strokeStyle = '#fff'
		writeCtx.lineWidth = 3
		writeCtx.stroke()
		prevX = e.offsetX
		prevY = e.offsetY
	}
})

//!-------------------------------------------------------------------------------------------------

// 🖱️ Інтерактивність
const interactiveCanvas = document.getElementById('interactive-canvas')
// Вказуємо висоту
interactiveCanvas.height = "200"
// Вказуємо ширину
interactiveCanvas.width = "200"

const interactiveCtx = interactiveCanvas.getContext("2d")

// Коло
let ballNew = {
	x: 50,
	y: 50,
	radius: 20,
	dx: 3,
	dy: 2, 
	color: '#ff0000'
}

let particles = []

function createExplosion(x, y) {
	for (let i = 0; i < 20; i++) {
		particles.push({
			x,
			y,
			radius: Math.random() * 3 + 2,
			color: `hsl(${Math.random() * 360}, 100%, 50%)`,
			dx: (Math.random() - 0.5) * 6,
			dy: (Math.random() - 0.5) * 6,
			alpha: 1
		})
	}
}

function drawParticles() {
	for (let i = 0; i < particles.length; i++) {
		let p = particles[i]

		interactiveCtx.globalAlpha = p.alpha
		interactiveCtx.beginPath()
		interactiveCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
		interactiveCtx.fillStyle = p.color
		interactiveCtx.fill()
		p.x += p.dx
		p.y += p.dy
		p.alpha -= 0.02
	}
	interactiveCtx.globalAlpha = 1
	particles = particles.filter(p => p.alpha > 0)
}

// Виявлення кліку по м'ячу
interactiveCanvas.addEventListener('click', (e) => {
	const dx = e.offsetX - ballNew.x;
	const dy = e.offsetY - ballNew.y;
	const distance = Math.sqrt(dx * dx + dy * dy);
	if (distance < ballNew.radius) {
		console.log("Влучив у м'яч!");
		createExplosion(ballNew.x, ballNew.y);
	}
})

// 🌀 Анімація
function animateBall() {
	// Trail ефект
	interactiveCtx.fillStyle = "orange";
	interactiveCtx.fillRect(0, 0, interactiveCanvas.width, interactiveCanvas.height);

	// М'яч
	interactiveCtx.beginPath();
	interactiveCtx.arc(ballNew.x, ballNew.y, ballNew.radius, 0, Math.PI * 2);
	interactiveCtx.fillStyle = ballNew.color;
	interactiveCtx.fill();

	// Рух
	ballNew.x += ballNew.dx;
	ballNew.y += ballNew.dy;

	// Відскок
	if (ballNew.x + ballNew.radius > interactiveCanvas.width || ballNew.x - ballNew.radius < 0) {
		ballNew.dx = -ballNew.dx;
	}
	if (ballNew.y + ballNew.radius > interactiveCanvas.height || ballNew.y - ballNew.radius < 0) {
		ballNew.dy = -ballNew.dy;
	}

	// Частинки вибуху
	drawParticles();

	requestAnimationFrame(animateBall);
}

animateBall()



//!-------------------------------------------------------------------------------------------------

// Зоряне небо - ефект
const starsCanvas = document.getElementById('stars')
const starsCtx = starsCanvas.getContext("2d")


// Створюємо масив зірок
const stars = []
for (let i = 0; i < 100; i++) {
	stars.push({
		x: Math.random() * starsCanvas.width, // випадкова позиція по X
		y: Math.random() * starsCanvas.height, // випадкова позиція по Y
		radius: Math.random() * 1.5, // випадковий радіус зірки
		alpha: Math.random() // початкова прозорість (мерехтіння)
	})
}

// Функція малювання зірок
function drawStars() {
	starsCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height) // очищуємо весь canvas

	for (let star of stars) {
		starsCtx.beginPath()
		starsCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2) // малюємо коло
		starsCtx.fillStyle = `rgba(255, 255, 255, ${star.alpha})` // білий колір з прозорістю
		starsCtx.fill()

		// Змінюємо прозорість для ефекту мерехтіння
		star.alpha += (Math.random() - 0.5) * 0.05 // коливання прозорості
		if (star.alpha < 0.1) star.alpha = 0.1 // межа знизу
		if (star.alpha > 1) star.alpha = 1 // межа зверху
	}

	requestAnimationFrame(drawStars) // повторюємо анімацію
}
drawStars() // запускаємо зоряне небо


//!-------------------------------------------------------------------------------------------------

// Падаючий дощ - ефект
const rainCanvas = document.getElementById('rain')
const rainCtx = rainCanvas.getContext("2d")

// Створюємо масив крапель дощу
const rainDrops = []
for (let i = 0; i < 200; i++) {
	rainDrops.push({
		x: Math.random() * rainCanvas.width, // позиція по X
		y: Math.random() * rainCanvas.height, // позиція по Y
		length: Math.random() * 20 + 10, // довжина краплі
		speed: Math.random() * 4 + 4 // швидкість падіння
	})
}

// Функція малювання дощу
function drawRain() {
	rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height) // очищення canvas

	rainCtx.strokeStyle = 'rgba(174,194,224,0.5)' // колір дощу
	rainCtx.lineWidth = 1 // товщина лінії

	for (let drop of rainDrops) {
		rainCtx.beginPath()
		rainCtx.moveTo(drop.x, drop.y) // початок краплі
		rainCtx.lineTo(drop.x, drop.y + drop.length) // кінець краплі
		rainCtx.stroke()

		drop.y += drop.speed // переміщення краплі вниз

		// Якщо крапля вийшла за межі — повертаємо вгору
		if (drop.y > rainCanvas.height) {
			drop.y = -drop.length // переміщення за межі зверху
			drop.x = Math.random() * rainCanvas.width // нова випадкова позиція по X
		}
	}
	requestAnimationFrame(drawRain) // повторення анімації
}
drawRain() // запускаємо ефект дощу


//!-------------------------------------------------------------------------------------------------

// Падаючі сніжинки - ефект
const snowflakesCanvas = document.getElementById('snowflakes')
const snowflakesCtx = snowflakesCanvas.getContext("2d")


// Створюємо масив сніжинок
const snowflakes = []
for (let i = 0; i < 5000; i++) {
	snowflakes.push({
		x: Math.random() * snowflakesCanvas.width, // X-позиція
		y: Math.random() * snowflakesCanvas.height, // Y-позиція
		radius: Math.random() * 3 + 1, // радіус сніжинки
		speedY: Math.random() * 1 + 0.5, // швидкість падіння
		angle: Math.random() * 2 * Math.PI, // початковий кут (для коливань)
		angleSpeed: Math.random() * 0.01 + 0.005 // швидкість зміни кута
	})
}

// Функція малювання сніжинок
function drawSnowflakes() {
	snowflakesCtx.clearRect(0, 0, snowflakesCanvas.width, snowflakesCanvas.height) // очищення

	snowflakesCtx.fillStyle = '#fff' // білий колір снігу

	for (let flake of snowflakes) {
		flake.angle += flake.angleSpeed // змінюємо кут
		flake.y += flake.speedY // рух вниз
		flake.x += Math.sin(flake.angle) // плавний коливальний рух вліво-вправо

		// Якщо сніжинка впала — повертаємо наверх
		if (flake.y > snowflakesCanvas.height) {
			flake.y = -flake.radius
			flake.x = Math.random() * snowflakesCanvas.width
		}

		snowflakesCtx.beginPath()
		snowflakesCtx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2) // малюємо коло
		snowflakesCtx.fill()
	}
	requestAnimationFrame(drawSnowflakes) // анімація
}
drawSnowflakes() // запускаємо ефект снігу

//!-------------------------------------------------------------------------------------------------

// Рух змійки - ефект
const snakeCanvas = document.getElementById('snake')
const snakeCtx = snakeCanvas.getContext("2d")

// Налаштування змійки
const snakeLength = 30 // кількість сегментів тіла
const snakeSegments = [] // масив для сегментів

let snakeHeadX = 0 // початкова позиція голови по X
let angle = 0 // кут для синуса

// Ініціалізація змійки
for (let i = 0; i < snakeLength; i++) {
	snakeSegments.push({ x: 0, y: 0 })
}

// Малюємо змійку як ланцюжок кружків
function drawSnake() {
	snakeCtx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height)

	// Збільшуємо кут і просуваємо голову
	angle += 0.1
	snakeHeadX += 2
	const headY = snakeCanvas.height / 2 + Math.sin(angle) * 40

	// Додаємо нову "голову" в початок списку
	snakeSegments.unshift({ x: snakeHeadX, y: headY })

	// Обмежуємо довжину тіла (щоб "хвіст" зникав)
	if (snakeSegments.length > snakeLength) {
		snakeSegments.pop()
	}

	// Малюємо всі сегменти як кружечки
	for (let i = 0; i < snakeSegments.length; i++) {
		const segment = snakeSegments[i]
		snakeCtx.beginPath()
		snakeCtx.arc(segment.x, segment.y, 6, 0, Math.PI * 2)
		// Чим далі від голови — тим прозоріший колір
		const alpha = 1 - i / snakeLength
		snakeCtx.fillStyle = `rgba(0, 255, 0, ${alpha})`
		snakeCtx.fill()
	}

	// Якщо змійка вийшла за межі праворуч — починаємо зліва
	if (snakeHeadX > snakeCanvas.width + 50) {
		snakeHeadX = -50
		snakeSegments.length = 0 // обнуляємо масив
	}
	requestAnimationFrame(drawSnake)
}
drawSnake()
