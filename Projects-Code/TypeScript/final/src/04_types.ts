
let a: object
a = {}
a = [1, 2]
a = function fn() {

}

let b: {name: string, age?: number}
b = {
  name: 'Java',
  age: 23
}
b = {
  name: 'Java'
}
b = {
  name: 'Java',
  id: 343
}

let c: {name: string, [props: string]: any}
c = {
  name: 'Java',
  age: 23,
  id: 3434343
}

let d: (a: number, b: number, ...props: number[]) => number
d = function (n1: number, n2: number): number {
  return n1 + n2
}
d = function (n1: number, n2: number, n3: number, n4): number {
  return n1 + n2 + n3 + n4
}

let e: string[]
e = ['1', '2']
e = ['1', '2', 3]

let g: Array<number>
g = [1, 2]
g = [1, '2']

// 元组
let h: [string, number, boolean]
h = ['1', 2, false]

// 枚举
enum Gender {
  Male = 1,
  Female = 2
}
let i: {name: string, gender: Gender}
i = {
  name: 'Ja',
  gender: Gender.Male
}

let j: {name: string} & {age: number}
j = {
  name: 'J',
  age: 3
}

// 类型
type MyType = 1 | 2 | 3
let k: MyType
k = 2
k = 333

let l: 4 | 5 | 6
l = 3



