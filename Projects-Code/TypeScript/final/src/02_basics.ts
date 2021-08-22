let a: number
a = 1
a = '1'


let b: boolean = true
b = false

let c = 'Java'
c = 'TypeScript'
c = 1

function sum(a, b) {
  return a + b
}
sum(12, 12)
sum(12, '12')

function sum1(a: number, b: number): number{
  return 'result: ' + (a + b)
}
sum1(1, 2)
