"use strict"

// Задача 1. На екран виводиться меню:
// 1. Веселий
// 2. Сумний
// 3. Обурений
// Користувач вводить номер пункту меню і на екрані з’являється відповідне зображення смайла.


/* Позначення
selectMenuItem
*/

// Введення необхідних данних
// alert(`Який у вас сьогодні настрій. В наступному вікні введіть число.
// 	1. Веселий
// 	2. Сумний
// 	3. Обурений`)
// const selectMenuItem = parseInt(prompt('Введіть число', '3'))

// // Обчислення та виведення результатів

// switch (selectMenuItem) {
// 	case 1:
// 		document.write(`<img src="https://static.vecteezy.com/system/resources/thumbnails/044/419/658/small_2x/yellow-smiling-ball-wearing-a-straw-hat-in-a-sunny-field-of-flowers-showing-happiness-and-joy-in-nature-photo.jpeg" style="max-width:500px; width: 100%">`)
// 		break
// 	case 2:
// 		document.write(`<img src="https://static.vecteezy.com/system/resources/thumbnails/050/800/096/small_2x/yellow-sad-face-ball-expressing-sadness-free-photo.jpg" style="max-width:500px; width: 100%">`)
// 		break
// 	case 3:
// 		document.write(`<img src="https://thumbs.dreamstime.com/b/print-228702907.jpg" style="max-width:500px; width: 100%">`)
// 		break
// 	default:
// 		document.write('Ви ввели некоректні дані! <br>')
// }

// ==============================================================================================
// Задача 2. Комп’ютер випадковим чином вибирає початок і кінець проміжку(проміжок повинен знаходитися в межах від 1 до 100).Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього(від лівого або правого краю) не більше ніж на 10.

/* Позначення
enteredNumber - число, яке ввів користувач

randomFirstNumber, randomFSecondNumber

randomMinNumber - рандомний початок проміжку
randomMaxNumber - рандомний кінець проміжку
*/

// const randomFirstNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1
// const randomSecondNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1

// const enteredNumber = parseInt(prompt('Введіть будь-яке число від 1 до 100', '32'))

// let randomMinNumber = Math.min(randomFirstNumber, randomSecondNumber)
// let randomMaxNumber = Math.max(randomFirstNumber, randomSecondNumber)

// if (enteredNumber >= (randomMinNumber - 10) && enteredNumber <= (randomMaxNumber + 10))
// 	document.write(`Ви попали в загаданий проміжок. Загаданий проміжок: ${randomMinNumber - 10} - ${randomMaxNumber + 10}. <br>`)
// else if (enteredNumber < (randomMinNumber - 10) && enteredNumber > (randomMaxNumber + 10))
// 	document.write(`Ви не попали в загаданий проміжок. Загаданий проміжок: ${randomMinNumber - 10} - ${randomMaxNumber + 10}. <br>`)
// else
// 	document.write(`Ви ввели некоректні дані! <br>`)

// ==============================================================================================================

// Задача 3. Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді.Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.

/* Позначення
randomNumber - рандомне число

firstUsersAnswer
secondUsersAnswer
*/

// const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1

// const firstUsersAnswer = parseInt(prompt('Введіть будь-яке число від 1 до 10', '3'))
// const secondUsersAnswer = parseInt(prompt('Введіть будь-яке число від 1 до 10', '5'))

// if (isNaN(firstUsersAnswer) || firstUsersAnswer < 1 || firstUsersAnswer > 10 || isNaN(secondUsersAnswer) || secondUsersAnswer < 1 || secondUsersAnswer > 10)
// 	document.write(`Ви ввели некоректні дані! <br>`)
// else if (Math.abs(firstUsersAnswer - randomNumber) > Math.abs(secondUsersAnswer - randomNumber))
// 	document.write(`Число другого користувача ближче до загаданого. Загадане число - ${randomNumber} <br>`)
// else if (Math.abs(firstUsersAnswer - randomNumber) === Math.abs(secondUsersAnswer - randomNumber))
// 	document.write(`Обидва числа однаково віддалені від загаданого. Загадане число - ${randomNumber} <br>`)
// else
// 	document.write(`Число першого користувача ближче до загаданого. Загадане число - ${randomNumber} <br>`)

// ==============================================================================================================
// Задача 4. Морський бій(не обов”язкова).Ворожий корабель, може знаходитись в одному із квадратів(кількість квадратів вводиться з клавіатури), які розташовані лінійно(один за одним) на річці.
// Позиція корабля визначається комп’ютером випадковим чином.
// Гра відбувається за правилами:
// 1) якщо користувач стріляє у заданий квадрат(тобто вводиться номер квадрата), то корабель потоплено;
// 2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться корабель, то корабель пошкоджено(про це повідомляємо користувача).
// За два постріли спробувати потопити корабель.

/* Позначення
squaresQuantity 
randomShipPosition

userFirstShot - перший постріл користувача
userSecondShot - другий постріл користувача
*/

const squaresQuantity = parseInt(prompt('Введіть кількість квадратів для гри в "Морський бій"', '8'))

const randomShipPosition = Math.floor(Math.random() * (squaresQuantity - 1 + 1)) + 1

const userFirstShot = parseInt(prompt(`Введіть будь яке число в проміжку від 1 до ${squaresQuantity}`))
let userSecondShot
if (squaresQuantity < 1 || isNaN(userFirstShot) || isNaN(squaresQuantity))
	document.write(`Ви ввели некоректні дані!`)
else if (userFirstShot === randomShipPosition)
	document.write(`Вітаю! Ви потопили корабель з першої спроби!`)
else if (userFirstShot === (randomShipPosition - 1) || userFirstShot === (randomShipPosition + 1)) {
	userSecondShot = parseInt(prompt(`Ви вдарили по сусідньому квадрату, корабель пошкоджено. У вас є друга спроба. Введіть нове число.`))
	if (userSecondShot !== randomShipPosition)
		document.write(`Нажаль Вам не вдалось потопити корабель!`)
	else
		document.write(`Вітаю! Ви потопили корабель з другої спроби!`)
}
else if (userFirstShot !== randomShipPosition) {
	userSecondShot = parseInt(prompt(`Ви не вдарили по кораблю. У вас є друга спроба. Введіть нове число.`))
	if (userSecondShot !== randomShipPosition)
		document.write(`Нажаль Вам не вдалось потопити корабель!`)
	else
		document.write(`Вітаю! Ви потопили корабель з другої спроби!`)
}

// ==============================================================================================================

