import BakerCards from './bakerCards';
import pagination from './pagination';

function filterCards (data) {
   console.log(data);

   //target buttons for select
   const sortCheapBtn = document.querySelector('[data-value="cheap"]');
   const sortExpensiveBtn = document.querySelector('[data-value="expensive"]');
   const sortRatingBtn = document.querySelector('[data-value="rating"]');
   const sortDistanceBtn = document.querySelector('[data-value="near"]');
   const sortRecommendedBtn = document.querySelector('[data-value="recommended"]');

   //target buttons for left filters
   const filterByDictanceBtn = document.querySelector('.sort-form__radius');
   const filterByLevel = document.querySelector('.sort-form__check-level');
   const filterByRating = document.querySelector('.sort-form__check-rating');

   
   // target buttons click listeners
   sortCheapBtn.addEventListener('click', () => sortByChipPrice());
   sortExpensiveBtn.addEventListener('click', () => sortByExpensivePrice());
   sortRatingBtn.addEventListener('click', () => sortByRating());
   sortDistanceBtn.addEventListener('click', () => sortByDistance());
   sortRecommendedBtn.addEventListener('click', () => sortByRecommendation());

   filterByDictanceBtn.addEventListener('click', (e) => filterDistance(e));
   filterByLevel.querySelectorAll('input').forEach((input) => {
      input.addEventListener('click', () => filterLevel(input));
   });
   filterByRating.querySelectorAll('input').forEach((input) => {
      input.addEventListener('click', () => filterRating(input));
   });


   const temp = JSON.parse(JSON.stringify(data));//отсортированные данные без фильтрации

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
      temp.sort((a, b) => a.distance > b.distance ? 1 : -1);
      changeData(temp);
   }
   function sortByRecommendation(){
      changeData(data);
   }


   
   // functions (for left filters)

   let lastActiveDistanceItem = null;
   function filterDistance (e){
      const localData = JSON.parse(JSON.stringify(temp)); //от temp, тк перед фильтрацией может быть сортировка
      if (e.target.classList.contains('sort-form__radius-item')){
         const activeClass = 'sort-form__radius-item_selected';
         if (lastActiveDistanceItem){//если не равен null
            lastActiveDistanceItem.classList.remove(activeClass);//у предыдущего item, который был нажат, удаляем класс активности
         }
         if (lastActiveDistanceItem === e.target){//нажали по тому, что кликнули до этого
            const result = localData;
            lastActiveDistanceItem = null;
            changeData(result);
            return;
         }
         e.target.classList.add(activeClass);
         lastActiveDistanceItem = e.target;//перезаписываем значение последнего нажатого item, чтобы в будущем сразу получить к нему доступ для удаления activeClass
         
         const radius = +e.target.innerHTML;
         const result = localData.filter((item) => item.distance <= radius);
         // console.log(result);
         changeData(result);
      }
      
   }

   const level = {
      amateur: 'любитель',
      beginner: 'начинающий',
      pro: 'профи'
   };
   function filterLevel (input){
      if (!input.getAttribute('checked')){
         console.log('ничего не выбрано');
         changeData(temp);
         return;
      }

      const localData = JSON.parse(JSON.stringify(temp));
      const levelName = input.name.slice(6);//все name в формате level-...
      const result = localData.filter((item) => item.level === level[levelName]);
      // console.log(result);
      changeData(result);
   }


   function filterRating (input){
      if (!input.getAttribute('checked')){
         console.log('ничего не выбрано');
         changeData(temp);
         return;
      }
      const localData = JSON.parse(JSON.stringify(temp));
      const ratingNum = +input.name.slice(7);//все name в формате rating-...
      const result = localData.filter((item) => item.rating >= ratingNum);
      changeData(result);
   }









   //_____________________________________________________________
   //обновляем данные (перезаписываем на странице в нужном порядке)
   function changeData(res) {
      //показываем иконку загрузки
      document.querySelector('#loading').classList.remove('hide');
      document.querySelector('#cardsWrapper').classList.add('hide');
      document.querySelector('#seeMore').classList.add('hide');
      const bakerCardsInfo = [];

      res.forEach(({avatar, name, rating, images, level, distance, price, profileLink}) => {
         bakerCardsInfo.push(new BakerCards(avatar, name, rating, images, level, distance, price, profileLink));
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