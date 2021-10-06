function addCakePhoto(cardElement, options = {}){
    const photo = cardElement.querySelector('.upload-photo');
    const uploadInput = cardElement.querySelector('.upload-photo__input');
    const uploadIcon = photo.querySelector('.upload-photo__icon');
    const cardImg = photo.querySelector('.upload-photo__img');
    const imgWrapper = photo.querySelector('.upload-photo__img-wrapper');

    let file = [];

    if (options.accept && Array.isArray(options.accept)){
        uploadInput.setAttribute('accept', options.accept.join(','));//соединяем массив в строку перез запятую
    }


    photo.addEventListener('click', (e) => {
        //если это кнопка для удаления фотографии
        if(e.target.hasAttribute('data-remove')){
            //скрыть иконку загрузки, показать картинку, поставить нужный src
            uploadIcon.style.display = "block";
            imgWrapper.style.display = "none";
            cardImg.setAttribute("src", '');
            uploadInput.value = '';
        } else {
            uploadInput.click();
        }
        
    })

    uploadInput.addEventListener('change', (e) => {
        if (!e.target.files.length){
            console.log('Не выбран файл');
            return;
        }
        
        file = Array.from(e.target.files)[0];

        if(!file.type.match('image')){
            //file.type у картинок - image/расширение, например, image/jpg
            console.log('Это не картинка');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);//асинхронная операция
        reader.onload = event => {
            // console.log(ev.target.result);//ev - событие, в котором есть пункт result, где написан путь к файлу в формате base64
            uploadIcon.style.display = "none";
            imgWrapper.style.display = "block";
            cardImg.setAttribute("src", event.target.result);            
        };
        
    })
}
export default addCakePhoto;