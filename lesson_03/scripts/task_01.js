"use strict"

// Задача 01. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

/* Позначення
firstChildName - ім'я першої дитини
secondChildName - ім'я другої дитини

numCandiesFirstChild - кількість цукерок у першої дитини
numCandiesSecondChild - кількість цукерок у другої дитини
*/

// Введення необхідних данних

const firstChildName = prompt(`Введіть ім'я першої дитини`)
const secondChildName = prompt(`Введіть ім'я другої дитини`)

const numCandiesFirstChild = parseInt(prompt(`Введіть кількість цукерок у першої дитини`, `3`))
const numCandiesSecondChild = parseInt(prompt(`Введіть кількість цукерок у другої дитини`, `8`))


// Обчислення результатів та Виведення результатів 
if (firstChildName === "" || secondChildName === "") 
	document.write(`Ви не ввели ім'я!`)
else if (isNaN(numCandiesFirstChild) || isNaN(numCandiesSecondChild)) 
	document.write(`Ви ввели некоректні дані, будь ласка введіть числа`)
else if (numCandiesFirstChild > numCandiesSecondChild)
	document.write(`У ${firstChildName} цукерок більше. Різниця складає ${numCandiesFirstChild - numCandiesSecondChild} цукерок`)
else if (numCandiesFirstChild === numCandiesSecondChild)
	document.write(`${firstChildName} та ${secondChildName} мають однакову кількість цукерок`)
else
	document.write(`У ${ secondChildName } цукерок більше.Різниця складає ${ numCandiesSecondChild - numCandiesFirstChild} цукерок`)

