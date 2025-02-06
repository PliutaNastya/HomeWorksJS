"use strict"

// S= (a+7)^7 / (a+b)
//Крок 1. Введення необхідних даних
// let a = parseFloat(prompt('a=', '0'))
// let b = parseFloat(prompt('b=', '0'))
// Крок 2. Обчислення результатів
// let s = Math.pow(a + 7, 7) / (a + b)
//Крок 3. Виведення
// document.write(`S= ${s}`)
//-------------------------------------------
//Дано 2 дійсні змінні a, b. Поміняти значення місцями
//Крок 1. Введення необхідних даних
// let a = parseFloat(prompt('a=', '0'))
// let b = parseFloat(prompt('b=', '0'))
//Крок 2. Обчислення
// let c = a
// a = b
// b = c
//Крок 3 Виведення результатів
// document.write(`a = ${a},  b=${b}`)
//-------------------------------------------
//Дано три дійсні змінні a, b і c.  Скласти  алгоритм, який міняє місцями значення цих змінних наступним чином: змінна a набуває значення змінної b, змінна b набуває значення змінної c, а змінна  c – попереднє значення змінної a.
//Крок 1. Введення необхідних даних
// let a = parseFloat(prompt('a=', '0'))
// let b = parseFloat(prompt('b=', '0'))
// let c = parseFloat(prompt('c=', '0'))
//Крок 2. Обчислення
// let tmp = a
// a = b
// b = c
// c = tmp
//Крок 3 Виведення результатів
// document.write(`a = ${a},  b=${b},  c=${c}`)
//-------------------
//З клавіатури вводиться кількість монет номіналом 1 копійка. Визначити скільки гривень і копійок є у даній сумі . Наприклад, дано 245 копійок, а вивести 2 грн 45 копійок.
//Крок 0. Позначення величин
//кількість монет - coinNumber
//кількість гривень - grnNumber
//кількість копійок - copNumber
//Крок 1. Введення необхідних даних
// let coinNumber = parseInt(prompt('Кількість монет', '100'))
//Крок 2. Обчислення
// let grnNumber = Math.floor(coinNumber / 100)
// let copNumber = coinNumber % 100
//Крок 3 Виведення результатів
// document.write(`${grnNumber} грн. ,  ${copNumber} коп.`)

//----------------------------------------
//Приклад. На сайті банку задають питання стосовно віку користувача. Якщо вік <18, то
//     повідомити про заборону доступу, інакше – привітати на сайті
//Крок 0. Позначення величин
// userAge - вік користувача
// minAge =18  - мінімальний вік
//Крок 1. Введення величин
// let userAge = parseInt(prompt('Ваш вік', '18'))
// const minAge = 18
//Крок 2. Обчислення
// if (userAge < minAge)
//    document.write('заборонa доступу')
// else
//    document.write('Вітаємо на сайті!')

//--------------------------------
//Вводиться заробітна плата. Якщо заробітна плата більша за прожитковий мінімум (3500), то зняти податок 20%
// Крок 0. Позначення величин
// зар. плата. - salary
// прож. мін. - minSalary
// податок  - tax
// Крок 1. Введення величин
// let salary = parseFloat(prompt('Ввдіть зар. плату', '50000'))
// const minSalary = 3500
// const tax = 20
// Крок 2. Обчислення
// if (salary > minSalary) salary = salary - (salary * tax) / 100
//Крок 3 . Виведення результатів
// document.write(`На руки ${salary} грн.`)

//----------------------------------------
//Вводиться вага вантажу. Вивести, чи можна його надіслати пакетом (до 12 кілограм)
//Крок 0. Позначення величин
//Вага вантажу - cargoWeight
//Максимальна вага - weightLimit
//Крок 1. Введення величин
// let cargoWeight = parseFloat(prompt('Вага вантажу'))
// const weightLimit = 12
//Крок 2. Розв"язок заадачі
// Якщо  cargoWeight < weightLimit
//    тоді вивести "можна"
//    інакше "Неможна"

