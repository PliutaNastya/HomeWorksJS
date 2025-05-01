"use strict"

// Задача 01. Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.

class Star {
	constructor(maxStep, randomSpeed, colorList, cssObj) {
		this.maxStep = maxStep
		this.randomSpeed = randomSpeed
		this.colorList = colorList
		this.cssObj = cssObj
		this.currentColorIndex = 0
		this.scale = 0.2
	}

	getRandomValue(min, max) {
		return Math.floor(Math.random() * (max-min + 1)) + min
	}

	setCommonStyles() {
		this.star.style.position = 'fixed'
		this.star.style.aspectRatio = '1'
		this.star.style.borderRadius = '50%'
		this.star.style.boxShadow = '0px 0px 3px #fff'
		this.star.style.backgroundColor = this.colorList[this.currentColorIndex]
		this.star.style.transition = 'transform 1s ease-in-out, background-color 1s ease-in-out'
	}

	setMinSizes() {
		this.star.style.width = this.getRandomValue(1, 5) + 'px'
	}

	setInitStarCoordinates() {
		this.left = this.getRandomValue(0, 100)
		this.top = this.getRandomValue(0, 100)
	}
	setStarPosition() {
		this.star.style.left = this.left + '%'
		this.star.style.top = this.top + '%'
	}
	setInitStarPosition() {
		this.setInitStarCoordinates()
		this.setStarPosition()
	}

	changeSize() {
		this.scale += 0.2

		if (this.scale >= this.maxStep) {
			this.scale = 0.2
			this.setInitStarPosition()
		}

		this.star.style.transform = `scale(${this.scale})`
	}

	changeColor() {
		this.star.style.backgroundColor = this.colorList[this.currentColorIndex]
		this.currentColorIndex++

		if (this.currentColorIndex >= this.colorList.length) {
			this.currentColorIndex = 0
		}
	}

	render(containerSelector) {
		const star = document.createElement('span')
		star.className = this.cssObj.star
		this.star = star
		this.setCommonStyles()
		this.setMinSizes()
		this.setInitStarPosition()

		setInterval(() => {
			this.changeSize()
			this.changeColor()
		}, this.randomSpeed)

		

		if (containerSelector) {
			document.querySelector(containerSelector).append(star)
		}
	}
}

const cssObj = {
	star: 'star'
}
const colorList = [
	'#ffffff',
	'#ffffcc', 
	'#fff599', 
	'#ffe066', 
	'#ffd700', 
	'#ffe066', 
	'#fff599',
	'#ffffcc',
	'#ffffff'
]

for (let i = 0; i < 300; i++) {
	const randomSpeed = Math.floor(Math.random() * (3000 - 500 + 1)) + 500
	const star = new Star(2, randomSpeed, colorList, cssObj)
	star.render('#stars-container')
}
