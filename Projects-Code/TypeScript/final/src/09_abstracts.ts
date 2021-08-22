

abstract class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  abstract say(): void
}

class Dog extends Animal {
  say(): void {
    console.log(this.name, 'say ')
  }
}
