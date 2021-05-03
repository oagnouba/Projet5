function GetBasket() {
    let basketFromStorage = localStorage.getItem("basket");
    if (basketFromStorage === null) {
        return [];
    } else {
        return JSON.parse(basketFromStorage);
    }
}

function SaveBasket(basketToSave) {
    let basketAsString = JSON.stringify(basketToSave);
    localStorage.setItem("basket", basketAsString);
}
