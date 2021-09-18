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

/***/ "./src/js/modules/bakerCards.js":
/*!**************************************!*\
  !*** ./src/js/modules/bakerCards.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BakerCards)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//____________________шаблонизация карточки кондитера_______________________________________\nvar BakerCards = /*#__PURE__*/function () {\n  //alt - что подставить вместо картинки, если не загрузилась\n  //parent - родительский div (селектор), в который мы будем вставлять карточку\n  //rest параметр не содержит default значение\n  function BakerCards(avatar, name, rating, images, level, lenght, price, profileLink) {\n    _classCallCheck(this, BakerCards);\n\n    this.avatar = avatar;\n    this.name = name;\n    this.rating = rating;\n    this.images = images; //массив\n\n    this.level = level;\n    this.lenght = lenght;\n    this.price = price;\n    this.profileLink = profileLink;\n  }\n\n  _createClass(BakerCards, [{\n    key: \"writeHtml\",\n    value: function writeHtml(bakerCardsSelector) {\n      //создаем карточку\n      var bakerCardsParent = document.getElementById(bakerCardsSelector);\n      var element = document.createElement('div');\n      element.classList.add(\"baker-card\", \"result-search__baker-card\");\n      element.innerHTML = \"\\n        <div class=\\\"baker-card__content-inner\\\">\\n            <div class=\\\"baker-card__baker\\\">\\n                <div class=\\\"baker-card__baker-avatar\\\">\\n                    <img src=\".concat(this.avatar, \" alt=\\\"baker\\\">\\n                </div>\\n                <div class=\\\"baker-card__baker-name\\\">\\n                    <!-- \\u041C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0438\\u043C\\u044F -->\\n                    \\u0418\\u043C\\u044F: <span class=\\\"text-value\\\">\").concat(this.name, \"</span>\\n                </div>\\n            </div>\\n            <div class=\\\"baker-card__rating\\\">\\n                <div class=\\\"baker-card__like\\\"></div>\\n                \\u0420\\u0435\\u0439\\u0442\\u0438\\u043D\\u0433:\\n                <object class=\\\"baker-rating__star baker-card__star\\\" type=\\\"image/svg+xml\\\" data='icons/star.svg' ></object>\\n                <!-- \\u043C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0440\\u0435\\u0439\\u0442\\u0438\\u043D\\u0433\\u0430 -->\\n                <span class=\\\"baker-card__rating-number text-value\\\">\").concat(this.rating, \"</span>\\n            </div>\\n        </div>\");\n      var bakerWorks = document.createElement('div');\n      bakerWorks.classList.add('slider', 'baker-card__slider');\n      this.images.forEach(function (imageName) {\n        var cakeImg = document.createElement('div');\n        cakeImg.classList.add(\"slider__item\");\n        cakeImg.innerHTML = \"\\n                <img src=\\\"\".concat(imageName, \"\\\" alt=\\\"cake\\\">\\n            \");\n        bakerWorks.append(cakeImg);\n      });\n      element.append(bakerWorks);\n      var bakerInfo = document.createElement('div');\n      bakerInfo.classList.add(\"baker-card__content-inner\");\n      bakerInfo.innerHTML = \"\\n            <div class=\\\"baker-card__info\\\">\\n                <div class=\\\"baker-card__info-item\\\">\\n                    <!-- \\u043C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0443\\u0440\\u043E\\u0432\\u0435\\u043D\\u044C -->\\n                    \\u0423\\u0440\\u043E\\u0432\\u0435\\u043D\\u044C: <span class=\\\"text-value\\\">\".concat(this.level, \"</span>\\n                </div>\\n                <!-- \\u043C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0440\\u0430\\u0441\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 -->\\n                <div class=\\\"baker-card__info-item\\\">\\n                    \\u0420\\u0430\\u0441\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435: <span class=\\\"text-value\\\">\").concat(this.lenght, \" \\u043A\\u043C</span>\\n                </div>\\n                <!-- \\u043C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0446\\u0435\\u043D\\u0443 -->\\n                <div class=\\\"baker-card__info-item\\\">\\n                    \\u0426\\u0435\\u043D\\u0430 \\u0442\\u043E\\u0440\\u0442\\u0430, 1\\u043A\\u0433: <span class=\\\"text-value\\\">~\").concat(this.price, \" \\u20BD</span>\\n                </div>\\n            </div>\\n            <div class=\\\"baker-card__btn\\\">\\n                <a href=\\\"\").concat(this.profileLink, \"\\\"><button class=\\\"button button_v2\\\">\\u0421\\u043C\\u043E\\u0442\\u0440\\u0435\\u0442\\u044C \\u043F\\u0440\\u043E\\u0444\\u0438\\u043B\\u044C</button></a>\\n            </div>\\n        \");\n      element.append(bakerInfo);\n      bakerCardsParent.append(element);\n    }\n  }]);\n\n  return BakerCards;\n}();\n\n\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/bakerCards.js?");

/***/ }),

