(function () {
    class Animal {
        name: string

        constructor(name: string) {
            this.name = name
        }

        sayHello() {
            console.log('动物再叫...')
        }
    }

    class Dog extends Animal {
        age: number

        constructor(name: string, age: number) {
            super(name);
            this.age = age
        }

        sayHello() {
            // super 当前类的父类
            super.sayHello();

            console.log('狗叫...')
        }
    }

    const dog = new Dog('旺财', 12)
    dog.sayHello()
})()