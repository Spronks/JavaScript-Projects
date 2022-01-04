// load the breedlist into the select tag

const select = document.getElementById('breeds')
const ALL_BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

fetch(ALL_BREEDS_URL)
    .then(response => response.json())
    .then(data => {
        const breedsObj = data.message
        const breedsArr = Object.keys(breedsObj)
        //console.log(breedsArr)
        for (let i = 0; i < breedsArr.length; i++) {
            const option = document.createElement('option')
            option.src = breedsArr[i]
            option.value = breedsArr[i]
            option.innerText = breedsArr[i]
            select.appendChild(option)
        }
    })

// load a random dog photo when you visit home page
const RANDOM_DOG_IMG_URL = 'https://dog.ceo/api/breeds/image/random'
const img = document.querySelector('.dog-img')
const emoji = document.querySelector('.emoji')

fetch(RANDOM_DOG_IMG_URL)
    .then(response => response.json())
    .then(data => {
        img.src = data.message
    })
    .then(img.addEventListener('load', () => emoji.classList.add('hide-emoji'))) // poodle emoji spinner hiding when photo loads

// load a random dog img after a breed is selected 
const section = document.querySelector('.main-page')

select.addEventListener('change', function(e) {
    img.className = 'hide-dog';
    emoji.classList.remove('hide-emoji')
    fetch(`https://dog.ceo/api/breed/${e.target.value}/images/random`)
        .then(response => response.json()) 
        .then(data => {
            url = data.message
            img.src = url
        })  
        .then(img.addEventListener('load', () => {
            img.className = 'dog-img'
            emoji.classList.add('hide-emoji')}))
})




     
