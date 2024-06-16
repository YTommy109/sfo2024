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

describe('ボードの初期化について', () => {
    it('初期化時にボードのサイズを指定できる', () => {
        const board = new Board([], 10)
        expect(board.size).toEqual(10)
    })
})

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

describe('八近傍の活性数を数える', () => {
    it('bl1 の北西の活性数は 2', () => {
        const board1 = new Board(bl1)
        expect(board1.population(0)).toBe(2)
    })
    it('bl1 の北の活性数は 3', () => {
        const board1 = new Board(bl1)
        expect(board1.population(1)).toBe(3)
    })
})
