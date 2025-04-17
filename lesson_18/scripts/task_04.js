"use strict"

// Задача 04. Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)

const wishContainer = document.querySelector(".wish-container")


const wishes = [
	"Нехай у твоєму серці завжди буде світло 💫",
	"Твоя усмішка здатна зігріти цей світ 🌞",
	"Навіть найменші кроки ведуть до великих мрій 🚶‍♀️",
	"Нехай кожен день буде сповнений магії ✨",
	"Хай навколо завжди будуть добрі люди 🤝",
	"Нехай удача тихенько супроводжує тебе всюди 🍀",
]
const wishesImages = [
	"../img/wish_00.png",
	"../img/wish_01.png",
	"../img/wish_02.png",
	"../img/wish_03.png",
	"../img/wish_04.png",
	"../img/wish_05.png"
]

const getRandomIndex = (max) => {
	return Math.floor(Math.random() * max)
}

const showRandomWishes = (wishesList, wishesImages, wishesNumbers) => {

	for (let i = 0; i < wishesNumbers; i++) {

		const randomIndex = getRandomIndex(wishesList.length)

		const wishesDiv = document.createElement("div")
		wishesDiv.classList.add("wish-card")

		const wish = document.createElement("p")
		wish.innerText = wishesList[randomIndex]

		const img = document.createElement("img")
		img.setAttribute("src", wishesImages[randomIndex])

		wishesDiv.append(wish)
		wishesDiv.append(img)

		wishContainer.append(wishesDiv)
	}
}

window.onload = () => showRandomWishes(wishes, wishesImages, 3)