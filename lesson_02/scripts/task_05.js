"use strict"

// Задача 05. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

/* Позначення
	timeSeconds - кількість секунд, що пройшла від початку доби
	timeSecondsLeft - кількість секунд для розрахування хвилин
	currentTimeSeconds - скільки секунд наразі показує годинник
	timeHours - яка це година
	timeMinutes - яка це хвилина

	SECONDS_IN_ONE_MINUTE - кількість секунд в 1 хвилині
	SECONDS_IN_ONE_HOUR - кількість секунд в 1 годині

	formattedHours, formattedMinutes, formattedcurrentTimeSeconds - відформатовані данні поточного часу (якщо один символ, то перед ним поставити 0)
*/

// Введення необхідних данних

const timeSeconds = parseInt(prompt('Щоб дізнатись котра зараз година, знаючи скільки секунд пройшло з початку доби, введіть кількість секунд', '3871'));
const SECONDS_IN_ONE_MINUTE = 60
const SECONDS_IN_ONE_HOUR = 3600

// Обчислення результатів

const timeHours = Math.floor(timeSeconds / SECONDS_IN_ONE_HOUR);
const timeSecondsLeft = timeSeconds - (timeHours * SECONDS_IN_ONE_HOUR);
const timeMinutes = Math.floor(timeSecondsLeft / SECONDS_IN_ONE_MINUTE);
const currentTimeSeconds = timeSecondsLeft - (timeMinutes * SECONDS_IN_ONE_MINUTE)

const formattedHours = String(timeHours).padStart(2, '0');
const formattedMinutes = String(timeMinutes).padStart(2, '0');
const formattedcurrentTimeSeconds = String(currentTimeSeconds).padStart(2, '0');

// Виведення результатів

document.write(`Станом на зараз на годиннику ${formattedHours}годин : ${formattedMinutes}хвилин : ${formattedcurrentTimeSeconds}секунд`)