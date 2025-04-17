"use strict"

// Задача 07. Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

const container = document.getElementById("travel-container")
const buttonCalculate = document.querySelector(".button-calculate")

const getPricesList = () => {
	const pricesList = []

	const transportSelect = document.querySelectorAll("select")
	for (let el of transportSelect) pricesList.push(parseInt(el.value))

	const foodInputs = document.querySelectorAll("input[type='checkbox']")
	for (let el of foodInputs) {
		if (el.checked) pricesList.push(parseInt(el.value))
	}


	const guideInputs = document.querySelectorAll("input[type='radio']")
	for (let el of guideInputs) {
		if (el.checked) pricesList.push(parseInt(el.value))
	}

	return pricesList
}

const getSum = () => {
	const pricesList = getPricesList()

	return pricesList.reduce((prevSum, el) => prevSum + el, 0)

}

const showResult = () => {

	let resDiv = document.querySelector('.result')

	if (!resDiv) {
		resDiv = document.createElement('div')
		resDiv.classList.add("result")
		container.append(resDiv)
	}

	resDiv.innerText = `Результат: ${getSum()}€`
}

buttonCalculate.onclick = () => showResult()



// const buildDataObj = () => {
// 	const obj = {
// 		step1: {
// 			transport: {
// 				name: "",
// 				price: 34,
// 			},
// 			food: {
// 				foodNames: [],
// 				foodPrice: []
// 			},
// 			guide: {
// 				name: "",
// 				price: 34,
// 			},
// 		},
// 		step2: {
// 			transport: {
// 				name: "",
// 				price: 34,
// 			},
// 			food: {
// 				foodNames: [],
// 				foodPrice: []
// 			},
// 			guide: {
// 				name: "",
// 				price: 34,
// 			},
// 		},
// 		step3: {
// 			transport: {
// 				name: "",
// 				price: 34,
// 			},
// 			food: {
// 				foodNames: [],
// 				foodPrice: []
// 			},
// 			guide: {
// 				name: "",
// 				price: 34,
// 			},
// 		},
// 	}
	
// }
// const renderReceipt = (objList) => {
// 	let template = `
// 	<div class="receipt">
// 		<h2>Мандруй серцем</h2>
// 		<address>вул. Мандрівників, 17, оф. 25, м. Львів, 79000, Україна</address>
// 		<h3>Квитанція</h3>
// 		<div class="desc">
// 			<h4>Крок 1</h4>
// 			<div>
// 				<p>Авто</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Сніданок</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Обід</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Вечеря</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Гід</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<h4>Крок 2</h4>
// 			<div>
// 				<p>Авто</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Сніданок</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Обід</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Вечеря</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Гід</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<h4>Крок 3</h4>
// 			<div>
// 				<p>Авто</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Сніданок</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Обід</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Вечеря</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 			<div>
// 				<p>Гід</p>
// 				<span></span>
// 				<p>Ціна</p>
// 			</div>
// 		</div>
// 		<div class="total">
// 			<p>Всього</p>
// 			<span></span>
// 			<p>Ціна</p>
// 		</div>
// 		<h5>Дякуємо за замовлення. Приємної подорожі.</h5>
// 	</div>
// 	`
// }