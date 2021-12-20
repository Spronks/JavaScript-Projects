function increment() {
    let counter = Number(document.getElementById('counter').innerHTML)
    document.getElementById('counter').innerHTML = counter + 1
}
function decrement() {
    let counter = Number(document.getElementById('counter').innerHTML)
    document.getElementById('counter').innerHTML = counter - 1
}

function reset() {
    document.getElementById('counter').innerHTML = 0
}