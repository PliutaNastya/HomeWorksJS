"use strict"

// Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).
if (confirm('Почати тестування?')) {

	const firstImageUrl = "https://i.etsystatic.com/49528872/r/il/f6789c/6032005447/il_1588xN.6032005447_9io4.jpg"
	const secondImageUrl = "https://i.etsystatic.com/49528872/r/il/2e6f26/6133162787/il_1588xN.6133162787_1cfn.jpg"
	const thirdImageUrl = "https://i.etsystatic.com/41975932/r/il/207644/6036369932/il_1588xN.6036369932_suqi.jpg"
	const fourthImageUrl = "https://i.etsystatic.com/49528872/r/il/4eb471/6215149073/il_1588xN.6215149073_ovw2.jpg"

	let countFirstImage = 0
	let countSecondImage = 0
	let countThirdImage = 0
	let countFourthImage = 0

	document.write(`<div class="items">`)
	for (let i = 1; i <= 3; i++) {
		const randomNumber = Math.floor(Math.random() * 4) + 1
		if (randomNumber === 1) countFirstImage += 1
		if (randomNumber === 2) countSecondImage += 1
		if (randomNumber === 3) countThirdImage += 1
		if (randomNumber === 4) countFourthImage += 1

		switch (randomNumber) {
			case 1:
				document.write(`<div class="item"><img src=${firstImageUrl}></div>`)
				break
			case 2:
				document.write(`<div class="item"><img src=${secondImageUrl}></div>`)
				break
			case 3:
				document.write(`<div class="item"><img src=${thirdImageUrl}></div>`)
				break
			case 4:
				document.write(`<div class="item"><img src=${fourthImageUrl}></div>`)
				break
		}
	}
	document.write(`</div>`)

	if (countFirstImage === 3) document.write(`<p>Ваш виграш складає = 100грн</p>`)
	if (countSecondImage === 3) document.write(`<p>Ваш виграш складає = 200грн</p>`)
	if (countThirdImage === 3) document.write(`<p>Ваш виграш складає = 500грн</p>`)
	if (countFourthImage === 3) document.write(`<p>Ваш виграш складає = 1000грн</p>`)
}