// if (cargoWeight <= weightLimit) alert('можна')
// else alert('Неможна')

//----------------------------------------
//На роботу компанія приймає працівників від 32 до 45 років. З клавіатури вводиться вік претендента. З’ясувати, чи може він бути прийнятим на роботу.
//Крок 0. Вводимо позначення
//вік працівника  - workerAge
//мінімальний допустимий вік - minAllowedAge = 32
//максимальний допустимий вік - maxAllowedAge = 45
//Крок 1. Введення величин
// let workerAge = parseInt(prompt('Вік користувача', '21'))
// const minAllowedAge = 32
// const maxAllowedAge = 45
//Крок 2. Розв"язок заадачі

// if(32<=workerAge<=45)
// if (minAllowedAge <= workerAge && workerAge <= maxAllowedAge)
//    alert('Ok')
// else
//    alert('No')

//----------------------------------------
//Якщо вік відвідувача >21, то запросимо у салон і будемо питати яке авто хоче купити (якщо тойота - то подарувати) інакше відмовити у відвідуванні
//Крок 0. Позначення
//вік відвідувача  - userAge
// мін. вік. - minAge = 21
// вибране авто для подарунку  - giftCarName = 'Toyota'
// вибране користувачем авто - userCarChoice
//Крок 1. Введення

// let userAge = parseInt(prompt('Вік користувача', '21'))
// const minAge = 21
// const giftCarName = 'Toyota'

// //Крок 2. Обчислення
// if (userAge > minAge) {
// 	alert('Вітаєм! Заходьте!')
// 	let userCarChoice = prompt('Яке авто бажаєте? ', 'BMW')
// 	if (userCarChoice === giftCarName)
// 		alert('Вітаємо!!! Ви виграли це авто!!!')
// 	else alert('Приносьте гроші!!')
// } else alert('Ваш вік замалий!!! ')

// =====================================================

	// Обчислити значення виразу
// 𝑆_1=𝑎−𝑏∗𝑐
//аргументи: a,b,c
//результати: s1
//1. Вводимо аргументи
// let a = parseFloat(prompt('a=', '0'))
// let b = parseFloat(prompt('b=', '0'))
// let c = parseFloat(prompt('c=', '0'))
//2. Обчислюємо результат
// let s1 = a - b * c
//3. Виводимо результат
// document.write(`S1 = ${s1}`)

// 𝑆_2=(𝑎−𝑏)/(2*𝑐)
// 𝑆=sin⁡(𝑎−𝑏)∗cos⁡(𝑐)
//аргументи: a,b,c
//результати: s
//1. Вводимо аргументи
// let a = parseFloat(prompt('a=', '0'))
// let b = parseFloat(prompt('b=', '0'))
// let c = parseFloat(prompt('c=', '0'))
//2. Обчислюємо результат
// let s = Math.sin(a - b) * Math.cos(c)
//3. Виводимо результат
// document.write(`S = ${s.toFixed(3)}`)

// Дано (вводиться з клавіатури) кількість кілограмів помідорів та вартість одиниці.
//----------------------------
// З клавіатури вводиться рік народження учня. Визначити вік учня.
//аргументи: pupilBirthYear, currentYear
//результати: pupilAge
// const pupilBirthYear = parseInt(prompt('Введіть рік народження'))
// const currentYear = new Date().getFullYear() //2024
// const pupilAge = currentYear - pupilBirthYear
// document.write(`Вік учня : ${pupilAge}`)
//----------------------------------------------------
// З клавіатури вводиться орендна плата за квартиру (за 1 місяць). Визначити скільки треба заплатити за 1 рік, за 2 роки та 10 років.
//аргументи: rentPerMonth
//результати: rentPerYear,rentPer2Year, rentPer10Year,
//1. Вводимо аргументи
// let rentPerMonth = parseFloat(prompt('Введіть аренду за місяць'))
//2. Обчислюємо результат
// const rentPerYear = rentPerMonth * 12
// const rentPer2Year = rentPerYear * 2
// const rentPer10Year = rentPerYear * 10

