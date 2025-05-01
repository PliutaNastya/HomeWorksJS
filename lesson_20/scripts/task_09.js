"use strict"

// Задача 09. Перекладач. Користувачу виводять змішані картки з словами на англійській і українській мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). Якщо знайдено правильні пари карток, що відповідають одному слову, то видаляємо ці картки. Інакше - виділяємо червоною рамкою і через секунду забираємо рамку.

class WordCard {
	constructor(wordData, lang, cssObj, errorShowInerval) {
		this.wordData = wordData
		this.lang = lang
		this.cssObj = cssObj
		this.errorShowInerval = errorShowInerval
		this.state = null //'selected', 'error'
	}

	deSelect() {
		this.state = null
		this.updateStyleClass()
	}

	setErrorState() {
		this.state = 'error'
		this.updateStyleClass()
		setTimeout(() => {
			this.state = null
			this.updateStyleClass()
		}, this.errorShowInerval);
	}

	remove() {
		this.$el.remove()
	}

	updateStyleClass() {
		if (this.state) this.$el.className = this.cssObj.word[this.state]
		else this.$el.className = ''
	}

	setCurrentState() {
		const stateEvent = new CustomEvent('onstatechange', {
			detail: {
				id: this.wordData.id,
				lang: this.lang,
				state: this.state,
			},
			bubbles: true,
		})

		this.$el.dispatchEvent(stateEvent)
	}

	onWordSelect() {
		// що ми робимо, коли на слово клікнуть
		switch (this.state) {
			case 'selected':
				this.state = null
				break;
			default:
				this.state = 'selected'
				break
		}

		this.updateStyleClass()
		this.setCurrentState()
	}

	render(containerSelector) {
		const divEl = document.createElement('div')
		divEl.innerText = this.wordData[this.lang]

		divEl.onclick = this.onWordSelect.bind(this)

		if (containerSelector) {
			document.querySelector(containerSelector).append(divEl)
		}

		this.$el = divEl

		return divEl
	}
}

class WordsList {
	constructor(wordsListData, lang, cssObj) {
		this.wordsListData = JSON.parse(JSON.stringify(wordsListData))
		this.lang = lang
		this.cssObj = cssObj
		this.selectedItemId = null
		this.wordsItemsObj = {}
	}

	// знаходить випадкове слово і видаляє його
	takeOutRandomWord() {
		let wordObj = null

		if (this.wordsListData.length) {
			const randIndex = Math.floor(Math.random() * this.wordsListData.length)
			wordObj = this.wordsListData[randIndex]
			this.wordsListData.splice(randIndex, 1)
		}

		return wordObj
	}

	onWordSelectionChange(event) {
		const eventData = event.detail
		if (eventData.state === 'selected') {
			if (this.selectedItemId) {
				this.wordsItemsObj[this.selectedItemId].deselect()
			} 
			
			this.selectedItemId = eventData.id
		} else this.selectedItemId = null
	}

	render(containerSelector) {
		const containerEl = document.createElement('div')
		containerEl.className = this.cssObj.container

		let wordData
		do {
			wordData = this.takeOutRandomWord()

			if (wordData) {
				const wordObj = new WordCard(wordData, this.lang, this.cssObj)

				this.wordsItemsObj[wordData.id] = wordObj

				containerEl.append(wordObj.render())
			}

		} while (wordData)
		
		containerEl.addEventListener('onstatechange', this.onWordSelectionChange.bind(this))

		if (containerSelector) {
			document.querySelector(containerSelector).append(containerEl)
		}

		return containerEl
	}
}

class Translator {
	constructor(words, cssObj) {
		this.words = words
		this.cssObj = cssObj

	}
}

const words = [
	{ id: '0', en: 'table', ua: 'стіл' },
	{ id: '1', en: 'car', ua: 'автомобіль' },
	{ id: '2', en: 'bus', ua: 'автобус' },
	{ id: '3', en: 'man', ua: 'людина' },
	{ id: '4', en: 'boy', ua: 'хлопець' },
]

const cssObj = {
	container: 'words-container',
	word: {
		selected: 'selected',
		error: 'error',
	}
}

window.onload = function () {
	const table = new WordsList(words, 'en', cssObj)
	const table2 = new WordsList(words, 'ua', cssObj)
	table.render('#translator')
	table2.render('#translator')
}
