(function () {
    // abstract 抽象类
    abstract class Animal {
        name: string

        constructor(name: string) {
            this.name = name
        }

        // 抽象方法
        abstract sayHello(): void
    }

    class Dog extends Animal {

        sayHello() {
            console.log(this.name, ' 狗叫...')
        }
    }

    //const animal = new Animal('蛇')

    const dog = new Dog('旺财')
    dog.sayHello()
})()