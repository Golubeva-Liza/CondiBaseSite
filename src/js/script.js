// "use strict";

import custSelect from './modules/select';
import doubleangeSlider from './modules/doubleRangeSlider';
import radio from './modules/radioInput';
import pagination from './modules/pagination';
import BakerCards from './modules/bakerCards';
import Comments from './modules/comments';
import spoiler from './modules/spoiler';

const cardsItems = [
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
            "img/bakers/Ekaterina/cake6.jpg",
            "img/bakers/Ekaterina/cake7.jpg",
            "img/bakers/Ekaterina/cake8.jpg",
            "img/bakers/Ekaterina/cake9.jpg",
            "img/bakers/Ekaterina/cake10.jpg",
            "img/bakers/Ekaterina/cake11.jpg",
        ], 
        "любитель",
        4,
        1800,
        'profile.html'
    ),  
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
        2300,
        '#'
    ),
    new BakerCards(
        'img/bakers/Evgenia/ava.jpg',
        'Евгения',
        4.9,
        [
            "img/bakers/Evgenia/cake1.jpg",
            "img/bakers/Evgenia/cake2.jpg",
            "img/bakers/Evgenia/cake3.jpg",
            "img/bakers/Evgenia/cake4.jpg",
            "img/bakers/Evgenia/cake5.jpg",
            "img/bakers/Evgenia/cake6.jpg",
            "img/bakers/Evgenia/cake7.jpg"
        ], 
        "любитель",
        4,
        1700,
        '#'
    ), 
    new BakerCards(
        'img/bakers/Olga/ava.jpg',
        'Евгения',
        4.8,
        [
            "img/bakers/Olga/cake1.jpg",
            "img/bakers/Olga/cake2.jpg",
            "img/bakers/Olga/cake3.jpg",
            "img/bakers/Olga/cake4.jpg",
            "img/bakers/Olga/cake5.jpg",
            "img/bakers/Olga/cake6.jpg",
            "img/bakers/Olga/cake7.jpg"
        ], 
        "любитель",
        5.2,
        1500,
        '#'
    ), 
    new BakerCards(
        'img/bakers/Polina/ava.jpg',
        'Полина',
        4.9,
        [
            "img/bakers/Polina/cake1.jpg",
            "img/bakers/Polina/cake2.jpg",
            "img/bakers/Polina/cake3.jpg",
            "img/bakers/Polina/cake4.jpg",
            "img/bakers/Polina/cake5.jpg",
            "img/bakers/Polina/cake6.jpg",
            "img/bakers/Polina/cake7.jpg",
            "img/bakers/Polina/cake8.jpg"
        ], 
        "профи",
        23,
        3500,
        '#'
    ),
    new BakerCards(
        'img/bakers/Irina/ava.jpg',
        'Ирина',
        4.7,
        [
            "img/bakers/Irina/cake1.jpg",
            "img/bakers/Irina/cake2.jpg",
            "img/bakers/Irina/cake3.jpg",
            "img/bakers/Irina/cake4.jpg",
            "img/bakers/Irina/cake5.jpg",
            "img/bakers/Irina/cake6.jpg",
            "img/bakers/Irina/cake7.jpg",
            "img/bakers/Irina/cake8.jpg",
            "img/bakers/Irina/cake9.jpg"
        ], 
        "любитель",
        16,
        2300,
        '#'
    ),
    new BakerCards(
        'img/bakers/Elizaveta/ava.jpg',
        'Елизавета',
        4.5,
        [
            "img/bakers/Elizaveta/cake1.jpg",
            "img/bakers/Elizaveta/cake2.jpg",
            "img/bakers/Elizaveta/cake3.jpg",
            "img/bakers/Elizaveta/cake4.jpg",
            "img/bakers/Elizaveta/cake5.jpg",
            "img/bakers/Elizaveta/cake6.jpg",
            "img/bakers/Elizaveta/cake7.jpg",
            "img/bakers/Elizaveta/cake8.jpg",
        ], 
        "любитель",
        9,
        1600,
        '#'
    ),
];

const commentsItems = [
    new Comments(
        'В',
        'Владлена',
        5,
        '1 ноябр. 2020 г.', 
        "Мне всё понравилось:) Рекомендую всем попробовать торт с вишневой начинкой! Он получился как с картинки, такой, как я и хотела! Буду заказывать еще.",
        4,
        0
    ),
    new Comments(
        'О',
        'Олег',
        4.6,
        '11 ноябр. 2020 г.', 
        "Мне всё понравилось:) Рекомендую всем попробовать торт с вишневой начинкой! Он получился как с картинки, такой, как я и хотела! Буду заказывать еще.",
        3,
        1
    ),
    new Comments(
        'В',
        'Владлена',
        5,
        '1 ноябр. 2020 г.', 
        "Мне всё понравилось:) Рекомендую всем попробовать торт с вишневой начинкой! Он получился как с картинки, такой, как я и хотела! Буду заказывать еще.",
        4,
        0
    ),
    new Comments(
        'В',
        'Владлена',
        5,
        '1 ноябр. 2020 г.', 
        "Мне всё понравилось:) Рекомендую всем попробовать торт с вишневой начинкой! Он получился как с картинки, такой, как я и хотела! Буду заказывать еще.",
        4,
        0
    )
];




document.addEventListener('DOMContentLoaded', () => {
    if((window.location.href == "http://localhost:3000/") || window.location.pathname == "/index.html"){
        custSelect();
    }

    if(window.location.pathname == "/result-search.html"){
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
        custSelect();
        doubleangeSlider();
        pagination('cardsWrapper', cardsItems, 3);//передается id без решетки, массив данных (каждый item - класс)
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
        });
        custSelect();
        pagination('commentsWrapper', commentsItems, 3);
        spoiler();
    }
});