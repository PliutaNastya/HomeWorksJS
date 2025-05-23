"use strict"

// Задача 01. Генерація багатовимірного масиву

// // Крок 1. Функція отримання рандомного числа
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// // Крок 2. Функція для генерації одновимірного масиву
// const getRandomArray = (arrayLength, min, max) => {
// 	let arr = []
// 	for (let i = 0; i < arrayLength; i++) {
// 		let randomNumber = getRandomNumber(min, max)
// 		arr.push(randomNumber)
// 	}
// 	return arr
// }

// // Крок 3. Функція для додавання одновимірних масивів в один - отримуємо багатовимірний масив.
// const getArrayTable = (rows, cols, min, max) => {
// 	let arrTable = []
// 	for (let i = 0; i < rows; i++) {
// 		const randomArr = getRandomArray(cols, min, max)
// 		arrTable.push(randomArr)
// 	}
// 	return arrTable
// }
// const arrTable = getArrayTable(5, 7, 12, 100)
// console.log(arrTable)

// =============================================================================================================

// Задача 02. Генерація багатовимірного масиву (однією функцією)

// const generateMatrix = (rows, cols, min, max) => {
// 	let matrix = []
// 	for (let i = 0; i < rows; i++) {
// 		matrix.push([])

// 		for (let j = 0; j < cols; j++) {
// 			const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
// 			matrix[i].push(randomNumber)
// 		}
// 	}
// 	return matrix
// }

// console.log(generateMatrix(5, 7, 12, 100))

// =============================================================================================================

// Задача 03. Створення багатовимірного масиву шляхом введення даних з клавіатури

// const generateMatrix = (rows, cols) => {
// 	let matrix = []
// 	for (let i = 0; i < rows; i++) {
// 		matrix.push([])

// 		for (let j = 0; j < cols; j++) {
// 			const element = parseInt(prompt(`Введіть число для рядка ${i + 1}, стовбця ${j + 1}`))
// 			matrix[i].push(element)
// 		}
// 	}
// 	return matrix
// }

// console.log(generateMatrix(2, 7))

// =============================================================================================================

// Задача 04. Дано прибуток магазину за К тижнів. Знайти загальний прибуток
// let incomes = [
// 	// 0  1  2  3  4  5  6
// 	[1, 2, 5, 2, 1, 2, 9], // 0
// 	[1, 2, 1, 2, 1, 2, 9], // 1
// 	[1, 1, 5, 2, 1, 2, 9], // 2
// 	[1, 6, 5, 2, 1, 2, 9], // 3
// 	[1, 2, 23, 2, 1, 2, 9], // 4
// 	[0, 1, 5, 2, 1, 2, 9], // 5
// 	[1, 1, 54, 21, 1, 2, 9], // 6
// 	[14, 11, 54, 21, 1, 2, 9], // 7
// ]

// ----------------------------------------------
// 1. Знайти загальний прибуток
// const rowLength = incomes.length
// const colLength = incomes[0].length //Можна таким чином вирахувати кількість елементів тільки тому, що маємо всі внутрішні масиви однакової довжини
// let sum = 0
// for (let i = 0; i < rowLength; i++) {
// 	for (let j = 0; j < colLength; j++) {
// 		sum += incomes[i][j]
// 	}
// }
// console.log(sum)
// ----------------------------------------------
// 1. Знайти суму за робочі дні
// const rowLength = incomes.length

// let sum = 0
// for (let i = 0; i < rowLength; i++) {
// 	for (let j = 0; j < 5; j++) {
// 		sum += incomes[i][j]
// 	}
// }
// console.log(sum)

// =============================================================================================================

