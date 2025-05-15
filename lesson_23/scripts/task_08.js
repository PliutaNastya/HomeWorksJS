"use strict"

// Задача 08. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.

const now = new Date()

let time
let isTimeRecord = false

document.addEventListener('mousemove', () => {
	if (!isTimeRecord) {
		time = new Date()
		const diffInSec = Math.floor((time - now) / 1000)
		console.log(diffInSec)
	}
	isTimeRecord = true
})
