import BakerCards from './bakerCards';
import pagination from './pagination';

function filterCards (data) {
   console.log(data);

   //баг с пагинацией при фильтрации - скорее всего, из-за глобальных переменных currentPage и тп. и проблема именно в кнопках вперед и назад
   //после первой прогрузки пагинации что-то происходит с глобальными переменными.

   //target buttons for select
   const sortCheapBtn = document.querySelector('[data-value="cheap"]');
   const sortExpensiveBtn = document.querySelector('[data-value="expensive"]');
   const sortRatingBtn = document.querySelector('[data-value="rating"]');
   const sortDistanceBtn = document.querySelector('[data-value="near"]');

   //target buttons for left filters
   const filterByDictanceBtn = document.querySelector('.sort-form__radius');

   
   // target buttons click listeners
   sortCheapBtn.addEventListener('click', () => sortByChipPrice());
   sortExpensiveBtn.addEventListener('click', () => sortByExpensivePrice());
   sortRatingBtn.addEventListener('click', () => sortByRating());
   sortDistanceBtn.addEventListener('click', () => sortByDistance());

   filterByDictanceBtn.addEventListener('click', (e) => filterDistance(e));


   const temp = JSON.parse(JSON.stringify(data));

   // functions (for select)
   function sortByChipPrice (){
      temp.sort((a, b) => a.price > b.price ? 1 : -1);
      changeData(temp);
   }
   
   function sortByExpensivePrice (){
      temp.sort((a, b) => a.price < b.price ? 1 : -1);
      changeData(temp);
   }

   function sortByRating (){
      temp.sort((a, b) => a.rating < b.rating ? 1 : -1);
      changeData(temp);
   }

   function sortByDistance (){
      temp.sort((a, b) => a.lenght > b.lenght ? 1 : -1);
      changeData(temp);
   }


   
   // functions (for left filters)

   let lastActiveDistanceItem = null;
   function filterDistance (e){

      if (e.target.classList.contains('sort-form__radius-item')){
         const activeClass = 'sort-form__radius-item_selected';
         if (lastActiveDistanceItem){//если не равен null
            lastActiveDistanceItem.classList.remove(activeClass);//у предыдущего item, который был нажат, удаляем класс активности
         }
         e.target.classList.add(activeClass);
         lastActiveDistanceItem = e.target;//перезаписываем значение последнего нажатого item, чтобы в будущем сразу получить к нему доступ для удаления activeClass
         
         const radius = +e.target.innerHTML;
         const localData = JSON.parse(JSON.stringify(data)).filter((item) => item.lenght <= radius);
         console.log(localData);
         changeData(localData);
      }
      
   }






   //обновляем данные (перезаписываем на странице в нужном порядке)
   function changeData(res) {
      //показываем иконку загрузки
      document.querySelector('#loading').classList.remove('hide');
      document.querySelector('#cardsWrapper').classList.add('hide');
      document.querySelector('#seeMore').classList.add('hide');
      const bakerCardsInfo = [];

      res.forEach(({avatar, name, rating, images, level, lenght, price, profileLink}) => {
         bakerCardsInfo.push(new BakerCards(avatar, name, rating, images, level, lenght, price, profileLink));
      });

      pagination('cardsWrapper', bakerCardsInfo, 3);

      $(document).ready(function () {
         $('.slider').slick({
            arrows: true,
            slidesToShow: 3,
            speed: 500,
            draggable: false,
            centerMode: true,
            variableWidth: true,
         });
         //убираем иконку загрузки
         $('#loading').addClass('hide');
         $('#cardsWrapper').removeClass('hide');
         $('#seeMore').removeClass('hide');
      });
   }
}
export default filterCards;