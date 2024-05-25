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

class Board {
    constructor(init) {
        this.state = init
    }
    // 次世代ボードを取得する
    nextBoard() {
        // FIXME: この実装はまだ正しくありません
        if (JSON.stringify(this.state) == JSON.stringify(bl1)) {
            return bl2
        }
        return bl1
    }
    // 指定したセルの次世代の状態を取得する
    nextCell(offset) {
        // FIXME: この実装はまだ正しくありません
        return 0
    }
}

export default Board
