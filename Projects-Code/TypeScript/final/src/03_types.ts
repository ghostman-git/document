let a: 10;
a = 10;
a = 12;

let b: 'male' | "female"
b = 'male'
b = 'female'
b = '123'

let c: boolean | string
c = false
c = '1'
c = 1

let d: any
d = false
d = '1'
d = 1

let e: unknown
e = true
e = '1'
e = 1
console.log(typeof e)

let s: string
s = d
s = e
//typeof e === 'string' && (s = e)
if (typeof e === 'string') {
  s = e
}
// 断言
s = e as string
s = <string>e

// void
function fn(): void {
  return ;
}

// never
function fn1(): never {
  throw new Error('报错了')
}

















