# 一、简介

![img](README.assets/format,f_auto.png)

## 1-1、介绍

CMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会，European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，所以它可以理解为是JavaScript的一个标准，但实际上后两者是ECMA-262标准的实现和扩展。

## 1-2、什么是ECMAScript

ECMAScript是有Ecma国际通过ECMA-262标准化的脚本程序设计语言。

## 1-3、 什么是ECMA-262

Ecma国际制定了许多标准，而ECMA-262只是其中的一个，所有标准列表查看

http://www.ecma-international.org/publications/standards/Standard.htm

## 1-4、ECMA-262历史

ECMA-262（ECMAScript）历史版本查看

https://www.ecma-international.org/publications/standards/Ecma-262-arch.htm

| 版本 | 发表日期   | 与前版本的差异                                               |
| :--- | :--------- | :----------------------------------------------------------- |
| 1    | 1997年6月  | 首版                                                         |
| 2    | 1998年6月  | 格式修正，以使得其形式与ISO/IEC16262国际标准一致             |
| 3    | 1999年12月 | 强大的正则表达式，更好的词法作用域链处理，新的控制指令，异常处理，错误定义更加明确，数据输出的格式化及其它改变 |
| 4    | 放弃       | 由于关于语言的复杂性出现分歧，第4版本被放弃，其中的部分成为了第5版本及Harmony的基础；由ActionScript实现 |
| 5    | 2009年12月 | 新增“严格模式（strict mode）”，一个子集用作提供更彻底的错误检查,以避免结构出错。澄清了许多第3版本的模糊规范，并适应了与规范不一致的真实世界实现的行为。增加了部分新功能，如getters及setters，支持JSON以及在对象属性上更完整的反射 |
| 5.1  | 2011年6月  | ECMAScript标5.1版形式上完全一致于国际标准ISO/IEC 16262:2011。 |
| 6    | 2015年6月  | ECMAScript 2015（ES2015），第 6 版，最早被称作是 ECMAScript 6（ES6），添加了类和模块的语法，其他特性包括迭代器，Python风格的生成器和生成器表达式，箭头函数，二进制数据，静态类型数组，集合（maps，sets 和 weak maps），promise，reflection 和 proxies。作为最早的 ECMAScript Harmony 版本，也被叫做ES6 Harmony。 |
| 7    | 2016年6月  | ECMAScript 2016（ES2016），第 7 版，多个新的概念和语言特性   |
| 8    | 2017年6月  | ECMAScript 2017（ES2017），第 8 版，多个新的概念和语言特性   |
| 9    | 2018年6月  | ECMAScript 2018 （ES2018），第 9 版，包含了异步循环，生成器，新的正则表达式特性和 rest/spread 语法。 |
| 10   | 2019年6月  | ECMAScript 2019 （ES2019），第 10 版                         |
| 11   | 2020年6月  | ECMAScript 2020 （ES2020），第 11 版                         |

## 1–5、谁在维护ECMA-262

TC39（Technical Committee  39）是推进ECMScript发展的委员会。其会员都是公司（其中主要是浏览器厂商，有苹果、谷歌、微软、因特尔灯）。TC39定期召开会议，会议由会员公司的代表与特邀专家出席。

## 1-6、ES6兼容性

查看兼容性 http://kangax.github.io/compat-table/es6

# 二、变量与常量

## 2-1、let变量声明

```js
// 声明变量
let a;
let b,c,d;
let e = 100;
let f = 200, g = 'ii', h = [];

// 1. 变量不能重复声明
let s = '喵';
let s = '汪'; // Uncaught SyntaxError: Identifier 's' has already been declared

// 2. 作用域：块级、全局、函数、eval
// if elseif else for while
{
    let x = 'X';
    //var x = 'X';
}
console.log('x: ', x); // Uncaught ReferenceError: x is not defined

// 3. 不存在变量提升
console.log(y);
var y = 'Y';
let y = 'Y'; // Uncaught ReferenceError: Cannot access 'y' before initialization

// 4. 不影响作用链
{
    let m = 'link';
    function fun() {
        console.log(m);
    }
    fun();
}
```

## 2-2、let经典案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>let经典案例</title>
    <style>
        .container>.item {
            width: 150px;
            height: 80px;
            display: inline-block;
            border: 1px solid red;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="page-header">点击切换颜色</h2>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>

    <script>
        let items = document.getElementsByClassName('item');
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function() {
                //this.style.background = 'pink'
                
                console.log(i)
                items[i].style.background = 'pink'
            }
        }
    </script>
</body>
</html>
```

## 2-3、const常量声明

```js
// 声明常量
const API = '/user/login'
console.log(API)

// 1. 一定赋初始值
//const A; // Uncaught SyntaxError: Missing initializer in const declaration

