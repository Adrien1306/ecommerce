//On cible container où seront affichés tous les items
const itemsContainer = document.querySelector("#items")
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
                    <p> Prix : ${element.price}</p>
                    <p> Quantité : ${element.quantity}</p>
                    <a href="#" class="btn btn-primary">Mettre dans le panier</a>
                </div>
            </article>
            `
        }
    });
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
                    <p> Prix : ${element.price}</p>
                    <p> Quantité : ${element.quantity}</p>
                    <a href="#" class="btn btn-primary">Mettre dans le panier</a>
                </div>
            </article>
            `
    });
}

