"use strict"

// Задача 01. Користувач може змінювати колір фону, що вибирає користувач з використанням
// < input type = "color" >.
// Зберігати цей колір і відновлювати при наступному відкритті.Також зберігати і відображати кількість змін протягом одного сеансу.

const inputColor = document.querySelector('#color')
const changesCount = document.querySelector('#changes-count')

const savedColor = localStorage.getItem('backgroundColor')
if (savedColor) {
	document.body.style.backgroundColor = savedColor
	inputColor.value = savedColor
}

let changeColorCount = sessionStorage.getItem('changesCount')
changesCount.innerText = changeColorCount || 0

inputColor.addEventListener('input', () => {
	const selectedColor = inputColor.value
	document.body.style.backgroundColor = selectedColor

	localStorage.setItem('backgroundColor', selectedColor)
	changeColorCount++
	sessionStorage.setItem('changesCount', changeColorCount)
	changesCount.innerText = changeColorCount 
})