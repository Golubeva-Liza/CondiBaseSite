function hints() {
    const cardParent = document.getElementById('selectedProductWrapper');

    cardParent.addEventListener('click', (e) =>{
        if(!cardParent.innerHTML){
            return;
        }
        
        if (e.target.classList != 'selected-product__question-icon'){
            return;
        }

        if (e.target.hasAttribute('data-hint-1')){
            const firstHint = e.target.closest('.selected-product').querySelector('.hint');//первая подсказка
            firstHint.classList.toggle('hint_active');

            document.addEventListener('click', (event) =>{
                if (event.target != firstHint && !event.target.hasAttribute('data-hint-1')){
                    firstHint.classList.remove('hint_active');
                    return;
                }
            });            
        }

        if (e.target.hasAttribute('data-hint-2')){
            const secondHint = e.target.closest('.selected-product').querySelector('.hint-about-total');//первая подсказка
            secondHint.classList.toggle('hint_active');

            document.addEventListener('click', (event) =>{
                if (event.target != secondHint && !event.target.hasAttribute('data-hint-2')){
                    secondHint.classList.remove('hint_active');
                    return;
                }
            });            
        }
        // загадка от Жака Фреско: как выключить обработчик события после клика? На размышление дается ночь
        
    });

}
export default hints;