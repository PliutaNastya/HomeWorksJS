"use strict"

// Задача 09. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

if (confirm('Почати тестування?')) {
	const getBanner = (img, title, link) => {
		let template = `
		<h2>${title}</h2>
		<a href=${link} target="_blank" aria-label="Link to the online course">
			<img src=${img} style="max-width: 100%" alt="Banner" title="Click on me">
		</a>
		`
		return template
	}

	const imgSrc = 'https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?t=st=1740093082~exp=1740096682~hmac=fb6facc0c54575b768a2fa3658643ce671bb0fd044ca11f99d727d8477ade550&w=996'
	const title = 'You need to learn JavaScript'
	const link = 'https://edu.fls.guru/js.html'

	document.write(getBanner(imgSrc, title, link))
}