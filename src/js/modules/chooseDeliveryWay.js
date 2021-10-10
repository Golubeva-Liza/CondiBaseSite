function chooseDeliveryWay() {
    const checkForm = document.querySelector('.delivery__check-form');
    checkForm.querySelectorAll('input').forEach(input => {
        input.addEventListener('click', () => {
            if (input.name === 'pickup'){
                if (input.checked){
                    //создаю динамически, а не меняю display, тк при отправке формы будут их пустые значения мешать
                    const pickupWrapper = document.createElement('div');
                    pickupWrapper.classList.add('delivery__pickup-wrapper');
                    pickupWrapper.innerHTML = `
                        <div class="main-input delivery__pickup-price">
                            <label class="main-input__label">
                                <div class="text-value-bold main-input__title">Цена</div>
                                <div class="main-input__input-wrapper">
                                    <input type="number" class="main-input__input main-input__input_number" name="pickup-price" placeholder="0">
                                    <hr class="main-input__hr">
                                    <span class="main-input__unit">₽</span>
                                </div>
                            </label>
                        </div>
                        <div class="warning-block delivery__warning-block">
                            Точный адрес необходим для фильтрации поиска с учетом местоположения и не отображается в профиле. Заказчик увидит ваш полный адрес при оплате в случае выбора самовывоза. 
                        </div>
                        <div class="delivery__inputs-wrapper">
                            <div class="main-input delivery__inputs">
                                <label class="main-input__label">
                                    <div class="text-value-bold main-input__title">Город, район</div>
                                    <div class="main-input__input-wrapper">
                                        <input type="text" class="main-input__input" name="city" placeholder="Введите название города и района">
                                        <hr class="main-input__hr">
                                    </div>
                                </label>
                            </div>
                            <div class="main-input delivery__inputs">
                                <label class="main-input__label">
                                    <div class="text-value-bold main-input__title">Улица, дом</div>
                                    <div class="main-input__input-wrapper">
                                        <input type="text" class="main-input__input" name="street" placeholder="Введите название улицы и номер дома">
                                        <hr class="main-input__hr">
                                    </div>
                                </label>
                            </div>
                            <div class="main-input delivery__inputs">
                                <label class="main-input__label">
                                    <div class="text-value-bold main-input__title">Квартира, этаж</div>
                                    <div class="main-input__input-wrapper">
                                        <input type="text" class="main-input__input" name="flat" placeholder="Введите номер квартиры и этажа">
                                        <hr class="main-input__hr">
                                    </div>
                                </label>
                            </div>
                        </div>
                    `;
                    input.closest('.check-form__label').insertAdjacentElement('afterend', pickupWrapper);
                    // checkForm.querySelector('.delivery__pickup-wrapper').style.display = 'block';
                    console.log('есть самовывоз');
                    return;
                }
                input.closest('.check-form').querySelector('.delivery__pickup-wrapper').remove();
                console.log('нет самовывоз');
            }

            if (input.name === 'delivery'){
                if (input.checked){
                    const deliveryWrapper = document.createElement('div');
                    deliveryWrapper.classList.add('delivery__delivery-from-baker');
                    deliveryWrapper.innerHTML = `
                        <div class="main-input delivery__delivery-from-baker-price">
                            <label class="main-input__label">
                                <div class="text-value-bold main-input__title">Цена по городу</div>
                                <div class="main-input__input-wrapper">
                                    <input type="number" class="main-input__input main-input__input_number" name="delivery-price" placeholder="0">
                                    <hr class="main-input__hr">
                                    <span class="main-input__unit">₽</span>
                                </div>
                            </label>
                        </div>
                    `;
                    input.closest('.check-form__label').insertAdjacentElement('afterend', deliveryWrapper)
                    console.log('есть доставка');
                    return
                }
                input.closest('.check-form').querySelector('.delivery__delivery-from-baker').remove();
                console.log('нет доставка') ;
            }
        })
    })
}
export default chooseDeliveryWay;