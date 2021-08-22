// 食物类Food
class Food {
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('food')!
    }

    // x轴坐标
    get X(): number {
        return this.element.offsetLeft
    }

    // y轴坐标
    get Y(): number {
        return this.element.offsetTop
    }

    // 改变位置
    reset(): void {
        // 随机位置
        // left/top 最小0，最大290，位移10
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food
