import Food from './Food'
import Snake from './Snake'
import ScorePanel from './ScorePanel'

// 游戏控制类
class GameControl {

    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 存储蛇的移动方向（键盘按键的方向）
    direction: string = ''
    // 游戏是否结束
    over: boolean = false

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel(10, 2)

        this.init()
    }


    private init() {
        // 绑定键盘事件
        // this: 谁调用的this就指向谁
        document.addEventListener('keydown', this.keydownHandler.bind(this))

        this.run()
    }

    private keydownHandler(event: KeyboardEvent) {
        // ArrowUp    Up
        // ArrowDown  Down
        // ArrowLeft  Left
        // ArrowRight Right
        this.direction = event.key
    }

    private run() {
        // 向上 top减少
        // 向下 top增加
        // 向左 left减少
        // 向右 left增加

        let left = this.snake.X
        let top = this.snake.Y

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                top -= 10
                break;
            case 'ArrowDown':
            case 'Down':
                top += 10
                break;
            case 'ArrowLeft':
            case 'Left':
                left -= 10
                break;
            case 'ArrowRight':
            case 'Right':
                left += 10
                break;
        }

        // 吃到食物
        this.eaten(left, top)

        try {
            // 修改蛇的坐标
            this.snake.X = left
            this.snake.Y = top
        } catch (e) {
            alert(e.message)
            this.over = true
        }

        // 开始定时调用
        !this.over && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level) * 30)
    }

    // 蛇是否吃到食物
    private eaten(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            // 食物位置重置
            this.food.reset()
            // 增加分数
            this.scorePanel.addScore()
            // 蛇长度
            this.snake.addBody()
        }
    }
}

export default GameControl