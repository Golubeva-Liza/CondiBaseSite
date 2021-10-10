function addMoreWeights (parent) {
    const inputsWrapper = parent.querySelector('.main-input__several-inputs');
    let count = 1;
    const parentCardNum = parent.closest('.creature-cake-card').getAttribute("data-cakecard-num");

    inputsWrapper.addEventListener('click', (e) => {
        if(e.target.getAttribute('data-btn') == 'addWeight'){
            count++;

            if (count === 2){
                const deleteBtn = `
                    <button data-btn="deleteWeight" type="button" class="main-input__btn main-input__btn-delete">
                        <object class="main-input__btn-icon" type="image/svg+xml" data="icons/deleteItem.svg"></object>
                    </button>
                `;
                e.target.insertAdjacentHTML("afterend", deleteBtn);
            }

            const newInput = `
                <div class="main-input__input-wrapper">
                    <input type="number" class="main-input__input main-input__input_number" step="0.01" name="${parentCardNum}-cake-weight-${count}" placeholder="0">
                    <hr class="main-input__hr">
                    <span class="main-input__unit">кг</span>
                </div>
            `;            
            e.target.insertAdjacentHTML("beforeBegin", newInput);//сюда надо помещать не элемент, а текст html
        }

        if(e.target.getAttribute('data-btn') == 'deleteWeight'){
            count--;

            const allInputs = inputsWrapper.querySelectorAll('.main-input__input-wrapper');
            allInputs.forEach((item, id) => {
                if (id + 1 === allInputs.length){
                    item.remove();
                }
            });

            if (count === 1){
                inputsWrapper.querySelector('[data-btn="deleteWeight"]').remove();
            }
        }
    })
}
export default addMoreWeights;