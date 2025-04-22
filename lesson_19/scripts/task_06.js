"use strict"

// Задача 06. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

const athletes = [
	"Олег Верняєв",
	"Ярослава Магучіх",
	"Жан Беленюк",
	"Дар’я Білодід",
	"Олександр Усик",
	"Еліна Світоліна",
	"Василь Ломаченко",
	"Богдан Бондаренко",
	"Марина Бех-Романчук",
	"Андрій Шевченко"
]

class Athlete {
	#name

	constructor(name) {
		this.name = name
	}

	get name() {
		return this.#name
	}
	set name(newName) {
		if(!newName || typeof newName !== 'string') throw new Error("Некоректно вказане ім'я")
		this.#name = newName
	}
}

class AthleteList {
	constructor(athletes = []) {
		this.athletes = athletes
	}

	addAthlete(athlete) {
		this.athletes.push(athlete)
	}

	remove(athleteName) {
		this.athletes = this.athletes.filter(el => el.name !== athleteName)
	}

	getAllAthletes() {
		return this.athletes
	}
}

class AthletesListView {

	constructor(containerClass, title, isChosen, moveAthleteFunc) {
		this.containerClass = containerClass
		this.title = title
		this.isChosen = isChosen
		this.moveAthleteFunc = moveAthleteFunc

		this.list = document.createElement('ul')
	}

	renderListContainer() {
		const container = document.createElement('div')
		container.className = this.containerClass

		const heading = document.createElement('h2')
		heading.innerText = this.title

		container.append(heading)
		container.append(this.list)

		return container
	}

	addAthleteItem(athlete) {
		const listItem = document.createElement('li')

		const spanName = document.createElement('span')
		spanName.className = 'name'
		spanName.innerText = athlete.name

		const button = document.createElement('button')
		button.className = `arrow ${this.isChosen ? 'arrow-remove' : 'arrow-add'}`
		button.innerHTML = this.isChosen ? '&#8592;' : '&#8594;'

		button.addEventListener('click', () => {
			this.moveAthleteFunc(athlete, listItem)
		})

		listItem.append(spanName)
		listItem.append(button)

		this.list.append(listItem)
	}

	remove(listItem) {
		listItem.remove()
	}
}

class AthletesManager {

	constructor(athletesNames, containerSelector) {
		this.generalList = new AthleteList(athletesNames.map(name => new Athlete(name)))
		this.chosenList = new AthleteList()

		this.athletesGeneralListView = new AthletesListView(
			'all-items',
			'Загальний список спортсменів',
			false,
			this.moveToChosen.bind(this)
		)

		this.athletesChosenListView = new AthletesListView(
			'chosen-items',
			'Обрані для змагання',
			true,
			this.moveToGeneral.bind(this)
		)

		this.container = document.querySelector(containerSelector)
	}

	render() {
		const generalListContainer = this.athletesGeneralListView.renderListContainer()
		const chosenListContainer = this.athletesChosenListView.renderListContainer()

		this.container.append(generalListContainer)
		this.container.append(chosenListContainer)

		this.generalList.getAllAthletes().forEach(athlete => this.athletesGeneralListView.addAthleteItem(athlete))

		this.chosenList.getAllAthletes().forEach(athlete => this.athletesChosenListView.addAthleteItem(athlete))
	}

	moveToChosen(athlete, listItem) {
		this.generalList.remove(athlete.name)
		this.chosenList.addAthlete(athlete)

		this.athletesGeneralListView.remove(listItem)
		this.athletesChosenListView.addAthleteItem(athlete)
	}

	moveToGeneral(athlete, listItem) {
		this.chosenList.remove(athlete.name)
		this.generalList.addAthlete(athlete)

		this.athletesChosenListView.remove(listItem)
		this.athletesGeneralListView.addAthleteItem(athlete)
	}
}

try {
	const manager = new AthletesManager(athletes, '.athletes-container')
manager.render()
} catch (error) {
	console.log(error)
}