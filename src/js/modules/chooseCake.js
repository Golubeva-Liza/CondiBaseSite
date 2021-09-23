import SelectedProductCard from './selectedProductCard';
import uploadFile from './uploadFile';
import custSelect from './select';
import calcTotalPrice from './calcPrice';
import changeAmount from './changeAmount';

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
                    });
                }

                new SelectedProductCard(data[id].taste, data[id].minWeight, data[id].weights, data[id].price).writeHtml('selectedProductWrapper', offset, zIndex);

                const newCard = document.querySelector('#selectedProductWrapper').lastChild;
                //применяем функции к карточке
                custSelect('.selected-product__select-inner', newCard);
                changeAmount(newCard);
                calcTotalPrice(newCard, data[id].price);


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


}
export default chooseCake;