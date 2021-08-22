// 指定类型为number
let a: number;

a = 10;
a = 'hello typescript';

let b: boolean = true;

// 自动类型检测
let c = false;
c = 123;

function sum(a, b) {
    return a + b;
}

console.log(sum(123, 456)) // 579
console.log(sum(123, '456')) // 123456

function sum1(a: number, b: number): number {
    return 'result: ' + a + b;
}

console.log(sum1(123, 456))
console.log(sum1(123, '456'))
