/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction cards() {\n  //____________________шаблонизация карточки кондитера_______________________________________\n  var bakerCardsParent = document.querySelector('.result-search__cards-inner');\n\n  var BakerCards = /*#__PURE__*/function () {\n    //alt - что подставить вместо картинки, если не загрузилась\n    //parent - родительский div (селектор), в который мы будем вставлять карточку\n    //rest параметр не содержит default значение\n    function BakerCards(avatar, name, rating, images, level, lenght, price) {\n      _classCallCheck(this, BakerCards);\n\n      this.avatar = avatar;\n      this.name = name;\n      this.rating = rating;\n      this.images = images; //массив\n\n      this.level = level;\n      this.lenght = lenght;\n      this.price = price;\n    }\n\n    _createClass(BakerCards, [{\n      key: \"writeHtml\",\n      value: function writeHtml() {\n        //создаем карточку\n        var element = document.createElement('div');\n        element.classList.add(\"baker-card\", \"result-search__baker-card\");\n        element.innerHTML = \"\\n            <div class=\\\"baker-card__content-inner\\\">\\n                <div class=\\\"baker-card__baker\\\">\\n                    <div class=\\\"baker-card__baker-avatar\\\">\\n                        <img src=\".concat(this.avatar, \" alt=\\\"baker\\\">\\n                    </div>\\n                    <div class=\\\"baker-card__baker-name\\\">\\n                        <!-- \\u041C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0438\\u043C\\u044F -->\\n                        \\u0418\\u043C\\u044F: <span class=\\\"baker-card__value\\\">\").concat(this.name, \"</span>\\n                    </div>\\n                </div>\\n                <div class=\\\"baker-card__rating\\\">\\n                    <div class=\\\"baker-card__like\\\"></div>\\n                    \\u0420\\u0435\\u0439\\u0442\\u0438\\u043D\\u0433:\\n                    <object class=\\\"baker-card__star\\\" type=\\\"image/svg+xml\\\" data='icons/star.svg' ></object>\\n                    <!-- \\u043C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0440\\u0435\\u0439\\u0442\\u0438\\u043D\\u0433\\u0430 -->\\n                    <span class=\\\"baker-card__rating-number baker-card__value\\\">\").concat(this.rating, \"</span>\\n                </div>\\n            </div>\");\n        var bakerWorks = document.createElement('div');\n        bakerWorks.classList.add('slider', 'baker-card__slider');\n        this.images.forEach(function (imageName) {\n          var cakeImg = document.createElement('div');\n          cakeImg.classList.add(\"slider__item\");\n          cakeImg.innerHTML = \"\\n                    <img src=\\\"\".concat(imageName, \"\\\" alt=\\\"cake\\\">\\n                \");\n          bakerWorks.append(cakeImg);\n        });\n        element.append(bakerWorks);\n        var bakerInfo = document.createElement('div');\n        bakerInfo.classList.add(\"baker-card__content-inner\");\n        bakerInfo.innerHTML = \"\\n                <div class=\\\"baker-card__info\\\">\\n                    <div class=\\\"baker-card__info-item\\\">\\n                        <!-- \\u043C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0443\\u0440\\u043E\\u0432\\u0435\\u043D\\u044C -->\\n                        \\u0423\\u0440\\u043E\\u0432\\u0435\\u043D\\u044C: <span class=\\\"baker-card__value\\\">\".concat(this.level, \"</span>\\n                    </div>\\n                    <!-- \\u043C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0440\\u0430\\u0441\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 -->\\n                    <div class=\\\"baker-card__info-item\\\">\\n                        \\u0420\\u0430\\u0441\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435: <span class=\\\"baker-card__value\\\">\").concat(this.lenght, \" \\u043A\\u043C</span>\\n                    </div>\\n                    <!-- \\u043C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0446\\u0435\\u043D\\u0443 -->\\n                    <div class=\\\"baker-card__info-item\\\">\\n                        \\u0426\\u0435\\u043D\\u0430 \\u0442\\u043E\\u0440\\u0442\\u0430, 1\\u043A\\u0433: <span class=\\\"baker-card__value\\\">~\").concat(this.price, \" \\u20BD</span>\\n                    </div>\\n                </div>\\n                <div class=\\\"baker-card__btn\\\">\\n                    <div class=\\\"button button_v2\\\">\\u0421\\u043C\\u043E\\u0442\\u0440\\u0435\\u0442\\u044C \\u043F\\u0440\\u043E\\u0444\\u0438\\u043B\\u044C</div>\\n                </div>\\n            \");\n        element.append(bakerInfo);\n        bakerCardsParent.append(element);\n      }\n    }]);\n\n    return BakerCards;\n  }(); //____________________пагинация_______________________________________\n\n\n  var cardsItems = [new BakerCards('img/bakers/Ekaterina/avatar.jpg', 'Екатерина', 4.6, [\"img/bakers/Ekaterina/cake1.jpg\", \"img/bakers/Ekaterina/cake2.jpg\", \"img/bakers/Ekaterina/cake3.jpg\", \"img/bakers/Ekaterina/cake4.jpg\", \"img/bakers/Ekaterina/cake5.jpg\"], \"любитель\", 4, 1800), new BakerCards('img/bakers/Maria/ava.jpg', 'Мария', 4.9, [\"img/bakers/Maria/cake1.jpg\", \"img/bakers/Maria/cake2.jpg\", \"img/bakers/Maria/cake3.jpg\", \"img/bakers/Maria/cake4.jpg\", \"img/bakers/Maria/cake5.jpg\"], \"профи\", 3, 2300), new BakerCards('img/bakers/Evgenia/ava.jpg', 'Евгения', 4.9, [\"img/bakers/Evgenia/cake1.jpg\", \"img/bakers/Evgenia/cake2.jpg\", \"img/bakers/Evgenia/cake3.jpg\", \"img/bakers/Evgenia/cake4.jpg\", \"img/bakers/Evgenia/cake5.jpg\", \"img/bakers/Evgenia/cake6.jpg\", \"img/bakers/Evgenia/cake7.jpg\"], \"любитель\", 4, 1700), new BakerCards('img/bakers/Olga/ava.jpg', 'Евгения', 4.8, [\"img/bakers/Olga/cake1.jpg\", \"img/bakers/Olga/cake2.jpg\", \"img/bakers/Olga/cake3.jpg\", \"img/bakers/Olga/cake4.jpg\", \"img/bakers/Olga/cake5.jpg\", \"img/bakers/Olga/cake6.jpg\", \"img/bakers/Olga/cake7.jpg\"], \"любитель\", 5.2, 1500), new BakerCards('img/bakers/Polina/ava.jpg', 'Полина', 4.9, [\"img/bakers/Polina/cake1.jpg\", \"img/bakers/Polina/cake2.jpg\", \"img/bakers/Polina/cake3.jpg\", \"img/bakers/Polina/cake4.jpg\", \"img/bakers/Polina/cake5.jpg\", \"img/bakers/Polina/cake6.jpg\", \"img/bakers/Polina/cake7.jpg\", \"img/bakers/Polina/cake8.jpg\"], \"профи\", 23, 3500), new BakerCards('img/bakers/Irina/ava.jpg', 'Ирина', 4.7, [\"img/bakers/Irina/cake1.jpg\", \"img/bakers/Irina/cake2.jpg\", \"img/bakers/Irina/cake3.jpg\", \"img/bakers/Irina/cake4.jpg\", \"img/bakers/Irina/cake5.jpg\", \"img/bakers/Irina/cake6.jpg\", \"img/bakers/Irina/cake7.jpg\", \"img/bakers/Irina/cake8.jpg\", \"img/bakers/Irina/cake9.jpg\"], \"любитель\", 16, 2300), new BakerCards('img/bakers/Elizaveta/ava.jpg', 'Елизавета', 4.5, [\"img/bakers/Elizaveta/cake1.jpg\", \"img/bakers/Elizaveta/cake2.jpg\", \"img/bakers/Elizaveta/cake3.jpg\", \"img/bakers/Elizaveta/cake4.jpg\", \"img/bakers/Elizaveta/cake5.jpg\", \"img/bakers/Elizaveta/cake6.jpg\", \"img/bakers/Elizaveta/cake7.jpg\", \"img/bakers/Elizaveta/cake8.jpg\"], \"любитель\", 9, 1600)];\n  var listElement = document.getElementById('cardsWrapper');\n  var paginationElement = document.getElementById('pagination');\n  var paginationBack = document.getElementById('paginationBack');\n  var paginationForward = document.getElementById('paginationForward');\n  var currentPage = 1;\n  var elements = 3; //выводит контент(элементы массива) на страницу\n\n  function DisplayList(items, wrapper, elementsPerPage, page) {\n    wrapper.innerHTML = \"\";\n    page--;\n    var loopStart = elementsPerPage * page;\n    var loopEnd = loopStart + elementsPerPage;\n    var paginatedItems = items.slice(loopStart, loopEnd);\n\n    for (var i = 0; i < paginatedItems.length; i++) {\n      paginatedItems[i].writeHtml();\n    }\n  } //высчитывает, сколько кнопок надо отобразить\n\n\n  function setupPagination(items, wrapper, elementsPerPage) {\n    wrapper.innerHTML = \"\"; //Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.\n\n    var pageCount = Math.ceil(items.length / elementsPerPage);\n\n    for (var i = 1; i <= pageCount; i++) {\n      //вызов функции создания кнопок\n      var btn = PagintationButton(i, items);\n      wrapper.appendChild(btn);\n    }\n  } //page - индекс выводимого элемента (из массива)\n\n\n  function PagintationButton(page, items) {\n    var button = document.createElement('a');\n    button.href = '#';\n    button.classList.add('pagination__btn');\n    button.innerHTML = page;\n\n    if (currentPage == page) {\n      button.classList.add('active');\n    }\n\n    button.addEventListener('click', function () {\n      currentPage = page;\n      DisplayList(items, listElement, elements, currentPage);\n      $('.slider').slick({\n        arrows: true,\n        slidesToShow: 3,\n        speed: 500,\n        draggable: false,\n        centerMode: true,\n        variableWidth: true\n      });\n      var currentBtn = document.querySelector('.pagenumbers a.active');\n      currentBtn.classList.remove('active');\n      button.classList.add('active');\n    });\n    return button;\n  }\n\n  function paginationClickForwardOrBack(items, elementsPerPage, page) {\n    var pageCount = Math.ceil(items.length / elementsPerPage);\n\n    if (page == 1) {\n      paginationBack.style.display = 'none';\n    }\n\n    paginationForward.addEventListener('click', function () {\n      if (page < pageCount) {\n        page++;\n        currentPage = page;\n        DisplayList(cardsItems, listElement, elements, page);\n        $('.slider').slick({\n          arrows: true,\n          slidesToShow: 3,\n          speed: 500,\n          draggable: false,\n          centerMode: true,\n          variableWidth: true\n        });\n        var allBtns = document.querySelectorAll('.pagenumbers .pagination__btn');\n\n        for (var i = 0; i < allBtns.length; i++) {\n          if (allBtns[i].classList == \"pagination__btn active\") {\n            allBtns[i].classList.remove('active');\n            allBtns[i + 1].classList.add('active');\n            break;\n          }\n        }\n\n        if (page == pageCount) {\n          paginationForward.style.display = 'none';\n        }\n\n        if (page == 2) {\n          paginationBack.style.display = 'flex';\n        }\n      }\n    });\n    paginationBack.addEventListener('click', function () {\n      if (page > 1) {\n        page--;\n        currentPage = page;\n        DisplayList(cardsItems, listElement, elements, page);\n        $('.slider').slick({\n          arrows: true,\n          slidesToShow: 3,\n          speed: 500,\n          draggable: false,\n          centerMode: true,\n          variableWidth: true\n        });\n        var allBtns = document.querySelectorAll('.pagenumbers .pagination__btn');\n\n        for (var i = 0; i < allBtns.length; i++) {\n          if (allBtns[i].classList == \"pagination__btn active\") {\n            allBtns[i].classList.remove('active');\n            allBtns[i - 1].classList.add('active');\n            break;\n          }\n        }\n\n        if (page == 1) {\n          paginationBack.style.display = 'none';\n        }\n\n        if (page == pageCount - 1) {\n          paginationForward.style.display = 'flex';\n        }\n      }\n    });\n  }\n\n  DisplayList(cardsItems, listElement, elements, currentPage);\n  setupPagination(cardsItems, paginationElement, elements);\n  paginationClickForwardOrBack(cardsItems, elements, currentPage);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/cards.js?");

/***/ }),

