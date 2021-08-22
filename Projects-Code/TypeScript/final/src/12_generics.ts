
function fn1<T>(a: T): T {
  return a
}
fn1(10)
fn1<string>('1')

function fn2<T, S>(a: T, b: S): T {
  return a
}
fn2<string, number>('1', 1)

interface Inter {
  length: number
}
function fn3<T extends Inter>(a: T): number {
  return a.length
}
fn3('he')
fn3([])
fn3(1)

class MyClass<T> {
  name: T

  constructor(name: T) {
    this.name = name
  }
}
const mc = new MyClass<string>('h')