// 2. 常量值不允许被修改
const B = 'B';
B = 'B1'; // Uncaught TypeError: Assignment to constant variable.

// 3. 块级作用域
{
    const P = '12';
}
console.log(P); // Uncaught TypeError: Assignment to constant variable.

// 4. 可以对于对象/数组内元素修改
const data = ['A', 'B', 'C'];
data.push('D');

const perosn = {
    name: 'ES6',
    age: 23
}
perosn.age = 33;
```

## 2-4、变量的结构赋值

```js
// ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值，被成为结构赋值

// 1. 数组结构
const DATA = ['Java', 'JavaScript', 'Vue', 'MySQL'];
let [java, js, vue, mysql] = DATA;
console.log(java, js, vue, mysql); // Java JavaScript Vue MySQL

// 2. 对象结构
const PERSON = {
    name: 'JS',
    age: 23,
    say() {
        console.log('在讲话...')
    },
    // 嵌套对象
    dept: {
        name: 'dev'
    }
};
let {name, age, say, dept, dept: {name: deptName, desc = '描述默认值'}} = PERSON;
console.log(name, age, deptName, desc); // JS 23 dev 描述默认值
console.log(dept) // 注意以上
say();
// 别名
let {say: hello} = PERSON;
hello();
```

# 三、模板字符串

## 3-1、模板字符串

```js
// ES6引入新的声明字符串的方式 `` ‘’ “”

// 1. 声明
let str = `this is a string`
console.log(str, typeof str)

// 2. 可以直接换行
let ul = `
  <ul>
	<li>Java</li>
	<li>JavaScript</li>
	<li>MySQL</li>
  </ul>
`
console.log(ul)

// 3. 变量的拼接
let resutl = `输出：${str}`
console.log(resutl)
```

# 四、简化对象

## 4-1、简化对象的写法

```js
// ES6允许在大括号李，直接写入变量和函数作为对象的属性和方法
let name = 'JavaScript'
let run = function() {
    console.log('run...')
}
const person = {
    name,
    run,
    // 函数还可以这样简化，属性key就是say
    say() {

    }
}
console.log(person)
```

# 五、函数相关

## 5-1、箭头函数声明与特点

```js
// ES6允许使用「箭头」（=>）来定义函数

// 声明箭头函数
let fun = (a, b) => {
    return a + b;
}
fun(1, 3);

// 1. this是静态的，this始终指向函数声明时所在作用域下的this的值。（绑定上下文环境）
function getName1() {
    console.log(this.name);
}
let getName2 = () => {
    console.log(this.name)
}
// 准备演示数据
window.name = 'JavaScript'
const person = {
    name: 'ES6',

    getName1,
    getName2,

    getName3() {
        // (...)()立即执行
        let gg = (() => {
            console.log(this.name)
        })();
    }
}
// 直接调用
getName1();
getName2();

// call方式调用
getName1.call(person);
getName2.call(person);
// 与call等价
person.getName1()
person.getName2()

// this指向person
person.getName3()

// 2。不能作为构造实例化对象
let User = (name, age) => {
    console.log(this);
    this.name = name;
    this.age = age;
}
let user = new User('JS', 10); // Uncaught TypeError: User is not a constructor

// 3. 不能使用arguments变量
let fn = () => {
    console.log(arguments)
}
fn(1, 3, 4); // Uncaught ReferenceError: arguments is not defined

// 4. 箭头函数的简写
// 4-1. 省略小括号，当形参有且只有一个
let cc = n => {
    console.log('n:', n)
}
cc(1);
// 4-2. 省略花括号，当逻辑代码只有一条语句（如果有return也要省略）
let pow = n => n * n;
let dd = n => console.log('n:', n);
dd(2);
```

## 5-2、箭头函数实践与应用

```js
// 需求1：点击div 0.5s后背景色变成pink
let box = document.getElementById('box');
box.addEventListener('click', function() {
    /* 
    let _this = this;
	setTimeout(function() {
		console.log(this); // this指向window
        _this.style.background = 'pink'
	}, 500);
    */

    setTimeout(() => {
        this.style.background = 'pink'
    }, 500);
})

// 需求2：从数组返回偶数的元素
const data = [0, 1, 3, 2, 4, 7, 6, 9, 8];
const result = data.filter(item => item % 2 === 0);
console.log(result);

/*
  总结：
	1. 箭头函数适合与this无关的回调，例如：定时器、数组的方法等
	2. 箭头函数不适合与this有关的回调，例如：事件的回调、对象内部方法等
*/
```

## 5-3、函数参数的默认值

```js
// ES6允许给函数的参数赋默认初始值

// 1. 形参初始值
function sum(a, b, c = 0) {
    console.log(a, b, c)
}
sum(1, 3)

