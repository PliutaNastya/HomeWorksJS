"use strict"

// Задача 04.Задача 3. Розробити Класи
// House
// Dog
// Bird
// --- властивості-- -
	// Координата Х
	// Координата У
	// шлях до зображення
	// інтервал оновлення
// --- методи-- -
	// генерування елемента розмітки
	// оновлення через вказаний інтервал(збільшення або зменшення масштабу(об’єкт не рухається)
	
// --- властивості-- -
	// Координата Х
	// Координата У
	// шлях до зображення
	// інтервал оновлення
// --- методи-- -
	// генерування елемента розмітки
	// оновлення через вказаний інтервал(випадкове зміщення по горизонталі(зміна координати Х))

// --- властивості-- -
	// Координата Х
	// Координата У
	// шлях до зображення
	// інтервал оновлення
// --- методи-- -
	// генерування елемента розмітки
	// оновлення через вказаний інтервал(випадкове переміщення у довільному напрямку)

// Подумайте яким має бути спільний клас предок.

class Validator {
	static validateString(value, message) {
		if (!value || typeof value !== 'string') throw new TypeError(message)
	}

	static validateNumber(value, message) {
		if (!isFinite(value) || isNaN(value) || typeof value !== "number") throw new Error(message)
	}
}

class MovableObject {
	#coordX
	#coordY
	#srcImage
	#updatingInterval
	constructor(coordX, coordY, srcImage, updatingInterval) {
		this.coordX = coordX
		this.coordY = coordY
		this.srcImage = srcImage
		this.updatingInterval = updatingInterval
	}

	get coordX() {
		return this.#coordX
	}
	set coordX(newCoordX) {
		Validator.validateNumber(newCoordX, "Некоректно вказано значення координати X")
		this.#coordX = newCoordX
	}

	get coordY() {
		return this.#coordY
	}
	set coordY(newCoordY) {
		Validator.validateNumber(newCoordY, "Некоректно вказано значення координати Y")
		this.#coordY = newCoordY
	}

	get srcImage() {
		return this.#srcImage
	}
	set srcImage(newSrcImage) {
		Validator.validateString(newSrcImage, "Некоректно введено шлях до зображення")
		this.#srcImage = newSrcImage
	}

	get updatingInterval() {
		return this.#updatingInterval
	}
	set updatingInterval(newUpdatingInterval) {
		Validator.validateNumber(newUpdatingInterval, "Некоректно вказано значення координати Y")
		this.#updatingInterval = newUpdatingInterval
	}

	renderElement() {
		const div = document.createElement('div')
		div.style.width = '150px'
		div.style.aspectRatio = '1'
		div.style.position = 'absolute'
		div.style.top = `${this.coordY}%`
		div.style.left = `${this.coordX}%`
		div.style.backgroundImage = `url(${this.srcImage})`
		div.style.backgroundPosition = "center"
		div.style.backgroundSize = "cover"
		div.style.backgroundRepeat = "no-repeat"
		div.style.transition = 'all 0.3s ease-in-out'

		this.$el = div
	}

	render(containerSelector) {
		this.renderElement()
		const container = document.querySelector(containerSelector)
		if (container) container.append(this.$el)
	}
}

class House extends MovableObject{
	constructor(coordX, coordY, srcImage, updatingInterval) {
		super(coordX, coordY, srcImage, updatingInterval)
	}

	move() {
		setInterval(() => {
			const randomNum = Math.random()
			randomNum > 0.5 ? this.$el.style.transform = 'scale(1.1)' : this.$el.style.transform = 'scale(0.8)'
		}, this.updatingInterval);
	}
}

class Dog extends MovableObject{
	constructor(coordX, coordY, srcImage, updatingInterval) {
		super(coordX, coordY, srcImage, updatingInterval)
	}

	move() {
		setInterval(() => {
			const deltaX = Math.floor(Math.random() * 20)

			Math.random() > 0.5 ? this.coordX += deltaX : this.coordX -= deltaX

			this.$el.style.left = `${this.coordX}%`
		}, this.updatingInterval)
	}
}

class Bird extends MovableObject {
	constructor(coordX, coordY, srcImage, updatingInterval) {
		super(coordX, coordY, srcImage, updatingInterval)
	}

	move() {
		setInterval(() => {
			const deltaX = Math.floor(Math.random() * 20)
			const deltaY = Math.floor(Math.random() * 20)

			Math.random() > 0.5 ? this.coordX += deltaX : this.coordX -= deltaX
			Math.random() > 0.5 ? this.coordY += deltaY : this.coordY -= deltaY

			this.$el.style.left = `${this.coordX}%`
			this.$el.style.top = `${this.coordY}%`
		}, this.updatingInterval)
	}
}

const h = new House(0, 0, '../img/house.jpeg', 1000)
h.render('.house-container')
h.move()

const d = new Dog(0, 0, '../img/dog.webp', 1000)
d.render('.dog-container')
d.move()

const b = new Bird(0, 0, '../img/bird.webp', 1000)
b.render('.bird-container')
b.move()