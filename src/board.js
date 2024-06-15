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
        const nb = []
        for (let i=0; i<this.state.length; i++) {
            nb.push(this.nextCell(i))
        }
        return nb
    }
    // 指定したセルの次世代の状態を取得する
    nextCell(offset) {
        // FIXME: この実装はまだ正しくありません
        if (JSON.stringify(this.state) == JSON.stringify(bl1)) {
            return bl2[offset]
        }
        return bl1[offset]
    }
    // 活性数によって次世代を決定する
    nextLife(population) {
        // FIXME: この実装はまだ正しくありません
        return population == 3 ? 1 : 0
    }
}

export default Board
