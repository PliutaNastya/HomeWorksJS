"use strict"

class Image {
	constructor() {}

	renderImage(url) {
		const image = document.createElement('img')
		image.src = url
		return image
	}
}
class Card {
	constructor() {}

	renderCard(fact) {
		const card = document.createElement('li')
		card.innerText = fact
		return card
	}
}

export default class CardsList {
	constructor(data, cssObj) {
		this.cssObj = cssObj
		this.data = data
	}

	renderList() {
		const list = document.createElement('ul')
		this.data.forEach(fact => {
			const listItem = new Card()
			const cardItem = listItem.renderCard(fact)
			cardItem.append(new Image().renderImage(`https://cataas.com/cat?nocache=${Math.random()}`))
			list.append(cardItem)
		})

		return list
	}

	render(containerSelector) {
		const container = document.querySelector(containerSelector)
		const cardsList = this.renderList()

		if(container) container.append(cardsList)
	}
}