"use strict"

// Задача 04.

document.write(`<div style="display: grid; justify-content: start;">`)
for(let i=12; i>0; i--) {
    document.write(`<span style="text-align: center">`)
    for(let j=i; j>0; j--) {
        document.write(`o`)
    }
    document.write(`</span>`)
}
document.write(`</div>`)