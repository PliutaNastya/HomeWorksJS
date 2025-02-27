"use strict"

// Задача 04. Тут використати цикл for..of 
// Дано масив елементів.Вивести на екран елементи, що більші за 100

if (confirm('Почати тестування?')) {
	const createArr = () => {
		let arr = []

		let arrayElement = parseInt(prompt('Введіть будь-яке число, ввід буде продовжуватись, поки Ви не натиснете "Cancel"', '57'))

		while (!isNaN(arrayElement)) {
			arr.push(arrayElement)
			arrayElement = parseInt(prompt('Введіть будь-яке число, ввід буде продовжуватись, поки Ви не натиснете "Cancel"', '57'))
		}

		return arr
	}

	const getElementsMoreThan = (arr, value) => {
		let newArr = []

		for (let el of arr) {
			if(el > value) newArr.push(el)
		}
		
		return newArr
	}

	const arr = createArr()
	const arrWithElementsMoreThan100 = getElementsMoreThan(arr, 100)

	document.write(`
		<p>Повний масив - <span>${arr}</span></p>
		<p>Масив з елементами, що більше за 100 - <span>${arrWithElementsMoreThan100}</span></p>
		`)
}