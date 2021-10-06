function validationForm (submitBtn){
    const form = document.querySelector('form');
    let checkboxElementsTechniques = [];

    submitBtn.addEventListener('click', (e) => {


        const inputs = form.querySelectorAll('[name]');
        for (let item of inputs){
            if (!item.value){
                alert('Пожалуйста, заполните все данные!');
                e.preventDefault();
                validate();
                return;
            }
        }
        
    })


    function clearEmptyInputs() {
        
    }

    function validate(){
        form.querySelectorAll('[name]').forEach((input) => {

            //если уже была вызвана функция, то удаляем класс
            if (input.classList.contains('main-input_empty')){
                input.classList.remove('main-input_empty');
            }
    
            //для интупов типа текста, номера и textarea
            if ((input.getAttribute('type') === "text" || input.getAttribute('type') === "number" || input.getAttribute('name') === "textarea-about") && !input.getAttribute('value')){
                // console.log(input);
                input.classList.add('main-input_empty');
            }
    
            //для интупов типа file
            if ((input.getAttribute('type') === "file") && !input.getAttribute('value')){
                input.closest('.upload-photo').classList.add("upload-photo_empty");
            }
            
            //для интупов типа checkbox в разделе "техники"
            if ((input.getAttribute('type') === "checkbox") && input.closest('.techniques__check-form')){
                checkboxElementsTechniques.push(input);
            }
    
            // для интупов типа checkbox в разделе "доставка" 
            // if ((input.getAttribute('type') === "checkbox") && input.closest('.delivery__check-form')){
            //     if 
            // }
    
        })
    
        //валидация для checkbox в разделе "техники"
        if (checkboxElementsTechniques.length){
            const result = checkboxElementsTechniques.findIndex((elem) => {
                if (elem.checked){//!!!
                    return elem;
                }
            })
            if (result === -1){
                form.querySelector('.create-profile__techniques').classList.add('techniques_empty');
            }
        }
    }
    
}
export default validationForm;