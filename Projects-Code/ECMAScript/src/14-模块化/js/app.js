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