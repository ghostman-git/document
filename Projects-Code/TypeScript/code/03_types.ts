// 字面量进行类型声明
let a: 10;
a = 10;
a = 11;

let b: 'male' | 'female';
b = 'male'
b = 'female'
b = 'hello'

let c: string | boolean
c = 'he'
c = false
c = 123

// any 任意类型
let d: any
d = 1
d = false
d = 'he'

let e: unknown
e = 10
e = false
e = 'hello'

let s: string
s = d
s = e
if (typeof e === 'string') {
    s = e
}
// 类型断言
s = e as string
s = <string>e

function fn(): void {
    return false;
}

function fn1(): never {
    throw new Error('报错了')
}
