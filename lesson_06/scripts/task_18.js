"use strict"

// Задача 18. Знайти суму всіх непарних чисел з діапазону, який вводить користувач з клавіатури.

// 1. Запитуємо у юзера число
const userStartNumber = parseInt(prompt('Введіть будь-яке число - початок діапазону', '10'))
const userEndNumber = parseInt(prompt('Введіть будь-яке число - кінець діапазону', '50'))
// Задаємо змінну, я яку будемо сумувати числа
let sum = 0
// Цикл
if (userStartNumber > userEndNumber) {
    alert(`Невірно! Початкове значення діапазону не може бути більше за кінцеве!!`)
} else {
    for (let i= userStartNumber; i<=userEndNumber; i++) {
        if (i%2 !== 0) sum+= i
    }
    document.write(`<p>Сума всіх непарних чисел у заданому вами проміжку складає ${sum}</p>`)
}
