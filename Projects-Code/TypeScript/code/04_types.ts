// object表示一个对象
let a: object
a = {}
a = function () {
}

// ?表示属性可选
let b: { name: string, age?: number }
b = {}
b = {
    name: '123'
}
b = {
    name: '123',
    age: 12
}

// [props: string]:any 表示任意类型属性
let c: { name: string, [props: string]: any }
c = {name: '周', age: 12, gender: '男'}

let d: (a: number, b: number) => number
//let d: (a: number, b: number, ...props: number[]) => number
d = function (n1, n2): number {
    return n1 + n2
}
d = function (n1, n2, n3): number {
    return n1 + n2 + n3
}

let e: string[]
e = ['12', 34]

let g: Array<String>
g = ['1', '2']
g = ['1', 2]

// 元组
let h: [string, string]
h = ['h', 'c']
h = ['h', 'c', '3']

// 枚举
enum Gender {
    Male,
    Femal
}

let i: { name: string, gender: Gender }
i = {
    name: '苏',
    gender: Gender.Male
}

// &表示同时
let j: { name: string } & { age: number }
j = {name: 'A', age: 23}
j = {name: 'A', age: 23, c: 3}

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: 1 | 2 | 3 | 4 | 5
k = 1
l = 7















