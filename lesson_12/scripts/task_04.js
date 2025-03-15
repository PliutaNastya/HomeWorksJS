// "use strict"

// Задача 04. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком. Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран (стрілки не потрібні).

//! Функція для генерації масиву з рандомних чисел
const getRandomArr = (arrLength, min, max) => {
	let arr = []
	for (let i = 0; i < arrLength; i++) {
		let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
		arr.push(randomNum)
	}
	return arr
}

//! Викликаємо функцію
const arr = getRandomArr(5, 0, 10)

//! Функція для виводу масиву у вигляді таблиці
const renderTable = (arr, highlightIndexes = []) => {

	let table = '<table><tr>'

	for (let i = 0; i < arr.length; i++) {
		const background = highlightIndexes.includes(i) ? 'blue' : 'green'

		table += `<td style="background-color: ${background}">${arr[i]}</td>`
	}

	table += '</tr></table>'

	return table
}

document.write(`
	<p style="color: lightgrey;">Початковий масив:</p>
	${renderTable(arr)}
	`)


// //! Функція сортування бульбашковим методом
document.write(`
	<span>Сортування бульбашковим методом поетапно</span>
	`)
const sortBubble = arr => {
	let change, swaps = 0, comparisons = 0, endIndex = arr.length
	do {
		change = false
		for (let i = 1; i < endIndex; i++) {
			comparisons++
			if (arr[i - 1] > arr[i]) {
				const tmp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = tmp
				change = true
				swaps++
				document.write(`<p>Обмін №${swaps}: ${renderTable(arr, [i - 1, i])}</p>`);
			}
		}
		endIndex--
	} while (change)

	document.write(`<p>Кількість порівнянь: ${comparisons}, кількість обмінів: ${swaps}</p>`);

	return arr
}
sortBubble([...arr])



//! Функція для сортування змішуванням
document.write(`
	<span>Сортування методом змішування поетапно</span>
	`)
const sortCoctail = arr => {
	let leftIndex = 0, rightIndex = arr.length - 1, swaps = 0, comparisons = 0

	while (leftIndex < rightIndex) {
		let change = false

		for (let i = leftIndex + 1; i <= rightIndex; i++) {
			comparisons++
			if (arr[i - 1] > arr[i]) {
				let tmp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = tmp
				change = true
				swaps++
				document.write(`<p>Обмін №${swaps}: ${renderTable(arr, [i - 1, i])}</p>`)
			}
		}
		rightIndex--
		if (!change) break

		for (let i = rightIndex; i > leftIndex; i--) {
			comparisons++
			if (arr[i - 1] > arr[i]) {
				let tmp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = tmp
				change = true
				swaps++
				document.write(`<p>Обмін №${swaps}: ${renderTable(arr, [i - 1, i])}</p>`)
			}
		}
		leftIndex++
	}

	document.write(`<p>Кількість порівнянь: ${comparisons}, кількість обмінів: ${swaps}</p>`);

	return arr
}
sortCoctail([...arr])


//! Функція сортування включеннями
document.write(`
	<span>Сортування методом включення поетапно</span>
	`)
const sortInsertion = arr => {
	let swaps = 0, comparisons = 0

	for (let i = 1; i < arr.length; i++) {
		let current = arr[i]
		let j = i - 1
		let change = false

		while (j >= 0 && arr[j] > current) {
			comparisons++
			arr[j + 1] = arr[j]
			j--
			change = true
		}
		arr[j + 1] = current
		if (change) {
			swaps++
			document.write(`<p>Обмін №${swaps}: ${renderTable(arr, [j + 1])}</p>`);
		}
	}
	document.write(`<p>Кількість порівнянь: ${comparisons}, кількість обмінів: ${swaps}</p>`);

	return arr
}
sortInsertion([...arr])


