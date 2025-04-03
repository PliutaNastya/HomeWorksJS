"use strict"

// Задача 04. Розробити клас Baner
// Поля
	// Масив об’єктів(графічних зображень та посилань на сайти)
	
// методи
	// Метод випадкового вибору об’єкта(графічного зображення та посилання)
	// Метод виведення випадкового банера


if (confirm('Почати тестування?')) {
	class Baner {
		constructor(arr) {
			this.arr = arr
		}

		chooseRandomBanerIndex() {
			return Math.floor(Math.random() * this.arr.length)
		}

		displayRandomBaner() {
			const randomNum = this.chooseRandomBanerIndex()
			const selectedBaner = this.arr[randomNum]

			return `
		<img src="${selectedBaner.image}" alt="Baner">
		<a href="${selectedBaner.link}" target="_blank">Visit Baner Website</a>
		`
		}
	}

	const arr = [
		{
			image: "https://img.freepik.com/free-vector/red-business-web-banner_1409-969.jpg?t=st=1743676001~exp=1743679601~hmac=83a9f63836026ab5a8b0e76ce8869de62fd723281b6580f17b41127e39dd5eb8&w=1380",
			link: "https://www.example1.com"
		},
		{
			image: "https://img.freepik.com/free-vector/vector-square-banner-design_1340-10283.jpg?t=st=1743676027~exp=1743679627~hmac=97d3fc71039e8e38e02d5af4a1415e7d864ab468bc95301dc2ecb41e004e3bf0&w=826",
			link: "https://www.example2.com"
		},
		{
			image: "https://img.freepik.com/free-vector/abstract-modern-banner-design_23-2147919687.jpg?t=st=1743676047~exp=1743679647~hmac=897b7f2786e50488f119f7b777d9d4a220062b631f021da3ae6858663296583d&w=826",
			link: "https://www.example3.com"
		},
		{
			image: "https://img.freepik.com/free-vector/modern-business-banner-template_1361-1022.jpg?t=st=1743676070~exp=1743679670~hmac=b714bfff5ef40296c0084c6c4f843b037219f1e4e69d6347b5163bee1823ba83&w=826",
			link: "https://www.example4.com"
		},
		{
			image: "https://img.freepik.com/free-vector/modern-abstract-banners-with-flat-design_23-2147906186.jpg?t=st=1743676095~exp=1743679695~hmac=e253ee3b185934195addd2b438a51a77195b4a78d6bde98f4d6fba1074cc75b3&w=826",
			link: "https://www.example5.com"
		}
	]


	const res = new Baner(arr)
	document.write(res.displayRandomBaner())
	document.write(res.displayRandomBaner())
	document.write(res.displayRandomBaner())
}