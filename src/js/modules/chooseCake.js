import SelectedProductCard from './selectedProductCard';
import uploadFile from './uploadFile';
import newSelect from './newSelect';
import calcTotalPrice from './calcPrice';
import changeAmount from './changeAmount';
import changeDate from './changeDate';

function chooseCake(data){
    const btns = document.querySelectorAll('.topping-card button');
    // const productCards = document.querySelectorAll('.selected-product');//нельзя использовать везде переменную, тк контент меняется
    let offset = 0;
    let zIndex = 1;
    
    btns.forEach((btn, id) => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('button_v2_active')){
                btn.innerHTML = "Выбрать";
                btn.classList.remove('button_v2_active');
            
                const toppingName = btn.closest('.topping-card').querySelector('.topping-card__top span').innerHTML;
                const currentCards = document.querySelectorAll('.selected-product');//все карточки до удаления
                currentCards.forEach((item, index) => {
                    const itemTopping = item.querySelector('#toppingName').innerHTML;
                    if (toppingName === itemTopping){//нашли элемент, привязанный к кнопке (по названию начинки). но можно было через присвоение атрибута
                        item.remove();
                        offset-=50;
                        zIndex--;

                        //для оставшихся карточек
                        document.querySelectorAll('.selected-product').forEach((card, i) => {
                            if (i + 1 === document.querySelectorAll('.selected-product').length){//у последнего элемента убираем класс "пассивности"
                                card.classList.remove('selected-product_disabled');
                                card.querySelector('.selected-product__preview').style.display = "flex";
                                card.querySelector('[data-openproductcard]').innerHTML = '';
                            }
                            const numberOfTop = card.style.top.match(/\d+/)[0];
                            if ((numberOfTop != 0) && (index + 1 != currentCards.length)){//если карточка не первая или если удаленный элемент не был последним
                                card.style.top = `${numberOfTop - 50}px`;
                                card.style.zIndex = zIndex - 1;
                            }
                        });
                    }
                });
            } else{
                //меняем стиль кнопки
                btn.innerHTML = "Выбрано";
                btn.classList.add('button_v2_active');

                if (document.querySelectorAll('.selected-product')){//если есть уже карточки
                    document.querySelectorAll('.selected-product').forEach(productBlock => {
                        productBlock.classList.add('selected-product_disabled');
                        productBlock.querySelector('.selected-product__preview').style.display = "none";
                        productBlock.querySelector('[data-openproductcard]').innerHTML = `
                            <object class="selected-product__reduce" type="image/svg+xml" data='icons/openProduct.svg'></object>
                        `;
                    });
                }

                new SelectedProductCard(data[id].taste, data[id].minWeight, data[id].weights, data[id].price).writeHtml('selectedProductWrapper', offset, zIndex);

                const newCard = document.querySelector('#selectedProductWrapper').lastChild;

                //применяем функции к карточке
                newSelect('.selected-product__select-inner', newCard);
                changeAmount(newCard);
                calcTotalPrice(newCard, data[id].price);
                changeDate(newCard);


                offset+=50;//прибавляем отступ для вывода следующей карточки
                zIndex++;

                const selectors = document.querySelectorAll('.selected-product__upload-input');
                //вызываю функцию по загрузке файлов в новые выбранные товары, при этом проверяю, где эта функция уже применялась, и пропускаю эту карточку
                uploadFile(selectors, {
                    multi: true, //выбор нескольких файлов
                    accept: ['.png', '.jpg', '.jpeg'] //какие типы файлов поддерживаются
                });
            }
            
        });
    });

    
    const cardsParent = document.querySelector('#selectedProductWrapper');
    cardsParent.addEventListener('click', (e) => {
        //сколько было всего карточек
        const allCards = document.querySelectorAll('.selected-product');

        //если нажали на кнопку крестика
        if (e.target.hasAttribute('data-closeProductCard')){
            //номер удаленного элемента
            let indexOfDeletedCard;
            allCards.forEach((item, id) => {
                if (item == e.target.closest('.selected-product')){
                    indexOfDeletedCard = id;
                }
            });

            e.target.closest('.selected-product').remove();//удалили карточку

            //убрали класс активности с конкретной кнопки "выбрать"
            document.querySelector('#toppingsWrapper').querySelectorAll('[data-topping]').forEach((card) => {
                if (card.getAttribute('data-topping') === e.target.closest('.selected-product').getAttribute('data-selectedproduct')){
                    card.querySelector('.topping-card__footer button').classList.remove('button_v2_active');
                    card.querySelector('.topping-card__footer button').textContent = "Выбрать";
                }
            });

            offset-=50;
            zIndex--;

            //для оставшихся карточек
            document.querySelectorAll('.selected-product').forEach((card, i) => {
                if (i + 1 === document.querySelectorAll('.selected-product').length){//у последнего элемента убираем класс "пассивности"
                    card.classList.remove('selected-product_disabled');
                    card.querySelector('.selected-product__preview').style.display = "flex";
                }
                const numberOfTop = card.style.top.match(/\d+/)[0];
                // console.log(numberOfTop);
                if ((numberOfTop != 0) && (indexOfDeletedCard + 1 != allCards.length)){//если карточка не первая или если удаленный элемент не был последним
                    card.style.top = `${numberOfTop - 50}px`;
                    card.style.zIndex = zIndex - 1;
                }
            });
        }


        //если нажали на кнопку развернуть карточку
        if (e.target.hasAttribute('data-openproductcard')){

            //чтобы был в конце
            e.target.closest('.selected-product').remove();
            document.querySelector('#selectedProductWrapper').append(e.target.closest('.selected-product'));

            const lastCard = document.querySelector('#selectedProductWrapper').lastChild;

            lastCard.style.top = `${offset - 50}px`;
            lastCard.style.zIndex = zIndex - 1;
            lastCard.classList.remove('selected-product_disabled');
            lastCard.querySelector('.selected-product__preview').style.display = "flex";
            lastCard.querySelector('[data-openproductcard]').innerHTML = '';

            document.querySelectorAll('.selected-product').forEach((card, i) => {
                if (i + 1 === document.querySelectorAll('.selected-product').length){//у последнего элемента ничего не делаем
                    console.log('последний элемент');
                    return;
                }
                if (card.style.top === '0px'){//у первого элемента ничего не делаем
                    console.log('первый элемент');
                    card.classList.add('selected-product_disabled');
                    card.querySelector('.selected-product__preview').style.display = "none";
                    card.querySelector('[data-openproductcard]').innerHTML = `
                        <object class="selected-product__reduce" type="image/svg+xml" data='icons/openProduct.svg'></object>
                    `;
                    return;
                }
                card.classList.add('selected-product_disabled');
                card.querySelector('.selected-product__preview').style.display = "none";
                card.querySelector('[data-openproductcard]').innerHTML = `
                    <object class="selected-product__reduce" type="image/svg+xml" data='icons/openProduct.svg'></object>
                `;
                const numberOfTop = card.style.top.match(/\d+/)[0];
                card.style.top = `${numberOfTop - 50}px`;
                card.style.zIndex = card.style.zIndex - 1;
            });
        }
    });
    

}
export default chooseCake;