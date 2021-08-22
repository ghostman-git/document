
// 泛型
function fn<T>(a: T): T {
    return a
}
fn(10)
fn<string>('hello')


function fn2<T, S>(a: T, b: S): T {
    return a
}
fn2<string, number>('hello', 34)


interface Inter {
    length: number
}
function fn3<T extends Inter>(a: T): number {
    return a.length
}
fn3('hello')


class MyClass<T> {
    name: T
    constructor(name: T) {
        this.name = name
    }
}
const m = new MyClass<string>('孙悟空')


