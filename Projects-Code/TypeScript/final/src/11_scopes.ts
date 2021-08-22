
class Person {
  private name: string
  private _age: number

  constructor(name: string, age: number) {
    this.name = name
    this._age = age
  }

  setName(name: string) {
    this.name = name
  }

  getName() {
    return this.name
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

const p = new Person('name', 2)
p.setName('Java')
console.log(p.getName())

p.age = 23
console.log(p.age)
