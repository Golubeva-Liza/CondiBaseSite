let pricePerKilogram = 1;

function calcTotalPrice(cardSelector, pricePerKilo = 0){
    const weight = cardSelector.querySelector('.new-select__btn').textContent;
    const weightNum = +weight.match(/\d/g).join('.');//match выведет массив из цифр, мы объединили его в строку через точку с join
    const pricePerOne = cardSelector.querySelector('.selected-product__price-per-one span');
    const amount = cardSelector.querySelector('.selected-product__count span').textContent;
    const totalPrice = cardSelector.querySelector('.selected-product__price-inner span');

    if (pricePerKilo != 0){
        pricePerKilogram = pricePerKilo;
    }

    const pricePerOneCake = Math.round(weightNum * pricePerKilogram);
    totalPrice.innerHTML = `${Math.round(amount * pricePerOneCake)} ₽`;
    pricePerOne.innerHTML = `${pricePerOneCake} ₽`;

}
export default calcTotalPrice;
