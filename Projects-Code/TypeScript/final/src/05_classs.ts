

class Person {
  id: number = 1
  readonly name: string = 'Java'
  static age: number = 23

  sayHello() {
    console.log('hello')
  }

  static sayHello1() {
    console.log('...')
  }

}

const person = new Person()
person.sayHello()
console.log(person.name)

person.name = '23'

console.log(Person.age)
Person.sayHello1()
