function validationForm (submitBtn){
    const form = document.querySelector('form');
    const acceptСonditions = form.querySelector('.send-form');
    const acceptСonditionsBtn = acceptСonditions.querySelector('button');
    let checkboxTechniques = [];

    //валидация кнопки отправки данных формы: если не стоит галочка согласия, то кнопка disabled
    acceptСonditions.querySelector('.check-form').addEventListener('click', (e) => {
        if (e.target.type){
            if (acceptСonditions.querySelector('input').checked){
                acceptСonditionsBtn.classList.remove('button_disabled');
                acceptСonditionsBtn.disabled = false;
                return;
            }
            acceptСonditionsBtn.classList.add('button_disabled');
            acceptСonditionsBtn.disabled = true;
        }
    })


    submitBtn.addEventListener('click', (e) => {
        const inputs = form.querySelectorAll('[name]');
        clearEmptyInputs();
        for (let item of inputs){
            if (!item.value){
                alert('Пожалуйста, заполните все данные!');
                e.preventDefault();
                validate();
                return;
            }
        }
        document.querySelectorAll('.upload-photo__input').forEach(input => {
            console.log(input.value);
        })
        
    })

    //убираем все классы, отвечающие за пустой инпут
    function clearEmptyInputs() {
        form.querySelectorAll('[name]').forEach((input) => {
            if (input.classList.contains('main-input_empty')){
                input.classList.remove('main-input_empty');
                return;
            }
            if (input.closest('.upload-photo')){
                input.closest('.upload-photo').classList.remove("upload-photo_empty");
            }
            form.querySelector('.create-profile__techniques').classList.remove('techniques_empty');
        })
    }

    // не срабатывает условие !input.getAttribute('value') - правильно !input.value

    function validate(){
        
        form.querySelectorAll('[name]').forEach((input) => {
    
            //для интупов типа текста, номера и textarea
            if ((input.getAttribute('type') === "text" || input.getAttribute('type') === "number" || input.getAttribute('name') === "textarea-about") && !input.value){
                input.classList.add('main-input_empty');
            }
    
            //для интупов типа file
            if ((input.getAttribute('type') === "file") && !input.value){
                input.closest('.upload-photo').classList.add("upload-photo_empty");
            }    
        })
        
        //валидация для checkbox в разделе "техники"
        form.querySelectorAll('[name^="technique-"]').forEach((input) => {
            checkboxTechniques.push(input);
        })
        if (checkboxTechniques.length){
            const result = checkboxTechniques.findIndex((elem) => elem.checked);
            if (result === -1){
                form.querySelector('.create-profile__techniques').classList.add('techniques_empty');
            }
        }


        //валидация для checkbox в разделе "способы доставки"
        const checkBoxDelivery = form.querySelector('input[name="delivery"]');
        const checkBoxPickup = form.querySelector('input[name="pickup"]');
        if (!checkBoxDelivery.checked && !checkBoxPickup.checked){
            checkBoxPickup.nextElementSibling.classList.add('check-form__box_empty');
            checkBoxDelivery.nextElementSibling.classList.add('check-form__box_empty');

            const emptyCheckBoxListener = (e) => {
                if (e.target.classList.contains('check-form__label') || e.target.classList.contains('check-form__input')){
                    checkBoxPickup.nextElementSibling.classList.remove('check-form__box_empty');
                    checkBoxDelivery.nextElementSibling.classList.remove('check-form__box_empty');
                    form.querySelector('.delivery__check-form').removeEventListener('click', emptyCheckBoxListener);
                }
            }
            form.querySelector('.delivery__check-form').addEventListener('click', emptyCheckBoxListener);
        }
        
    }
    
}
export default validationForm;