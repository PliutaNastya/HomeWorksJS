"use strict"

// Задача 02. Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану.

class Tank {
	constructor(imagesObj, cssObj) {
		this.imagesObj = imagesObj
		this.cssObj = cssObj
	}
	getRandomValue(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	setRandomLeftPosition() {
		this.tank.style.left = this.getRandomValue(0, 100) + 'vw'
	}

	setInitPosition() {
		const topPosition = 0
		this.tank.style.top = topPosition + 'px'
		this.topPosition = topPosition
	}

	move() {
		let randomSpeed = this.getRandomValue(5, 40)
		this.topPosition += randomSpeed
		this.tank.style.top = this.topPosition + 'px'

		if (this.topPosition > window.innerHeight) {
			this.topPosition = 0
			this.setRandomLeftPosition()
			randomSpeed = this.getRandomValue(5, 40)
		}
	}

	blowUpATank() {
		this.tank.src = this.imagesObj.explosion

		clearInterval(this.intervalId)
		
		setTimeout(() => {
			this.tank.remove()
		}, 1000);
	}
	render(containerSelector) {

		const tank = document.createElement('img')
		tank.src = this.imagesObj.tank
		tank.className = this.cssObj.image
		this.tank = tank
		this.setInitPosition()
		this.setRandomLeftPosition()

		this.tank.onclick = this.blowUpATank.bind(this)

		const intervalId = setInterval(() => {
			this.move()
		}, 500)

		this.intervalId = intervalId

		if (containerSelector) {
			document.querySelector(containerSelector).append(tank)
		}
		return tank
	}
}

class CustomCursor {
	constructor(cssObj) {
		this.cssObj = cssObj
	}

	move() {
		document.addEventListener('mousemove', (e) => {
			this.cursor.style.left = `${e.pageX}px`
			this.cursor.style.top = `${e.pageY}px`
		})
	}

	render(containerSelector) {
		const cursor = document.createElement('div')
		cursor.className = this.cssObj.cursor
		this.cursor = cursor

		this.move()
		
		if (containerSelector) {
			document.querySelector(containerSelector).appendChild(cursor)
		}
	}
	
}

const imagesObj = {
	tank: '../img/tank.png',
	explosion: '../img/explosion.png'
}

const cssObj = {
	cursor: 'cursor',
	image: 'image',
	bayraktar: 'bayraktar',
	explosion: 'explosion',
}

const cursor = new CustomCursor(cssObj)
cursor.render('#container')

for (let i = 0; i < 20; i++) {
	const tank = new Tank(imagesObj, cssObj)
	tank.render('#container')
}

