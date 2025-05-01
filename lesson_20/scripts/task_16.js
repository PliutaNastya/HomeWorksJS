"use strict"

// Задача 16. Розробити ToDo менеджер. Користувач вводить текст задачі та пріоритетність. Відображається список доданих задач з можливістю видалення задач та сортування за пріоритетністю.

const toDoBlock = document.getElementById('to-do-block')

const addTaskInput = document.getElementById('add-task-input')
const addPriorityInput = document.getElementById('add-priority-input')

const addTaskBtn = document.getElementById('add-task-btn')
const addPriorityBtn = document.getElementById('add-priority-btn')

class ToDoItem {
	constructor(text, priority, isCompleted, cssObj, svgElements) {
		this.text = text
		this.priority = priority
		this.isCompleted = isCompleted
		this.cssObj = cssObj
		this.svgElements = svgElements
	}

	renderCheckBtn() {
		const checkBtn = document.createElement('button')
		checkBtn.className = this.cssObj.checkBtn
		checkBtn.innerHTML = this.svgElements.check

		this.checkBtn = checkBtn
	}

	renderDeleteBtn() {
		const deleteBtn = document.createElement('button')
		deleteBtn.className = this.cssObj.deleteBtn
		deleteBtn.innerHTML = this.svgElements.delete

		this.deleteBtn = deleteBtn
	}

	renderButtonsContainer() {
		const btnContainer = document.createElement('div')
		btnContainer.className = this.cssObj.btnCnt

		btnContainer.append(this.checkBtn)
		btnContainer.append(this.deleteBtn)

		this.btnContainer = btnContainer
	}

	renderListItem() {
		const listItem = document.createElement('li')
		listItem.className = this.cssObj.listItem
		listItem.setAttribute('data-priority', this.priority)

		const textSpan = document.createElement('span')
		textSpan.innerText = this.text
		listItem.append(textSpan)

		this.listItem = listItem
	}

	toggleStatus() {
		if (!this.isCompleted) {
			this.listItem.append(this.btnContainer)
		}
	}

	render() {
		this.renderListItem()
		this.renderCheckBtn()
		this.renderDeleteBtn()
		this.renderButtonsContainer()
		this.toggleStatus()
	}
}

class ToDoList {
	constructor(cssObj, svgElements) {
		this.cssObj = cssObj
		this.svgElements = svgElements
		this.tasks = []
		this.listElement = document.getElementById('task-list')
		this.completedListElement = document.getElementById('completed-task-list')
	}

	addTask(text, priority) {
		const task = new ToDoItem(text, priority, false, this.cssObj, this.svgElements)
		task.render()

		task.deleteBtn.addEventListener('click', () => {
			this.tasks = this.tasks.filter(t => t !== task)
			task.listItem.remove()
		})

		task.checkBtn.addEventListener('click', () => {
			task.isCompleted = true
			task.listItem.classList.add('completed-task')
			task.btnContainer.remove()

			this.tasks = this.tasks.filter(t => t !== task)

			this.completedListElement.append(task.listItem)
		})

		this.tasks.push(task)
		this.listElement.append(task.listItem)
	}

	sortByPriority(order = 'fall') {
		this.tasks.sort((a, b) => {
			if (order === 'fall') return b.priority - a.priority
			else if (order === 'rise') return a.priority - b.priority
			return 0
		})
		
		this.listElement.innerHTML = ''
		this.tasks.forEach(el => {
			this.listElement.append(el.listItem)
		})
	}

	renderList() {
		const list = document.createElement('ul')
		list.className = this.cssObj.ToDoList

		this.tasks.forEach(el => {
			this.listElement.append(el.listItem)
		})
	}
}
class ToDoApp {
	constructor(cssObj, svgElements) {
		this.cssObj = cssObj
		this.svgElements = svgElements
		this.toDoList = new ToDoList(cssObj, svgElements)
	}

	render() {
		addTaskBtn.addEventListener('click', () => {
			const text = addTaskInput.value
			const priority = +addPriorityInput.value

			if (text && !isNaN(priority)) {
				this.toDoList.addTask(text, priority)
				addTaskInput.value = ''
				addPriorityInput.value = ''
			}
		})

		document.getElementById('sort-high-to-low').addEventListener('click', () => {
			this.toDoList.sortByPriority('fall')
		})
		document.getElementById('sort-low-to-high').addEventListener('click', () => {
			this.toDoList.sortByPriority('rise')
		})
	}
}

const cssObj = {
	listItem: 'task',
	checkBtn: 'check-button task-button',
	deleteBtn: 'delete-button task-button',
	toDoList: 'tasks',
	btnCnt: 'task-buttons'
}

const svgElements = {
	check: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
					<path d="M19.7851 6.67391L8.78513 17.6739C8.72128 17.7378 8.64546 17.7885 8.56199 17.8231C8.47853 17.8577 8.38907 17.8755 8.29872 17.8755C8.20837 17.8755 8.11891 17.8577 8.03545 17.8231C7.95199 17.7885 7.87617 17.7378 7.81232 17.6739L2.99982 12.8614C2.87081 12.7324 2.79834 12.5574 2.79834 12.375C2.79834 12.1926 2.87081 12.0176 2.99982 11.8886C3.12882 11.7596 3.30378 11.6871 3.48622 11.6871C3.66866 11.6871 3.84363 11.7596 3.97263 11.8886L8.29872 16.2155L18.8123 5.70109C18.9413 5.57209 19.1163 5.49962 19.2987 5.49962C19.4812 5.49962 19.6561 5.57209 19.7851 5.70109C19.9141 5.8301 19.9866 6.00506 19.9866 6.1875C19.9866 6.36994 19.9141 6.5449 19.7851 6.67391Z" fill="currentColor" />
				</svg>`,
	delete: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
					<path d="M18.6112 4.125H3.48621C3.30387 4.125 3.129 4.19743 3.00007 4.32636C2.87114 4.4553 2.79871 4.63016 2.79871 4.8125C2.79871 4.99484 2.87114 5.1697 3.00007 5.29864C3.129 5.42757 3.30387 5.5 3.48621 5.5H4.17371V17.875C4.17371 18.2397 4.31857 18.5894 4.57643 18.8473C4.8343 19.1051 5.18403 19.25 5.54871 19.25H16.5487C16.9134 19.25 17.2631 19.1051 17.521 18.8473C17.7788 18.5894 17.9237 18.2397 17.9237 17.875V5.5H18.6112C18.7935 5.5 18.9684 5.42757 19.0973 5.29864C19.2263 5.1697 19.2987 4.99484 19.2987 4.8125C19.2987 4.63016 19.2263 4.4553 19.0973 4.32636C18.9684 4.19743 18.7935 4.125 18.6112 4.125ZM16.5487 17.875H5.54871V5.5H16.5487V17.875ZM6.92371 2.0625C6.92371 1.88016 6.99614 1.7053 7.12507 1.57636C7.254 1.44743 7.42887 1.375 7.61121 1.375H14.4862C14.6685 1.375 14.8434 1.44743 14.9723 1.57636C15.1013 1.7053 15.1737 1.88016 15.1737 2.0625C15.1737 2.24484 15.1013 2.4197 14.9723 2.54864C14.8434 2.67757 14.6685 2.75 14.4862 2.75H7.61121C7.42887 2.75 7.254 2.67757 7.12507 2.54864C6.99614 2.4197 6.92371 2.24484 6.92371 2.0625Z" fill="currentColor" />
				</svg>`
}

const todolist = new ToDoApp(cssObj, svgElements)
todolist.render()