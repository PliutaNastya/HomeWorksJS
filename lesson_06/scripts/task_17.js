"use strict"

// Задача 17. Дано ціле число N. Вивести ті натуральні числа, квадрати яких є меншими або рівними за N.

// 1. Запитуємо у юзера число
const userNumber = parseInt(prompt('Введіть будь-яке натуральне число', '10'))
// Задаємо найменше можливе натуральне число
let number = 0
// Задаємо квадрат числа зі значенням 0 (початкове)
let square = 0
// Цикл, обрала while, бо не знаю скільки ітерацій буде
while (square <= userNumber) {
    square = Math.pow(number, 2)
    square <= userNumber ? document.write(`<p>${number}</p>`) : null
    number++
}