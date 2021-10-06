function addMoreWeights (parentSelector) {
    const parent = document.querySelector(parentSelector);
    const inputsWrapper = parent.querySelector('.main-input__several-inputs');
    let count = 1;

    inputsWrapper.addEventListener('click', (e) => {
        if(e.target.classList == 'main-input__btn'){
            count++;
            const newInput = document.createElement('div');
            newInput.classList.add('main-input__input-wrapper');
            newInput.innerHTML = `
                <input type="number" class="main-input__input main-input__input_number" step="0.01" name="cake-weight-${count}" placeholder="0">
                <hr class="main-input__hr">
                <span class="main-input__unit">кг</span>
            `;
            
            inputsWrapper.append(newInput);
            e.target.remove();
            inputsWrapper.append(e.target);
        }
    })
}
export default addMoreWeights;