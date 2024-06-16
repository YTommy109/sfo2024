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
    it('ボードのサイズを省略した場合の幅は 3', () => {
        const board = new Board([])
        expect(board.size).toEqual(3)
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

describe('オフセットから座標への変換', () => {
    it('北西は (1, 1)', () => {
        const board = new Board([])
        expect(board.toCoordinate(0)).toEqual([1, 1])
    })
    it('北は (2, 1)', () => {
        const board = new Board([])
        expect(board.toCoordinate(1)).toEqual([2, 1])
    })
})

describe('指定座標のセルを取得する', () => {
    it('北西のセルが 0', () => {
        const board = new Board(bl1)
        expect(board.getCell(1, 1)).toBe(0)
    })
    it('西のセルが 1', () => {
        const board = new Board(bl1)
        expect(board.getCell(1, 2)).toBe(1)
    })
    it('x が 1 未満なら不活性', () => {
        const board = new Board(bl1)
        expect(board.getCell(0, 1)).toBe(0)
    })
    it('y が 1 未満なら不活性', () => {
        const board = new Board(bl1)
        expect(board.getCell(1, 0)).toBe(0)
    })
    it('x が 3 より大きければ不活性', () => {
        const board = new Board(bl1)
        expect(board.getCell(4, 1)).toBe(0)
    })
    it('y が 3 より大きければ不活性', () => {
        const board = new Board(bl1)
        expect(board.getCell(1, 4)).toBe(0)
    })
})
