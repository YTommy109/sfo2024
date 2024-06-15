import Board from './board'

let bl = [
    0, 0, 0,
    1, 1, 1,
    0, 0, 0
]
let board = new Board([
    0, 0, 0,
    1, 1, 1,
    0, 0, 0
], 3)
for (let i = 0; i < 10; i++) {
    bl = board.nextBoard()
    console.log(bl.slice(0, 3))
    console.log(bl.slice(3, 6))
    console.log(bl.slice(6, 9))
    console.log('---')
    board = new Board(bl, 3)
}
