function deleteToppingCard (wrapperSelector){
    const wrapper = document.querySelector(wrapperSelector);

    wrapper.addEventListener('click', (e) => {
        //удаление карточки
        if(e.target.getAttribute('data-button') === 'delete'){
            const thisCard = e.target.closest('.creature-cake-card');
            wrapper.querySelectorAll('.creature-cake-card').forEach((card) => {
                if (thisCard.getAttribute('data-cakecard-num') < card.getAttribute('data-cakecard-num')){
                    card.setAttribute('data-cakecard-num', card.getAttribute('data-cakecard-num') - 1);
                    card.querySelectorAll('input').forEach((input) => {
                        const cardNum = input.name.slice(0, 1);
                        input.name = input.name.replace(cardNum, cardNum - 1);
                    })
                }
            });
            thisCard.remove();
        }

        //очистка инпутов
        if(e.target.getAttribute('data-button') === 'clear'){
            const thisCard = e.target.closest('.creature-cake-card');
            thisCard.querySelectorAll('input').forEach((input) => {
                input.value = '';
            });
            thisCard.querySelector('.upload-photo__img').src = '';
            thisCard.querySelector('.upload-photo__img-wrapper').style.display = 'none';
            thisCard.querySelector('.upload-photo__icon').style.display = 'block';
        }
    });

}
export default deleteToppingCard;