// 2. 与结构赋值结合
function post(params = {name: 'X', age: 18}) {
    console.log('params:', params);
}
post()

function get({name = 'ES6', age}) {
    console.log('name:', name, ', age:', age);
}
get({
    age: 18,
    sex: '女'
})
```

## 5-4、rest参数

```js
// ES6引入rest参数，用于获取函数的实参，用于替代arguments

// ES5
function date(p) {
    console.log('p:', p)
    console.log('arguments:', arguments)
}
date(1, 'js', ['a', 2])

// ES6，rest必须定义到参数最后位置
function data(p, ...args) {
    console.log('p:', p)
    console.log('args:', args)
}
data(1, 'js', ['a', 2])
```

# 六、扩展运算符

## 6-1、扩展运算符使用

```js
// [...] 扩展运算符，能将「数组」转换为逗号分割的「形参序列」

// 1. 简单使用
const data = ['Java', 'JavaScript', 'Vue'];
console.log(...data); // Java JavaScript Vue
```

## 6-2、扩展运算符应用

```js
// 1. 数组的合并
let arr = ['Vue', 'React'];
// let result = ['ES6'].concat(arr);
let result = ['ES6', ...arr, 'MySQL'];
console.log('result: ', result); // ["ES6", "Vue", "React", "MySQL"]

// 2. 数组的克隆（浅克隆）
const data = ['J', 'A', 'V', 'A'];
const copy = [...data];
data.push['S'];
console.log(copy);

// 3. 伪数组变为真正的数组
const item = document.querySelectorAll('div');
console.log(Array.isArray(item));
const items = [...item];
console.log(Array.isArray(items));
```

# 七、Symbol

ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，是一种类似于字符串的数据类型。

Number、String、Boolean、Null、Object、undefined、Function、Symbol

```js
let gettype = Object.prototype.toString
gettype.call('aaaa') // [object String]
gettype.call(2222) // [object Number]
gettype.call(true) // [object Boolean]
gettype.call(undefined) // [object Undefined]
gettype.call(null) // [object Null]
gettype.call({})  // [object Object]
gettype.call([]) // [object Array]
gettype.call(function(){}) // [object Function]
```

Symbol特点：

* Symbol的值是唯一的，用来解决命名冲突的问题
* Symbol值不能与其他数据进行运算
* Symbol定义的对象属性不能使用for…in循环遍历，但可以使用Reflect.ownKeys来获取对象的所有键名

## 7-1、Symbol基本使用

```js
// 创建symbol
let s1 = Symbol();
console.log(s1, typeof s1);

let s2 = Symbol('JavaScript');
let s3 = Symbol('JavaScript');
console.log(s2 === s3);

// Symbol.for创建
let s4 = Symbol.for('Java');
let s5 = Symbol.for('Java');
console.log(s4 === s5);

// 不能与其他数据进行运算
// let result = s1 + 100; // Uncaught TypeError: Cannot convert a Symbol value to a number
// let result = s1 + s2;
```

## 7-2、象添加Symbol类型的属性

```js
// 方式一
let game = {
    up() {
        console.log('game up...')
    },

    down() {
        console.log('game down...')
    }

    // ...
}
let methods = {
    up: Symbol(),
    down: Symbol()
}
game[methods.up] = function() {
    console.log('新添加的up方法')
}
game[methods.down] = function() {
    console.log('新添加的up方法')
}
console.log(game)
game[methods.up]()

// 方式二
// [] 对象动态属性key
let hello = Symbol('hello');
let person = {
    name: 'JS',
    [Symbol('say')]() {
        console.log('person - symbol()...')
    },
    [Symbol('run')]() {
        console.log('person - symbol()...')
    },
    [hello]() {
        console.log('hello...')
    }
}
console.log(person);

// 调用方式一
const symbols = Object.getOwnPropertySymbols(person);
person[symbols[0]]();

// 调用方式二，提前声明
person[hello]();
```

## 7-3、Symbol内置值

ES6提供了11个内置的Symbol值，指向语言内部使用的方法。

```js
Symbol.iterator // 一个返回一个对象默认迭代器的方法。使用 for...of 的操作行为。
Symbol.asyncIterator // 一个返回对象默认的异步迭代器的方法。使用 for await of 的操作行为。
Symbol.match // 一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。使用 String.prototype.match() 的操作行为。
Symbol.replace // 一个替换匹配字符串的子串的方法. 使用 String.prototype.replace() 的操作行为。
Symbol.search // 一个返回一个字符串中与正则表达式相匹配的索引的方法。使用String.prototype.search() 的操作行为。
Symbol.split // 一个在匹配正则表达式的索引处拆分一个字符串的方法。使用 String.prototype.split() 的操作行为。
Symbol.hasInstance // 一个确定一个构造器对象识别的对象是否为它的实例的方法。使用 instanceof 的操作行为。
Symbol.isConcatSpreadable // 一个布尔值，表明一个对象是否应该flattened为它的数组元素。使用Array.prototype.concat() 的操作行为。
Symbol.unscopables // 拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。
Symbol.species // 一个用于创建派生对象的构造器函数。
Symbol.toPrimitive // 一个将对象转化为基本数据类型的方法。
Symbol.toStringTag // 用于对象的默认描述的字符串值。使用Object.prototype.toString() 的操作行为。
```

# 八、迭代器

迭代器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制，任何数据结构只要部署Iterator接口，就可以完成遍历操作。

## 8-1、迭代器介绍

```js
// for..of
const data = ['Java', 'MySQL', 'JS'];
for (let item of data) {
    console.log(item)
}

