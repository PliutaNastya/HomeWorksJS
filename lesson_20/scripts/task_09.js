"use strict"

// Задача 09. Перекладач. Користувачу виводять змішані картки з словами на англійській і українській мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). Якщо знайдено правильні пари карток, що відповідають одному слову, то видаляємо ці картки. Інакше - виділяємо червоною рамкою і через секунду забираємо рамку.

class WordCard {
	constructor(wordData, lang, cssObj, errorShowInterval = 1000) {
		this.wordData = wordData
		this.lang = lang
		this.cssObj = cssObj
		this.errorShowInterval = errorShowInterval
		this.state = null // 'selected', 'error'
	}

	deselect() {
		this.state = null
		this.updateStyleClass()
	}

	setErrorState() {
		this.state = 'error'
		this.updateStyleClass()
		setTimeout(() => {
			this.state = null
			this.updateStyleClass()
		}, this.errorShowInterval)
	}

	remove() {
		this.$el.remove()
	}

	updateStyleClass() {
		if (this.state) this.$el.className = this.cssObj[this.state]
		else this.$el.className = ''
	}

	sendCurrentState() {
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
		switch (this.state) {
			case 'selected':
				this.state = null
				break
			default:
				this.state = 'selected'
				break
		}
		this.updateStyleClass()
		this.sendCurrentState()
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

// wordsItemsObj={
//   '1' : new WordCard( { id: 1, en: 'car', ua: 'автомобіль' }),
//   '3' : new WordCard( { id: 3, en: 'man', ua: 'людина' }),

// }
class WordsList {
	constructor(wordsListData, lang, cssObj) {
		this.wordsListData = JSON.parse(JSON.stringify(wordsListData))
		this.lang = lang
		this.cssObj = cssObj
		this.selectedItemId = null
		this.wordsItemsObj = {}
	}

	//знаходить випадове слово і видаляє його з списку
	takeOutRandomWord() {
		let wordObj = null
		if (this.wordsListData.length) {
			const randIndex = Math.floor(
				Math.random() * this.wordsListData.length
			)
			wordObj = this.wordsListData[randIndex]
			this.wordsListData.splice(randIndex, 1)
		}

		return wordObj
	}

	// detail: {
	//       id: this.wordData.id,
	//       lang: this.lang,
	//       state: this.state,
	//     },
	sendSelectedWordData(wordData) {
		const selectedWordEvent = new CustomEvent('onwordatachange', {
			detail: wordData,
			bubbles: true,
		})
		this.$el.dispatchEvent(selectedWordEvent)
	}

	onWordSelectionChange(event) {
		const eventData = event.detail
		if (eventData.state === 'selected') {
			if (this.selectedItemId) {
				this.wordsItemsObj[this.selectedItemId].deselect()
			}

			this.selectedItemId = eventData.id
		} else this.selectedItemId = null
		this.sendSelectedWordData(eventData)
	}

	deleteSelectedWord() {
		if (this.selectedItemId) {
			this.wordsItemsObj[this.selectedItemId].remove()
			delete this.wordsItemsObj[this.selectedItemId]
			this.selectedItemId = null
		}
	}

	setErrorState() {
		if (this.selectedItemId) {
			this.wordsItemsObj[this.selectedItemId].setErrorState()
			this.selectedItemId = null
		}
	}

	render(containerSelector) {
		const containerEl = document.createElement('div')
		containerEl.className = this.cssObj.container

		let wordData
		do {
			wordData = this.takeOutRandomWord()
			if (wordData) {
				const wordObj = new WordCard(
					wordData,
					this.lang,
					this.cssObj.word
				)

				this.wordsItemsObj[wordData.id] = wordObj
				containerEl.append(wordObj.render())
			}
		} while (wordData)

		containerEl.addEventListener(
			'onstatechange',
			this.onWordSelectionChange.bind(this)
		)

		if (containerSelector) {
			document.querySelector(containerSelector).append(containerEl)
		}

		this.$el = containerEl
		return containerEl
	}
}

class Translator {
	constructor(wordsList, cssObject) {
		this.wordsList = wordsList
		this.cssObj = cssObj

		this.wordsListCards = {
			en: new WordsList(wordsList, 'en', cssObj),
			ua: new WordsList(wordsList, 'ua', cssObj),
		}

		this.selectedData = {}
	}

	// detail: {
	//       id: this.wordData.id,
	//       lang: this.lang,
	//       state: this.state,
	//     },

	onWordSelection(event) {
		const wordData = event.detail
		if (wordData.lang in this.selectedData) {
			if (wordData.state === 'selected') {
				this.selectedData[wordData.lang] = wordData.id
			} else {
				delete this.selectedData[wordData.lang]
			}
		} else {
			const otherLang = wordData.lang === 'en' ? 'ua' : 'en'
			if (otherLang in this.selectedData) {
				if (this.selectedData[otherLang] === wordData.id) {
					this.wordsListCards['ua'].deleteSelectedWord()
					this.wordsListCards['en'].deleteSelectedWord()
				} else {
					this.wordsListCards['ua'].setErrorState()
					this.wordsListCards['en'].setErrorState()
				}
				delete this.selectedData[otherLang]
			} else {
				this.selectedData[wordData.lang] = wordData.id
			}
		}
	}

	render(containerSelector) {
		const containerEl = document.createElement('div')

		for (const lang in this.wordsListCards) {
			containerEl.append(this.wordsListCards[lang].render())
		}

		containerEl.addEventListener(
			'onwordatachange',
			this.onWordSelection.bind(this)
		)

		if (containerSelector)
			document.querySelector(containerSelector).append(containerEl)

		this.$el = containerEl
		return containerEl
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
	const trans = new Translator(words, cssObj)
	trans.render('#translator')
}
