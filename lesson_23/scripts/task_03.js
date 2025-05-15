"use strict"

// Задача 03. Визначити скільки залишилось до кінця робочого дня (до 17.00)

const getTimeToEndWorkingDay = () => {
	const currentTime = new Date()

	const endOfDay = new Date(currentTime)
	endOfDay.setHours(17, 0, 0, 0)

	let result = ''
	if (endOfDay <= currentTime) {
		result = 'Робочий день вже завершився'
	}
	const diffInMs = endOfDay - currentTime
	const diffInMin = Math.floor(diffInMs / 1000 / 60)
	const hours = Math.floor(diffInMin / 60)
	const minutes = diffInMin % 60

	result = `До кінця робочого дня залишилось ${hours.toString().padStart(2, '0')} год та ${minutes.toString().padStart(2, '0')} хв`

	return result
}

const render = (containerSelector) => {
	const container = document.querySelector(containerSelector)

	const res = document.createElement('p')
	res.innerText = getTimeToEndWorkingDay()

	if (container) {
		container.append(res)
	}
}
render('.container')
