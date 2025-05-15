"use strict"

// Задача 05. При заході на сайт вітати користувача або відображати повідомлення про те, скільки хвилин залишилось до початку робочого дня (початок о 8.00).

const getGreeting = () => {
	const now = new Date()
	const hours = now.getHours()
	
	let result
	
	if (hours <= 11) result = 'Доброго ранку'
	else if (hours <= 16) result = 'Доброго дня'
	else if (hours <= 22) result = 'Доброго вечора'
	else result = 'Пора спати'

	return result
}

const getTimeInMinBeforeWorkingDay = () => {

	const now = new Date()

	let startWorkingDay = new Date(now)
	startWorkingDay.setHours(8, 0, 0, 0)

	let diffInMin

	if (now < startWorkingDay) {
		const diffInMs = startWorkingDay - now
		diffInMin = diffInMs / 1000 / 60
	} else {
		const nextWorkingDay = new Date(now)
		nextWorkingDay.setDate(now.getDate() + 1)
		nextWorkingDay.setHours(8, 0, 0, 0)
		diffInMin = (nextWorkingDay - now) / 1000 / 60
	}

	return Math.ceil(diffInMin)
}

alert(`${getGreeting()}, користуваче. До початку робочого дня залишилось ${getTimeInMinBeforeWorkingDay()} хвилин.`)