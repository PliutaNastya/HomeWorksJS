// "use strict"

// Задача 04. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.

const boys = ["Andriy", "Viktor", "Ruslan", "Denys"]
const girls = ["Natalia", "Olya", "Kateryna", "Olena"]

const getDancePairs = (boys, girls, currentPairs = [], usedGirls = []) => {
	if (boys.length === 0) {
		return [currentPairs];
	}
	
	let result = []
	let currentBoy = boys[0]
	let restBoys = boys.slice(1)

	for (let girlIndex = 0; girlIndex < girls.length; girlIndex++) {
		if (!usedGirls.includes(girls[girlIndex])) {
			let currentGirl = girls[girlIndex]

			let newPairs = [...currentPairs, [currentBoy, currentGirl]]
			let newUsedGirls = [...usedGirls, currentGirl]
			let restGirls = girls.slice(0, girlIndex).concat(girls.slice(girlIndex + 1))

			let subRes = getDancePairs(restBoys, restGirls, newPairs, newUsedGirls)

			result = result.concat(subRes)
		}
	}

	return result

}

const resArr = getDancePairs(boys, girls)


for (let rowIndex = 0; rowIndex < resArr.length; rowIndex++) {
	document.write(`
			<p style="background-color: #1FABA4;">Комбінація №${rowIndex + 1}:</p>
			<div>
			`)
	resArr[rowIndex].forEach((el, index) => {
		document.write(`
			<p>Пара <span>№${index + 1}</span> складається з <span>${el}</span></p>
			`)
	})
	document.write(`</div>`)
}



// [Початок]
// 	|
// 	[Отримати масиви хлопців і дівчат]
// 	|
// 	[Чи є ще хлопці ?]
// 	/        \
//  Так        Ні
// 	|          |
// 	[Взяти[Повернути список пар]
// першого |
// 	хлопця][Кінець]
// 		|
// 		[Чи є ще вільні дівчата ?]
// 		/        \
//  Так        Ні
// 	|
// 	[Обрати дівчину]
// 	|
// 	[Додати пару до результату]
// 	|
// 	[Позначити дівчину використаною]
// 	|
// 	[Викликати функцію для решти хлопців]
// 	|
// 	[Додати підрезультати до загального]
// 	|
// 	[Чи є ще вільні дівчата ?]  