/***/ "./src/js/modules/comments.js":
/*!************************************!*\
  !*** ./src/js/modules/comments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comments)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//____________________шаблонизация комментария_______________________________________\nvar Comments = /*#__PURE__*/function () {\n  function Comments(avatar, name, rating, data, commentText, yesCount, noCount) {\n    _classCallCheck(this, Comments);\n\n    this.avatar = avatar;\n    this.name = name;\n    this.rating = rating;\n    this.data = data;\n    this.commentText = commentText;\n    this.yesCount = yesCount;\n    this.noCount = noCount;\n  }\n\n  _createClass(Comments, [{\n    key: \"writeHtml\",\n    value: function writeHtml(commentsSelector) {\n      //создаем карточку\n      var commentsParent = document.getElementById(commentsSelector);\n      var element = document.createElement('div');\n      element.classList.add(\"comment\", \"baker-feedback__comment\");\n      element.innerHTML = \"\\n        <div class=\\\"comment__top\\\">\\n            <div class=\\\"comment__user-inner\\\">\\n                <div class=\\\"comment__user-avatar\\\">\\n                    \".concat(this.avatar, \"\\n                </div>\\n                <div class=\\\"comment__user-info\\\">\\n                    \").concat(this.name, \"\\n                    <div class=\\\"comment__raiting\\\">\\n                        \\u041E\\u0446\\u0435\\u043D\\u043A\\u0430: \\n                        <object class=\\\"baker-rating__star baker-rating__star_small\\\" type=\\\"image/svg+xml\\\" data='icons/star.svg' ></object>\\n                        <span>\").concat(this.rating, \"</span>\\n                    </div>\\n                </div>\\n            </div>\\n            <div class=\\\"comment__data\\\">\").concat(this.data, \"</div>\\n        </div>\\n        <div class=\\\"comment__text\\\">\\n            \").concat(this.commentText, \"\\n        </div>\\n        <div class=\\\"comment__footer\\\">\\n            \\u0412\\u0430\\u043C \\u043F\\u043E\\u043C\\u043E\\u0433 \\u044D\\u0442\\u043E\\u0442 \\u043E\\u0442\\u0437\\u044B\\u0432?\\n            <div class=\\\"comment__btns\\\">\\n                <button class=\\\"comment__btn-yes\\\">\\u0434\\u0430<span>\").concat(this.yesCount, \"</span></button>\\n                <button class=\\\"comment__btn-no\\\">\\u043D\\u0435\\u0442<span>\").concat(this.noCount, \"</span></button>\\n            </div>\\n        </div>\\n        \");\n      commentsParent.append(element);\n    }\n  }]);\n\n  return Comments;\n}();\n\n\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/comments.js?");

/***/ }),

/***/ "./src/js/modules/doubleRangeSlider.js":
/*!*********************************************!*\
  !*** ./src/js/modules/doubleRangeSlider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction doubleRangeSlider() {\n  //____________________double-range-slider________________________________________\n  window.onload = function () {\n    slideOne();\n    slideTwo();\n  };\n\n  var sliderOne = document.getElementById(\"range-slider-1\");\n  var sliderTwo = document.getElementById(\"range-slider-2\");\n  var displayValOne = document.getElementById(\"range-1\");\n  var displayValTwo = document.getElementById(\"range-2\");\n  var minGap = 1200;\n  var sliderTrack = document.querySelector('.double-range-slider__track');\n  var sliderMaxValue = document.getElementById(\"range-slider-1\").max; //Атрибут событий oninput позволяет задать срабатывание скрипта, когда элемент получает ввод данных от пользователя.\n\n  function slideOne() {\n    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {\n      sliderOne.value = parseInt(sliderTwo.value) - minGap;\n    }\n\n    displayValOne.value = round100(sliderOne.value);\n    fillColor();\n  }\n\n  function slideTwo() {\n    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {\n      sliderTwo.value = parseInt(sliderOne.value) + minGap;\n    }\n\n    displayValTwo.value = round100(sliderTwo.value);\n    fillColor();\n  }\n\n  function fillColor() {\n    var percent1 = sliderOne.value / sliderMaxValue * 100;\n    var percent2 = sliderTwo.value / sliderMaxValue * 100;\n    sliderTrack.style.background = \"linear-gradient(to right, #ABAEDA \".concat(percent1, \"%, #626696 \").concat(percent1, \"%, #626696 \").concat(percent2, \"%, #ABAEDA \").concat(percent2, \"%)\");\n  }\n\n  function round100(val) {\n    return Math.round(val / 100) * 100;\n  }\n\n  sliderOne.addEventListener('input', function () {\n    slideOne();\n  });\n  sliderTwo.addEventListener('input', function () {\n    slideTwo();\n  }); //____________________block the input of large numbers________________________________________\n\n  var displayValues = document.querySelectorAll('.value-box__input');\n  displayValues.forEach(function (input, i) {\n    var min = +input.min;\n    var max = +input.max;\n    input.addEventListener('change', function (e) {\n      var value = +input.value;\n\n      if (value > max) {\n        input.value = max;\n      } else if (value < min) {\n        input.value = min;\n      }\n\n      if (i == 0) {\n        sliderOne.value = value;\n        fillColor();\n      } else if (i == 1) {\n        sliderTwo.value = value;\n        fillColor();\n      }\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doubleRangeSlider);\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/doubleRangeSlider.js?");

/***/ }),

