"use strict"

// Задача 16. Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7 (у числі є всього дві цифри 7, наприклад: 2679328712)

// 1. Треба знайти індекси чисел 7. Для рядків є методи indexOf() та lastIndexOf()
// Переводимо число в рядок
const number = 26793286712
const numberString = String(number)
// Знаходимо індекси цифр 7
const firstIndex = numberString.indexOf('7')
const lastIndex = numberString.lastIndexOf('7')
// Введемо змінну, яка буде вираховувати змінну
let sum = 0
// Цикл. Так як в нас індекс знайдений саме цифри 7, а нам її рахувати не треба, то додаємо 1, а з останнім індексом просто робимо не <=, а просто <
for (let i = firstIndex + 1; i < lastIndex; i++) {
    let currentNumber = Number(numberString[i])
    sum+=currentNumber
}
document.write(`Сума цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7 дорівнює ${sum}`)