//3. Виводимо результат
// document.write(
// 	`За рік ${rentPerYear}, за 2 роки ${rentPer2Year}, за 10 років ${rentPer10Year}`
// )
// =====================================================================
// З клавіатури вводиться орендна плата за місяць. Визначити на скільки повних місяців вистачить вказаної суми грошей, а також кількість повних років.
// Вудкою зловили R риб по G г кожна. Обчисліть загальну вагу спійманої риби в кг.
// W кг цукерок ділять порівну на М дітей. По скільки г цукерок дістанеться кожній дитині?
// Цвях довжиною L см забивають в дошку. За один удар цвях заглиблюється в дерево на К мм. За скільки ударів цвях заб'ють в дошку?
// Користувач хоче клеїти шпалери на стіну. Дано розміри стіни (довжина і висота) та розмір двох вікон. Визначити, скільки м2 шпалер потрібно купити користувачу.

//================================================================
//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
// let randNumber = Math.random() // [0, 1) 0-0.99999999
// const minValue = 1,
//   maxValue = 5
// const randNumber =
//   minValue + Math.floor(Math.random() * (maxValue - minValue + 1)) //1-5
// let userNum = parseInt(prompt('Введіть  число'))

// if (userNum === randNumber)
//   alert('Ви вгадали')
// else {
//   userNum = parseInt(prompt('Ви не вгадали. Введіть  число'))

//   if (userNum === randNumber) alert('Ви вгадали')
//   else alert('Ви не вгадали')
// }
//================================================================
//З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
// const productPrice = parseFloat(prompt('Введіть назву товару'))
// const userMoney = parseFloat(prompt('Кількість грошей'))
// if (userMoney < productPrice) alert('Недостатньо коштів')
// else {
//   alert('Вітаю з покупкою')
//   if (userMoney - productPrice >= 4) alert('Рекомендуємо купити лотерею')
// }

//================================================================
// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку - 7, школярем -17, студентом- 22, працівником -65, пенсіонером).
// const userAge = parseInt(prompt('Ваш вік'))
// let result
// if (userAge < 1 || userAge > 150) result = 'Некоректний вік'
// else if (userAge <= 7) result = 'Дитина у садочку'
// else if (userAge <= 17) result = 'Дитина у школі'
// else if (userAge <= 22) result = 'Студент'
// else if (userAge <= 65) result = 'Працівник'
// else result = 'Пенсіонер'
// document.write(result)
//================================================================
// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.
//================================================================
//Вводиться кількість місяців. Вивести кількість повних років
// const monthNum = parseInt(prompt('Кількість місяців'))
// const yearsNum = Math.floor(monthNum / 12)
// document.write(yearsNum)

//================================================================
//Вводиться кількість місяців. Вивести із скількох років ці місяці
// 14 -> 2   14/12 =1.2334 <= 2
// 23 -> 2   1.9 <= 2
// const monthNum = parseInt(prompt('Кількість місяців'))
// const yearsNum = Math.ceil(monthNum / 12)
// document.write(yearsNum)

//================================================================
//Вводиться кількість годин, які пройшли від початку 2022 року. Яка зараз година на годиннку?
// hh:mm    15:35   (0-23) : (0-59)
// const hoursNum = parseInt(prompt('Кілкість годин'))
// const currentHours = hoursNum % 24
// document.write(currentHours)

//================================================================
//Вводиться кількість місяців, які пройшли від початку 2022 року. Визначити який зараз місяць (1-12).
//           (0-11)
// const monthNum = parseInt(prompt('Кілкість місяців'))
// const currentMonth = ((monthNum - 1) % 12) + 1
// document.write(currentMonth)

