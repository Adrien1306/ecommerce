//On cible le container où seront affichés tous les items
const itemsContainer = document.querySelector("#items")
//Initialisation de la page avec tous les articles
displayAll()
//On cible le container où seront affichés les éléments du panier
const basketContainer = document.querySelector("#basket")
//On cible les balises du total du panier
const totalBasket = document.querySelector("#totalBasket")
//Tableau avec le contenu du panier
let basketItemsArray = []
//On cible les liens 
const jeunesseButton = document.querySelector("#jeunesse")
const bdButton = document.querySelector("#bd")
const romanButton = document.querySelector("#roman")
const allButton = document.querySelector("#allItems")

//Affectation de l'evenement pour chaque lien
jeunesseButton.addEventListener("click", displayCategory)
bdButton.addEventListener("click", displayCategory)
romanButton.addEventListener("click", displayCategory)
allButton.addEventListener("click", displayAll)



// FUNCTIONS
//Gestion du panier
function addBasket() {
    const addBasketButtons = document.querySelectorAll(".addBasketButtons")
    addBasketButtons.forEach(element => {
        element.addEventListener("click", putItemInBasketItemsArray)
    })
}

function putItemInBasketItemsArray() {
    basketItemsArray.push(livres[this.id])
    console.log(basketItemsArray);
    displayInBasketContainer()
}

function displayInBasketContainer() {
    basketContainer.innerHTML = ""
    basketItemsArray.forEach(element => {
        basketContainer.innerHTML += `
            <tr>
                <td>${element.name}</td>
                <td>${1}</td>
                <td>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(element.price)}</td>
            </tr>
        
        `
    });
    calculTotal()
}

function calculTotal() {
    console.log(basketItemsArray);
    let total = 0
    basketItemsArray.forEach(element => {
        total += element.price
        totalBasket.innerHTML = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(total)
    });
}


//Affiche les livres par catégorie
function displayCategory() {
    itemsContainer.innerHTML = ""
    livres.forEach(element => {
        if (element.category == this.id) {
            itemsContainer.innerHTML += `
            <article class="col-md-6 my-2">
                <div class="card card-body">
                    <h2>${element.name}</h2>
                    <img src="${element.image}" alt="">
                    <p> Catégorie : ${element.category}</p>
                    <p>${element.description}</p>
                    <p> ID : ${element.id}</p>
                    <p> Prix : ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(element.price)}</p>
                    <p> Quantité : ${element.quantity}</p>
                    <a id="${element.id}" href="#" class="btn btn-primary addBasketButtons">Mettre dans le panier</a>
                </div>
            </article>
            `
        }
    });
    addBasket()
}

//Affiche tous les livres
function displayAll() {
    itemsContainer.innerHTML = ""
    livres.forEach(element => {
        itemsContainer.innerHTML += `
            <article class="col-md-6 my-2">
                <div class="card card-body">
                    <h2>${element.name}</h2>
                    <img src="${element.image}" alt="">
                    <p> Catégorie : ${element.category}</p>
                    <p>${element.description}</p>
                    <p> ID : ${element.id}</p>
                    <p> Prix : ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(element.price)}</p>
                    <p> Quantité : ${element.quantity}</p>
                    <a id="${element.id}" href="#" class="btn btn-primary addBasketButtons">Mettre dans le panier</a>
                </div>
            </article>
            `
    });
    addBasket()
}