// 原理
let iterator = data[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) // {value: undefined, done: true}
```

## 8-2、迭代器应用

```js
// 自定义iterator迭代器
let person = {
    name: 'js',
    status: [
        'wait',
        'todo',
        'done'
    ],
    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                return {
                    value: this.status[index],
                    done: ++index && this.status.length < index
                }
            }
        }
    }
}

// Uncaught TypeError: person is not iterable
for (let p of person) { 
    console.log(p)
}
```

# 九、生成器函数

生成器函数是ES6提供的一种异步编程解决方案。

## 9-1、生成器函数声明

```js
// 声明
// yield：分隔符
function* gen() {
    // console.log('hello generator')

    console.log(11)
    yield 'js';

    console.log(22)
    yield 'java';

    console.log(33)
    yield 'css'
}

let g = gen();
console.log(g);
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

for (const iter of gen()) {
    console.log(iter)
}
```

## 9-2、生成器函数的参数

```js
// next方法可以传入参数，作为上个yield的返回结果
function* gen(args) {
    console.log('args:', args)

    let r = yield 1;
    console.log('r: ', r)
    yield 2;
    yield 3;
}

let iter = gen('A');
console.log(iter.next())
console.log(iter.next('ddd'))
console.log(iter.next())
console.log(iter.next())
```

## 9-3、生成器函数示例

```js
// 案例一：异步编程 1s后输出11，2s后输出22，3s后输出33
function a() {
    setTimeout(() => {
        console.log(11)
        iter.next();
    }, 1000)
}
function b() {
    setTimeout(() => {
        console.log(22)
        iter.next();
    }, 2000)
}
function c() {
    setTimeout(() => {
        console.log(33)
        iter.next();
    }, 3000)
}

function* gen() {
    yield a();
    yield b();
    yield c();
}

let iter = gen();
iter.next();
```

```js
// 案例二：模拟获取 用户数据 订单数据 商品数据
function getUsers() {
    setTimeout(() => {
        let data = '用户数据';
        iter.next(data);
    }, 1000)
}
function getOrders(users) {
    setTimeout(() => {
        console.log('getOrders-users:', users)
        let data = '订单数据';
        iter.next(data);
    }, 1000)
}
function getGoods(users, orders) {
    setTimeout(() => {
        console.log('getOrders-users:', users, ', getOrders-orders:', orders)
        let data = '商品数据';
        iter.next(data);
    }, 1000)
}

function* gen() {
    let users = yield getUsers();
    let orders = yield getOrders(users);
    let goods = yield getGoods(users, orders);
}

let iter = gen();
iter.next();
```

# 十、Promise

Promise是ES6引入的异步编程的新解决方案

1. Promise构造函数：Promise(excutor) {}
2. Promise.prototype.then方法
3. Promise.prototype.catch方法

## 10-1、Promise基本使用

```js
// 初始化Promise
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = '用户数据';

        //resolve(data);

        reject(data);
    }, 1000)
})

// 调用方式一
p.then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})
// 调用方式二
p.then(res => {
    console.log(res)
}, err => {
    console.error(err)
})
```

## 10-2、Promise封装文件读取

```js
// 引入fs
const fs = require('fs')

// 读取文件
/* fs.readFile('./1-promise基本使用.html', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString())
}) */

// 使用Promise封装
const p = new Promise((resolve, reject) => {
    fs.readFile('./1-promise基本使用.html', (err, data) => {
        if (err) {
            reject(err);
        }

        resolve(data)
    })
})

p.then(res => {
    console.log(res.toString())
}, err => {
    console.error(err)
})
```

## 10-3、Promise封装Ajax请求

```js
// api: https://api.apiopen.top/getJoke
const p = new Promise((resolve, reject) => {
    // 1. 创建对象
    const xhr = new XMLHttpRequest();
    // 2. 初始化
    xhr.open('GET', 'https://api.apiopen.top/getJoke');
    // 3 .发送
    xhr.send();
    // 4. 处理响应
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status <= 299) {
                resolve(xhr.response)
            } else {
                reject(xhr.response)
            }
        }
    } 
})

