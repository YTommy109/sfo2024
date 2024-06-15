import Board from './board'

// ブリンカーパターン1
const bl1 = [
    0, 0, 0,
    1, 1, 1,
    0, 0, 0
]

// ブリンカーパターン2
const bl2 = [
    0, 1, 0,
    0, 1, 0,
    0, 1, 0
]

describe('ボードに関するテスト', () => {
    it('ブリンカーが動作する', () => {
        const board = new Board(bl1)
        expect(board.nextBoard()).toEqual(bl2)
    })
    it('逆のブリンカーが動作する', () => {
        const board = new Board(bl2)
        expect(board.nextBoard()).toEqual(bl1)
    })
    it('bt1 の 0 番の次世代は非活性である', () => {
        const board1 = new Board(bl1)
        expect(board1.nextCell(0)).toBe(0)
    })
    it('bt1 の 1 番の次世代は非活性である', () => {
        const board1 = new Board(bl1)
        expect(board1.nextCell(1)).toBe(1)
    })
})

describe('活性数に基づいて、来世が決まる', () => {
    it('活性数が 3 なら次世代は活性', () => {
        const board1 = new Board(bl1)
        expect(board1.nextLife(3)).toBe(1)
    })
    it('活性数が 1 なら次世代は非活性', () => {
        const board1 = new Board(bl1)
        expect(board1.nextLife(1)).toBe(0)
    })
})
