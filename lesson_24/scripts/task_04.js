"use strict"

// Задача 04.Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів (edu, com, org,...).

"use strict"

const urls = [
	"https://www.harvard.edu",
	"https://www.stanford.edu",
	"https://www.mit.edu",
	"https://www.google.com",
	"https://mail.yahoo.com",
	"https://github.com",
	"https://www.wikipedia.org",
	"https://nodejs.org",
	"https://www.python.org",
	"https://openai.com",
	"https://www.microsoft.com",
	"https://example.org",
	"https://unicef.org",
	"https://www.nasa.gov",
	"https://www.coursera.org",
	"https://www.khanacademy.org",
	"https://www.udemy.com",
	"https://www.edx.org",
	"https://www.codecademy.com"
]

//! Функція для отримання списку доменів
const getDomainsList = (urlsList) => {
	return urlsList.map(url => url.slice(url.lastIndexOf('.') + 1))
}
// Виклик цієї функції
const domainsList = getDomainsList(urls)

//! Функція для отримання кількості входжень кожного зі значень
const getOccurrencesCount = (list) => {
	const resMap = new Map()

	for (const el of list) {
		if (resMap.has(el)) {
			resMap.set(el, resMap.get(el) + 1)
		} else resMap.set(el, 1)
	}

	return resMap
}

// Виклик функції
const domainsOccurrences = getOccurrencesCount(domainsList)

// Вивід результатів в консоль
for (const [domen, count] of domainsOccurrences) {
	console.log(`Домен - ${domen} зустрічається ${count} разів`)
}