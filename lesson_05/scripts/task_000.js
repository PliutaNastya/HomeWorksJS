"use strict"

// Задача -02. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.

/* Позначення
*/
// парні 
let even = 0
// непарні
let odd = 0
let result = ''
let randomNumber
if (confirm('Почати тестування?')) {
	for (let i = 1; i <= 100; i++) {
		randomNumber = Math.floor(Math.random() * 1000) + 1
		console.log(randomNumber)
		randomNumber % 2 === 0 ? even++ : odd++ 
	}
	if (even === odd) result += 'Згенеровано однакову кількість парних та непарних чисел'
	else if (even > odd) result += 'Парних чисел згенеровано більше'
	else result += 'Непарних чисел згенеровано більше'
	document.write(`
			<p>Парних чисел згенеровано - ${even}</p>
			<p>Непарних чисел згенеровано - ${odd}</p>
			<p>${result}</p>
			`)
}
