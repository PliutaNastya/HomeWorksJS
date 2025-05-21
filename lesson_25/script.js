"use strict"

// Задача API. Використовуючи один з АРІ
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних
// Намагайтесь зробити це з використанням класів.Окремо клас для побудови розмітки.Окремо клас, який буде робити запити і повертати результати.

import CardsList from "./CardsList.js"
import ApiManager from "./ApiManager.js"

const api = new ApiManager(10)

api.getFacts()
	.then(facts => {
		const cardsList = new CardsList(facts)
		cardsList.render('#container')
	})
	.catch(error => {
		const container = document.querySelector('#container')
		if (container) container.innerText = 'Сталася помилка при завантаженні даних'
		console.log(error)
	})
