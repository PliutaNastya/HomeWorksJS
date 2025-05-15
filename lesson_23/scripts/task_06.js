"use strict"

// Задача 06. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.


const cities = {
	London: {
		name: "Лондон",
		timeZone: "Europe/London"
	},
	Paris: {
		name: "Париж",
		timeZone: "Europe/Paris"
	},
	Sydney: {
		name: "Сідней",
		timeZone: "Australia/Sydney"
	},
	Kyiv: {
		name: "Київ",
		timeZone: "Europe/Kyiv"
	},
	NewYork: {
		name: "Нью-Йорк",
		timeZone: "America/New_York"
	},
	Tokyo: {
		name: "Токіо",
		timeZone: "Asia/Tokyo"
	},
	Berlin: {
		name: "Берлін",
		timeZone: "Europe/Berlin"
	},
	Dubai: {
		name: "Дубай",
		timeZone: "Asia/Dubai"
	}
}

const getLocalTime = cityObj => {
	const timeInCity = new Date().toLocaleTimeString('uk-UA', { timeZone: cityObj.timeZone } )

	return `${cityObj.name}: ${timeInCity}`
}

for (let city in cities) {
	console.log(getLocalTime(cities[city]))
}