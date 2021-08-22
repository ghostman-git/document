

class Dog {
  name: string = '旺财'
  age = 3

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  bark() {
    console.log(this.name, '在叫...')
  }
}

const dog1 = new Dog('旺财1', 11)
const dog2 = new Dog('旺财2', 22)
const dog3 = new Dog('旺财3', 33)

console.log(dog1)
console.log(dog2)
console.log(dog3)

dog3.bark()
