"use strict"

// Задача 01. Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

const onDivClick = (event) => {
	const currentDiv = event.target

	if (currentDiv.tagName === 'DIV') {
		let nextEl = currentDiv.nextElementSibling

		while (nextEl) {
			nextEl.style.backgroundColor = "#ff0000"
			nextEl = nextEl.nextElementSibling
		}
	} else return
}
const divItem = document.querySelector(".divs-container")
divItem.addEventListener('click', onDivClick)