/***/ "./src/js/modules/doubleRangeSlider.js":
/*!*********************************************!*\
  !*** ./src/js/modules/doubleRangeSlider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction doubleRangeSlider() {\n  //____________________double-range-slider________________________________________\n  window.onload = function () {\n    slideOne();\n    slideTwo();\n    console.log('Я Лиза-Сева');\n  };\n\n  var sliderOne = document.getElementById(\"range-slider-1\");\n  var sliderTwo = document.getElementById(\"range-slider-2\");\n  var displayValOne = document.getElementById(\"range-1\");\n  var displayValTwo = document.getElementById(\"range-2\");\n  var minGap = 1200;\n  var sliderTrack = document.querySelector('.double-range-slider__track');\n  var sliderMaxValue = document.getElementById(\"range-slider-1\").max; //Атрибут событий oninput позволяет задать срабатывание скрипта, когда элемент получает ввод данных от пользователя.\n\n  function slideOne() {\n    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {\n      sliderOne.value = parseInt(sliderTwo.value) - minGap;\n    }\n\n    displayValOne.value = round100(sliderOne.value);\n    fillColor();\n  }\n\n  function slideTwo() {\n    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {\n      sliderTwo.value = parseInt(sliderOne.value) + minGap;\n    }\n\n    displayValTwo.value = round100(sliderTwo.value);\n    fillColor();\n  }\n\n  function fillColor() {\n    var percent1 = sliderOne.value / sliderMaxValue * 100;\n    var percent2 = sliderTwo.value / sliderMaxValue * 100;\n    sliderTrack.style.background = \"linear-gradient(to right, #ABAEDA \".concat(percent1, \"%, #626696 \").concat(percent1, \"%, #626696 \").concat(percent2, \"%, #ABAEDA \").concat(percent2, \"%)\");\n  }\n\n  function round100(val) {\n    return Math.round(val / 100) * 100;\n  }\n\n  sliderOne.addEventListener('input', function () {\n    slideOne();\n  });\n  sliderTwo.addEventListener('input', function () {\n    slideTwo();\n  }); //____________________block the input of large numbers________________________________________\n\n  var displayValues = document.querySelectorAll('.value-box__input');\n  displayValues.forEach(function (input, i) {\n    var min = +input.min;\n    var max = +input.max;\n    input.addEventListener('change', function (e) {\n      var value = +input.value;\n\n      if (value > max) {\n        input.value = max;\n      } else if (value < min) {\n        input.value = min;\n      }\n\n      if (i == 0) {\n        sliderOne.value = value;\n        fillColor();\n      } else if (i == 1) {\n        sliderTwo.value = value;\n        fillColor();\n      }\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doubleRangeSlider);\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/doubleRangeSlider.js?");

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction custSelect() {\n  //____________________castomize select________________________________________\n  var selectHeader = document.querySelectorAll('.select-block__header');\n  var selectItems = document.querySelectorAll('.select-block__item');\n\n  var selectToggle = function selectToggle() {\n    this.parentElement.classList.toggle('select-block__inner_active');\n  };\n\n  var selectChoose = function selectChoose() {\n    var parent = this.closest('.select-block__inner');\n    var currentText = parent.querySelector('.select-block__current');\n    currentText.innerText = this.innerText;\n    parent.classList.remove('select-block__inner_active');\n  };\n\n  var select = function select() {\n    selectHeader.forEach(function (item) {\n      item.addEventListener('click', selectToggle);\n    });\n    selectItems.forEach(function (item) {\n      item.addEventListener('click', selectChoose);\n    });\n  };\n\n  select();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (custSelect);\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/select.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/select */ \"./src/js/modules/select.js\");\n/* harmony import */ var _modules_doubleRangeSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/doubleRangeSlider */ \"./src/js/modules/doubleRangeSlider.js\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ \"./src/js/modules/cards.js\");\n// \"use strict\";\n\n\n\n$(document).ready(function () {\n  $('.slider').slick({\n    arrows: true,\n    slidesToShow: 3,\n    speed: 500,\n    //прокрутка слайдов на пк\n    draggable: false,\n    centerMode: true,\n    variableWidth: true\n  });\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  if (window.location.pathname == \"/result-search.html\") {\n    (0,_modules_select__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_modules_doubleRangeSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n});\n\n//# sourceURL=webpack://peregorodkalab/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;