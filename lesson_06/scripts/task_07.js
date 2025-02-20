"use strict"

// Задача 07. Інвестор вклав S тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. Визначити за допомогою циклів суму, яку він одержить.

const moneyAmount = parseInt(prompt('Введіть суму, яку плануєте вкласти', '10000'))
const years = 20
const percent = 0.2
const tax = 0.05
let sum = moneyAmount

for (let i = 0; i < years; i++) {

    let yearIncome = sum * percent
    sum += yearIncome

}
const profit = (sum-moneyAmount)*(1-tax)
document.write((moneyAmount+profit).toFixed(2))