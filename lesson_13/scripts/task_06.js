"use strict"

// Задача 06. З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.


if (confirm('Почати тестування?')) {

	const getLetterIterator = (word) => {

		let index = 0

		function getLetter() {
		
			if (index < word.length) {
				let letter = word[index]
				index++
				return letter
			} else return null

		}
		return getLetter
	}

	const getTranslateGame = (word, desc) => {
		const getLetter = getLetterIterator(word)
		let countCorrectAnswers = 0
		const question = alert(desc)

		for (let i = 0; i < word.length; i++) {
			const userAnswer = prompt(`Введіть ${i + 1} букву перекладу цього слова`)

			if (userAnswer.toLowerCase() === getLetter()) countCorrectAnswers++
		}

		return countCorrectAnswers
	}

	const res = getTranslateGame('apple', 'Червоний фрукт, що росте на дереві та багатий на залізо')
	alert(`Ви вгадали ${res} літер`)
}

