"use strict"

// Задача 21. Crazy button.

class CrazyButton {
	constructor(btnTitle, maxStep) {
		this.btnTitle = btnTitle
		this.maxStep = maxStep
	}
	getRandomStep() {
		return -this.maxStep + Math.floor(Math.random() * 2 * this.maxStep)
	}
	jump() {
		const deltaLeft = this.getRandomStep()
		const deltaTop = this.getRandomStep()

		this.left += deltaLeft
		this.top += deltaTop
		
		this.btn.style.left = this.left + 'px'
		this.btn.style.top = this.top + 'px'
	}
	render(containerSelector) {
		const btn = document.createElement('button')
		btn.innerText = this.btnTitle

		this.left = this.getRandomStep() * 5
		this.top = this.getRandomStep() * 5

		btn.style.left = this.left + 'px'
		btn.style.top = this.top + 'px'
		
		this.btn = btn

		// щоб не втратився контекст
		btn.onmouseover = this.jump.bind(this)

		if (containerSelector) {
			document.querySelector(containerSelector).append(btn)
		}
	}
}

window.onload = function () {
	for (let i = 0; i < 5; i++) {
		const b1 = new CrazyButton('test', 50)
		b1.render('#container')
	}
}