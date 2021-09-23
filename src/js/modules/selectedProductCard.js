export default class SelectedProductCard {
    constructor (taste, minWeight, weights, pricePerKilo){
        this.taste = taste;
        this.minWeight = minWeight;
        this.weights = weights;
        this.pricePerKilo = pricePerKilo;
    }

    writeHtml(productSelector, offset, zIndex){
        const productParent = document.getElementById(productSelector);
        const element = document.createElement('div');
        element.classList.add("selected-product");
        element.style.top = `${offset}px`;
        element.style.zIndex = zIndex;

        const selectBlock = document.createElement('div');
        selectBlock.classList.add("select-block__body", "select-block__body_mini");
        this.weights.forEach(weight => {
            const selectBlockItem = document.createElement('div');
            selectBlockItem.classList.add("select-block__item");
            selectBlockItem.textContent = `${weight} кг`;
            selectBlock.append(selectBlockItem);
        });

        const minWeightNum = +this.minWeight.replace(",", ".");
        const pricePerOneDefault = this.pricePerKilo * minWeightNum;

        element.innerHTML = `
            <div class="selected-product__inner">
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
                            <span> ${pricePerOneDefault}</span>
                            <button data-hint-1 class="selected-product__question-icon"></button>
                        </div>
                    </div>

                    <div class="selected-product__count">
                        <button class="selected-product__count-btn">
                        
                        </button>
                        <span class="selected-product__count-number">1</span>
                        <button class="selected-product__count-btn">
                        
                        </button>
                    </div>
                </div>
                <hr class="selected-product__hr">
                <div class="selected-product__footer">
                    <div class="selected-product__price">
                        Общая сумма:
                        <div class="selected-product__price-inner">
                            <span class="selected-product__title selected-product__total-price">2 475 ₽</span>
                            <button data-hint-2 class="selected-product__question-icon"></button>
                        </div>
                    </div>
                    <button class="button button_small" type="button">
                        Согласовать
                    </button>
                </div>
            </div>
            <div class="hint selected-product__hint">
                Указанная цена за торт включает базовый декор и может отличаться после согласования в зависимости от сложности  выбранного декора  
            </div>
            <div class="hint hint-about-total selected-product__hint">
                что-то  
            </div>
        `;

        productParent.append(element);
        element.querySelector('.select-block__header').insertAdjacentElement('afterend', selectBlock);
        
    }
}