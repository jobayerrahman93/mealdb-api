const searchFood = () => {

    const search = document.getElementById('foodInput');
    const searchValue = search.value;
    if (searchValue == '') {

    }
    else {
       

        search.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displayFood(data.meals));



        document.getElementById('spins').style.display = 'block';

    }

}


// display in UI

const displayFood = (meal) => {

    
    if (meal === null) {

        const foodSection = document.getElementById('food-section');
        foodSection.textContent = '';

        document.getElementById('not-found').classList.remove('d-none');

    }
    else {
        const foodSection = document.getElementById('food-section');
        foodSection.textContent = '';
        document.getElementById('not-found').classList.add('d-none');


        meal.forEach(element => {
        
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            
            <div  onclick="loadDetail(${element.idMeal})" class="card h-100">
             <img src="${element.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.strMeal}</h5>
            <p class="card-text">${element.strInstructions.slice(0, 200)}</p>
            </div>
            <div class="card-footer d-none">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>`;
            foodSection.appendChild(div);
        });
    }

    document.getElementById('spins').style.display = 'none';

}


// load detail
const loadDetail = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data.meals[0]))
}


// display detail in UI

const displayDetail = (detail) => {

    console.log(detail);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
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


// auto loader 

const loadFood = () => {




    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`;

    fetch(url)
        .then(res => res.json())
        .then(data => loadDisplayFood(data.meals));

}


const loadDisplayFood = (meal) => {

    const foodSection = document.getElementById('food-section');

    meal.forEach(element => {
       
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            
        <div  onclick="loadDetail(${element.idMeal})" class="card h-100">
         <img src="${element.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.strMeal}</h5>
        <p class="card-text">${element.strInstructions.slice(0, 200)}</p>
        </div>
        <div class="card-footer d-none">
        <small class="text-muted">Last updated 3 mins ago</small>
        </div>
        </div>`;
        foodSection.appendChild(div);

    });
}

// call load function for auto load
loadFood();