// Задача 05. Дано кількість відвідувачів кафе протягом року (для кожного місяця за кожен заокруглений тиждень - 4).
// const profits = [
// 	[1200, 1500, 1700, 1600], // Прибуток за перший місяць
// 	[1400, 1600, 1800, 1700], // Прибуток за другий місяць
// 	[1300, 1550, 1750, 1650], // Прибуток за третій місяць
// 	[1100, 1450, 1600, 1550], // Прибуток за четвертий місяць
// 	[1250, 1500, 1850, 1800], // Прибуток за п’ятий місяць
// 	[1350, 1600, 1900, 1700], // Прибуток за шостий місяць
// 	[1450, 1700, 2000, 1800], // Прибуток за сьомий місяць
// 	[1500, 1750, 2100, 1900], // Прибуток за восьмий місяць
// 	[1550, 1800, 2200, 2000], // Прибуток за дев’ятий місяць
// 	[1600, 1850, 2300, 2100], // Прибуток за десятий місяць
// 	[1650, 1900, 2400, 2200], // Прибуток за одинадцятий місяць
// 	[1700, 2000, 2500, 2300], // Прибуток за дванадцятий місяць
// ]

// Визначити :
// ----------------------------------------------
// 1) загальну кількість відвідувачів;
// ---------- звичайними циклами-----------------
// let totalProfit = 0
// for (let monthProfit = 0; monthProfit < profits.length; monthProfit++) {
// 	for (let weekProfit = 0; weekProfit < 4; weekProfit++) {
// 		totalProfit += profits[monthProfit][weekProfit]
// 	}
// }
// console.log(totalProfit)
// ---------- за допомогою for of----------------
// let totalProfit = 0
// for (let monthProfit of profits) {
// 	for (let weekProfit of monthProfit) {
// 		totalProfit += weekProfit
// 	}
// }
// console.log(totalProfit)
// ----------------------------------------------
// 2) кількість відвідувачів за літо
// let totalSummerProfit = 0
// for (let monthProfit = 5; monthProfit < 8; monthProfit++) {
// 	for (let weekProfit = 0; weekProfit < 4; weekProfit++) {
// 		totalSummerProfit += profits[monthProfit][weekProfit]
// 	}
// }
// console.log(totalSummerProfit)
// ----------------------------------------------
// 3) кількість відвідувачів за друге півріччя
// let totalSecondHalfOfYearProfit = 0
// for (let monthProfit = 6; monthProfit < profits.length; monthProfit++) {
// 	for (let weekProfit = 0; weekProfit < 4; weekProfit++) {
// 		totalSecondHalfOfYearProfit += profits[monthProfit][weekProfit]
// 	}
// }
// console.log(totalSecondHalfOfYearProfit)

// =============================================================================================================

// Задача 06. Дано зріст учнів у школі (у кожному із класів кількість учнів може бути різною). Знайти :
// let usersHeignts = [
// 	[167, 176, 190, 171, 167], //0
// 	[167, 176, 167], //1
// 	[167, 176, 190, 171, 167, 145, 134], //2    usersHeignts[2]
// 	[167, 176], //3
// ]
// Це вже масив з масивами, які різної довжини
// ----------------------------------------------
// 1) загальну висоту всіх учнів
// ---------- звичайними циклами-----------------
// let heightSum = 0
// for (let classIndex = 0; classIndex < usersHeignts.length; classIndex++) {
// 	for (let pupilHeight = 0; pupilHeight < usersHeignts[classIndex].length; pupilHeight++) {
// 		heightSum += usersHeignts[classIndex][pupilHeight]
// 	}
// }
// console.log(heightSum)
// ---------- за допомогою for of----------------
// let heightSum = 0
// for (let classIndex of usersHeignts) {
// 	for (let pupilHeight of classIndex) {
// 		heightSum += pupilHeight
// 	}
// }
// console.log(heightSum)
// ----------------------------------------------
// 2) найвищого учня у школі
// let maxHeightInSchool = -Infinity
// for (let row of usersHeignts) {
// 	for (let el of row) {
// 		if(el > maxHeightInSchool) maxHeightInSchool = el
// 	}
// }
// console.log(maxHeightInSchool)
// ----------------------------------------------
// 3) найвищого учня у кожному класі
// for (let row of usersHeignts) {
// 	const maxHeight = Math.max(...row)
// 	console.log(maxHeight)
// }
// ----------------------------------------------
// 4) середній зріст у школі
// let heightSum = 0, pupilsNumber = 0
// for (let classIndex = 0; classIndex < usersHeignts.length; classIndex++) {
// 	for (let pupilHeight = 0; pupilHeight < usersHeignts[classIndex].length; pupilHeight++) {
// 		heightSum += usersHeignts[classIndex][pupilHeight]
// 	}
// 	pupilsNumber += usersHeignts[classIndex].length
// }
// console.log(heightSum / pupilsNumber)
// ----------------------------------------------
// 5) середній зріст у кожному класі
// for (let classIndex = 0; classIndex < usersHeignts.length; classIndex++) {
// 	let heightSum = 0
// 	for (let pupilHeight = 0; pupilHeight < usersHeignts[classIndex].length; pupilHeight++) {
// 		heightSum += usersHeignts[classIndex][pupilHeight]
// 	}
// 	console.log(heightSum / usersHeignts[classIndex].length)
// }
// ---------- замість внутрішнього циклу - reduce----------------
// for (let classIndex = 0; classIndex < usersHeignts.length; classIndex++) {
// 	let heightSum = usersHeignts[classIndex].reduce((accum, el) => accum += el, 0)
// 	console.log(heightSum / usersHeignts[classIndex].length)
// }

