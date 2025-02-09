"use strict"

// Задача 15. З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною.
let firstNumber = parseInt(prompt('Введіть число'))
let secondNumber = parseInt(prompt('Введіть число'))

let isIncrease = secondNumber > firstNumber

while((isIncrease && secondNumber > firstNumber) || (!isIncrease && secondNumber < firstNumber)) {
    firstNumber = secondNumber
    secondNumber = parseInt(prompt('Введіть число'))
}