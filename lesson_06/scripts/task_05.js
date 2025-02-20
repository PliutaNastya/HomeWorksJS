"use strict"

// Задача 05. Побудувати ялинку

for(let k=0; k<3; k++) {
    document.write(`<div style="display: grid; justify-content: start;">`)
    for(let i=0; i<12; i++) {
        document.write(`<span style="text-align: center">`)
        for(let j=0; j<i; j++) {
            document.write(`o`)
        }
        document.write(`</span>`)
    }
    document.write(`</div>`)
}
