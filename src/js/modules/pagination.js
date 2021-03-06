function pagination(elementsParent, outputElements, numberElementsPerPage) {
   // console.log(outputElements);
   //с чем работать - массив данных
   //обертка(родитель), в который мы выводим массив данных
   //количество элементов, выводимых на одной странице пагинации

   const listElement = document.getElementById(elementsParent);
   const paginationElement = document.getElementById('pagination');
   const paginationBackWrapper = document.getElementById('paginationBackWrapper');
   const paginationForwardWrapper = document.getElementById('paginationForwardWrapper');

   let currentPage = 1;
   const elements = numberElementsPerPage;

   //при обновлении данных на странице (outputElements), обработчики событий продолжают навешиваться на существующие кнопки вперед и назад (они изначально были в DOM,
   // а не создавались динамически, как сейчас будет в коде ниже). Я НЕ ЗНАЮ, как сделать удаление обработчиков с кнопок при очередном запуске всей функции pagination
   //поэтому просто буду пересоздавать кнопки. точнее, мне просто нужно передавать в addEventListener обновлённые данные, но я НЕ ЗНАЮ КАК
   paginationBackWrapper.innerHTML = `
      <a href="#" class="pagination__back" id="paginationBack">
         <div class="pagination__back-content">назад</div>
      </a>
   `;
   paginationForwardWrapper.innerHTML = `
      <a href="#" class="pagination__forward" id="paginationForward">
         <div class="pagination__forward-content">вперед</div>
      </a>
   `;
   const paginationBack = paginationBackWrapper.querySelector('#paginationBack');
   const paginationForward = paginationForwardWrapper.querySelector('#paginationForward');




   //включает отображение slick-слайдера
   function turnOnSlickSlider() {
      if (listElement.querySelector('.slider')) {
         $('.slider').slick({
            arrows: true,
            slidesToShow: 3,
            speed: 500,
            draggable: false,
            centerMode: true,
            variableWidth: true,
         });
      }
   }

   //выводит контент(элементы массива) на страницу
   function DisplayList(items, wrapper, elementsPerPage, page) {
      wrapper.innerHTML = "";
      page--;

      const loopStart = elementsPerPage * page;
      const loopEnd = loopStart + elementsPerPage;
      const paginatedItems = items.slice(loopStart, loopEnd);
      for (let i = 0; i < paginatedItems.length; i++) {
         paginatedItems[i].writeHtml(elementsParent);
      }
   }
   //высчитывает, сколько кнопок надо отобразить
   function setupPagination(items, wrapper, elementsPerPage) {
      wrapper.innerHTML = "";
      //Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
      let pageCount = Math.ceil(items.length / elementsPerPage);
      for (let i = 1; i <= pageCount; i++) {
         //вызов функции создания кнопок
         let btn = PagintationButton(i, items, elementsPerPage);
         wrapper.appendChild(btn);
      }
   }
   //отображение кнопок "назад" и "вперед" - если первая страница, то убрать "назад", если последняя - то убрать "вперед"
   function showRightBtn(pageCount) {
      if (currentPage == 1) {
         paginationBack.style.display = 'none';
      } else if (currentPage > 1) {
         paginationBack.style.display = 'flex';
      }

      if (currentPage == pageCount) {
         paginationForward.style.display = 'none';
      } else if (currentPage < pageCount) {
         paginationForward.style.display = 'flex';
      }
   }


   //page - индекс выводимого элемента (из массива)
   function PagintationButton(page, items, elementsPerPage) {
      let button = document.createElement('a');
      if (listElement.hasAttribute('data-scroll-to-wrapper')) {
         button.href = `#${elementsParent}`;
      } else {
         button.href = '#';
      }
      button.classList.add('pagination__btn');
      button.innerHTML = page;
      let pageCount = Math.ceil(items.length / elementsPerPage);

      if (currentPage == page) {
         button.classList.add('active');
      }
      button.addEventListener('click', function () {
         currentPage = page;
         DisplayList(items, listElement, elements, currentPage);

         turnOnSlickSlider();


         let currentBtn = document.querySelector('.pagenumbers a.active');
         currentBtn.classList.remove('active');

         button.classList.add('active');

         showRightBtn(pageCount);
      });
      return button;
   }

   function paginationClickForwardOrBack(items, elementsPerPage) {
      let pageCount = Math.ceil(items.length / elementsPerPage);
      if (currentPage == 1) {
         paginationBack.style.display = 'none';
      }
      paginationForward.addEventListener('click', () => paginationClickForward(pageCount), false);
      paginationBack.addEventListener('click', () => paginationClickBack(pageCount), false);
   }

   function paginationClickForward(pageCount) {
      if (currentPage < pageCount) {
         console.log(`Количество страниц = ${pageCount}`);
         currentPage++;
         console.log(`Текущая страница = ${currentPage}`);

         DisplayList(outputElements, listElement, elements, currentPage);

         turnOnSlickSlider();

         const allBtns = document.querySelectorAll('.pagenumbers .pagination__btn');
         for (let i = 0; i < allBtns.length; i++) {
            if (allBtns[i].classList == "pagination__btn active") {
               allBtns[i].classList.remove('active');
               allBtns[i + 1].classList.add('active');
               break;
            }
         }

         showRightBtn(pageCount);
      }
   }

   function paginationClickBack(pageCount) {
      if (currentPage > 1) {

         console.log(`Количество страниц = ${pageCount}`);
         currentPage--;
         console.log(`Текущая страница = ${currentPage}`);
         DisplayList(outputElements, listElement, elements, currentPage);

         turnOnSlickSlider();

         const allBtns = document.querySelectorAll('.pagenumbers .pagination__btn');
         for (let i = 0; i < allBtns.length; i++) {
            if (allBtns[i].classList == "pagination__btn active") {
               allBtns[i].classList.remove('active');
               allBtns[i - 1].classList.add('active');
               break;
            }
         }

         showRightBtn(pageCount);
      }
   }

   DisplayList(outputElements, listElement, elements, currentPage);
   setupPagination(outputElements, paginationElement, elements);
   paginationClickForwardOrBack(outputElements, elements);
}
export default pagination;