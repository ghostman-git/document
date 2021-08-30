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