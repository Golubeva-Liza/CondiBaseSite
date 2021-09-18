// "use strict";
//npx json-server db.json
//npx json-server --watch db.json --port 3004

import custSelect from './modules/select';
import doubleangeSlider from './modules/doubleRangeSlider';
import radio from './modules/radioInput';
import pagination from './modules/pagination';
import BakerCards from './modules/bakerCards';
import Comments from './modules/comments';
import spoiler from './modules/spoiler';
import uploadFile from './modules/uploadFile';
// import {getResourse} from './services/services';



document.addEventListener('DOMContentLoaded', () => {
    if((window.location.href == "http://localhost:3000/") || window.location.pathname == "/index.html"){
        custSelect();
    }

    if(window.location.pathname == "/result-search.html"){
        custSelect();
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
        });
        custSelect();

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
        uploadFile();
    }
});