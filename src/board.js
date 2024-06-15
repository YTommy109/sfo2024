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
    // 次世代ボードを取得する
    nextBoard(prev) {
        // FIXME: この実装はまだ正しくありません
        return bl2
    }
}

export default Board
