function custSelect (){
    //____________________castomize select________________________________________
    const selectHeader = document.querySelectorAll('.select-block__header');
    const selectItems = document.querySelectorAll('.select-block__item');

    const selectToggle = function() {
        this.parentElement.classList.toggle('select-block__inner_active');
    };

    const selectChoose = function() {
        let parent = this.closest('.select-block__inner');
        let currentText = parent.querySelector('.select-block__current');
        currentText.innerText = this.innerText;
        parent.classList.remove('select-block__inner_active');

    };

    const select = function (){
        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle);
        });

        selectItems.forEach(item => {
            item.addEventListener('click', selectChoose);
        });
    };

    select();
}
export default custSelect;