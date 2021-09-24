function hints() {
    const cardParent = document.getElementById('selectedProductWrapper');
    let clickCounterFirst = 0;
    let clickCounterSecond = 0;

    cardParent.addEventListener('click', (e) =>{
        if(!cardParent.innerHTML){
            return;
        }
        
        if (e.target.classList != 'selected-product__question-icon'){
            return;
        }

        if (e.target.hasAttribute('data-hint-1')){
            clickCounterFirst++;
            const firstHint = e.target.closest('.selected-product').querySelector('.hint');//первая подсказка
            firstHint.classList.toggle('hint_active');
            
            const removeHint = function(event) {//оказывается он автоматом передается, можно не пихать как аргумент в обработчике
                // console.log('клик сработал для первой подсказки');
                if (event.target != firstHint && !event.target.hasAttribute('data-hint-1')){
                    // console.log('Выполнилось условие для первой подсказки');
                    firstHint.classList.remove('hint_active');
                    clickCounterFirst = 0;
                    document.removeEventListener('click', removeHint, false); // после клика удаляем его
                }
            };   

            //без этой проверки есть проблема, что если для закрытия подсказки нажать не куда-то в сторону, а на сам значок вопроса (event.target.hasAttribute('data-hint-1')),
            //то условие в функции обработчика не выполнится и обработчик не удалится. поэтому при каждом клике на эту кнопку будет создаваться новый обработчик
            if (clickCounterFirst === 1){
                document.addEventListener('click', removeHint, false);
            }
        }


        
        if (e.target.hasAttribute('data-hint-2')){
            clickCounterSecond++;

            const productCard = e.target.closest('.selected-product');
            const secondHint = productCard.querySelector('.hint-about-total');//вторая подсказка

            secondHint.innerHTML = ` 
                Вы выбрали:
                - <span>${productCard.querySelector('.selected-product__count span').textContent}</span> торта с начинкой
                <span>${productCard.querySelector('#toppingName').textContent}</span> весом по <span>${productCard.querySelector('.select-block__header span').textContent}</span>
                с ценой бисквита <span>${productCard.querySelector('.selected-product__price-per-one span').textContent}/кг</span> к <span>14 ноября 2020г.</span>
            `;
            // исправить тут дату потом
            secondHint.classList.toggle('hint_active');
            
            const removeHintSecond = function(event) {
                // console.log('клик сработал для второй подсказки');
                if (event.target != secondHint && !event.target.hasAttribute('data-hint-2')){
                    // console.log('Выполнилось условие для второй подсказки');
                    secondHint.classList.remove('hint_active');
                    clickCounterSecond = 0;
                    document.removeEventListener('click', removeHintSecond, false); // после клика удаляем его
                }
            };   

            if (clickCounterSecond === 1){
                document.addEventListener('click', removeHintSecond, false);
            }
        }
    });
}
export default hints;