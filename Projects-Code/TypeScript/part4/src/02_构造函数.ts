class Dog  {
    name: string = '旺财'
    age = 3

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    bark() {
        console.log(this.name)
    }
}

const dog1 = new Dog("www1", 1)
const dog2 = new Dog("www2", 2)
const dog3 = new Dog("www3", 3)
console.log(dog1)
console.log(dog2)
console.log(dog3)

dog3.bark()

