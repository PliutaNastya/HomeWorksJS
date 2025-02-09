"use strict"

// Задача 23. Комерсант, володіючи стартовим капіталом N грн, зайнявся торгівлею, що збільшує його капітал щомісячно на р%. Через скільки років він накопичить суму S, достатню для того, щоб придбати власний магазин?

const startCapital = 100
const percent = 0.05
const finalSum = 500

let months = 0
let currentCapital = startCapital

do {
    currentCapital += currentCapital * percent
    months++
} while (currentCapital <= finalSum)

const years = Math.floor(months / 12)
const monthsLeft = months % 12

if(months < 12) document.write(`Через ${months} місяців комерсант накопить суму, необхідну для придбання власного магазину.`)
else if (months % 12 !== 0) document.write(`Через ${years} років і ${monthsLeft} місяців комерсант накопить суму, необхідну для придбання власного магазину.`)
else document.write(`Через ${years} років комерсант накопить суму, необхідну для придбання власного магазину.`)
