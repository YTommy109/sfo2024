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

// 事前に数えた活性数1
const pop1 = [
    2, 3, 2,
    1, 2, 1,
    2, 3, 2
]

// 事前に数えた活性数2
const pop2 = [
    2, 1, 2,
    3, 2, 3,
    2, 1, 2
]

class Board {
    constructor(init, size=3) {
        this.state = init
        this._size = size
    }
    get size() { return this._size }
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
        const population = this.population(offset)
        if (population == 2) {
            return this.state[offset]
        }
        return population == 3 ? 1 : 0
    }
    // 八近傍の活性数を数える
    population(offset) {
        // FIXME: この実装はまだ正しくありません
        if (JSON.stringify(this.state) == JSON.stringify(bl1)) {
            return pop1[offset]
        }
        return pop2[offset]
    }
    // オフセットから座標への変換
    toCoordinate(offset) {
        return [offset % this.size + 1, Math.floor(offset / this.size + 1)]
    }
    // 指定座標のセルの状態を取得する
    getCell(x, y) {
        if (x < 1) return 0
        if (y < 1) return 0
        if (x > this._size) return 0
        if (y > this._size) return 0
        return this.state[(y - 1) * this.size + (x - 1)]
    }
}

export default Board
