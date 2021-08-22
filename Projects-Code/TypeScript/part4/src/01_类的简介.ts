
// class 定义类
class Person {

    // 定义属性
    // readonly 只读属性，无法修改
    readonly name: string = '孙武'
    // static 静态属性
    static age: number = 18

    // 方法
    syaHello() {
        console.log("hello ")
    }

    static syaHello1() {
        console.log("hello ")
    }
}

const person = new Person()
person.syaHello()
console.log(person)

console.log(Person.age)
Person.syaHello1()
