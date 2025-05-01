"use strict"

// Задача 18. Ловля тарганів. Зображення таргана з’являються в центрі контейнера і випадковим чином «розбігаються» у випадкових напрямках. При кліку на зображенні таргана його рух припиняється і виводиться зображення сплячого таргана.

class Cockroach {
	constructor(imagesObj, maxStep, maxSpeed, cssObj) {
		this.imagesObj = imagesObj
		this.maxStep = maxStep
		this.maxSpeed = maxSpeed
		this.cssObj = cssObj
	}

	getRandomValue(minValue, maxValue) {
		return minValue + Math.floor(Math.random() *(maxValue - minValue))
	}

	setInitDirection() {
		this.vx = this.getRandomValue(-this.maxStep, this.maxStep)
		this.vy = this.getRandomValue(-this.maxStep, this.maxStep)
	}

	updateCoordinates() {
		this.left += this.vx
		// якщо вийшли за межі в'юпорту
		if(this.left < 0 || this.left > 100) this.vx = -this.vx
		this.top += this.vy
		// якщо вийшли за межі в'юпорту
		if (this.top < 0 || this.top > 100) this.vy = -this.vy
	}

	move() {
		this.updateCoordinates()
		this.setCockroachPosition()
	}

	onTap() {
		clearInterval(this.interval)
		this.cockroach.src = this.imagesObj.sleep
	}

	setInitPositionCoordinates() {
		this.left = this.getRandomValue(0, 100)
		this.top = this.getRandomValue(0, 100)
	}

	setCockroachPosition() {
		this.cockroach.style.left = this.left + '%'
		this.cockroach.style.top = this.top + '%'
	}

	setInitCockroachPosition() {
		this.setInitPositionCoordinates()
		this.setCockroachPosition()
	}

	render(containerSelector) {
		const img = document.createElement('img')
		img.src = this.imagesObj.alive
		img.className = this.cssObj.containerClass
		this.cockroach = img
		this.cockroach.onclick = this.onTap.bind(this)
		this.setInitCockroachPosition()

		if (containerSelector) {
			document.querySelector(containerSelector).append(img)
		}

		this.setInitDirection()
		this.interval = setInterval(() => {
			this.move()
		}, this.maxSpeed);
	}
}

const imagesObj = {
	alive: '../img/cockroach_before.png',
	sleep: '../img/cockroach_after.png'
}

for (let i = 0; i < 100; i++) {
	const c1 = new Cockroach(
		imagesObj,
		Math.random() * 3,
		Math.random * 1000,
		{
			containerClass: 'insect'
		}
	)
	c1.render('body')
}