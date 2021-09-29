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
        element.setAttribute('data-selectedProduct', this.taste);
        element.style.top = `${offset}px`;
        element.style.zIndex = zIndex;

        const selectBlock = document.createElement('ul');
        selectBlock.classList.add("new-select__list");
        this.weights.forEach(weight => {
            const selectBlockItem = document.createElement('li');
            selectBlockItem.classList.add("new-select__list-item");
            selectBlockItem.setAttribute("data-value", `${weight}`);
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
                        <button data-openProductCard ></button>
                        <button data-closeProductCard><object class="selected-product__close" type="image/svg+xml" data='icons/close.svg' ></object></button>
                    </div>
                </div>
                <div class="selected-product__date">
                    <span class="selected-product__title">Дата:</span>
                    <div data-change-date class="selected-product__date-inner">
                        <span class="selected-product__date-value">Выберите дату</span>
                    </div>
                    <div class="selected-product__calendar-wrapper">
                        <div class="calendar">
                            <div class="calendar__month">
                                <button class="calendar__prev"><object class="calendar__prev-icon" type="image/svg+xml" data="icons/list_left.svg"></object></button>
                                <h4 class="h4 calendar__current-month"></h4>
                                <button class="calendar__next"><object class="calendar__next-icon" type="image/svg+xml" data="icons/list_right.svg"></object></button>
                            </div>
                            <div class="calendar__dates-wrapper">
                                <div class="calendar__weekdays">
                                    <div>пн</div>
                                    <div>вт</div>
                                    <div>ср</div>
                                    <div>чт</div>
                                    <div>пт</div>
                                    <div>сб</div>
                                    <div>вс</div>
                                </div>
                                <div class="calendar__days">
                                </div>
                            </div>
                            <span class="calendar__hint">Минимальное время выполнения заказа - 2 дня</span>
                        </div>
                    </div>
                </div>
                <textarea class="selected-product__descr" name="cake-description" placeholder="Опишите желаемый декор торта..."></textarea>
                <div class="selected-product__upload-photo">
                    <input class="selected-product__upload-input" name="myFile" type="file">
                </div>
                <div class="selected-product__bottom">
                    <div class="selected-product__weight">
                        <div class="selected-product__weight-inner">
                            <span class="selected-product__title">Вес:</span>
                            <div class="new-select selected-product__select-inner">
                                <button class="new-select__btn">${this.minWeight} кг</button>

                                <input class="new-select__input-hidden" type="text" name="select-category" value="">
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
        element.querySelector('.new-select__btn').insertAdjacentElement('afterend', selectBlock);
        
    }
}