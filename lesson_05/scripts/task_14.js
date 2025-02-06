"use strict"

// Задача 14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).

if (confirm('Почати тестування?')) {
	
	const max = 10000
	const min = 1000

	const moneyAmount = Math.floor(Math.random() * (max - min + 1)) + min
		
	alert(`Вам необхідно сплатити ${moneyAmount}грн`)

	let sum = 0
	do {
		const enteredAmount = parseInt(prompt('Введіть суму, яку ви можете зараз заплатити'))

		sum += enteredAmount

		if (sum < moneyAmount) {
			const remainingAmount = moneyAmount - enteredAmount
			alert(`Вам ще залишилось сплатити ${remainingAmount} грн`)
		} else {
			alert(`Ви платите занадто багато, візьміть здачу ${sum - moneyAmount} грн`)
		}
		
	} while (sum < moneyAmount);

	alert('Ви сплатили всю суму')
}