/***/ "./src/js/modules/pagination.js":
/*!**************************************!*\
  !*** ./src/js/modules/pagination.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction pagination(elementsParent, outputElements, numberElementsPerPage) {\n  console.log(outputElements); //с чем работать - массив данных\n  //обертка(родитель), в который мы выводим массив данных\n  //количество элементов, выводимых на одной странице пагинации\n\n  var listElement = document.getElementById(elementsParent);\n  var paginationElement = document.getElementById('pagination');\n  var paginationBack = document.getElementById('paginationBack');\n  var paginationForward = document.getElementById('paginationForward');\n  var currentPage = 1;\n  var elements = numberElementsPerPage; //включает отображение slick-слайдера\n\n  function turnOnSlickSlider() {\n    if (listElement.querySelector('.slider')) {\n      $('.slider').slick({\n        arrows: true,\n        slidesToShow: 3,\n        speed: 500,\n        draggable: false,\n        centerMode: true,\n        variableWidth: true\n      });\n    }\n  } //выводит контент(элементы массива) на страницу\n\n\n  function DisplayList(items, wrapper, elementsPerPage, page) {\n    wrapper.innerHTML = \"\";\n    page--;\n    var loopStart = elementsPerPage * page;\n    var loopEnd = loopStart + elementsPerPage;\n    var paginatedItems = items.slice(loopStart, loopEnd);\n\n    for (var i = 0; i < paginatedItems.length; i++) {\n      paginatedItems[i].writeHtml(elementsParent);\n    }\n  } //высчитывает, сколько кнопок надо отобразить\n\n\n  function setupPagination(items, wrapper, elementsPerPage) {\n    wrapper.innerHTML = \"\"; //Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.\n\n    var pageCount = Math.ceil(items.length / elementsPerPage);\n\n    for (var i = 1; i <= pageCount; i++) {\n      //вызов функции создания кнопок\n      var btn = PagintationButton(i, items, elementsPerPage);\n      wrapper.appendChild(btn);\n    }\n  } //отображение кнопок \"назад\" и \"вперед\" - если первая страница, то убрать \"назад\", если последняя - то убрать \"вперед\"\n\n\n  function showRightBtn(pageCount) {\n    if (currentPage == 1) {\n      paginationBack.style.display = 'none';\n    } else if (currentPage > 1) {\n      paginationBack.style.display = 'flex';\n    }\n\n    if (currentPage == pageCount) {\n      paginationForward.style.display = 'none';\n    } else if (currentPage < pageCount) {\n      paginationForward.style.display = 'flex';\n    }\n  } //page - индекс выводимого элемента (из массива)\n\n\n  function PagintationButton(page, items, elementsPerPage) {\n    var button = document.createElement('a');\n\n    if (listElement.hasAttribute('data-scroll-to-wrapper')) {\n      button.href = \"#\".concat(elementsParent);\n    } else {\n      button.href = '#';\n    }\n\n    button.classList.add('pagination__btn');\n    button.innerHTML = page;\n    var pageCount = Math.ceil(items.length / elementsPerPage);\n\n    if (currentPage == page) {\n      button.classList.add('active');\n    }\n\n    button.addEventListener('click', function () {\n      currentPage = page;\n      DisplayList(items, listElement, elements, currentPage);\n      turnOnSlickSlider();\n      var currentBtn = document.querySelector('.pagenumbers a.active');\n      currentBtn.classList.remove('active');\n      button.classList.add('active');\n      showRightBtn(pageCount);\n    });\n    return button;\n  }\n\n  function paginationClickForwardOrBack(items, elementsPerPage) {\n    var pageCount = Math.ceil(items.length / elementsPerPage);\n\n    if (currentPage == 1) {\n      paginationBack.style.display = 'none';\n    }\n\n    paginationForward.addEventListener('click', function () {\n      if (currentPage < pageCount) {\n        currentPage++;\n        console.log(currentPage);\n        DisplayList(outputElements, listElement, elements, currentPage);\n        turnOnSlickSlider();\n        var allBtns = document.querySelectorAll('.pagenumbers .pagination__btn');\n\n        for (var i = 0; i < allBtns.length; i++) {\n          if (allBtns[i].classList == \"pagination__btn active\") {\n            allBtns[i].classList.remove('active');\n            allBtns[i + 1].classList.add('active');\n            break;\n          }\n        }\n\n        showRightBtn(pageCount);\n      }\n    });\n    paginationBack.addEventListener('click', function () {\n      if (currentPage > 1) {\n        currentPage--;\n        console.log(currentPage);\n        DisplayList(outputElements, listElement, elements, currentPage);\n        turnOnSlickSlider();\n        var allBtns = document.querySelectorAll('.pagenumbers .pagination__btn');\n\n        for (var i = 0; i < allBtns.length; i++) {\n          if (allBtns[i].classList == \"pagination__btn active\") {\n            allBtns[i].classList.remove('active');\n            allBtns[i - 1].classList.add('active');\n            break;\n          }\n        }\n\n        showRightBtn(pageCount);\n      }\n    });\n  }\n\n  DisplayList(outputElements, listElement, elements, currentPage);\n  setupPagination(outputElements, paginationElement, elements);\n  paginationClickForwardOrBack(outputElements, elements);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pagination);\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/pagination.js?");

/***/ }),

