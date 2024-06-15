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
        let dest = null
        if (JSON.stringify(this.state) == JSON.stringify(bl1)) {
            dest = bl2
        } else {
            dest = bl1
        }
        return dest[offset]
    }
    // 活性数によって次世代を決定する
    nextLife(population, state=null) {
        if (population == 2) {
            return state
        }
        return population == 3 ? 1 : 0
    }
}

export default Board
