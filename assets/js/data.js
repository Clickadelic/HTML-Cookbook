import data from '../../data/recipes.json' assert { type: 'json' };

function renderData(){
    let allCards = '';
    const gridContainer = document.getElementById('the-recipe-grid');
    data.forEach( (recipe) => {
        let recipeCard = '<div class="grid-item">';
        recipeCard += '<div class="card-overlay"><span>'+recipe.rating+'</span></div>';
        recipeCard += '<img src="./static/images/small/'+recipe.imagename+'" class="img-recipe" alt="'+recipe.title+'" />';
        recipeCard += '<h3 class="oswald">'+recipe.title+'</h3>';
        recipeCard += '</div>';
        allCards += recipeCard;
    });
    gridContainer.innerHTML = allCards;
}

window.onload = () => {
    renderData();
}