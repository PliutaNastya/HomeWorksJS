"use strict"

// Задача 01. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості------
// назва компанії на час розробки(назву періодично змінюють)
// власник компанії
// споснсори(масив спонсорів)
// 	* прізвище спонсора
// 	* ім’я  спонсора
// 	* сума вкладень спонсора
// рік випуску
// вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів(поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

//! Це я сама описала
// const websitesList = [
// 	{
// 		companyName: "Name 1",
// 		companyOwner: "Olena",
// 		sponsorsList: [
// 			{
// 				sponsorSecondName: "Shevchuk",
// 				sponsorFirstName: "Denys",
// 				amountOfInvestment: 1000,
// 			},
// 			{
// 				sponsorSecondName: "Shevchenko",
// 				sponsorFirstName: "Ivan",
// 				amountOfInvestment: 2000,
// 			},
// 			{
// 				sponsorSecondName: "Kuvlov",
// 				sponsorFirstName: "Artem",
// 				amountOfInvestment: 1500,
// 			}
// 		],
// 		yearOfRelease: 2025,
// 		websitePrice: 10000,
// 	}
// ]

// Попросила чат згенерувати мені побільше об'єктів на основі мого
const websitesList = [
	{
		companyName: "TechVision Solutions",
		companyOwner: "Olena Kovalenko",
		sponsorsList: [
			{
				sponsorSecondName: "Shevchuk",
				sponsorFirstName: "Denys",
				amountOfInvestment: 1000,
			},
			{
				sponsorSecondName: "Shevchenko",
				sponsorFirstName: "Ivan",
				amountOfInvestment: 2000,
			},
			{
				sponsorSecondName: "Kuvlov",
				sponsorFirstName: "Artem",
				amountOfInvestment: 1500,
			}
		],
		yearOfRelease: 2025,
		websitePrice: 10000,
	},
	{
		companyName: "BrightFuture Innovations",
		companyOwner: "Andriy Petrenko",
		sponsorsList: [
			{
				sponsorSecondName: "Bondarenko",
				sponsorFirstName: "Olga",
				amountOfInvestment: 50000,
			},
			{
				sponsorSecondName: "Tkachenko",
				sponsorFirstName: "Mykola",
				amountOfInvestment: 75000,
			}
		],
		yearOfRelease: 2005,
		websitePrice: 8000,
	},
	{
		companyName: "NextGen Systems",
		companyOwner: "Iryna Melnyk",
		sponsorsList: [
			{
				sponsorSecondName: "Kravets",
				sponsorFirstName: "Sofiya",
				amountOfInvestment: 120000,
			},
			{
				sponsorSecondName: "Lysenko",
				sponsorFirstName: "Viktor",
				amountOfInvestment: 80000,
			},
			{
				sponsorSecondName: "Pavlenko",
				sponsorFirstName: "Yuliya",
				amountOfInvestment: 30000,
			}
		],
		yearOfRelease: 2010,
		websitePrice: 25000,
	},
	{
		companyName: "CyberPeak Technologies",
		companyOwner: "Dmytro Sydorenko",
		sponsorsList: [
			{
				sponsorSecondName: "Moroz",
				sponsorFirstName: "Tetyana",
				amountOfInvestment: 2000,
			},
			{
				sponsorSecondName: "Hryhorenko",
				sponsorFirstName: "Oleksandr",
				amountOfInvestment: 3000,
			}
		],
		yearOfRelease: 2008,
		websitePrice: 5000,
	},
	{
		companyName: "InfiniteCode Labs",
		companyOwner: "Natalia Horobets",
		sponsorsList: [
			{
				sponsorSecondName: "Zakharchuk",
				sponsorFirstName: "Bohdan",
				amountOfInvestment: 15000,
			},
			{
				sponsorSecondName: "Kostenko",
				sponsorFirstName: "Mariya",
				amountOfInvestment: 20000,
			},
			{
				sponsorSecondName: "Dmytruk",
				sponsorFirstName: "Pavlo",
				amountOfInvestment: 10000,
			}
		],
		yearOfRelease: 2018,
		websitePrice: 15000,
	}
]
console.log(websitesList)

//! 1) загальну вартість усіх сайтів
const getTotalWebsitesSum = arr => arr.reduce((prevTotalSum, el) => prevTotalSum + el.websitePrice, 0)
console.log(getTotalWebsitesSum(websitesList))

//! 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
const getAmountWebsites2000To2009 = arr => arr.reduce((prevCount, el) => el.yearOfRelease >= 2000 && el.yearOfRelease <= 2009 ? prevCount + 1 : prevCount, 0)
console.log(getAmountWebsites2000To2009(websitesList))

//! 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000

const getAmountWithInvestmentOverSomeValue = (arr, value) => {
	let count = 0

	for (let obj of arr) {

		let { sponsorsList } = obj

		let totalSumInvestment = sponsorsList.reduce((prevTotalSum, { amountOfInvestment }) => prevTotalSum + amountOfInvestment, 0)

		if (totalSumInvestment >= value) count++

	}
	return count
}

console.log(getAmountWithInvestmentOverSomeValue(websitesList, 100000))


// 4) створити загальний список усіх спонсорів(поки можуть повторюватись, просто зібрати усі у масив)
const getSponsorsNamesList = arr => {
	let sponsorsNamesList = []

	for (let obj of arr) {

		let { sponsorsList } = obj

		sponsorsList.forEach(sponsorObj => sponsorsNamesList.push(`${sponsorObj.sponsorFirstName} ${sponsorObj.sponsorSecondName}`))
	}

	return sponsorsNamesList
}

console.log(getSponsorsNamesList(websitesList))

//! 5) знайти рік, коли прибуток був найбільшим
const getYearWithMaxProfit = arr => {
	let year
	let max = arr[0].websitePrice

	for (let obj of arr) {

		if (obj.websitePrice > max) {
			max = obj.websitePrice
			year = obj.yearOfRelease
		}
	}

	return year
}

console.log(getYearWithMaxProfit(websitesList))

//! 6) упорядкувати список за спаданням прибутку

const getSortObj = arr => arr.sort((a, b) => b.websitePrice - a.websitePrice)
const copyWebsitesList = JSON.parse(JSON.stringify(websitesList))

console.log(getSortObj(copyWebsitesList))

//! 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
const getListWithCopyObj = (arr, value) => {
	const websitesListWithPriceUnder10000 = JSON.parse(JSON.stringify(arr.filter(obj => obj.websitePrice <= value)))
	const websitesListWithPriceOver10000 = JSON.parse(JSON.stringify(arr.filter(obj => obj.websitePrice > value)))

	return [websitesListWithPriceUnder10000, websitesListWithPriceOver10000]
}
console.log(getListWithCopyObj(websitesList, 10000))

