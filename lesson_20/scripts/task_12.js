"use strict"

// Задача 12. Розробити Loader (задається title, value). Зімітувати завантаження за допомогою таймера.

class Loader {
	constructor(title, value) {
		this.title = title
		this.value = value
	}

	renderTitle() {
		const title = document.createElement('h2')
		title.innerText = this.title

		return title
	}
	fillLoader() {
		const timer = setInterval(() => {
			if (this.value < 100) {
				this.value += 1 
				this.loader.style.width = `${this.value}%`
				this.percentSpan.innerText = `${this.value}%`
			} else clearInterval(timer)
		}, 100)
	}
	renderLoader() {
		const loaderContainer = document.createElement('div')
		loaderContainer.style.width = "100%"
		loaderContainer.style.height = '30px'
		loaderContainer.style.border = '3px solid #fff'
		loaderContainer.style.position = 'relative'
			
		const percentSpan = document.createElement('span')
		percentSpan.innerText = `${this.value}%`
		percentSpan.style.position = 'absolute'
		percentSpan.style.top = '50%'
		percentSpan.style.left = '50%'
		percentSpan.style.transform = 'translate(-50%, -50%)'
		loaderContainer.append(percentSpan)

		const loader = document.createElement('div')
		loader.style.height = '100%'
		loader.style.width = `${this.value}%`
		loader.style.backgroundColor = '#005e64'

		loaderContainer.append(loader)

		this.loader = loader
		this.percentSpan = percentSpan

		return loaderContainer
	}

	render(containerSelector) {
		const container = document.createElement('div')
		container.className = 'loader'

		const title = this.renderTitle()
		container.append(title)

		const loader = this.renderLoader()
		container.append(loader)

		this.fillLoader()

		if (containerSelector) {
			document.querySelector(containerSelector).append(container)
		}
	}
}

const loader = new Loader('Завантажено', 10)
loader.render('#container')
