// "use strict";


//____________________double-range-slider________________________________________

window.onload = function(){
    slideOne();
    slideTwo();
};

let sliderOne = document.getElementById("range-slider-1");
let sliderTwo = document.getElementById("range-slider-2");
let displayValOne = document.getElementById("range-1");
let displayValTwo = document.getElementById("range-2");
let minGap = 100;
let sliderTrack = document.querySelector('.double-range-slider__track');
let sliderMaxValue = document.getElementById("range-slider-1").max;

//Атрибут событий oninput позволяет задать срабатывание скрипта, когда элемент получает ввод данных от пользователя.

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.value = round100(sliderOne.value);
    fillColor();
}

function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = round100(sliderTwo.value);
    fillColor();
}

function fillColor(){
    let percent1 = (sliderOne.value / sliderMaxValue) * 100;
    let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #ABAEDA ${percent1}%, #626696 ${percent1}%, #626696 ${percent2}%, #ABAEDA ${percent2}%)`;
}

function round100(val) {
    return Math.round(val / 100) * 100;
  }




//____________________block the input of large numbers________________________________________

const displayValues = document.querySelectorAll('.value-box__input');
displayValues.forEach((input, i) => {
    const min = +input.min;
    const max = +input.max;

    input.addEventListener('change', (e) => {
        const value = +input.value;
        if (value > max) {
            input.value = max; 
        }
        else if (value < min) {
            input.value = min; 
        }
        if (i == 0){
            sliderOne.value = value;
            fillColor();
        }
        else if (i == 1){
            sliderTwo.value = value;
            fillColor();
        }

    });
});





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




//____________________slick slider_______________________________________

$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        slidesToShow: 3,
        speed: 500,
        //прокрутка слайдов на пк
        draggable: false,
        centerMode: true,
        variableWidth: true,
    });
});


//____________________шаблонизация карточки кондитера_______________________________________
const bakerCardsParent = document.querySelector('.result-search__cards-inner');

class BakerCards {
    //alt - что подставить вместо картинки, если не загрузилась
    //parent - родительский div (селектор), в который мы будем вставлять карточку
    //rest параметр не содержит default значение
    constructor (avatar, name, rating, images, level, lenght, price){
        this.avatar = avatar;
        this.name = name;
        this.rating = rating;
        this.images = images;//массив
        this.level = level;
        this.lenght = lenght;
        this.price = price;
    }

    writeHtml(){
        //создаем карточку
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
                    Имя: <span class="baker-card__value">${this.name}</span>
                </div>
            </div>
            <div class="baker-card__rating">
                <div class="baker-card__like"></div>
                Рейтинг:
                <object class="baker-card__star" type="image/svg+xml" data='icons/star.svg' ></object>
                <!-- менять значение рейтинга -->
                <span class="baker-card__rating-number baker-card__value">${this.rating}</span>
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
                    Уровень: <span class="baker-card__value">${this.level}</span>
                </div>
                <!-- менять расстояние -->
                <div class="baker-card__info-item">
                    Расстояние: <span class="baker-card__value">${this.lenght} км</span>
                </div>
                <!-- менять цену -->
                <div class="baker-card__info-item">
                    Цена торта, 1кг: <span class="baker-card__value">~${this.price} ₽</span>
                </div>
            </div>
            <div class="baker-card__btn">
                <div class="button button_v2">Смотреть профиль</div>
            </div>
        `;
        element.append(bakerInfo);
        bakerCardsParent.append(element);
    }
}

new BakerCards(
    'img/bakers/Maria/ava.jpg',
    'Мария',
    4.9,
    [
        "img/bakers/Maria/cake1.jpg",
        "img/bakers/Maria/cake2.jpg",
        "img/bakers/Maria/cake3.jpg",
        "img/bakers/Maria/cake4.jpg",
        "img/bakers/Maria/cake5.jpg",
    ], 
    "профи",
    3,
    2300 
).writeHtml();

new BakerCards(
    'img/bakers/Ekaterina/avatar.jpg',
    'Екатерина',
    4.6,
    [
        "img/bakers/Ekaterina/cake1.jpg",
        "img/bakers/Ekaterina/cake2.jpg",
        "img/bakers/Ekaterina/cake3.jpg",
        "img/bakers/Ekaterina/cake4.jpg",
        "img/bakers/Ekaterina/cake5.jpg",
    ], 
    "любитель",
    4,
    1800
).writeHtml();

new BakerCards(
    'img/bakers/Maria/ava.jpg',
    'Мария',
    4.9,
    [
        "img/bakers/Maria/cake1.jpg",
        "img/bakers/Maria/cake2.jpg",
        "img/bakers/Maria/cake3.jpg",
        "img/bakers/Maria/cake4.jpg",
        "img/bakers/Maria/cake5.jpg",
    ], 
    "профи",
    3,
    2300 
).writeHtml();