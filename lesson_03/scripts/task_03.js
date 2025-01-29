"use strict"

// Задача 03. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

/* Позначення
randomNumber - якесь рандомне число від 1 до 5

minNumber - мінімально можливе число
maxNumber - максимально можливе число 

firstAttempt - перша спроба
secondAttempt - друга спроба
*/

// Введення необхідних данних
const minNumber = 1
const maxNumber = 5
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

alert(`Вітаємо. У вас є 2 спроби, щоб вгадати число, яке ми загадали.Воно знаходиться в діапазоні від 1 до 5.`)

const firstAttempt = parseInt(prompt('Перша спроба. Введіть будь-яке число від 1 до 5'))
const secondAttempt = parseInt(prompt('Друга спроба. Введіть будь-яке число від 1 до 5'))

// Обчислення та виведення результатів
if (isNaN(firstAttempt) || isNaN(secondAttempt) || firstAttempt > maxNumber || firstAttempt < minNumber || secondAttempt > maxNumber || secondAttempt < minNumber)
	document.write(`Ви ввели некоректні дані, будь ласка, введіть число від 1 до 5!`)
else if (firstAttempt === randomNumber) 
	document.write(`
		<p>Ви вгадали число з першої спроби.🎉</p>
		<img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%">
		`)
else if (secondAttempt === randomNumber)
	document.write(`
		<p>Ви вгадали число з другої спроби.🎉</p>
		<img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%">
		`)
else {
	document.write(`
		<p>Нажаль, ви не вгадали 😞. Ми загадали число ${randomNumber}</p>
		<img src="https://plus.unsplash.com/premium_photo-1661782983887-ecc2c85aace4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%">
		`)
}
