const URL = 'https://api.covid19api.com/summary'

fetch(URL)
    .then(response => response.json())
    // .then(data => console.log(data, data.Countries))
    .then(data => {
        document.getElementById('date').innerHTML = data.Date.slice(0,10)
        const countries = data.Countries
        const table = document.getElementById('newRows')
        const headerRow = document.createElement('tr')
        table.appendChild(headerRow)
        const countryTh = document.createElement('th')
        countryTh.innerHTML = 'Country'
        headerRow.appendChild(countryTh)
        const confirmedTh = document.createElement('th')
        confirmedTh.innerHTML = 'Confirmed'
        headerRow.appendChild(confirmedTh)
        const activeTh = document.createElement('th')
        activeTh.innerHTML = 'Active'
        headerRow.appendChild(activeTh)
        const recoveredTh = document.createElement('th')
        recoveredTh.innerHTML = "Recovered"
        headerRow.appendChild(recoveredTh)
        const deathsTh = document.createElement('th')
        deathsTh.innerHTML = 'Deaths'
        headerRow.appendChild(deathsTh)
        for (let country of countries) {
            const newRow = document.createElement('tr')
            table.appendChild(newRow)
            const countryTd = document.createElement('td')
            countryTd.innerHTML = country.Country
            newRow.appendChild(countryTd)
            const confirmedTd = document.createElement('td')
            confirmedTd.innerHTML = country.TotalConfirmed
            newRow.appendChild(confirmedTd)
            const activeTd = document.createElement('td')
            activeTd.innerHTML = country.NewRecovered
            newRow.appendChild(activeTd)
            const recoveredTd = document.createElement('td')
            recoveredTd.innerHTML = country.TotalRecovered
            newRow.appendChild(recoveredTd)
            const deathsTd = document.createElement('td')
            deathsTd.innerHTML = country.TotalDeaths
            newRow.appendChild(deathsTd)

        }
        document.getElementById('countries').innerHTML = 'peort'
    })


    