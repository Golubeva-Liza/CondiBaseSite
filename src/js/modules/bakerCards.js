//____________________шаблонизация карточки кондитера_______________________________________
export default class BakerCards {
    constructor (avatar, name, rating, images, level, distance, price, profileLink){
        this.avatar = avatar;
        this.name = name;
        this.rating = rating;
        this.images = images;//массив
        this.level = level;
        this.distance = distance;
        this.price = price;
        this.profileLink = profileLink;
    }

    writeHtml(bakerCardsSelector){
        //создаем карточку
        const bakerCardsParent = document.getElementById(bakerCardsSelector);
        const element = document.createElement('div');
        element.classList.add("baker-card", "result-search__baker-card");

        element.innerHTML = `
        <div class="baker-card__content-inner">
            <div class="baker-card__baker">
                <div class="baker-card__baker-avatar">
                    <img src=${this.avatar} alt="baker">
                </div>
                <div class="baker-card__baker-name">
                    <!-- Менять имя -->
                    Имя: <span class="text-value">${this.name}</span>
                </div>
            </div>
            <div class="baker-card__rating">
                <div class="baker-card__like"></div>
                Рейтинг:
                <object class="baker-rating__star baker-card__star" type="image/svg+xml" data='icons/star.svg' ></object>
                <!-- менять значение рейтинга -->
                <span class="baker-card__rating-number text-value">${this.rating}</span>
            </div>
        </div>`;
        

        const bakerWorks = document.createElement('div');
        bakerWorks.classList.add('slider', 'baker-card__slider');
        this.images.forEach(imageName => {
            const cakeImg = document.createElement('div');
            cakeImg.classList.add("slider__item");
            cakeImg.innerHTML = `
                <img src="${imageName}" alt="cake">
            `;
            bakerWorks.append(cakeImg);
        });

        element.append(bakerWorks);

        const bakerInfo = document.createElement('div');
        bakerInfo.classList.add("baker-card__content-inner");
        bakerInfo.innerHTML = `
            <div class="baker-card__info">
                <div class="baker-card__info-item">
                    <!-- менять уровень -->
                    Уровень: <span class="text-value">${this.level}</span>
                </div>
                <!-- менять расстояние -->
                <div class="baker-card__info-item">
                    Расстояние: <span class="text-value">${this.distance} км</span>
                </div>
                <!-- менять цену -->
                <div class="baker-card__info-item">
                    Цена торта, 1кг: <span class="text-value">~${this.price} ₽</span>
                </div>
            </div>
            <div class="baker-card__btn">
                <a href="${this.profileLink}"><button class="button button_v2">Смотреть профиль</button></a>
            </div>
        `;
        element.append(bakerInfo);
        bakerCardsParent.append(element);
    }
}
