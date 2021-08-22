class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  sound() {
    console.log(this.name, '在叫')
  }
}

class Dog extends Animal {
  age: number

  constructor(name: string, age: number) {
    super(name);

    this.age = age
  }

  sound() {
    super.sound();

    console.log('Dog sound...')
  }
}


const dog = new Dog('旺财', 1)
console.log(dog)

dog.sound()






