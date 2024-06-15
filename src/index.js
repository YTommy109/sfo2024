import Board from './board'

let bl = [
    0, 0, 0,
    1, 1, 1,
    0, 0, 0
]
const board = new Board()
for (let i = 0; i < 10; i++) {
    bl = board.nextBoard(bl)
    console.log(bl.slice(0, 3))
    console.log(bl.slice(3, 6))
    console.log(bl.slice(6, 9))
    console.log('---')
}
