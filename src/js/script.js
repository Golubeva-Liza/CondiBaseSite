//npx json-server db.json
//npx json-server --watch db.json --port 3004

import newSelect from './modules/newSelect';
import doubleangeSlider from './modules/doubleRangeSlider';
import changeRadio from './modules/radioInput';
import pagination from './modules/pagination';
import BakerCards from './modules/bakerCards';
import Comments from './modules/comments';
import ToppingCard from './modules/toppingСard';
import spoiler from './modules/spoiler';
import changeDate from './modules/changeDate';
import chooseCake from './modules/chooseCake';
import hints from './modules/hints';
import forms from './modules/newAccForm';
import addMoreWeights from './modules/addMoreWeights';
import addCakePhoto from './modules/addCakePhoto';
import sliderWithAddSlide from './modules/sliderWithAddSlide';
import validationForm from './modules/validationForm';



document.addEventListener('DOMContentLoaded', () => {
    if((window.location.href == "http://localhost:3000/") || window.location.pathname == "/index.html"){
        newSelect('.header__select');
        newSelect('.header__user-select');
        changeDate(document.querySelector('.header'));
    }

    if(window.location.pathname == "/result-search.html"){
        newSelect('.header__select');
        newSelect('.header__user-select');
        newSelect('.result-search__select-inner');
        doubleangeSlider();

        const bakerCardsInfo = [];
        fetch('http://localhost:3004/bakerCards')//придет массив с объектами карточек
            .then(data => data.json())
            .then(res => {
                //сколько будет карточек на сервере - столько раз их создаст
                
                res.forEach(({avatar, name, rating, images, level, lenght, price, profileLink}) => {
                    bakerCardsInfo.push(new BakerCards(avatar, name, rating, images, level, lenght, price, profileLink));
                });
                $(document).ready(function(){
                    $('.slider').slick({
                        arrows: true,
                        slidesToShow: 3,
                        speed: 500,
                        draggable: false,
                        centerMode: true,
                        variableWidth: true,
                    });
                });
                pagination('cardsWrapper', bakerCardsInfo, 2);//передается id без решетки, массив данных (каждый item - класс)
            });
        changeRadio(document.querySelector('.sort-form__check-rating'));
        changeRadio(document.querySelector('.sort-form__check-level'));
    }


    if(window.location.pathname == "/profile.html"){
        $(document).ready(function(){
            $('.slider').slick({
                arrows: true,
                slidesToShow: 3,
                draggable: false,
                centerMode: true,
                variableWidth: true,
                dots: true
            });
            $('.baker-profile__slider').css("display", "block");//сделано, чтоб не было видно кривого контента до загрузки функции slick-slider
            //может имеет смысл не показывать содержимое сайта пока все не загрузится
        });
        newSelect('.header__select');
        newSelect('.header__user-select');
        newSelect('.baker-feedback__select-inner');

        fetch('http://localhost:3004/toppings')
            .then(data => data.json())
            .then(res => {                
                res.forEach(({taste, rating, photo, cake, topping, coating, price, minWeight}) => {
                    new ToppingCard(taste, rating, photo, cake, topping, coating, price, minWeight).writeHtml('toppingsWrapper');
                });
                chooseCake(res);
            });

        const commentsItems = [];
        fetch('http://localhost:3004/comments')//придет массив с объектами карточек
            .then(data => data.json())
            .then(res => {                
                res.forEach(({avatar, name, rating, data, commentText, yesCount, noCount}) => {
                    commentsItems.push(new Comments(avatar, name, rating, data, commentText, yesCount, noCount));
                });
                pagination('commentsWrapper', commentsItems, 3);
            });

        spoiler();
        hints();

    }


    if(window.location.pathname == "/newAcc.html"){
        newSelect('.header__select');
        newSelect('.header__user-select');
        newSelect('.main-input__select');
        forms('.new-acc-form');

        addMoreWeights('.creature-cake-card__weights');
        addCakePhoto(document.querySelector('.creature-cake-card'), {
            accept: ['.png', '.jpg', '.jpeg'] //какие типы файлов поддерживаются
        });

        sliderWithAddSlide();

        document.querySelectorAll('[data-addSlidePhoto]').forEach(slide => {
            if (!slide.classList.contains('slick-cloned')){
                addCakePhoto(slide, {
                    accept: ['.png', '.jpg', '.jpeg'] //какие типы файлов поддерживаются
                });
            }

        })

        validationForm(document.querySelector('button[type="submit"]'));
    }
});