//================================================================
// Числа змінються у діапазоні  5-78
// const num = parseInt(prompt('Число'))
// // newValue = (curValue - min + N) % (max - min + 1) + min
// const currentNum = ((monthNum - 5) % (78-5+1)) + 5
// document.write(currentNum)

//================================================================
//Вводиться два номери призових (1-3) місць, яке місце не зайняла команда?
// const place1 = parseInt(prompt('Перше із зайнятих місць'))
// const place2 = parseInt(prompt('Друге із зайнятих місць'))

// const lastPlace = 6 - (place1 + place2)
// document.write(lastPlace)

//================================================================
//Вводиться кількість пасажирів. Визначити потрібну кількість автобусів (в автобулсі 20 місць)
// const busPlaces = 20
// const passengersNumber = parseInt(prompt('Кількість пасажирів'))
// const busNumber = Math.ceil(passengersNumber / busPlaces)
// document.write(
//   `Для перевезення ${passengersNumber} пасажирів потрібно ${busNumber} автобусів`
// )

//================================================================
//Вказується номер літери. Виветси цю літеру.
// const letterNum = parseInt(prompt('Номер літери'))
// const letter = String.fromCharCode(65 + (letterNum - 1))
// document.write(`Літера з номером ${letterNum} = ${letter}`)

//================================================================

//Вводиться назва фреймворку "Vue", "React", "Express". Вивести для яких цілей вони використовуються
// const frameworkTitle = prompt('Назва фрейворку')
// let result
// switch (frameworkTitle) {
//   case 'Vue':
//   case 'React':
//     result = 'Front'
//     break
//   case 'Express':
//     result = 'back'
//     break
//   default:
//     result = 'unknown'
//     break
// }
// document.write(result)
//================================================================
//Міні перекладач. Вводиться одне із слів "table", "car", "bus", 'man'. Вивести переклад
// const enWord = prompt('Word')
// let uaWord
// switch (enWord) {
//   case 'table':
//     uaWord = 'стіл'
//     break
//   case 'car':
//     uaWord = 'авто'
//     break
//   case 'bus':
//     uaWord = 'автобус'
//     break
//   case 'man':
//     uaWord = 'чоловік'
//     break
//   default:
//     uaWord = 'немає перекдаду'
//     break
// }
// document.write(`${enWord} => ${uaWord}`)
//================================================================
//Вводиться катеорія користувача. Вивести, які дія він може виконувати
// admin - read, edit, add
// manager - read, edit
// user - read
// const userType = prompt('User type')
// let permissions = ''
// switch (userType) {
//   case 'admin':
//     permissions += ' add '
//   case 'manager':
//     permissions += ' edit '
//   case 'user':
//     permissions += ' read '
//     break
//   default:
//     permissions = 'unknown'
//     break
// }

//================================================================
//Вводиться назва предмета. Вивести кабінет, у якому проводиться ця дисципліна
// math -302
//history -213
//geography - 102

//================================================================
//Вводиться статус відповіді. Вивести текстове позначення категорії цього статусу
//https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
//1xx: Informational responses (100 – 199)
//2xx: Successful responses (200 – 299)
//3xx: Redirection messages (300 – 399)
//4xx: Client error responses (400 – 499)
//5xx: Server error responses (500 – 599)
// const statusCode = parseInt(prompt('Status code '))
// let res
// if (statusCode < 100 || statusCode >= 600) res = 'incorrect code'
// else if (statusCode < 200) res = 'Informational'
// else if (statusCode < 300) res = 'Successful'
// else if (statusCode < 400) res = 'Redirection'
// else if (statusCode < 500) res = 'Client error'
// else res = 'Server error'

// document.write(res)

//================================================================

