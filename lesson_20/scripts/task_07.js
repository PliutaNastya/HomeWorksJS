"use strict"

// Задача 07. Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент

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
		this.list = list

		return list
	}
	updateList(filteredItems) {
		this.list.innerHTML = ''

		filteredItems.forEach(el => {
			const listItem = this.renderListItem()
			listItem.innerText = el
			this.list.append(listItem)
		})
	}
	render(containerSelector) {
		const container = document.createElement('div')
		const title = this.renderTitle()
		container.append(title)

		const list = this.renderList()
		container.append(list)

		if (containerSelector) {
			document.querySelector(containerSelector).append(container)
		}
	}
}

class SearchInput {
	constructor(labelName) {
		this.labelName = labelName
	}

	renderInput() {
		const inputEl = document.createElement('input')
		inputEl.type = 'search'
		this.inputEl = inputEl

		const label = document.createElement('label')
		label.innerText = this.labelName
		label.append(inputEl)

		return label
	}

	getInputElement() {
		return this.inputEl
	}

	render(containerSelector) {
		const container = document.createElement('div')
		const input = this.renderInput()

		container.append(input)

		if (containerSelector) {
			document.querySelector(containerSelector).append(container)
		}
	}
}

class ListFilterManager {
	constructor(searchInput, renderedList, originalList) {
		this.searchInput = searchInput
		this.renderedList = renderedList
		this.originalList = originalList
	}

	init() {
		const searchInput = this.searchInput.getInputElement()

		searchInput.addEventListener('input', () => {
			const inputValue = searchInput.value.toLowerCase()

			const filteredList = this.originalList.filter(el => el.toLowerCase().includes(inputValue))
			this.renderedList.updateList(filteredList)
		})
	}
}

const employeesList = [
	"Іван Петренко",
	"Олена Шевченко",
	"Андрій Коваленко",
	"Марія Іванова",
	"Сергій Ткачук",
	"Наталія Бондар",
	"Володимир Сидоренко",
	"Ірина Литвин",
	"Олександр Гнатюк",
	"Тетяна Романенко"
]
const searchInput = new SearchInput('Почати пошук')
searchInput.render('#container')

const list = new List(employeesList, 'Список працівників')
list.render('#container')

const searchManager = new ListFilterManager(searchInput, list, employeesList)
searchManager.init()