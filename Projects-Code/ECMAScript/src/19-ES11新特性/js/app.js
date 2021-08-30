
document.getElementById('submit').onclick = function() {
    import('./button.js').then(module => {
        console.log(module)
        module.submit()
    })
}