// Задача. З клавіарути вводиться номер дня. Вивести на екран чи це робочий, чи віхідний день.
// const dayNum = parseInt(prompt('Day '))
// let res
// switch (dayNum) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     res = 'Робочий'
//     break
//   case 6:
//   case 7:
//     res = 'Вихідний'
//     break
//   default:
//     res = 'Помилка'
//     break
// }
//=======================
// 1.	Знайти найбільше серед 2 чисел.
// const num1 = parseFloat(prompt('Num 1'))
// const num2 = parseFloat(prompt('Num 2'))
// let max
// if (num1 > num2) max = num1
// else max = num2

// document.write(`Max = ${max}`)

//================================================================
// 3.	Найбільше замінити на 0, якщо одинакові то обидва на 0.
// let num1 = parseFloat(prompt('Num 1'))
// let num2 = parseFloat(prompt('Num 2'))

// if (num1 === num2) num1 = num2 = 0
// if (num1 > num2) num1 = 0
// else num2 = 0

// document.write(`Num1 = ${num1}, Num2 = ${num2}`)
//================================================================
// 4.	Значення які більші за середнє замінити на 0.

//================================================================
// 5.	Знайти найбільше серед 3.
// let num1 = parseFloat(prompt('Num 1'))
// let num2 = parseFloat(prompt('Num 2'))
// let num3 = parseFloat(prompt('Num 3'))
// // let max = Math.max(num1, num2, num3)
// let max =num1
// if (num2>max) max = num2
// if (num3 > max) max = num3
// document.write(`Max = ${max}`)

//================================================================
// 6.	Знайти найбільше серед 4.
// let num1 = parseFloat(prompt('Num 1'))
// let num2 = parseFloat(prompt('Num 2'))
// let num3 = parseFloat(prompt('Num 3'))
// let num4 = parseFloat(prompt('Num 4'))
// // let max = Math.max(num1, num2, num3, num4)
// let max =num1
// if (num2>max) max = num2
// if (num3 > max) max = num3
// if (num4 > max) max = num4
// document.write(`Max = ${max}`)
//================================================================
// 7.	Найбільше серед 2 замінити на 0. Якщо однакові, то замінити обидва на 1

//================================================================
// 8.	Найбільше серед 3 замінити на 0.

//================================================================
// 9.	Знайти найменше серед додатних.

//================================================================
// 10.	Знайти найбільше парне число серед 4-х цілих чисел.  (число %2 === 0)
// let num1 = parseFloat(prompt('Num 1'))
// let num2 = parseFloat(prompt('Num 2'))
// let num3 = parseFloat(prompt('Num 3'))
// let num4 = parseFloat(prompt('Num 4'))

// let max = -Infinity
// if (num1 % 2 === 0 && num1 > max) max = num1
// if (num2 % 2 === 0 && num2 > max) max = num2
// if (num3 % 2 === 0 && num3 > max) max = num3
// if (num4 % 2 === 0 && num4 > max) max = num4

// if (isFinite(max)) document.write(`Max = ${max}`)
// else document.write('Парних')

//================================================================
// 11.	Знайти найбільше серед тих які менші за середні арифметичне.
// let num1 = parseFloat(prompt('Num 1'))
// let num2 = parseFloat(prompt('Num 2'))
// let num3 = parseFloat(prompt('Num 3'))
// let num4 = parseFloat(prompt('Num 4'))
// const average = (num1 + num2 + num3 + num4) / 4

// let max = -Infinity
// if (num1 < average && num1 > max) max = num1
// if (num2 < average && num2 > max) max = num2
// if (num3 < average && num3 > max) max = num3
// if (num4 < average && num4 > max) max = num4

// document.write(`Max = ${max}`)
//================================================================
// 12.	Знайти 2 найбільших числа з 4 цілих чисел.

//================================================================
// 13.	Знайти 2 найменших числа.

