// "use strict";
//npx json-server db.json
//npx json-server --watch db.json --port 3004

import custSelect from './modules/select';
import doubleangeSlider from './modules/doubleRangeSlider';
import radio from './modules/radioInput';
import pagination from './modules/pagination';
import BakerCards from './modules/bakerCards';
import Comments from './modules/comments';
import ToppingCard from './modules/toppingСard';
import spoiler from './modules/spoiler';
import uploadFile from './modules/uploadFile';
import chooseCake from './modules/chooseCake';
import hints from './modules/hints';
import calendar from './modules/calendar';

// import {getResourse} from './services/services';



document.addEventListener('DOMContentLoaded', () => {
    if((window.location.href == "http://localhost:3000/") || window.location.pathname == "/index.html"){
        custSelect('.header__select');
        custSelect('.header__user-select');
    }

    if(window.location.pathname == "/result-search.html"){
        custSelect('.header__select');
        custSelect('.header__user-select');
        custSelect('.result-search__select-inner');
        doubleangeSlider();

        const bakerCardsInfo = [];
        fetch('http://localhost:3004/bakerCards')//придет массив с объектами карточек
            .then(data => data.json())
            .then(res => {
                //сколько будет карточек на сервере - столько раз их создаст
                
                res.forEach(({avatar, name, rating, images, level, lenght, price, profileLink}) => {
                    //разбили объект в свойства
                    // new BakerCards(obj.img, obj.altimg, obj.title ).writeHtml();
                    //не оч хорошо, когда мы перебираем свойства. используем деструктуризацию объетка
                    //вытаскиваем отдельные свойства в отдельную переменную

                    bakerCardsInfo.push(new BakerCards(avatar, name, rating, images, level, lenght, price, profileLink));
                });
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
                pagination('cardsWrapper', bakerCardsInfo, 3);//передается id без решетки, массив данных (каждый item - класс)
            });
        radio();
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
        custSelect('.header__select');
        custSelect('.baker-feedback__select-inner');
        custSelect('.header__user-select');

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
        
    }
});