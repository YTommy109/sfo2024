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
        let pop = null
        if (JSON.stringify(this.state) == JSON.stringify(bl1)) {
            pop = pop1
        } else {
            pop = pop2
        }
        return this.nextLife(pop[offset], this.state[offset])
    }
    // 活性数によって次世代を決定する
    nextLife(population, state=null) {
        if (population == 2) {
            return state
        }
        return population == 3 ? 1 : 0
    }
    // 八近傍の活性数を数える
    population(offset) {
        // FIXME: この実装はまだ正しくありません
        return 2
    }
}

export default Board
