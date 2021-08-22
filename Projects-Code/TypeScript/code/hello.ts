console.log('hello typescript')

function fn(a, b) {

}

// noImplicitThis
function fn2() {
    console.log(this)
}

function fn3(this: Window) {
    console.log(this)
}

let box = document.getElementById("box")
box.addEventListener('click', function () {

})

box?.addEventListener('click', function () {

})