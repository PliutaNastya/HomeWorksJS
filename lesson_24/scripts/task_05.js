"use strict"

// Задача 05. Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну вартість книг для кожного із авторів.

"use strict"

const books = [
	{ title: "1984", year: 1949, author: "Джордж Орвелл", price: 15.99 },
	{ title: "Великий Гетсбі", year: 1925, author: "Френсіс Скотт Фіцджеральд", price: 12.5 },
	{ title: "Майстер і Маргарита", year: 1967, author: "Михайло Булгаков", price: 11.99 },
	{ title: "Сто років самотності", year: 1967, author: "Габріель Гарсія Маркес", price: 16.5 },
	{ title: "Портрет Доріана Грея", year: 1890, author: "Оскар Уайльд", price: 10.0 },
	{ title: "Гаррі Поттер і філософський камінь", year: 1997, author: "Джоан Роулінг", price: 18.25 },
	{ title: "Гаррі Поттер і таємна кімната", year: 1998, author: "Джоан Роулінг", price: 17.5 },
	{ title: "Гаррі Поттер і в'язень Азкабану", year: 1999, author: "Джоан Роулінг", price: 17.75 }
]

//! Функція для отримання загальної вартості книг
const getTotalPriceByAuthor = (list) => {
	const resMap = new Map()

	for (const book of books) {
		const { author, price } = book

		if (resMap.has(author)) {
			resMap.set(author, resMap.get(author) + price)
		} else resMap.set(author, price)
	}

	return resMap
}

// Виклик функції
const totalBookPricesByAuthor = getTotalPriceByAuthor(books)

// Вивід результатів в консоль
for (const [author, totalPrice] of totalBookPricesByAuthor) {
	console.log(`Автор - ${author}; загальна вартість книг: €${totalPrice.toFixed(2)}`)
}