

class Animal {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  sound() {
    console.log(this.name, '在叫')
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name, '在叫...')
  }
}

class Cat extends Animal {
  sound() {
    console.log('猫： ', this.name, '在叫')
  }
}

const dog = new Dog('旺财', 1)
const cat = new Cat('喵喵', 2)
console.log(dog)
console.log(cat)

dog.bark()
dog.sound()
cat.sound()