p.then(res => {
    console.log(res)
}, err => {
    console.error(err)
})
```

## 10-4、Promise.prototype.then

```js
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('用户数据')
    }, 1000)
})

// then的返回结果也是Promise对象，对象状态由回调函数的执行结果决定
// 1. 如果回调函数返回的是非promise类型，状态为成功，返回值则为对象成功的值
const result = p.then(res => {
    console.log(res)
    // 1. 非promise类型
    //return 123;
    // 2. 是promise类型
    /* return new Promise((resolve, reject) => {
                resolve('ok')
            }) */
    // 3. 抛出错误
    throw new Error('出错！');
}, err => {
    console.error(err)
})
// 链式调用
.then(value => {

}, reason => {

})
console.log('result: ', result)
```

## 10-5、Promise.prototype.catch

```js
const p = new Promise((resove, reject) => {
    setTimeout(() => {
        reject('出错了！');
    }, 1000)
})

// 方式一
p.then((value) => {}, (reason) => {
    console.error(reason)
})

// 方式二
p.catch(error => {
    console.error(error)
})
```

## 10-6、Promise.prototype.all

```js
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, 1500);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(false)
    }, 500);
})

/* 
p1.then(value => {
	console.log('p1-value: ', value)
})

p2.then(value => {
	console.log('p2-value: ', value)
})
*/

Promise.all([p1, p2]).then(values => {
    console.log('values: ', values)

    if (values.includes(false)) {
        alert('错误！')
    }

    console.log('后续操作')
})
```

## 10-7、Promise实践-读取多个文件

```js
const fs = require('fs')

/* fs.readFile('./1-promise基本使用.html', (err, data1) => {
    fs.readFile('./2-Promise封装文件读取.js', (err, data2) => {
        fs.readFile('./3-Promise封装Ajax请求.html', (err, data3) => {
            console.log(data1, '\r\n', data2.toString(), '\r\n', data3.toString())
        })
    })
}) */

const p = new Promise((resolve, reject) => {
    fs.readFile('./1-promise基本使用.html', (err, data) => {
       resolve(data)
    })
})

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./2-Promise封装文件读取.js', (err, data) => {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./3-Promise封装Ajax请求.html', (err, data) => {
            resolve([...value, data])
        })
    })
}).then(value => {
    console.log(...value.join('\r\n'))
})
```

# 十一、Set集合

## 11-1. Set基本使用

```js
let s = new Set(['1', '1', 1, '2', 3]);

// 元素个数
console.log(s.size)

// 添加元素
s.add('A');

// 删除元素
s.delete(1);

// 是否包含
console.log(s.has('2'))

// 清空
//s.clear();

console.log(s);

// for...of
for (const v of s) {
    console.log(v);
}
```

## 11-2、集合实践

```js
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// 1. 数组去重
let r = [...new Set(arr)];
console.log(r)

// 2. 交集
let arr2 = [4, 5, 6, 4, 4];
const r2 = [...new Set(arr)].filter(item => new Set(arr2).has(item))
console.log(r2)

// 3. 并集
const union = [...new Set([...arr, ...arr2])]
console.log(union)

// 4. 差集
const diff = [...new Set(arr)].filter(item => !new Set(arr2).has(item))
console.log(diff)
```

# 十二、Map集合

## 12-1、Map基本使用

```js
let m1 = new Map([['a', 1], ['b', '2']])
console.log(m1)

let m = new Map()

// 添加元素
m.set('name', 'ES')
m.set('run', function() {
    console.log('run...');
})
let key = {name: 'JS'}
m.set(key, ['es5', 'es6'])

// size
console.log(m.size)

// 删除元素
m.delete(key)

// 获取元素
console.log(m.get(key))

// 清空
m.clear() 

console.log(m)

// 遍历
for (const v of m) {
    console.log(v);
}
```

# 十三、class类

## 13-1、class定义

```js
// class
class Person {
    // name;
    // age;

    // 构造方法
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // 方法
    // 不支持ES5的方法声明
    run() {
        console.log('run...');
    }
}

let p = new Person('js', 19)
console.log(p)
p.run()
```

## 13-2、class静态成员

```js
// class
class Person {
    // 静态属性
    static id

    // 静态方法
    static say() {
        console.log('say...');
    }
}

Person.id = '1'
console.log(Person.id)
Person.say()
```

## 13-3、class继承

```js
// 父类
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    run() {
        console.log('run...');
    }
}

// 子类
class User extends Person {
    constructor(name, age, sex) {
        super(name, age)
        this.sex = sex
    }