/***/ "./src/js/modules/radioInput.js":
/*!**************************************!*\
  !*** ./src/js/modules/radioInput.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction radio() {\n  // const inputsRadio = document.querySelectorAll('[type=\"radio\"]');\n  // const inputsBoxs = document.querySelectorAll('[data-box=\"radio\"]');\n  function changeRadio(parentSelector) {\n    var inputsRadio = parentSelector.querySelectorAll('input');\n    var inputsBoxs = parentSelector.querySelectorAll('span');\n    inputsRadio.forEach(function (input, i) {\n      input.addEventListener('click', function () {\n        if (input.getAttribute('checked')) {\n          inputsBoxs[i].classList.remove('check-form__box_checked');\n          input.removeAttribute('checked');\n        } else {\n          inputsRadio.forEach(function (input, i) {\n            inputsBoxs[i].classList.remove('check-form__box_checked');\n            input.removeAttribute('checked');\n          });\n          inputsBoxs[i].classList.add('check-form__box_checked');\n          input.setAttribute('checked', true);\n        }\n      });\n    });\n  }\n\n  changeRadio(document.querySelector('.sort-form__check-rating'));\n  changeRadio(document.querySelector('.sort-form__check-level'));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (radio);\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/radioInput.js?");

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction custSelect() {\n  //____________________castomize select________________________________________\n  var selectHeader = document.querySelectorAll('.select-block__header');\n  var selectItems = document.querySelectorAll('.select-block__item');\n\n  var selectToggle = function selectToggle() {\n    this.parentElement.classList.toggle('select-block__inner_active');\n  };\n\n  var selectChoose = function selectChoose() {\n    var parent = this.closest('.select-block__inner');\n    var thisHeader = parent.querySelector('.select-block__header');\n\n    if (!thisHeader.hasAttribute('data-cannot-change-header')) {\n      var currentText = parent.querySelector('.select-item');\n      currentText.innerText = this.innerText;\n    }\n\n    parent.classList.remove('select-block__inner_active');\n  };\n\n  var select = function select() {\n    selectHeader.forEach(function (item) {\n      item.addEventListener('click', selectToggle);\n    });\n    selectItems.forEach(function (item, i) {\n      item.addEventListener('click', selectChoose);\n    });\n  };\n\n  select();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (custSelect);\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/select.js?");

/***/ }),

