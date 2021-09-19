export default class SelectedProductCard {
    constructor (taste, minWeight, weights, pricePerKilo){
        this.taste = taste;
        this.minWeight = minWeight;
        this.weights = weights;
        this.pricePerKilo = pricePerKilo;
    }

    writeHtml(productSelector){
        const productParent = document.getElementById(productSelector);
        const element = document.createElement('div');
        element.classList.add("selected-product");

        const selectBlock = document.createElement('div');
        selectBlock.classList.add("select-block__body", "select-block__body_mini");
        this.weights.forEach(weight => {
            const selectBlockItem = document.createElement('div');
            selectBlockItem.classList.add("select-block__item");
            selectBlockItem.textContent = `${weight} кг`;
            selectBlock.append(selectBlockItem);
        });
        // console.log(selectBlock);

        element.innerHTML = `
            <div class="selected-product__top">
                <div class="selected-product__topping">
                    <span class="selected-product__title">Начинка:</span>
                    <span id="toppingName">${this.taste}</span> 
                </div>
                <div class="selected-product__btns">
                    <button><object class="selected-product__reduce" type="image/svg+xml" data='icons/reduce.svg'></object></button>
                    <button><object class="selected-product__close" type="image/svg+xml" data='icons/close.svg' ></object></button>
                </div>
            </div>
            <div class="selected-product__data">
                <span class="selected-product__title">Дата:</span>
            </div>
            <textarea class="selected-product__descr" name="cake-description" placeholder="Опишите желаемый декор торта..."></textarea>
            <div class="selected-product__upload-photo">
                <input class="selected-product__upload-input" name="myFile" type="file">
            </div>
            <div class="selected-product__bottom">
                <div class="selected-product__weight">
                    <div class="selected-product__weight-inner">
                        <span class="selected-product__title">Вес:</span>
                        <div class="select-block selected-product__select-inner">
                            <div class="select-block__inner">
                                <div class="select-block__header">
                                    <span class="select-item">${this.minWeight} кг</span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="selected-product__price-per-one">
                        ${this.pricePerKilo}
                        <object class="selected-product__question-icon" type="image/svg+xml" data='icons/question.svg' ></object>
                    </div>
                </div>

                <div class="selected-product__count">
                    <button>
                        <object class="selected-product__count-l-arrow" type="image/svg+xml" data='icons/bold-arrow.svg' ></object>
                    </button>
                    <span class="selected-product__count-number">1</span>
                    <button>
                        <object class="selected-product__count-r-arrow" type="image/svg+xml" data='icons/bold-arrow.svg' ></object>
                    </button>
                </div>
            </div>
            <hr class="selected-product__hr">
            <div class="selected-product__footer">
                <div class="selected-product__price">
                    Общая сумма:
                    <div class="selected-product__price-inner">
                        <span class="selected-product__title selected-product__total-price">2 475 ₽</span>
                        <object class="selected-product__question-icon" type="image/svg+xml" data='icons/question.svg' ></object>
                    </div>
                </div>
                <button class="button button_small" type="button">
                    Согласовать
                </button>
            </div>
        `;

        productParent.append(element);
        productParent.querySelector('.select-block__header').insertAdjacentElement('afterend', selectBlock);
        
    }
}