    run() {
        super.run()
        console.log('user run...')
    }

    say() {
        console.log('user say...')
    }
}

let u = new User('js', 19, '男')
u.run()
u.say()
```

## 13-4、getter和setter

```js
// class
class Person {
    get name() {
        console.log('getName...')
        return this._name
    }

    set name(name) {
        console.log('setName...')
        this._name = name
    }
}

let p = new Person()
p.name = 'es6'
console.log(p.name)
```

# 十四、扩展方法

## 14-1、数值扩展方法

```js
// 1. Number.EPSILON 是js表示的最小精度
console.log(Number.EPSILON) // 2.220446049250313e-16
console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)

// 2. 二进制、八进制、十六进制
let b = 0b1010
let o = 0o7777
let x = 0xFF
console.log(b)
console.log(o);
console.log(x);

// 3. Number.isFinite 检测是否十一个有限数
console.log(Number.isFinite(100)) // true
console.log(Number.isFinite(1/3)) // true
console.log(Number.isFinite(100/0)) // false
console.log(Number.isFinite(NaN))   // false
console.log(Number.isFinite(Infinity)) // false

// 4. Number.isNaN 检测数值是否是NaN
console.log(Number.isNaN(0)) // false
console.log(Number.isNaN(-1)) // false
console.log(Number.isNaN(1/3)) // false
console.log(Number.isNaN(Infinity)) // false
console.log(Number.isNaN(NaN)) // true

// 5. Number.parseInt Number.parseFloat
console.log(Number.parseInt('-1string1')) // -1
console.log(Number.parseFloat('0.98string3')) // 0.98

// 6. Number.isInteger 判断是否是整数
console.log(Number.isInteger(5)) // true
console.log(Number.isInteger(-2.67)) // false

// 7. Math.trunc 将数字的小数部分抹掉
console.log(Math.trunc(0.23)) // 0

// 8. Math.sign 判断负数、零、正数
console.log(Math.sign(10)) // 1
console.log(Math.sign(0))  // 0
console.log(Math.sign(-10)) // -1
```

## 14-2、对象扩展方法

```js
// 1. 判断两个值是否完全相等
console.log(Object.is('1', '1')) // true
console.log(Object.is(1, '1')) // false
console.log(Object.is(-0, +0)) // false
console.log(Object.is(NaN, NaN)) // true

// 2. Object.assign 对象的合并，也可扩展符
let u1 = {
    name: 'js',
    age: 23
}
let u2 = {
    name: 'ES',
    sex: '男'
}
console.log(Object.assign(u1, u2))
console.log(u1)

// 3. Object.setPrototypeOf 设置原型对象
let user = {
    name: 'JS'
}
let _prototype = {
    run() {
        console.log('run...')
    }
}
Object.setPrototypeOf(user, _prototype)
console.log(user)
user.run()
```

# 十五、模块化

 模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。

优势：

* 防止命名冲突
* 代码复用
* 高维护性

## 15-1、引入模块

```js
export let name = 'js'

