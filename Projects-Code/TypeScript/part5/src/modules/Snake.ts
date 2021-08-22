class Snake {
    snake: HTMLElement
    head: HTMLElement
    bodies: HTMLCollection

    constructor() {
        this.snake = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = this.snake.getElementsByTagName('div')
    }

    // 蛇头坐标
    set X(left: number) {
        if (this.X === left) {
            return
        }

        // X范围：0~290之间
        if (left < 0 || left > 290) {
            throw new Error('蛇撞墙了！')
        }

        // 蛇不允许左右（掉头）
        // 如果发生，则让蛇继续向反方向移动
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === left) {
            // 蛇向右移动
            if (left > this.X) {
                left = this.X - 10
            }
            // 向左
            else {
                left = this.X + 10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.left = left + 'px'

        // 检查是否撞到了自己
        this.checkHit()
    }

    get X(): number {
        return this.head.offsetLeft
    }

    // 蛇头坐标
    set Y(top: number) {
        if (this.Y === top) {
            return
        }

        // Y范围：0~290之间
        if (top < 0 || top > 290) {
            throw new Error('蛇撞墙了！')
        }

        // 蛇不允许上下（掉头）
        // 如果发生，则让蛇继续向反方向移动
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === top) {
            // 蛇向下移动
            if (top > this.Y) {
                top = this.Y - 10
            }
            // 向上
            else {
                top = this.Y + 10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.top = top + 'px'

        // 检查是否撞到了自己
        this.checkHit()
    }

    get Y(): number {
        return this.head.offsetTop
    }

    // 增加身体
    addBody() {
        this.snake.insertAdjacentHTML('beforeend', '<div></div>')
    }

    // 将后一节设为前一节的位置
    // 第四节位置 --> 第三节位置
    // 第三节位置 --> 第二节位置
    // 第二节位置 --> 第一节位置
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop

            // 赋值到前一节
            ;(this.bodies[i] as HTMLElement).style.left = x + 'px'
            ;(this.bodies[i] as HTMLElement).style.top = y + 'px'
        }
    }

    // 检查蛇头是否撞倒了自己
    checkHit() {
        for (let i = 1; i < this.bodies.length; i++) {
            const body = this.bodies[i] as HTMLElement
            if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
                throw new Error('撞到了自己！')
            }
        }
    }
}

export default Snake