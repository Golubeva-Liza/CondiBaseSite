function radio(){
    // const inputsRadio = document.querySelectorAll('[type="radio"]');
    // const inputsBoxs = document.querySelectorAll('[data-box="radio"]');

    function changeRadio(parentSelector){
        const inputsRadio = parentSelector.querySelectorAll('input');
        const inputsBoxs = parentSelector.querySelectorAll('span');
        
        inputsRadio.forEach((input, i) => {
            input.addEventListener('click', () => {
                if (input.getAttribute('checked')){
                    inputsBoxs[i].classList.remove('check-form__box_checked');
                    input.removeAttribute('checked');
                    
                }
                else{
                    inputsRadio.forEach((input, i) => {
                        inputsBoxs[i].classList.remove('check-form__box_checked');
                        input.removeAttribute('checked');
                    });
                    inputsBoxs[i].classList.add('check-form__box_checked');
                    input.setAttribute('checked', true);
                }
            });
        });
    }

    changeRadio(document.querySelector('.sort-form__check-rating'));
    changeRadio(document.querySelector('.sort-form__check-level'));
}
export default radio;