/***/ "./src/js/modules/spoiler.js":
/*!***********************************!*\
  !*** ./src/js/modules/spoiler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction spoiler() {\n  var spoilerParents = document.querySelectorAll('.spoiler');\n  spoilerParents.forEach(function (item, id) {\n    item.addEventListener('click', function () {\n      var spoilerInfo = item.querySelector('.spoiler__info');\n      var spoilerIcon = item.querySelector('.spoiler__icon');\n\n      if (spoilerInfo.classList.contains('spoiler__hide')) {\n        spoilerInfo.classList.remove('spoiler__hide');\n        item.style.margin = '25px 0 0 0';\n        spoilerIcon.setAttribute('data', 'icons/spoiler-minus.svg');\n      } else {\n        spoilerInfo.classList.add('spoiler__hide');\n\n        if (!(id === spoilerParents.length - 1)) {\n          item.style.margin = '25px 50px 0 0';\n        }\n\n        spoilerIcon.setAttribute('data', 'icons/spoiler-plus.svg');\n      }\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spoiler);\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/spoiler.js?");

/***/ }),

/***/ "./src/js/modules/uploadFile.js":
/*!**************************************!*\
  !*** ./src/js/modules/uploadFile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction uploadFile() {\n  var uploadInput = document.querySelector('.selected-product__upload-input');\n  var uploadBtn = document.querySelector('.selected-product__upload-btn');\n  uploadBtn.addEventListener('click', function () {\n    uploadInput.click();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadFile);\n\n//# sourceURL=webpack://peregorodkalab/./src/js/modules/uploadFile.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/select */ \"./src/js/modules/select.js\");\n/* harmony import */ var _modules_doubleRangeSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/doubleRangeSlider */ \"./src/js/modules/doubleRangeSlider.js\");\n/* harmony import */ var _modules_radioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/radioInput */ \"./src/js/modules/radioInput.js\");\n/* harmony import */ var _modules_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pagination */ \"./src/js/modules/pagination.js\");\n/* harmony import */ var _modules_bakerCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/bakerCards */ \"./src/js/modules/bakerCards.js\");\n/* harmony import */ var _modules_comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/comments */ \"./src/js/modules/comments.js\");\n/* harmony import */ var _modules_spoiler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/spoiler */ \"./src/js/modules/spoiler.js\");\n/* harmony import */ var _modules_uploadFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/uploadFile */ \"./src/js/modules/uploadFile.js\");\n// \"use strict\";\n//npx json-server db.json\n//npx json-server --watch db.json --port 3004\n\n\n\n\n\n\n\n // import {getResourse} from './services/services';\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  if (window.location.href == \"http://localhost:3000/\" || window.location.pathname == \"/index.html\") {\n    (0,_modules_select__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  if (window.location.pathname == \"/result-search.html\") {\n    (0,_modules_select__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_modules_doubleRangeSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    var bakerCardsInfo = [];\n    fetch('http://localhost:3004/bakerCards') //придет массив с объектами карточек\n    .then(function (data) {\n      return data.json();\n    }).then(function (res) {\n      //сколько будет карточек на сервере - столько раз их создаст\n      res.forEach(function (_ref) {\n        var avatar = _ref.avatar,\n            name = _ref.name,\n            rating = _ref.rating,\n            images = _ref.images,\n            level = _ref.level,\n            lenght = _ref.lenght,\n            price = _ref.price,\n            profileLink = _ref.profileLink;\n        //разбили объект в свойства\n        // new BakerCards(obj.img, obj.altimg, obj.title ).writeHtml();\n        //не оч хорошо, когда мы перебираем свойства. используем деструктуризацию объетка\n        //вытаскиваем отдельные свойства в отдельную переменную\n        bakerCardsInfo.push(new _modules_bakerCards__WEBPACK_IMPORTED_MODULE_4__[\"default\"](avatar, name, rating, images, level, lenght, price, profileLink));\n      });\n      $(document).ready(function () {\n        $('.slider').slick({\n          arrows: true,\n          slidesToShow: 3,\n          speed: 500,\n          //прокрутка слайдов на пк\n          draggable: false,\n          centerMode: true,\n          variableWidth: true\n        });\n      });\n      (0,_modules_pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('cardsWrapper', bakerCardsInfo, 3); //передается id без решетки, массив данных (каждый item - класс)\n    });\n    (0,_modules_radioInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n\n  if (window.location.pathname == \"/profile.html\") {\n    $(document).ready(function () {\n      $('.slider').slick({\n        arrows: true,\n        slidesToShow: 3,\n        draggable: false,\n        centerMode: true,\n        variableWidth: true,\n        dots: true\n      });\n    });\n    (0,_modules_select__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    var commentsItems = [];\n    fetch('http://localhost:3004/comments') //придет массив с объектами карточек\n    .then(function (data) {\n      return data.json();\n    }).then(function (res) {\n      res.forEach(function (_ref2) {\n        var avatar = _ref2.avatar,\n            name = _ref2.name,\n            rating = _ref2.rating,\n            data = _ref2.data,\n            commentText = _ref2.commentText,\n            yesCount = _ref2.yesCount,\n            noCount = _ref2.noCount;\n        commentsItems.push(new _modules_comments__WEBPACK_IMPORTED_MODULE_5__[\"default\"](avatar, name, rating, data, commentText, yesCount, noCount));\n      });\n      (0,_modules_pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('commentsWrapper', commentsItems, 3);\n    });\n    (0,_modules_spoiler__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    (0,_modules_uploadFile__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  }\n});\n\n//# sourceURL=webpack://peregorodkalab/./src/js/script.js?");

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