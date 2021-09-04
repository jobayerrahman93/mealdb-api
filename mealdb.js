const searchFood = () => {

    const search = document.getElementById('foodInput');
    const searchValue = search.value;
    if (searchValue == '') {

    }
    else {
        // console.log(searchValue);

        search.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displayFood(data.meals));



        document.getElementById('spins').style.display = 'block';

    }


}

const displayFood = (meal) => {

    // console.log('this',meal);
    if (meal === null) {
        alert('not found');
    }
    else {
        const foodSection = document.getElementById('food-section');
        foodSection.textContent = '';

        meal.forEach(element => {
            //   console.log(element)
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div onclick="loadDetail(${element.idMeal})" class="card">
                <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.strMeal}</h5>
                  <p class="card-text">${element.strInstructions.slice(0, 200)}.</p>
                </div>
              </div>
        `;
            foodSection.appendChild(div);
        });
    }

    document.getElementById('spins').style.display = 'none';

}


const loadDetail = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data.meals[0]))
}


const displayDetail = (detail) => {

    console.log(detail);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
   <img src="${detail.strMealThumb}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${detail.strMeal}</h5>
     <p class="card-text">${detail.strInstructions.slice(0, 200)}.</p>
     <a href="detail.strYoutube" class="btn btn-primary">Go somewhere</a>
   </div>
   `;
    mealDetails.appendChild(div);


}