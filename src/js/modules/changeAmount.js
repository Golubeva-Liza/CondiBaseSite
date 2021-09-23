import calcTotalPrice from './calcPrice';
function changeAmount(cardSelector){
    const arrows = cardSelector.querySelectorAll(".selected-product__count button");
    const currentAmount = cardSelector.querySelector('.selected-product__count span');
    const disableClass = 'selected-product__count-btn-dis';

    if (currentAmount.innerHTML == 1){
        arrows[0].classList.add(disableClass);
    }

    arrows[0].addEventListener('click', () => {
        if (currentAmount.innerHTML == 1){
            return;
        }
        currentAmount.innerHTML = +currentAmount.innerHTML - 1;

        if (currentAmount.innerHTML == 1){
            arrows[0].classList.add(disableClass);
        }
        if (currentAmount.innerHTML == 9){
            arrows[1].classList.remove(disableClass);
        }
        
        calcTotalPrice(cardSelector);
    });
    arrows[1].addEventListener('click', () => {
        if (currentAmount.innerHTML == 10){
            return;
        }
        currentAmount.innerHTML = +currentAmount.innerHTML + 1;
        if (currentAmount.innerHTML == 10){
            arrows[1].classList.add(disableClass);
        }
        if (currentAmount.innerHTML == 2){
            arrows[0].classList.remove(disableClass);
        }
        calcTotalPrice(cardSelector);
    });
    
}
export default changeAmount; 