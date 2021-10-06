import calcTotalPrice from './calcPrice';
function newSelect(selector, parentOfSelectBlock = 0){
    
    let parentSelect;
    if (parentOfSelectBlock != 0){
        parentSelect = parentOfSelectBlock.querySelector(selector);
    } else {
        parentSelect = document.querySelector(selector);
    }

    const selectBtn = parentSelect.querySelector('.new-select__btn');
    const selectBody = parentSelect.querySelector('.new-select__list');
    const selectItems = selectBody.querySelectorAll('.new-select__list-item');
    const selectInput = parentSelect.querySelector('.new-select__input-hidden');//для отправки данных

    const activeClass = 'new-select__list_visible';

    const selectHide = function(e) {
        console.log(`клик от ${selector}`);
        if (e.target !== selectBtn){
            selectBody.classList.remove(activeClass);
            document.removeEventListener('click', selectHide, false); // после клика удаляем обработчик
        }
    };   

    //открывается select по клике на кнопку
    selectBtn.addEventListener('click', (e) => {
        //если в кнопке не просто текст
        if (selectBtn.querySelector('.header__account')){
            e.stopPropagation();
        }
        selectBody.classList.toggle(activeClass);

        //клик вне дропдауна
        document.addEventListener('click', selectHide, false);
    });

    //выбирается пункт в dropdown, его название переносится в кнопку, select закрывается
    selectItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation(); // не дает передать клик вверх по dom (document click не сработает)

            if (!selectBtn.hasAttribute('data-cannot-change-header')){
                selectBtn.textContent = this.textContent;
                //this ссылается на тот элемент, на который кликнули
            }

            selectInput.value = this.dataset.value;//dataset - список атрибутов
            selectBody.classList.remove(activeClass);  
            
            document.removeEventListener('click', selectHide, false);

            if (parentSelect.closest('.selected-product')){
                calcTotalPrice(parentSelect.closest('.selected-product'));
            }
        });
    });


    //можно сделать закрытие по клавишам esc и tab с помощью события keydown
}
export default newSelect;