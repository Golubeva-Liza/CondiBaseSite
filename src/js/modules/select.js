import calcTotalPrice from './calcPrice';
function custSelect (selector, parentOfSelectBlock = 0){
    //____________________castomize select________________________________________
    let parentSelector;
    if (parentOfSelectBlock != 0){
        parentSelector = parentOfSelectBlock.querySelector(selector);
    } else {
        parentSelector = document.querySelector(selector);
    }
    const selectHeader = parentSelector.querySelector('.select-block__header');
    const selectItems = parentSelector.querySelectorAll('.select-block__item');

    const selectToggle = function() {
        this.parentElement.classList.toggle('select-block__inner_active');
    };

    const selectChoose = function() {
        let parent = this.closest('.select-block__inner');
        let thisHeader = parent.querySelector('.select-block__header');
        
        if (!thisHeader.hasAttribute('data-cannot-change-header')){
            let currentText = parent.querySelector('.select-item');
            currentText.innerText = this.innerText;
        }
        
        parent.classList.remove('select-block__inner_active');

        if (parentSelector.closest('.selected-product')){
            calcTotalPrice(parentSelector.closest('.selected-product'));
        }
    };



    selectHeader.addEventListener('click', selectToggle);

    selectItems.forEach((item, i) => {
        item.addEventListener('click', selectChoose);
    });

}
export default custSelect;