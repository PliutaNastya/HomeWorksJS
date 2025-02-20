"use strict"

// Задача 08. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

if (confirm('Почати тестування?')) {
	const getRandomImage = (imageSrc1, imageSrc2, imageSrc3, imageSrc4) => {

		let randomNumber = Math.floor(Math.random() * 4) + 1

		switch (randomNumber) {
			case 1: return imageSrc1
			case 2: return imageSrc2
			case 3: return imageSrc3
			case 4: return imageSrc4
		} 
	}
	const imageSrc = getRandomImage(
		'https://images.pexels.com/photos/11507613/pexels-photo-11507613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		'https://images.pexels.com/photos/17830283/pexels-photo-17830283/free-photo-of-rocky-cliff-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		'https://images.pexels.com/photos/5594543/pexels-photo-5594543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		'https://images.pexels.com/photos/12950247/pexels-photo-12950247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
	)

	document.write(`<img src="${imageSrc}" style="max-width: 100%">`)
}