"use strict"

// Задача 20. Дано список зображень. Кожне із зображень двічі використовується як фон для картки, але воно приховане. При кліку на 2 картки їх зображення відриваються. Якщо зображення однакові, то залишаємо їх відкритими. Інакше через 1 секунду знову приховуємо.

class MemoryGame {
	constructor(srcImagesList, cssObj) {
		this.doubleImagesList = [...srcImagesList, ...srcImagesList]
		this.cssObj = cssObj
	}

	getRandomValue(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	shuffleImages() {
		const shuffledImages = []

		while (this.doubleImagesList.length) {
			const randomNum = this.getRandomValue(0, this.doubleImagesList.length - 1)

			shuffledImages.push(this.doubleImagesList[randomNum])
			this.doubleImagesList.splice(randomNum, 1)
		}

		return shuffledImages
	}

	handleClick(e) {
		const currentEl = e.target

		if (!currentEl || currentEl.tagName !== 'LI' || currentEl.classList.contains('open') || currentEl.classList.contains('match')) {
			return
		}
		currentEl.classList.add('open')

		const openCardsNumbers = document.querySelectorAll('.card.open:not(.match)')
		console.log(openCardsNumbers)

		if (openCardsNumbers.length === 2) {
			const card1 = openCardsNumbers[0]
			const card2 = openCardsNumbers[1]

			if (card1.style.backgroundImage === card2.style.backgroundImage) {
				card1.classList.add('match')
				card2.classList.add('match')
			} else {
				setTimeout(() => {
					card1.classList.remove('open')
					card2.classList.remove('open')
				}, 1000);
			}
		}
	}

	render(containerSelector) {
		const cards = document.createElement('ul')
		cards.className = this.cssObj.cards
		const imagesList = this.shuffleImages()

		imagesList.forEach(el => {
			const card = document.createElement('li')
			card.className = this.cssObj.card
			card.style.backgroundImage = `url('${el}')`
			cards.append(card)
		})

		cards.addEventListener('click', (e) => {
			this.handleClick(e)
		})

		if (containerSelector) {
			document.querySelector(containerSelector).append(cards)
		}
	}
}
const srcImagesList = [
	'../img/card_01.jpg',
	'../img/card_02.jpg',
	'../img/card_03.jpg',
	'../img/card_04.jpg',
	'../img/card_05.jpg',
	'../img/card_06.jpg',
	'../img/card_07.jpg',
	'../img/card_08.jpg',
	'../img/card_09.jpg',
	'../img/card_10.jpg',
	'../img/card_11.jpg',
	'../img/card_12.jpg'
]

const cssObj = {
	card: 'card',
	cards: 'cards'
}

const cards = new MemoryGame(srcImagesList, cssObj)
cards.render('#container')