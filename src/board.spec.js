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
        const board = new Board()
        expect(board.nextBoard(bl1)).toEqual(bl2)
    })
    it('逆のブリンカーが動作する', () => {
        const board = new Board()
        expect(board.nextBoard(bl2)).toEqual(bl1)
    })
})
