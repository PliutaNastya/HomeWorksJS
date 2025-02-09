"use strict"

// Задача 22. Щоденно спортзал відвідує певна кількість людей. Користувач вводить такі дані: скільки людей відвідало спортзал за день та вік кожного відвідувача. Потрібно вивести вік найстаршого та наймолодшого відвідувачів, а також середній вік всіх відвідувачів спортзалу за день.

const peopleQuantity = parseInt(prompt(`Скільки людей відвідало спортзал сьогодні?`, '3'))

let totalAge = 0
let count = 0
let minPeopleAge
let maxPeopleAge
for(let i=1; i<= peopleQuantity; i++) {
    const peopleAge = parseInt(prompt(`Введіть вік ${i} відвідувача`, '23'))
    if(minPeopleAge === undefined || peopleAge < minPeopleAge) minPeopleAge = peopleAge
    if (maxPeopleAge === undefined || peopleAge > maxPeopleAge) maxPeopleAge = peopleAge

    totalAge += peopleAge
    count++
}
document.write(`
    <p>Вік наймолодшого відвідувача складає ${minPeopleAge}</p>
    <p>Вік найстаршого відвідувача складає ${maxPeopleAge}</p>
    <p>Середній вік відвідувачів ${(totalAge / count).toFixed(2)}</p>
`)
