let screen = document.getElementById('textarea') 

function display(value) {
    screen.value += value
}

function calculate() {
    // console.log(typeof screen.value)
    screen.value = eval(screen.value)
}

function clr() {
    screen.value = ''
}