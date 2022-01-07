const persons = [];
const tbody = document.getElementById('tbody')

function addUser() {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    const info = document.createElement('tr')
    const name = `${data.results[0].name.first} ${data.results[0].name.last}`
    const wealth = Math.floor(Math.random() * 10000000)
    info.innerHTML = `<td class='col-1'>${name}</td>
    <td class='col-2'>${wealth}€</td>`
    
    tbody.appendChild(info)
    persons.push({name, wealth})
  })
}

function doubleMoney() {
  tbody.innerHTML = ''
  const doubleWealth = persons.map(elem => {
    const info = document.createElement('tr')
    elem.wealth = elem.wealth * 2
    info.innerHTML = `<td class='col-1'>${elem.name}</td>
    <td class='col-2'>${elem.wealth}€</td>`
    
    tbody.appendChild(info)
  })
}

function showMillionaires() {
  tbody.innerHTML = ''
  const millionaires = persons.filter(elem => elem.wealth >= 1000000)
  millionaires.map(elem => {
    const info = document.createElement('tr')
    info.innerHTML = `<td class='col-1'>${elem.name}</td>
    <td class='col-2'>${elem.wealth}€</td>`
    
    tbody.appendChild(info)
  })
}

function sortByRichest() {
  const personsCopy = [...persons]
  personsCopy.sort((a,b) => b.wealth - a.wealth)
  tbody.innerHTML = ''
  personsCopy.map(elem => {
    const info = document.createElement('tr')
    info.innerHTML = `<td class='col-1'>${elem.name}</td>
    <td class='col-2'>${elem.wealth}€</td>`
    
    tbody.appendChild(info)
  })
}

function sumWealth() {
  const totalWealth = persons.reduce((acc, cur) => acc + cur.wealth, 0)
  const total = document.createElement('tr')
  total.classList.add('total')
  total.innerHTML = `<td class='col-1'>Total Wealth: </td><td class='col-2'>${totalWealth}€</td>`
  tbody.appendChild(total)
}

// Event Listeners
const btnAddUser = document.getElementById('btn-addUser')
btnAddUser.addEventListener('click', addUser)

const btnDoubleMoney = document.getElementById('btn-doubleMoney')
btnDoubleMoney.addEventListener('click', doubleMoney)

const btnShowMillionaires = document.getElementById('btn-showMillionaires')
btnShowMillionaires.addEventListener('click', showMillionaires)

const btnSortByWealth = document.getElementById('btn-sortByWealth')
btnSortByWealth.addEventListener('click', sortByRichest)

const btnSumWealth = document.getElementById('btn-sumWealth')
btnSumWealth.addEventListener('click', sumWealth)