"use strict"

// Задача 00. Менеджер велосипедів і велосипедістів

const membersList = ["Ivan", "Olga", "Petro", "Oksana"]

class BicycleManager {
	constructor(membersList) {
		this.membersList = membersList
		this.bicycleNumber = 0
	}


	// Генеруємо <div>Кількість вільних велосипедів <span>0</span></div>
	renderHeader() {
		const divEl = document.createElement('div')
		divEl.innerText = 'Кількість вільних велосипедів'

		// 1-ий варіант (при цьому треба вказати id для елементу, аби потім до нього звертатись)
		// const spanEl = document.createElement('span')
		// spanEl.innerText = '0'
		// divEl.append(spanEl)
		// return divEl

		// 2-ий варіант
		// але щоб до цього спану можна було звертатись в будь-якому місці цього класу і не
		// додавати йому id для цього, можна записати інакше:
		this.bicycleCountSpan = document.createElement('span')
		this.bicycleCountSpan.innerText = '0'
		divEl.append(this.bicycleCountSpan)
		return divEl


		// 3-ий варіант (без this, але треба return зробити не тільки div, а й span)
		// return [divEl, spanEl] або {divEl, spanEl}
		// const spanEl = document.createElement('span')
		// spanEl.innerText = '0'
		// divEl.append(spanEl)

		// return { divEl, spanEl }
	}

	addItem(event) {
		const customEvent = new CustomEvent('add', {
			bubbles: true,
		})
		console.log(customEvent)

		event.target.dispatchEvent(customEvent)
	}

	removeItem(event) {
		const customEvent = new CustomEvent('remove', {
			bubbles: true,
		})
		console.log(customEvent)

		event.target.dispatchEvent(customEvent)
	}

	changeBicycleNum(value) {
		this.bicycleNumber += value
		this.bicycleCountSpan.innerText = this.bicycleNumber
	}

	renderMemberItem(memberName) {
		const itemContainerDiv = document.createElement('div')
		itemContainerDiv.className = 'member-item'

		const nameDiv = document.createElement('div')
		nameDiv.innerText = memberName
		itemContainerDiv.append(nameDiv)

		const btnsDiv = document.createElement('div')

		const btnAdd = document.createElement('button')
		btnAdd.innerText = 'Додати'
		btnAdd.onclick = this.addItem
		btnsDiv.append(btnAdd)

		const btnRemove = document.createElement('button')
		btnRemove.innerText = 'Забрати'
		btnRemove.onclick = this.removeItem
		btnsDiv.append(btnRemove)

		itemContainerDiv.append(btnsDiv)

		return itemContainerDiv
	}

	renderMembersList() {
		const itemsContainer = document.createElement('div')

		for (const memberName of this.membersList) {
			const memberElement = this.renderMemberItem(memberName)
			itemsContainer.append(memberElement)
		}

		return itemsContainer
	}

	renderMembersSection() {
		const sectionContainer = document.createElement('div')

		const h2El = document.createElement('h2')
		h2El.innerText = "Члени клубу веловипедістів"
		sectionContainer.append(h2El)

		const membersListEl = this.renderMembersList()
		membersListEl.addEventListener('add', () => this.changeBicycleNum(1))
		
		membersListEl.addEventListener('remove', () => this.changeBicycleNum(-1))


		sectionContainer.append(membersListEl)

		return sectionContainer
	}

	render(containerSelector) {
		const managerContainer = document.createElement('div')

		managerContainer.append(this.renderHeader())

		managerContainer.append(this.renderMembersSection())

		if (containerSelector) {
			document.querySelector(containerSelector).append(managerContainer)
			return managerContainer
		}
	}
}

const manager = new BicycleManager(membersList)
manager.render('.manager-selector')

