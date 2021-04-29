function GetBasket() {
    let basketFromStorage = localstorage.getitem("basket");
    if (basketFromStorage === null) {
        return [];
    } else {
        return JSON.parse(basketFromStorage);
    }
}

function SaveBasket(basketToSave) {
    let basketAsString = JSON.stringify(basketToSave);
    localstorage.setItem("basket", basketAsString);
}