// =============================================================================================================

// Задача 07. У місті є К шкіл по 11 класів у кожній. Відомі величини зросту учнів. Знайти найвищого учня
// const schoolsData = [
// 	[
// 		// Перший клас першої школи
// 		[160, 165, 170, 150, 145, 180, 175, 155, 140, 165, 170],
// 		// Другий клас першої школи
// 		[
// 			150, 160, 170, 180, 190, 150, 160, 165, 170, 175, 180, 185, 190,
// 			145, 150,
// 		],
// 		// Третій клас першої школи
// 		[145, 150, 155, 160, 165, 170, 175, 180, 140, 145, 150],
// 		// Четвертий клас першої школи
// 		[
// 			165, 170, 175, 160, 165, 170, 175, 180, 185, 190, 140, 145, 150,
// 			155, 160,
// 		],
// 		// П'ятий клас першої школи
// 		[140, 145, 150, 155, 160, 165, 170, 175, 140, 145, 150],
// 		// Шостий клас першої школи
// 		[160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165],
// 		// Сьомий клас першої школи
// 		[150, 155, 160, 165, 170, 175, 180, 185, 190, 140, 145, 150],
// 		// Восьмий клас першої школи
// 		[145, 150, 155, 160, 165, 170, 175, 140, 145, 150, 155, 160],
// 		// Дев'ятий клас першої школи
// 		[
// 			165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165, 170,
// 			175, 180,
// 		],
// 		// Десятий клас першої школи
// 		[140, 145, 150, 155, 160, 165, 170, 175, 140, 145],
// 		// Одинадцятий клас першої школи
// 		[150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155],
// 	],
// 	[
// 		// Перший клас другої школи
// 		[150, 155, 160, 165, 170, 175, 180, 145, 150, 155, 160, 165],
// 		// Другий клас другої школи
// 		[140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 140, 145],
// 		// Третій клас другої школи
// 		[
// 			160, 165, 170, 175, 180, 185, 190, 150, 160, 165, 170, 175, 180,
// 			185,
// 		],
// 		// Четвертий клас другої школи
// 		[155, 160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160],
// 		// П'ятий клас другої школи
// 		[140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150],
// 		// Шостий клас другої школи
// 		[
// 			160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165,
// 			170, 175,
// 		],
// 		// Сьомий клас другої школи
// 		[150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150],
// 		// Восьмий клас другої школи
// 		[145, 150, 155, 160, 165, 170, 175, 140, 145, 150],
// 		// Дев'ятий клас другої школи
// 		[165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165],
// 		// Десятий клас другої школи
// 		[140, 145, 150, 155, 160, 165, 170, 175, 140, 145],
// 		// Одинадцятий клас другої школи
// 		[150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155],
// 	],
// 	[
// 		// Перший клас третьої школи
// 		[160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160],
// 		// Другий клас третьої школи
// 		[150, 155, 160, 165, 170, 175, 180, 185, 140, 145, 150],
// 		// Третій клас третьої школи
// 		[
// 			140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150,
// 			155, 160,
// 		],
// 		// Четвертий клас третьої школи
// 		[165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165, 170],
// 		// П'ятий клас третьої школи
// 		[150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155],
// 		// Шостий клас третьої школи
// 		[160, 165, 170, 175, 180, 185, 190, 150, 155, 160, 165],
// 		// Сьомий клас третьої школи
// 		[140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 140, 145],
// 		// Восьмий клас третьої школи
// 		[155, 160, 165, 170, 175, 180, 185, 190, 150, 155, 160, 165],
// 		// Дев'ятий клас третьої школи
// 		[
// 			140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150,
// 			155,
// 		],
// 		// Десятий клас третьої школи
// 		[150, 155, 160, 165, 170, 175, 180, 185, 140, 145, 150],
// 		// Одинадцятий клас третьої школи
// 		[
// 			160, 165, 170, 175, 180, 185, 190, 150, 155, 160, 165, 170, 175,
// 			180,
// 		],
// 	],
// ]
// ---------- за допомогою for of----------------
// let maxHeight = -Infinity
// for (let school of schoolsData) {
// 	for (let classList of school) {
// 		for (let pupilHeight of classList) {
// 			if (pupilHeight > maxHeight) maxHeight = pupilHeight
// 		}
// 	}
// }
// console.log(maxHeight)
// ---------- звичайними циклами-----------------
// let maxHeight = -Infinity

