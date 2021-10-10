export default class NewCakeCard {
    constructor (num){
        this.num = num;
    }

    writeHtml(newToppingsWrapperSelector){
        const newToppingsWrapper = document.querySelector(newToppingsWrapperSelector);
        const newCakeCard = document.createElement('div');
        newCakeCard.classList.add("creature-cake-card", "add-toppings__card");
        newCakeCard.setAttribute("data-cakecard-num", this.num);
        newCakeCard.innerHTML = `
                <div class="creature-cake-card__top">
                    <div class="main-input creature-cake-card__name-input">
                        <label class="main-input__label">
                            <div class="text-value-bold main-input__title">Введите название вкуса</div>
                            <div class="main-input__input-wrapper">
                                <input type="text" class="main-input__input main-input__input_number" name="${this.num}-cake-name" placeholder="Введите название">
                                <hr class="main-input__hr">
                            </div>
                        </label>
                    </div>
                </div>

                <div class="creature-cake-card__center">
                    <div class="upload-photo creature-cake-card__photo">
                        <input class="upload-photo__input" name="${this.num}-cake-photo" type="file">
                        <img class="upload-photo__icon" src="icons/upload2.svg"></img>

                        <div class="upload-photo__img-wrapper">
                            <div class="upload-photo__remove">
                                <img data-remove src="icons/preview-close.svg" alt="preview-close">
                            </div>
                            <img class="upload-photo__img" src="" alt="cake">
                        </div>
                    </div>
                    <div class="creature-cake-card__inputs-wrapper">
                        <div class="main-input creature-cake-card__input">
                            <label class="main-input__label">
                                <div class="text-value-bold main-input__title">Коржи</div>
                                <div class="main-input__input-wrapper">
                                    <input type="text" class="main-input__input main-input__input_number" name="${this.num}-cake-shortcake" placeholder="Введите краткое описание">
                                    <hr class="main-input__hr">
                                </div>
                            </label>
                        </div>
                        <div class="main-input creature-cake-card__input">
                            <label class="main-input__label">
                                <div class="text-value-bold main-input__title">Начинка</div>
                                <div class="main-input__input-wrapper">
                                    <input type="text" class="main-input__input main-input__input_number" name="${this.num}-cake-topping-" placeholder="Введите краткое описание">
                                    <hr class="main-input__hr">
                                </div>
                            </label>
                        </div>
                        <div class="main-input creature-cake-card__input">
                            <label class="main-input__label">
                                <div class="text-value-bold main-input__title">Покрытие</div>
                                <div class="main-input__input-wrapper">
                                    <input type="text" class="main-input__input main-input__input_number" name="${this.num}-cake-coverage" placeholder="Введите краткое описание">
                                    <hr class="main-input__hr">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="creature-cake-card__bottom">
                    <div class="creature-cake-card__bottom-inputs">
                        <div class="main-input creature-cake-card__input-price">
                            <label class="main-input__label">
                                <div class="text-value-bold main-input__title">Цена за 1 кг</div>
                                <div class="main-input__input-wrapper">
                                    <input type="number" class="main-input__input main-input__input_number" name="${this.num}-cake-price" placeholder="0">
                                    <hr class="main-input__hr">
                                    <span class="main-input__unit">₽</span>
                                </div>
                            </label>
                        </div>
                        <div class="main-input creature-cake-card__weights">
                            <label class="main-input__label">
                                <div class="text-value-bold main-input__title">Выберите возможный вес</div>
                                <div class="main-input__several-inputs">
                                    <div class="main-input__input-wrapper">
                                        <input type="number" class="main-input__input main-input__input_number" step="0.01" name="${this.num}-cake-weight-1" placeholder="0">
                                        <hr class="main-input__hr">
                                        <span class="main-input__unit">кг</span>
                                    </div>
                                    <button data-btn="addWeight" type="button" class="main-input__btn">
                                        <object class="main-input__btn-icon" type="image/svg+xml" data="icons/preview-more.svg"></object>
                                    </button>
                                </div>
                            </label>
                        </div>
                    </div>
                    <button data-button="clear" type="button" class="button button_v2 button_v2_small creature-cake-card__add-btn">Очистить</button>
                </div>
        `;
        if (this.num != 0){
            const closeBtn = document.createElement('button');
            closeBtn.classList.add("creature-cake-card__close-btn");
            closeBtn.setAttribute('type', 'button');
            closeBtn.setAttribute('data-button', 'delete');
            closeBtn.innerHTML = `
                <object class="creature-cake-card__close-btn-icon" type="image/svg+xml" data="icons/close.svg"></object>
            `;
            newCakeCard.querySelector('.creature-cake-card__top').append(closeBtn);
        }
        newToppingsWrapper.append(newCakeCard);
    }
}