"use strict"

// Задача 07. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

/* Позначення
	randomMonthNumber - рандомний номер місяця (від 1 до 12)
	randomDayNumber - рандомний номер дня (від 0 до 6)

	minMonthNumber - номер місяця від
	maxMonthNumber - номер місяця до

	minDayNumber - номер дня від
	maxDayNumber - номер дня до

	sum - сума випадкового номера місяця та випадкового номера дня
*/

// Введення необхідних данних

const minMonthNumber = 1;
const maxMonthNumber = 12;

const minDayNumber = 0;
const maxDayNumber = 6;

// Обчислення результатів
const randomMonthNumber = minMonthNumber + Math.floor(Math.random() * (maxMonthNumber - minMonthNumber + 1));
const randomDayNumber = minDayNumber + Math.floor(Math.random() * (maxDayNumber - minDayNumber + 1));

const sum = randomMonthNumber + randomDayNumber;

// Виведення результатів

document.write(`Cума випадкового номера місяця та випадкового номера дня становить: ${sum}`)