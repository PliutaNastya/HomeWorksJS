"use strict"

// Задача 07. Вивести на екран N абзаців (N вводиться користувачем)

if (confirm('Почати тестування?')) {

	const paragraphsQuantity = parseInt(prompt('Введіть кількість абзаців', '5'))

	for (let i = 1; i <= paragraphsQuantity; i++) {

		document.write(`<h1>Заголовок ${i}</h1>`)

		for (let j = 1; j <= i; j++) {
			document.write(`<p>Розділ ${i}, параграф ${j}</p>`)
		}
		document.write(`<hr><br>`)
	}
}