export function run() {
    console.log('run...')
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="module">
        // 引入模块
        import * as m from './js/1-引入模块.js'
        console.log(m)
    </script>
</body>
</html>
```

## 15-2、export语法汇总

```js
// 方式一：分别暴露
export let name = 'js'
export function run() {
    console.log('run...')
}

// 方式二：统一暴露
let name = 'js'
function run() {
    console.log('run...')
}
export {
    name, run
}

// 方式三：默认暴露
// 默认暴露
export default {
    name: 'js',
    run() {
        console.log('run...')
    }   
}
```

## 15-3、import语法汇总

```js
// 方式一：通用方式
import * as m from './js/1-引入模块.js'
console.log(m)

// 方式二：结构赋值
import {name, run} from './js/1-引入模块.js'
import {name as name1, run as run1} from './js/2-export语法汇总1.js'
import {default as m2} from './js/2-export语法汇总2.js'

console.log(name, run)
console.log(name1, run1)
console.log(m2)

// 方式三：针对default
import m3 from './js/2-export语法汇总2.js'
console.log(m3)
```

## 15-4、模块化另类方式

```js
// 方式一：通用方式
import * as m from './1-引入模块.js'
console.log(m)

// 方式二：结构赋值
import {name, run} from './1-引入模块.js'
import {name as name1, run as run1} from './2-export语法汇总1.js'
import {default as m2} from './2-export语法汇总2.js'

console.log(name, run)
console.log(name1, run1)
console.log(m2)

// 方式三：针对default
import m3 from './2-export语法汇总2.js'
console.log(m3)
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./js/app.js" type="module"></script>
</body>
</html>
```

## 15-5、browserify打包

```js
// src/js/util.js
export let name = 'js'
export function run() {
    console.log('run...')
}
```

```js
// src/js/app.js
import * as util from './util'
console.log(util)
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 
        1. 初始化
            npm init --yes

        2. 安装工具 babel-cli babel-preset-env browserify/webpack
            cnpm i babel-cli babel-preset-env browserify -D
        
        3. babel转换es5
            npx babel src/js -d dist/js --presets=babel-preset-env 

        4. 打包
            npx browserify dist/js/app.js -o dist/bundle.js
     -->
     <script src="./dist/bundle.js"></script>
</body>
</html>
```

## 15-6、webpack打包

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 
        1. 初始化
            npm init -y
        2. 安装依赖
            cnpm i webpack webpack-cli babel-cli html-webpack-plugin webpack-dev-server -D
        3. webpack.config.js
            const path = require('path')
            const HtmlWebpackPlugin = require('html-webpack-plugin')

            module.exports = {
                entry: './src/app.js',

                output: {
                    // path: './dist',
                    path: path.resolve(__dirname, 'dist'),
                    filename: 'bundle.js'
                },

                plugins: [
                    new HtmlWebpackPlugin()
                ]
            }
        4. npm run serve
            "scripts": {
                "build": "webpack",
                "serve": "webpack serve --mode production",
            },
     -->
</body>
</html>
```

```json
// package.json
{
  "name": "14-babel-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "serve": "webpack serve --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "html-webpack-plugin": "^5.3.2",
    "webpack": "^5.51.1",
    "webpack-cli": "^4.8.0",
    "webpack-dev-server": "^4.0.0"
  }
}
```

```js
// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',

    output: {
        // path: './dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin()
    ]
}
```

# 十六、ES7新特性

```js
// 1. includes
let arr = ['js', 'java', 'mysql']
console.log(arr.includes('java'))
console.log(arr.includes('j'))

// 2. 指数运算 「**」
console.log(2 ** 10)
console.log(Math.pow(2, 10))
```

# 十七、ES8新特性

## 17-1、async函数

```js
async function getUser() {
    return '用户数据'
}

const user = getUser()
console.log(user)
/*
Promise {<fulfilled>: "用户数据"}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "用户数据"
*/
```

## 17-2、await函数

```js
const p = new Promise((resolve, reject) => {
    resolve("用户数据")
})

// await要放到async函数中
async function init() {
    let r = await p
    console.log(r) // 用户数据
}

init()
```

## 17-3、await跟async结合

```js
function getInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('用户数据')
        }, 1500);
    })
}

// await getInfo().then(value => console.log(value));
// console.log('后续操作..') 

async function afterInfo() {
    await getInfo().then(value => console.log(value));
    console.log('后续操作..')
}

afterInfo();
```

## 17-4、await跟async结合读取文件

```js
const fs = require('fs')

function read1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1-async函数.html', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function read2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./2-await函数.html', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

async function init() {
    let r1 = await read1()
    let r2 = await read2()

    console.log(r1.toString())
    console.log(r2.toString())
}

init()
```

## 17-5、await跟async结合发Ajax请求

```js
function get(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.send()
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response)
                }
            }
        }
    })
}

async function init() {
    let r1 = await get('https://api.apiopen.top/getJoke')
    console.log(r1)

    let r2 = await get('https://api.apiopen.top/getJoke')
    console.log(r2)
}

init()
```

## 17-6、对象方法扩展

```js
let person = {
    name: 'js',
    age: 23,
    hobbies: ['js', 'java', 'mysql'],
    run() {
        console.log('run...')
    }
}

// 1. keys
console.log(Object.keys(person))
// 2. values
console.log(Object.values(person))
// 3. entries
console.log(Object.entries(person))
console.log(new Map(Object.entries(person)))
// 4. getOwnPropertyDescriptors
console.log(Object.getOwnPropertyDescriptors(person))
Object.create(null, {
    name: {
        value: 'js',
        writable: true,
        configurable: true,
        enumerable: true
    }
})
```

# 十八、ES9新特性

## 18-1、扩展运算符与rest参数

```js
// 1. 结构赋值 rest
function getInfo({id, ...params}) {
    console.log(id, params)
}
getInfo({
    id: 1,
    name: 'js',
    age: 23,
    sex: '男'
})

// 2. 扩展符应用到对象
let person = {name: 'ES', age: 18};
let user = {name: 'JS', ...person, sex: '男'};
console.log(user); // {name: "ES", age: 18, sex: "男"}
```

## 18-2、正则扩展-命名捕获分组

```js
// 普通
/* 
let str = '<a href="https://www.apple.com.cn">Apple</a>'
const reg = /<a href="(.*)">(.*)<\/a>/
const result = reg.exec(str)
console.log(result)
*/

// 分组
let str = '<a href="https://www.apple.com.cn">Apple</a>'
const reg = /<a href="(?<href>.*)">(?<label>.*)<\/a>/
const result = reg.exec(str)
console.log(result)
```

## 18–3、正则扩展-反向断言

```js
let str = 'sjdlfj23423ls中4434国fsdk'
// 正向断言
let reg = /\d+(?=国)/
let result = reg.exec(str)
console.log(result)

// 反向断言
reg = /(?<=中)\d+/
result = reg.exec(str)
console.log(result)
```

## 18-4、正则扩展-dotAll模式

```js
// dot 除换行符外的任意单个字符
let str = `
	<ul>
		<li>
			<a>《Java》</a>
			<p>￥145.32</p>
		</li>
		<li>
			<a>Vue</a>
        	<p>￥133.23</p>
        </li>
	</ul>
`
//const reg = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs
let result
while (result = reg.exec(str)) {
    console.log(result)
}
console.log(result)
```

# 十九、ES10新特性

## 19-1、对象扩展方法

```js
// 针对二维数组
let arr = [
    ['name', 'js'],
    ['age', 23]
]
let r1 = Object.fromEntries(arr)
console.log(r1)

// 针对Map
let m = new Map(arr)
let r2 = Object.fromEntries(m)
console.log(r2)

```

## 19-2、字符串扩展方法

```js
let str = '  js is best '
console.log(str)
console.log(str.trimStart())
console.log(str.trimEnd())
```

## 19-3、数组扩展方法

```js
// flat  flatMap
// 将多维数组转为低维数组
const arr = [1, 2, [3, 4, [5, 6, 7]]]
console.log(arr.flat())
console.log(arr.flat(2))

// flatMap
const arr1 = [1, 3, 4, 5]
const r1 = arr1.map(item => [item * 10])
const r2 = arr1.flatMap(item => [item * 10])
console.log(r2)
```

## 19-4、Symbol扩展方法

```js
let s = Symbol('JavaScript')
console.log(s.description) // JavaScript
```

# 二十、ES11新特性

## 20-1、私有属性

```js
class Person {
     name;
     // 私有属性
     #weight;

     constructor(name, weight) {
         this.name = name
         this.#weight = weight
     }

	say() {
    	console.log('悄悄说：', this.#weight)
    }
}

let p = new Person('Java', 88)
console.log(p)
// console.log(p.#weight)
console.log(p.say())
```

## 20-2、Promise.allSetted/all/race

```js
const p1 = new Promise((resolve, reject) => {
    console.log('p1...')
    resolve('用户数据')
})
const p2 = new Promise((resolve, reject) => {
    console.log('p2...')
    // resolve('商品数据')
    reject('出错了')
})

// allSettled 结果均在then响应
Promise.allSettled([p1, p2]).then(value => {
    console.log('allSettled-value: ', value)
}, reason => {
    console.warn('allSettled-reason: ', reason)
})

// all 如果出错，则响应catch
Promise.all([p1, p2]).then(value => {
    console.log('all-value: ', value)
}, reason => {
    console.warn('all-reason: ', reason)
})

// race 是在then响应还是catch响应，由第一个
Promise.race([p1, p2]).then(value => {
    console.log('race-value: ', value)
}, reason => {
    console.warn('race-reason: ', reason)
})
```

## 20-3、正则matchAll

```js
let str = `
<ul>
    <li>
        <a>《Java》</a>
        <p>￥145.32</p>
    </li>
    <li>
        <a>Vue</a>
        <p>￥133.23</p>
    </li>
</ul>
`
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/sg
const result = str.matchAll(reg)
// for (const v of result) {
//     console.log(v)
// }
console.log([...result])
```

## 20-4、可选链操作符

```js
// 可选链操作符：?.
function send(config) {
    console.log(config && config.person && config.person.name)
    console.log(config?.person?.name)
                console.log(config?.person1?.name)
}
send({
    person: {
        name: 'js'
    },
    user: {
        age: 18
    }
})
```

## 20-5、动态import

```js
// button.js
export function submit() {
    console.log('submit...')
}
```

```js
// app.js
document.getElementById('submit').onclick = function() {
    import('./button.js').then(module => {
        console.log(module)
        module.submit()
    })
}
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="submit">提交</button>
    <script src="./js/app.js" type="module"></script>
</body>
</html>
```

## 20-6、BigInt类型

```js
// bigint
let n = 50000n
console.log(n, typeof n)

// 函数转换
let num = 123
console.log(BigInt(num))

// 大数值运算
let max = Number.MAX_SAFE_INTEGER
console.log(max)
console.log(max + 2)
console.log(BigInt(max) + BigInt(2))

```

## 20-7、全局对象globalThis

```js
console.log(globalThis) // Window
```
