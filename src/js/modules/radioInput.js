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

export default changeRadio;