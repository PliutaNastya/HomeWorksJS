"use strict"

// Задача 08. Дано список автомобілів (марка, рік випуску, ціна). Сформувати елементи для фільтрування з використанням випадаючого списку (контент цих випадаючих списків сформувати у залежності від переданого списку).

class Select {
	constructor(itemsObj) {
		this.itemsObj = itemsObj
	}

	renderLabel(labelName, selectId) {
		const label = document.createElement('label')
		label.setAttribute('for', selectId)
		label.innerText = labelName

		return label
	}

	renderSelectDefaultOption() {
		const defaultOption = document.createElement('option')
		defaultOption.value = ''
		defaultOption.innerText = '--Будь ласка оберіть пункт--'

		return defaultOption
	}

	renderSelectOption() {
		const selectOption = document.createElement('option')

		return selectOption
	}

	renderSelect(key, selectId) {
		const select = document.createElement('select')
		select.id = selectId
		const defaultOption = this.renderSelectDefaultOption()
		select.append(defaultOption)

		const filteredList = []

		for (let i = 0; i < this.itemsObj.length; i++) {
			const currentEl = this.itemsObj[i][key]
			if (!filteredList.includes(currentEl)) filteredList.push(currentEl)
		}
		
		filteredList.forEach(el => {
			const option = this.renderSelectOption()
			option.innerText = el
			option.value = el
			select.append(option)
		})

		return select
	}

	render(containerSelector, labelName, selectId, key) {
		const container = document.createElement('div')
		const label = this.renderLabel(labelName, selectId)
		container.append(label)

		const select = this.renderSelect(key, selectId)
		container.append(select)

		if (containerSelector) {
			document.querySelector(containerSelector).append(container)
		}
	}
}

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
			listItem.innerText = `${el.brand} --- ${el.year} --- ${el.price}€`
			list.append(listItem)
		})
		this.list = list

		return list
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

class CarsFilter {
	constructor(parameters) {
		
	}
}

const cars = [
	{
		brand: 'Toyota Camry',
		year: 2018,
		price: 19000
	},
	{
		brand: 'Honda Accord',
		year: 2020,
		price: 22000
	},
	{
		brand: 'Tesla Model 3',
		year: 2021,
		price: 35000
	},
	{
		brand: 'BMW 3 Series',
		year: 2017,
		price: 25000
	},
	{
		brand: 'Audi A4',
		year: 2019,
		price: 27000
	},
	{
		brand: 'Ford Focus',
		year: 2016, price: 13000
	},
	{
		brand: 'Volkswagen Passat',
		year: 2018, price: 18000
	},
	{
		brand: 'Hyundai Elantra',
		year: 2020,
		price: 17000
	},
	{
		brand: 'Kia Optima',
		year: 2019,
		price: 16000
	},
	{
		brand: 'Mercedes-Benz C-Class',
		year: 2021,
		price: 40000
	}
]

const select = new Select(cars)
select.render('#container', 'Фільтрувати за маркою авто', 'carBrand', 'brand')
select.render('#container', 'Фільтрувати за роком випуску', 'carYear', 'year')
select.render('#container', 'Фільтрувати за ціною', 'carPrice', 'price')

const list = new List(cars, 'Список усіх авто')
list.render('#container')