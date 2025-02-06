"use strict"

// Задача 02. Створити 10 елементів для введення цін продуктів

if (confirm('Почати тестування?')) {
	for (let i = 1; i <= 10; i++)
		document.write(`
			<div>
				<label for="product-${i}">Product #${i}</label>
				<input type="number" id="product-${i}">
			</div>
		`)
} 
