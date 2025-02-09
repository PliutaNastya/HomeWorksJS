"use strict"

document.write(`<div class="c-matrix">`)

{
    const SIZE = 10
    const diagonalSIZE = SIZE * 2 - 1

    for (let diagonal = 1, i = 1; diagonal <= diagonalSIZE; diagonal++) {
        for (let col = diagonal, row = 1; col >= 1 && row <= SIZE; col--, row++) {
            if (col > SIZE) continue

            document.write(
                `<div style="grid-row: ${row}; grid-column: ${col};">${i++}</div>`,
            )
        }
    }
}
document.write(`</div>`)

// ## Задача 2
document.write(`<div class="c-matrix u-mis-800">`)
{
    const SIZE = 10
    const diagonalSIZE = SIZE * 2 - 1

    for (let diagonal = 1, i = 1; diagonal <= diagonalSIZE; diagonal++) {
        for (let col = diagonal, row = 1; col >= 1 && row <= SIZE; col--, row++) {
            if (col > SIZE) continue

            document.write(
                `<div style="grid-row: ${diagonal % 2 ? col : row}; grid-column: ${diagonal % 2 ? row : col};">${i++}</div>`,
            )
        }
    }
}
document.write(`</div>`)
