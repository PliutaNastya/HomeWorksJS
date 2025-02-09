"use strict"

// Задача 13. Вивести на екран усі трицифрові числа, у яких перша цифра є більшою або рівною за суму другої і третьої.


for (let i=100; i<1000; i++) {
    const firstNumber = Math.floor(i / 100)
    const rest = i % 100

    const secondNumber = Math.floor(rest / 10)
    const thirdNumber = rest % 10

    firstNumber >= (secondNumber + thirdNumber) ? document.write(`<p>${i}</p>`) : null
}