// for (let schoolIndex = 0; schoolIndex < schoolsData.length; schoolIndex++) {
// 	for (let classIndex = 0; classIndex < schoolsData[schoolIndex].length; classIndex++) {
// 		for (let pupilIndex = 0; pupilIndex < schoolsData[schoolIndex][classIndex].length; pupilIndex++) {
// 			if (schoolsData[schoolIndex][classIndex][pupilIndex] > maxHeight) maxHeight = schoolsData[schoolIndex][classIndex][pupilIndex]
// 		}
// 	}
// }
// console.log(maxHeight)
// ---------- за допомогою метода flat()----------------
// const maxHeight = Math.max(...schoolsData.flat(Infinity)) // flat() створює новий масив, Infinity означає, що треба з багатовимірного масиву зробити одновимірний. тобто позбутись абсолютно всіх []
// console.log(maxHeight)
// console.log(schoolsData.flat(Infinity))

// =============================================================================================================

// Задача 08. Дано покази продажу автомобілів компанії за країнами, областями, містами і моделями.
// (поки зберігаємо за номерами (номер країни, номер області, номер міста, номер моделі) як 4-вимірний масив)
// const carSalesData = [
// 	[
// 		// Перша країна
// 		[
// 			// Перша область
// 			[100, 150, 200], // Перше місто, продажі по трьох моделях
// 			[120, 180, 220], // Друге місто, продажі по трьох моделях
// 			[110, 140, 230], // Третє місто, продажі по трьох моделях
// 		],
// 		[
// 			// Друга область
// 			[130, 160, 210], // Перше місто, продажі по трьох моделях
// 			[140, 170, 240], // Друге місто, продажі по трьох моделях
// 			[150, 180, 250], // Третє місто, продажі по трьох моделях
// 		],
// 		[
// 			// Третя область
// 			[160, 190, 200], // Перше місто, продажі по трьох моделях
// 			[170, 180, 230], // Друге місто, продажі по трьох моделях
// 			[180, 200, 210], // Третє місто, продажі по трьох моделях
// 		],
// 		[
// 			// Четверта область
// 			[190, 210, 240], // Перше місто, продажі по трьох моделях
// 			[200, 220, 260], // Друге місто, продажі по трьох моделях
// 			[210, 230, 250], // Третє місто, продажі по трьох моделях
// 			[220, 240, 270], // Четверте місто, продажі по трьох моделях
// 		],
// 	],
// 	[
// 		// Друга країна
// 		[
// 			// Перша область
// 			[120, 130, 150], // Перше місто, продажі по трьох моделях
// 			[130, 140, 160], // Друге місто, продажі по трьох моделях
// 			[140, 150, 170], // Третє місто, продажі по трьох моделях
// 			[150, 160, 180], // Четверте місто, продажі по трьох моделях
// 		],
// 		[
// 			// Друга область
// 			[160, 170, 180], // Перше місто, продажі по трьох моделях
// 			[170, 180, 190], // Друге місто, продажі по трьох моделях
// 			[180, 190, 200], // Третє місто, продажі по трьох моделях
// 		],
// 		[
// 			// Третя область
// 			[190, 200, 210], // Перше місто, продажі по трьох моделях
// 			[200, 210, 220], // Друге місто, продажі по трьох моделях
// 			[210, 220, 230], // Третє місто, продажі по трьох моделях
// 		],
// 		[
// 			// Четверта область
// 			[220, 230, 240], // Перше місто, продажі по трьох моделях
// 			[230, 240, 250], // Друге місто, продажі по трьох моделях
// 			[240, 250, 260], // Третє місто, продажі по трьох моделях
// 			[250, 260, 270], // Четверте місто, продажі по трьох моделях
// 		],
// 	],
// 	[
// 		// Третя країна
// 		[
// 			// Перша область
// 			[130, 140, 150], // Перше місто, продажі по трьох моделях
// 			[140, 150, 160], // Друге місто, продажі по трьох моделях
// 			[150, 160, 170], // Третє місто, продажі по трьох моделях
// 		],
// 		[
// 			// Друга область
// 			[160, 170, 180], // Перше місто, продажі по трьох моделях
// 			[170, 180, 190], // Друге місто, продажі по трьох моделях
// 			[180, 190, 200], // Третє місто, продажі по трьох моделях
// 		],
// 		[
// 			// Третя область
// 			[190, 200, 210], // Перше місто, продажі по трьох моделях
// 			[200, 210, 220], // Друге місто, продажі по трьох моделях
// 			[210, 220, 230], // Третє місто, продажі по трьох моделях
// 		],
// 		[
// 			// Четверта область
// 			[220, 230, 240], // Перше місто, продажі по трьох моделях
// 			[230, 240, 250], // Друге місто, продажі по трьох моделях
// 			[240, 250, 260], // Третє місто, продажі по трьох моделях
// 			[250, 260, 270], // Четверте місто, продажі по трьох моделях
// 		],
// 	],
// ]
// ----------------------------------------------
// Знайти:
// ----------------------------------------------
// 1) загальну кількість проданих авто
// const sum = carSalesData.flat(Infinity).reduce((accum, el) => accum + el)
// console.log(sum)
// ----------------------------------------------
// 2) загальну кількість проданих моделей кожного виду
// Спосіб 1 - окремо кожну суму
// for (let modelIndex = 0; modelIndex < 3; modelIndex++) {
// 	let sum = 0
// 	for (let country of carSalesData) {
// 		for (let region of country) {
// 			for (let city of region) {
// 				sum += city[modelIndex]
// 			}
// 		}
// 	}
// 	console.log(sum)
// }
// // 1-ша модель - це нульовий елемент кожного самого внутрішнього масиву
// // Спосіб 2 - створення масиву з сум
// let sumArray = [0, 0, 0]
// for (let country of carSalesData) {
// 	for (let region of country) {
// 		for (let city of region) {
// 			for (let modelIndex = 0; modelIndex < city.length; modelIndex++) {
// 				sumArray[modelIndex] += city[modelIndex]
// 			}
// 		}
// 	}
// }
// console.log(sumArray)
// ----------------------------------------------
// 3) загальну кількість проданих авто у кожній із країн
// for (let cars of carSalesData) {
// 	const sum = cars.flat(Infinity).reduce((accum, el) => accum + el)
// 	console.log(sum)
// }
// ----------------------------------------------
// 4) загальну кількість проданих моделей у кожному із міст
// for (let country of carSalesData) {
// 	for (let region of country) {
// 		for (let city of region) {
// 			// не треба flat() бо city це вже і так одновимірний масив
// 			const sum = city.reduce((accum, el) => accum + el)
// 			console.log(sum)
// 		}
// 	}
// }