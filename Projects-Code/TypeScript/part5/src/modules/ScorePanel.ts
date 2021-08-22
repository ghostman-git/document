// 分数面板类
class ScorePanel {
    score: number = 0
    level: number = 1

    // 分数/等级元素
    scoreEle: HTMLElement
    levelEle: HTMLElement

    // 等级限制值
    maxLevel: number
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 5) {
        this.maxLevel = maxLevel
        this.upScore = upScore
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
    }

    // 加分
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''

        // 每加${upScore}分升一级
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 提升等级
    private levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

export default ScorePanel