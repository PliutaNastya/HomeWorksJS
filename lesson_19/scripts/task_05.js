"use strict"

// Задача 05. Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)

const cardsContainer = document.querySelector('.cards')

// перевірити чи існує такий контейнер взагалі
if (cardsContainer) {
	cardsContainer.addEventListener('click', (e) => {
		// знайти найближчий батьківський li для елемента на який було натиснуто
		const currentLiEl = e.target.closest('li')
		// якщо такий елемент існує і він справді всередині контейнеру, то додати клас (toggle)
		if (currentLiEl && cardsContainer.contains(currentLiEl)) {
			currentLiEl.classList.toggle('active')
		}
	})
}