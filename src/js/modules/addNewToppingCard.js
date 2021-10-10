import NewCakeCard from './creatureCakeCard';
import addMoreWeights from './addMoreWeights';
import addCakePhoto from './addCakePhoto';

function addNewToppingCard () {
    const cardsWrapper = document.querySelector('.add-toppings__cards-wrapper');
    const addBtn = document.querySelector('.add-toppings__add-btn');

    addBtn.addEventListener('click', () => {
        const numCards = cardsWrapper.querySelectorAll('.creature-cake-card').length;
        new NewCakeCard(numCards).writeHtml('.add-toppings__cards-wrapper');
        addCakePhoto(cardsWrapper.lastChild, {
            accept: ['.png', '.jpg', '.jpeg'] //какие типы файлов поддерживаются
        });
        addMoreWeights(cardsWrapper.lastChild.querySelector('.creature-cake-card__weights'));
    })

    
    //у заполненной карты будет класс, у которого будет отступ снизу
    //навесить обработчик на все кнопки "добавить"
    //если у кнопки дата атрибут добавить, то валидация + создание новой карты + добавление класса см выше
    //если у кнопки дата атрибут удалить, обращаемся к ближайшему родител-карте и удаляем из dom
    //кнопку добавить заменить на очистить, которая disabled, если все поля пустые
    //добавить крестик на все карточки, кроме первой
    // под карточками кнопка добавления новой карточки


}
export default addNewToppingCard;