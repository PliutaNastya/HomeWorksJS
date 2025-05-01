"use strict"

// Задача 06. Список, у якому можна вибирати елементи (вибраний елемент підсвічується рамкою).

class List {
	constructor(itemsList, titleName) {
		this.itemsList = itemsList
		this.titleName = titleName
	}

	renderTitle() {
		const title = document.createElement('h2')
		title.innerText = this.titleName

		return title
	}

	renderListItem() {
		const listItem = document.createElement('li')
		return listItem
	}

	renderList() {
		const list = document.createElement('ol')

		this.itemsList.forEach(el => {
			const listItem = this.renderListItem()
			listItem.innerText = el
			list.append(listItem)
		})
		return list
	}
	render(containerSelector) {
		const container = document.createElement('div')
		const title = this.renderTitle()
		container.append(title)

		const list = this.renderList()
		container.append(list)

		list.addEventListener('click', (e) => {
			const currentElement = e.target

			if (currentElement && currentElement.tagName === 'LI') {
				list.querySelectorAll('li').forEach(el => el.classList.remove('selected'))
				currentElement.classList.add('selected')
			}
		})
		if (containerSelector) {
			document.querySelector(containerSelector).append(container)
		}
	}
}

const itemsList = [
	"Навчання програмуванню",
	"Подорож до Карпат",
	"Улюблена книга",
	"Щоденні звички",
	"Ідеї для стартапу",
	"Список покупок",
	"Плани на вихідні",
	"Улюблені фільми",
	"Цілі на рік",
	"Натхненні цитати"
]
const list = new List(itemsList, 'Список')
list.render('#container')