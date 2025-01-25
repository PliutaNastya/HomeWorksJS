"use strict"

// Задача 04. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

/* Позначення
	lengthInCm - довжина у сантиметрах
	lengthInM - довжина у метрах
	lengthInKm - довжина у кілометрах
*/

// Введення необхідних данних

const lengthInCm = parseFloat(prompt('Введіть довжину у сантиметрах', '10'));

// Обчислення результатів

const lengthInM = lengthInCm / 100;
const lengthInKm = lengthInM / 1000;

// Виведення результатів

document.write(`В ${lengthInCm} сантиметрах - ${lengthInM} метрів <br>
					В ${lengthInCm} сантиметрах - ${lengthInKm} кілометрів	
	`)