//----------------------------------------
//Приклад. На сайті банку задають питання стосовно віку користувача. Якщо вік <18, то
//     повідомити про заборону доступу, інакше – привітати на сайті
//----------------------------------------
//Вводиться вага вантажу. Вивести, чи можна його надіслати пакетом (до 12 кілограм)
//Крок 0. Позначення величин
//Вага вантажу - cargoWeight
//Максимальна вага - weightLimit
//Крок 1. Введення величин
// let cargoWeight = parseFloat(prompt('Вага вантажу'))
// const weightLimit = 12
//Крок 2. Розв"язок заадачі
// Якщо  cargoWeight < weightLimit
//    тоді вивести "можна"
//    інакше "Неможна"

// if (cargoWeight <= weightLimit) alert('можна')
// else alert('Неможна')

//----------------------------------------
//На роботу компанія приймає працівників від 32 до 45 років. З клавіатури вводиться вік претендента. З’ясувати, чи може він бути прийнятим на роботу.
//Крок 0. Вводимо позначення
//вік працівника  - workerAge
//мінімальний допустимий вік - minAllowedAge
//максимальний допустимий вік - maxAllowedAge
//Крок 1. Введення величин
// let workerAge = parseInt(prompt('Вік працівника'))
// const minAllowedAge = 32
// const maxAllowedAge = 45
//Крок 2. Розв"язок заадачі
// if (minAllowedAge <= workerAge && workerAge <= maxAllowedAge)
//    alert('ok')
// else
//    alert('no')
// if(workerAge<minAllowedAge || workerAge>maxAllowedAge)
//   alert('no')
// else
//   alert('ok')

//----------------------------------------
//Вводимо вік користувача. Якщо це дитина (до 17 років), то запропонуємо купити морозиво, інкше запропонуємо пиво
//Крок 0. Вводимо позначення
//вік користува  - userAge
//граничний вік - edgeAge
//Крок 1. Введення величин
// let userAge = parseInt(prompt('Ваш вік?'))
// const edgeAge = 17
// if (userAge <= edgeAge) {
//   if (confirm('Чи хочеш ти морозива?')) alert('Бережи горло')
//   else alert('Шкода .... ')
// } else {
//   if (confirm('Чи хочети ви пива?')) alert('Пийте з розумом')
//   else alert('Пийте чай')
// }

//----------------------------------------
//З клавіатури вводиться кількість балів. Вивести на екран оцінку прописом (задовільно, добре чи відмінно).
//Крок 0. Вводимо позначення
//Кількість балів  - score
//Крок 1. Введення величин
// let score = parseInt(prompt('Ваша оцінка'))
//Крок 2. Розв"язок заадачі
// if (score === 5) alert('відмінно')
// else if (score === 4) alert('добре')
// else if (score === 3) alert('задовільно')
// else if (score === 1 || score === 2) alert('двійка')
// else alert('невірна оцінка')

//----------------------------------------
//Задача. З клавіатури вводиться номер місця, яку зайняв спортсмен. Вивести, яку медаль він отримає:
//1-золота
// 2-срібна
// 3-бронзова
// Все інше - грамота
//Крок 0. Вводимо позначення
//номер місця -  placeNum
//Крок 1. Введення величин
// let placeNum = parseInt(prompt('Місце, яке зайняв спортсмен'))
//Крок 2. Розв"язок заадачі
// let res
// switch (placeNum) {
//   case 1:
//     res = 'Золота'
//     break
//   case 2:
//     res = 'Срібна'
//     break
//   case 3:
//     res = 'Бронза'
//     break

//   default:
//     res = 'Грамота'
//     break
// }
// alert(res)

//----------------------------------------
//З клавіатури вводиться колір помідора: “red”, “yellow”, “green”. Вивести на екран у якому стані цей помідор:
// “red” - можна їсти,
// “yellow” - дозріває
// “green” - ще росте
// let tomatoColor = prompt('колір помідора')
// let res
// switch (tomatoColor) {
// 	case 'red':
// 		res = 'Можна їсти'
// 		break
// 	case 'yellow':
// 		res = 'дозріває'
// 		break
// 	case 'green':
// 		res = 'ще росте'
// 	default:
// 		res = 'помідор - мутант'
// 		break
// }
// alert(res)
