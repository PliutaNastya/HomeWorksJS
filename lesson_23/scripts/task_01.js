"use strict"

// Задача 01. Виводити на екран скільки хвилин користувач вже на сайті

const startTime = Date.now()

const renderContainer = (message) => {
	const div = document.createElement('div')
	div.className = 'time'
	div.innerText = message

	return div
}

const renderSpan = () => {
	const span = document.createElement('span')

	return span
}

const getTimeOnSite = () => {
	const currentTime = Date.now()
	const timeOnSiteInMs = currentTime - startTime
	const timeOnSiteInSec = Math.floor(timeOnSiteInMs / 1000)

	return timeOnSiteInSec
}

const render = (containerSelector, message) => {
	const container = document.querySelector(containerSelector)
	const div = renderContainer(message)
	const span = renderSpan()
	span.innerText = String(getTimeOnSite()).padStart(2, '0') + ' сек'
	div.append(span)

	if (container) {
		container.append(div)
	}

	setInterval(() => {
		span.innerText = String(getTimeOnSite()).padStart(2, '0') + ' сек'
	}, 1000);
}
render('.container', 'Ви знаходитесь на сайті: ')


