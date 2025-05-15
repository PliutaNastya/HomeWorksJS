"use strict"

// Задача 02.
// Зберігати у пам’яті список справ, які користувачу треба виконати(зберігати у localStorage).Періодично випадковим чином вибирати якусь з справ і виводити користувачу(з використанням confirm).Якщо користувач натискає на «Ок», то видаляти цю задачу.

if (confirm('Почати тестування?')) {

	const tasks = [
		"Пройтися на свіже повітря",
		"Помити посуд",
		"Зробити зарядку 10 хвилин",
		"Почитати 5 сторінок книги",
		"Зателефонувати бабусі",
		"Сортувати документи на робочому столі",
		"Викинути сміття",
		"Спланувати меню на завтра",
		"Розібратися з вкладками у браузері",
		"Випити склянку води"
	]

	if (!localStorage.getItem('tasks')) {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	const getRandomTask = () => {
		const tasks = JSON.parse(localStorage.getItem('tasks'))

		const randomIndex = Math.floor(Math.random() * tasks.length)

		return tasks[randomIndex]
	}

	const removeTask = (task) => {
		const tasks = JSON.parse(localStorage.getItem('tasks'))
		const indexForRemove = tasks.indexOf(task)

		if (indexForRemove > -1) {
			tasks.splice(indexForRemove, 1)
			localStorage.setItem('tasks', JSON.stringify(tasks))
		}
	}

	const intervalId = setInterval(() => {
		const currentTasks = JSON.parse(localStorage.getItem('tasks'))

		if (!currentTasks || currentTasks.length === 0) {
			clearInterval(intervalId)
			alert("Всі задачі виконано")
			return
		}

		const task = getRandomTask()

		const userConfirmed = confirm(task)

		if (userConfirmed) {
			removeTask(task)
		}

		if (!tasks || tasks.length === 0) clearInterval(intervalId)
	}, 3000)

}