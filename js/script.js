//Définition du container de tous les articles
const allItemsContainer = document.querySelector("#allItems")
//Définition du container de chaque article


//On affiche tous les articles de "livres" dans itemContainer
livres.forEach(element => {
   
    allItemsContainer.innerHTML += `
    <article class="col">
        <div class="card card-body">
            <h2>${element.name}</h2>
            <img src="${element.image}" alt="">
            <p> Catégorie : ${element.category}</p>
            <p>${element.description}</p>
            <p> ID : ${element.id}</p>
            <p> Prix : ${element.price}</p>
            <p> Quantité : ${element.quantity}</p>
            <a href="#" class="btn btn-primary">Mettre dans le panier</a>
        </div>
       
    </article>
    `
});




function displayAllBooks() {

}