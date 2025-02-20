"use strict"

// Задача 2.
//      о
// 		оо
// 		ооо
// 		оооо
// 		ооооо
// 		оооооо
// 		ооооооо
document.write(`<div style="display: grid;">`)
for (let i = 1; i <= 7; i++) {
	document.write(`<span>`)
	for (let j = 1; j <= i; j++) {
		document.write(`o`)
	}
	document.write(`</span>`)
}
document.write(`</div>`)