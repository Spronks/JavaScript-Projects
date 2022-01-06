const mealsDiv = document.getElementById('meals');

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'

fetch(URL)
.then(response => response.json())
.then(data => {
    const mealsArr = data.meals
    for (let mealObj of mealsArr) {
        // const meal = document.createElement('div')
        // const mealTitle = document.createElement('p')
        // mealTitle.innerHTML = mealObj.strMeal
        // meal.appendChild(mealTitle)
        // mealsDiv.appendChild(meal)
        const meal = document.createElement('div')
        meal.classList.add('meal')
        meal.innerHTML = `<p>${mealObj.strMeal}</p><img src=${mealObj.strMealThumb}><p>${mealObj.idMeal}</p>`
        mealsDiv.appendChild(meal)
    }
    
    
})