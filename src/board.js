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
        if (JSON.stringify(prev) == JSON.stringify(bl1)) {
            return bl2
        }
        return bl1
    }
}

export default Board
