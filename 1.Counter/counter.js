let counter = document.getElementById('counter')
counter.innerHTML = 5

let btnInc = document.getElementById('incr')
btnInc.addEventListener('click', () => counter.innerHTML = Number(counter.innerHTML) + 1)

let btnDec = document.getElementById('decr')
btnDec.addEventListener('click', () => counter.innerHTML = Number(counter.innerHTML) - 1)

let btnRes = document.getElementById('reset')
btnRes.addEventListener('click', () => counter.innerHTML = 0)
