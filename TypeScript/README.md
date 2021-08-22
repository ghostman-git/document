# 什么是TypeScript

* TypeScript是JavaScript类型的超集，支持 ECMAScript 6 标准
* TypeScript 由微软开发的自由和开源的编程语言
* TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上

# 准备开发环境

1. 下载Node.js

   > [Node.js (nodejs.org)](https://nodejs.org/zh-cn/)

2. 全局安装typescript

   `npm install -g typescript`

3. 编译ts文件

   `tsc helloworld.ts`

4. 常用命令

   ```shell
   # 初始化，生成tsconfig.json
   tsc --init
   
   # 自动编译
   tsc -w helloworld.ts
   ```

# 01_helloworld.ts

```typescript
let helloWorld = "Hello World";
console.log(helloWorld);

// interface
/*const user1 = {
  name: "Hayes",
  id: 0,
};
user1.id = '23'*/
interface User {
  name: string
  id: number
}
const user: User = {
  name: 'h',
  id: 122
}

// class
class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user2: User = new UserAccount('Java', 23)
const user3 = new UserAccount('Java', 23)

// type
type States = "open" | "closed" | "minimized";
let state: States
state = 'open'
//state = '1'

// 泛型
let a: Array<string>
a = ['1', '23']
```

# 02_basic.ts

```typescript
let a: number
a = 1
a = '1'

let b: boolean = true
b = false

let c = 'Java'
c = 'TypeScript'
c = 1

function sum(a: number, b: number): number {
  // return a + b
  return 'result: ' + (a + b)
}
sum(1, 2)
```

# 03_types.ts

| 名称         | 类型              | 例子                                                         |
| ------------ | ----------------- | ------------------------------------------------------------ |
| 布尔值       | boolean           | let isFlag: boolean = false;                                 |
| 数字         | number            | let decLiteral: number = 6;<br/>let hexLiteral: number = 0xf00d;<br/>let binaryLiteral: number = 0b1010;<br/>let octalLiteral: number = 0o744; |
| 字符串       | string            | let name: string = "bob";                                    |
| 对象         | object            | let obj = {}                                                 |
| 数组         | array             | let list: number[] = [1, 2, 3];<br/>let list: Array<number> = [1, 2, 3]; |
| 元组         | tuple             | // **已知元素数量和类型的数组**                              |
| 枚举         | enum              | enum Color {Red, Green, Blue}<br/>let c: Color = Color.Green;<br/>enum Color {Red = 1, Green, Blue}<br/>let c: Color = Color.Green; |
| 任意类型     | any               | let notSure: any = 4;<br/>notSure = "maybe a string instead";<br/>notSure = false; // okay, definitely a boolean |
| 空值         | void              | let unusable: void = undefined;<br/>function warnUser(): void {<br/>    alert("This is my warning message");<br/>} |
|              | null 和 undefined | let u: undefined = undefined;<br/>let n: null = null;        |
| 永不存在的值 | never             | // 返回never的函数必须存在无法达到的终点<br/>function error(message: string): never {<br/>    throw new Error(message);<br/>}<br/><br/>// 推断的返回值类型为never<br/>function fail() {<br/>    return error("Something failed");<br/>}<br/><br/>// 返回never的函数必须存在无法达到的终点<br/>function infiniteLoop(): never {<br/>    while (true) {<br/>    }<br/>} |
| 未知         | unknown           |                                                              |
| 类型断言     | <> 或 as          | // 类型断言有两种形式。 其一是“尖括号”语法：<br/>let someValue: any = "this is a string";<br/>let strLength: number = (<string>someValue).length;<br/><br/>// 另一个为as语法：<br/>let someValue: any = "this is a string";<br/>let strLength: number = (someValue as string).length; |

```typescript
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
```

# 04_types.ts

```typescript
// object
let a: object
a = {}
a = [1, 2]
a = function fn() {

}

// 动态属性
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

// 可变属性
let c: {name: string, [props: string]: any}
c = {
  name: 'Java',
  age: 23,
  id: 3434343
}

// 可变参数
let d: (a: number, b: number, ...props: number[]) => number
d = function (n1: number, n2: number): number {
  return n1 + n2
}
d = function (n1: number, n2: number, n3: number, n4): number {
  return n1 + n2 + n3 + n4
}

// 数组
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

// 合并
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
```

# 05_classs.ts

```typescript
// 类定义
class Person {
  id: number = 1
  // 只读
  readonly name: string = 'Java'
  // 静态
  static age: number = 23

  sayHello() {
    console.log('hello')
  }

  static sayHello1() {
    console.log('...')
  }
}

const person = new Person()
person.sayHello()
console.log(person.name)

// readonly
person.name = '23'

// static
console.log(Person.age)
Person.sayHello1()
```

# 06_constructors.ts

```typescript
// 类构造
class Dog {
  name: string = '旺财'
  age = 3

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  bark() {
    console.log(this.name, '在叫...')
  }
}

// 创建不同的对象
const dog1 = new Dog('旺财1', 11)
const dog2 = new Dog('旺财2', 22)
const dog3 = new Dog('旺财3', 33)

console.log(dog1)
console.log(dog2)
console.log(dog3)

dog3.bark()
```

# 07_extends.ts

```typescript
// 类继承
class Animal {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  sound() {
    console.log(this.name, '在叫')
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name, '在叫...')
  }
}

class Cat extends Animal {
  sound() {
    console.log('猫： ', this.name, '在叫')
  }
}

const dog = new Dog('旺财', 1)
const cat = new Cat('喵喵', 2)
console.log(dog)
console.log(cat)

dog.bark()
dog.sound()
cat.sound()
```

# 08_supers.ts

```typescript
// 父级super
class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  sound() {
    console.log(this.name, '在叫')
  }
}

class Dog extends Animal {
  age: number

  constructor(name: string, age: number) {
    super(name);

    this.age = age
  }

  sound() {
    super.sound();

    console.log('Dog sound...')
  }
}

const dog = new Dog('旺财', 1)
console.log(dog)

dog.sound()
```

# 09_abstracts.ts

```typescript
// 抽象类
abstract class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  abstract say(): void
}

class Dog extends Animal {
  say(): void {
    console.log(this.name, 'say ')
  }
}
```

# 10_interfaces.ts

```typescript
// type
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

// interface
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
```

# 11_scopes.ts

```typescript
// 类属性作用域
class Person {
  private name: string
  private _age: number

  constructor(name: string, age: number) {
    this.name = name
    this._age = age
  }

  setName(name: string) {
    this.name = name
  }

  getName() {
    return this.name
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

const p = new Person('name', 2)
p.setName('Java')
console.log(p.getName())

p.age = 23
console.log(p.age)
```

# 12_generics.ts

```typescript
// 泛型
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
```

# tsconfig.json

```json
{
  /*
    include:
     ** 任意目录
     *  任意文件
  */
  "include": [
    "./src/**/*"
  ],
  //"exclude": [],
  "compilerOptions": {
    // ESNext
    // 编译ES版本
    "target": "ES5",
    // 指定模块化规范
    //"module": "CommonJS",
    // 指定项目中要用的库
    //"lib": ["DOM"]
    "outDir": "./dist",
    // 合并到一个文件中
    "outFile": "./dist/app.js",
    // 默认不对js文件编译
    "allowJs": false,
    // 检查js语法是否规范
    "checkJs": false,
    // 是否移除注释
    "removeComments": false,
    // 不生成编译后的文件
    "noEmit": false,
    // 当有错误时不生成编译文件
    "noEmitOnError": false,

    // 所有严格检查的总开关
    "strict": false,
    // 严格模式
    "alwaysStrict": false,
    // 不允许隐式any类型
    "noImplicitAny": true,
    // 不允许隐式this
    "noImplicitThis": true,
    // 严格的空值检查
    "strictNullChecks": true
  }
}
```

# webpack.config.js

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名
        filename: 'bundle.js',
        // webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                      loader: 'babel-loader' ,
                      options: {
                          presets: [
                              [
                                  "@babel/preset-env",
                                  {
                                      targets: {
                                          'chrome': '88',
                                          'ie': '11'
                                      },
                                      'corejs': '3',
                                      // usage：按需加载
                                      'useBuiltIns': 'usage'
                                  }
                              ]
                          ]
                      }
                    },
                    'ts-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        //new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    resolve: {
        extensions: ['.ts', '.js']
    }
}
```



