"use strict"

// Задача 12. Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.


for (let i=10; i<100; i++) {
    const firstNumber = Math.floor(i / 10)
    const secondNumber = i % 10

    firstNumber >= secondNumber ? document.write(`<p>${i}</p>`) : null
}