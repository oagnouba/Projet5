const urlParam = new URLSearchParams(window.location.search);
let productId = urlParam.get("id");
let product = {};

fetch("http://localhost:3000/api/teddies/" + productId)
    .then((response) => {
        return response.json();
    })

.then((data) => {
    console.log(data);
    product = data;

    let colors = "";

    for (const color of data.colors) {
        colors += `<option>${color}</option> `; //sélection de couleurs
    }

    let container = `
    <div class='col'>
        <div class="card">
        <img src=${data.imageUrl} class="card-img-top">
        <div class="card-body"></div>
            <h3 class="card-title" >${data.name}</h3>
            <p class="card-text">${data.price}€</p>
            <select class="color">${colors}</select>
        </div>
    </div>
        `;

    document.getElementById("product").innerHTML = container;

    console.log(container);
})

.catch(function (error) {
  window.alert('Le serveur n\'est pas disponible, essayez ultérieurement.');
});

//Ajout panier
function ajouterAuPanier() {

    let basket = GetBasket();

    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
    let indexInBasket = basket.findIndex(item => item._id === productId)

    //index ==-1 signifie non trouvé
    if (indexInBasket < 0) {
        // si non présent dans le panier
        product.quantity = 1;
        // let productLine = JSON.stringify(product);
        // localStorage.setItem(productId, productLine);
        basket.push(product);
    } // produit déja présent, modifier quantité
    else {
        // let itemPanier = localStorage.getItem(productId); //récuperation
        // let productPanier = JSON.parse(itemPanier); //conversion

        // productPanier.quantity += 1; //initialiser qté = 1

        // let productLine = JSON.stringify(productPanier);
        // localStorage.setItem(productId, productLine);
        basket[indexInBasket].quantity += 1;
    }

    SaveBasket(basket);
    window.alert("Votre article a été ajouté au panier.");

}
