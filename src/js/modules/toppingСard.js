export default class ToppingCard {
    constructor (taste, rating, photo, cake, topping, coating, price, minWeight){
        this.taste = taste;
        this.rating = rating;
        this.photo = photo;
        this.cake = cake;
        this.topping = topping;
        this.coating = coating;
        this.price = price;
        this.minWeight = minWeight;
    }

    writeHtml(toppingCardsSelector){
        const toppingCardsParent = document.getElementById(toppingCardsSelector);
        const element = document.createElement('div');
        element.classList.add("topping-card", "toppings__cards");

        element.innerHTML = `
            <div class="topping-card__top">
                <h4 class="h4">Вкус: <span class="h4">${this.taste}</span></h4>
                <div class="topping-card__rating">
                    <object class="baker-rating__star baker-rating__star_small topping-card__star" type="image/svg+xml" data='icons/star.svg' ></object>
                    <span class="topping-card__rating-number">${this.rating}</span>
                </div>
            </div>
            <div class="topping-card__structure">
                <div class="topping-card__cake-photo">
                    <img src="${this.photo}" alt="">
                </div>
                <div class="topping-card__structure-text">
                    Коржи
                    <span class="text-value-thin topping-card__value">${this.cake}</span>
                    Начинка
                    <span class="text-value-thin topping-card__value">${this.topping}</span>
                    Покрытие
                    <span class="text-value-thin topping-card__value">${this.coating}</span>
                </div>
            </div>
            <div class="topping-card__footer">
                <div class="topping-card__footer-item">
                    <div class="topping-card__footer-text-item">
                        Цена за 1кг:
                        <span class="text-value-thin">${this.price} ₽</span>
                    </div>
                    <div class="topping-card__footer-text-item">
                        Мин. вес:
                        <span class="text-value-thin">${this.minWeight} кг</span>
                    </div>
                </div>
                <button class="button button_v2 button_v2_small">Выбрать</button>
            </div>
        `;

        toppingCardsParent.append(element);
    }
}
