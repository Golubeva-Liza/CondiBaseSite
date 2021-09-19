import SelectedProductCard from './selectedProductCard';
import uploadFile from './uploadFile';
import custSelect from './select';

function chooseCake(data){
    const btns = document.querySelectorAll('.topping-card button');
    
    btns.forEach((btn, id) => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('button_v2_active')){
                btn.innerHTML = "Выбрать";
                btn.classList.remove('button_v2_active');

                const toppingName = btn.closest('.topping-card').querySelector('.topping-card__top span').innerHTML;
                document.querySelectorAll('.selected-product').forEach((item) => {
                    const itemTopping = item.querySelector('#toppingName').innerHTML;
                    if (toppingName === itemTopping){
                        item.remove();
                    }
                });
            } else{
                //меняем стиль кнопки
                btn.innerHTML = "Выбрано";
                btn.classList.add('button_v2_active');
            
                // console.log(data[id]);
                new SelectedProductCard(data[id].taste, data[id].minWeight, data[id].weights, data[id].price).writeHtml('selectedProductWrapper');
                custSelect();

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