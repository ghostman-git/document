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