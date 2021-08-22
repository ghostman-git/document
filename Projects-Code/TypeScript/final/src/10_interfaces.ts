
type MyType = {
  name: string,
  age: number
}
// type MyType = {
//   name: string,
//   age: number
// }

const obj: MyType = {
  name: '',
  age: 2
}


interface MyInterface {
  name: string,
  age: number
}

interface MyInterface {
  gender: string
}

const o: MyInterface = {
  name: '',
  age: 2,
  gender: ''
}


interface MyInter {
  name: string

  sayHello(): string
}

class MyClass implements MyInter {
  name: string;

  sayHello(): string {
    return this.name + ' sayHello';
  }
}

const mc = new MyClass()
mc.sayHello()
