"use strict"

// Задача 08. Інвестор вклав S тис. грн на 20 років під 20% річних, а потім на 17 років під 27% річних. Визначити за допомогою циклів суму, яку він одержить.

const moneyAmount = parseInt(prompt('Введіть суму, яку плануєте вкласти', '10000'))
const years1 = 20
const years2 = 17
const percent1 = 0.2
const percent2 = 0.27
const tax = 0.05
let sum = moneyAmount
let yearIncome = 0;
for (let i = 0; i < years1; i++) {
    yearIncome = sum * percent1
    sum += yearIncome
}
for (let j = 0; j < years2; j++) {
    yearIncome = sum * percent2
    sum += yearIncome
}
const profit = (sum-moneyAmount)*(1-tax)
document.write((moneyAmount+profit).toFixed(2))