// "use strict";

import custSelect from './modules/select';
import doubleangeSlider from './modules/doubleRangeSlider';
import cards from './modules/cards';

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

document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname == "/result-search.html"){
        custSelect();
        doubleangeSlider();
        cards();
    }
});