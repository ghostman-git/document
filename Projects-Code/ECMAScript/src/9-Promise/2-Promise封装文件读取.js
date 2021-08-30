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