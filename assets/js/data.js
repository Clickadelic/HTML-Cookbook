import data from '../../data/recipes.json' assert { type: 'json' };

function renderData(){
    let allCards = '';
    const gridContainer = document.getElementById('the-recipe-grid');
    data.forEach( (recipe) => {
        let recipeCard = '<div class="grid-item">';
        recipeCard += '<img src="./static/images/small/'+recipe.imagename+'" class="img-recipe" alt="'+recipe.title+'" />';
        recipeCard += '<h3 class="oswald">'+recipe.title+'</h3>';
        recipeCard += '<div class="item-body">';
        recipeCard += '<div class="row mb-2">';
            recipeCard += '<div class="col-6">';
                recipeCard += '<span class="prep-time">'+recipe.preparationtime+' min</span>';
            recipeCard += '</div>';
            recipeCard += '<div class="col-6">';
            recipeCard += '<span class="prep-time">'+recipe.rating+' Sterne</span>';
            recipeCard += '</div>';
        recipeCard += '</div>';
        // recipeCard += '<span class="item-preparation-time">'+recipe.preparationtime+' </span>';
        recipeCard += '<p>'+recipe.description+'</p>';
        recipeCard += '</div>';
        recipeCard += '</div>';
        allCards += recipeCard;
    });
    gridContainer.innerHTML = allCards;
}

window.onload = () => {
    renderData();
}