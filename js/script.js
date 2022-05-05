//Définition du container de tous les articles
const allItemsContainer = document.querySelector("#allItems")
//Définition du container de chaque article


//On affiche tous les articles de "livres" dans itemContainer
livres.forEach(element => {
    const itemContainer = document.createElement("article")
    allItemsContainer.appendChild(itemContainer)
    itemContainer.innerHTML += `
    <h2>${element.name}</h2>
    <img src="${element.image}" alt="">
    <p> Catégorie : ${element.category}</p>
    <p>${element.description}</p>
    <p> ID : ${element.id}</p>
    <p> Prix : ${element.price}</p>
    <p> Quantité : ${element.quantity}</p>
    `
});


function displayAllBooks() {

}