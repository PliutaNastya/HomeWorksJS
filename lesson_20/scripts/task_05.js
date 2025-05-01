"use strict"

// Задача 05. Бронювання таксі та велосипедів (по аналогії з тим, що ми робили на практиці). Відображаються списки авто та велосипедів, які можна забронювати. При бронюванні вибрані авто та вибрані велосипеди відображаються у окремих списках.

class TransportList {
	constructor(titleName, transportList, onAction, isRented = false) {
		this.titleName = titleName
		this.transportList = transportList
		this.onAction = onAction
		this.isRented = isRented
	}


	renderTitle() {
		const title = document.createElement('h2')
		title.innerText = this.titleName

		return title
	}

	renderListItem() {
		const listItem = document.createElement('li')

		const button = document.createElement('button')
		this.isRented ? button.innerText = 'Повернути' : button.innerText = 'Бронювати'
		listItem.append(button)

		return listItem
	}

	renderList() {
		const list = document.createElement('ol')

		this.transportList.forEach(el => {
			const listItem = this.renderListItem()
			const span = document.createElement('span')
			span.innerText = el

			const button = listItem.querySelector('button')
			button.addEventListener('click', () => this.onAction(el))

			listItem.prepend(span) 
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

		if (containerSelector) {
			document.querySelector(containerSelector).append(container)
		}
	}
}

class TransportManager {
	constructor(containerSelector, carsList, bicylesList) {
		this.containerSelector = containerSelector
		this.carsList = carsList
		this.bicyclesList = bicylesList
		this.rentCarsList = []
		this.rentBicyclesList = []
	}

	rentCars(carTitle) {
		this.rentCarsList.push(carTitle)

		const index = this.carsList.indexOf(carTitle)
		if(index !== -1) this.carsList.splice(index, 1)
		this.renderRentedList()
	}

	rentBicycles(bicycleTitle) {
		this.rentBicyclesList.push(bicycleTitle)

		const index = this.bicyclesList.indexOf(bicycleTitle)
		if(index !== -1) this.bicyclesList.splice(index, 1)
		this.renderRentedList()
	}

	returnCars(carTitle) {
		this.carsList.push(carTitle)

		const index = this.rentCarsList.indexOf(carTitle)
		if (index !== -1) this.rentCarsList.splice(index, 1)
		this.renderRentedList()
	}

	returnBicycles(bicycleTitle) {
		this.bicyclesList.push(bicycleTitle)

		const index = this.rentBicyclesList.indexOf(bicycleTitle)
		if (index !== -1) this.rentBicyclesList.splice(index, 1)
		this.renderRentedList()
	}

	renderRentedList() {
		this.render(this.containerSelector)
	}

	render() {
		const container = document.querySelector(this.containerSelector)
		container.innerHTML = ''

		const carsList = new TransportList('Список доступних для бронювання авто', this.carsList, this.rentCars.bind(this))
		const bicyclesList = new TransportList('Список доступних для бронювання велосипедів', this.bicyclesList, this.rentBicycles.bind(this))

		const rentCarList = new TransportList('Список заброньованих авто', this.rentCarsList, this.returnCars.bind(this), true)
		const rentBicycleList = new TransportList('Список заброньованих велосипедів', this.rentBicyclesList, this.returnBicycles.bind(this), true)

		carsList.render(this.containerSelector)
		bicyclesList.render(this.containerSelector)
		rentCarList.render(this.containerSelector)
		rentBicycleList.render(this.containerSelector)
	}

}

const cars = [
	"Toyota Corolla",
	"Honda Civic",
	"Ford Focus",
	"Chevrolet Malibu",
	"BMW 3 Series",
	"Mercedes-Benz C-Class",
	"Audi A4",
	"Hyundai Elantra",
	"Kia Optima",
	"Volkswagen Passat"
]

const bicycles = [
	"Trek Marlin 7",
	"Giant Talon 1",
	"Specialized Rockhopper",
	"Cannondale Trail 5",
	"Scott Aspect 950",
	"Cube Aim Pro",
	"Merida Big Nine 100",
	"Santa Cruz Chameleon",
	"GT Aggressor Pro",
	"Norco Storm 2",
	"Bianchi Duel 29",
	"Orbea MX 30",
	"Ghost Kato Essential",
	"Polygon Xtrada 6",
	"Fuji Nevada 29"
]

const manager = new TransportManager('#container', cars, bicycles)
manager.render()

// const carsList = new TransportList('Список доступних для бронювання авто', cars)
// carsList.render('#container')

// const bicyclesList = new TransportList('Список доступних для бронювання велосипедів', bicycles)
// bicyclesList.render('#container')