"use strict"

// Задача 11. Компонент діаграма. Значення від 0 до 100. Область розділено на 3 частини (значення у першій частині – червоне заповнення, значення у другій частині – синій колір, значення у третій – зелений).

class Diagram {
	constructor(title, dataList, sectionsColorList, cssObj) {
		this.title = title
		this.dataList = dataList
		this.sectionsColorList = sectionsColorList
		this.cssObj = cssObj
	}

	renderItemTitle(itemTitle) {
		const titleContainer = document.createElement('h2')
		titleContainer.innerText = itemTitle
		titleContainer.className = this.cssObj.title

		return titleContainer
	}

	renderItemValue(itemValue) {
		const valueContainer = document.createElement('div')
		valueContainer.className = this.cssObj.value

		const valueBar = document.createElement('div')
		valueBar.style.width = `${itemValue}%`
		valueBar.style.height = '100%'
		valueBar.style.backgroundColor = this.getItemColor(itemValue)

		valueContainer.append(valueBar)
		return valueContainer
	}

	// генеруємо один пункт
	renderItem(itemData) {
		const itemContainer = document.createElement('div')

		itemContainer.append(this.renderItemTitle(itemData.title))
		itemContainer.append(this.renderItemValue(itemData.value))

		return itemContainer
	}

	getItemColor(itemValue) {
		const sectionWidth = 100 / this.sectionsColorList.length

		const colorIndex = Math.ceil(itemValue / sectionWidth) - 1
		// або
		// const colorIndex = Math.floor(itemValue / sectionWidth)
		
		return this.sectionsColorList[colorIndex]
	}

	render(containerSelector) {
		const itemsContainer = document.createElement('div')
		itemsContainer.className = 'items'

		for (const item of this.dataList) {
			itemsContainer.append(this.renderItem(item))
		}

		if (containerSelector) {
			document.querySelector(containerSelector).append(itemsContainer)
		}

		return itemsContainer
	}
}

let sectionsColorList = ["red", "blue", "green"]
let dataList = [
	{
		title: 'Name 1',
		value: 7,
	},
	{
		title: 'Name 2',
		value: 64,
	},
	{
		title: 'Name 3',
		value: 99,
	},
	{
		title: 'Name 4',
		value: 23,
	},
	{
		title: 'Name 5',
		value: 86,
	}
]
const cssObj = {
	value: 'item-2',
	title: 'title-2',
}

// Example
const d1 = new Diagram(
	'Успішність учнів',
	dataList,
	sectionsColorList,
	cssObj
)
d1.render('#dataContainer')