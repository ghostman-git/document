(function () {

    class Animal {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        sayHello() {
            console.log(this.name, '叫声')
        }
    }

    class Dog extends Animal {
        sayHello() {
            console.log(this.name, '汪汪汪')
        }
    }

    class Cat extends Animal {
        sayHello() {
            console.log(this.name, '喵喵喵')
        }
    }

    /*class Dog {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        sayHello() {
            console.log(this.name, '汪汪汪')
        }
    }

    class Cat {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        sayHello() {
            console.log(this.name, '喵喵喵')
        }
    }*/

    const dog = new Dog('旺财', 3)
    dog.sayHello()
    const cat = new Cat('小咪', 3)
    cat.sayHello()
})()