"use strict"

// Задача 2.
//      о
// 		оо
// 		ооо
// 		оооо
// 		ооооо
// 		оооооо
// 		ооооооо
document.write(`<div style="display: grid; justify-content: start;>`)
for(let i=0; i<7; i++) {
    document.write(`<span style="text-align: center">`)
    for(let j=0; j<i; j++) {
        document.write(`o`)
    }
    document.write(`</span>`)
}
document.write(`</div>`)