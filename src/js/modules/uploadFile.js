function uploadFile(selectors, options = {}){
    let files = [];

    selectors.forEach(input =>{
        const uploadInput = input;

        if (uploadInput.parentElement.querySelector('button')){//если после полученного интупа уже создана кнопка по загрузке файлов, то пропускаю этот инпут
            return;
        }

        const openBtn = document.createElement('button');
        openBtn.classList.add('selected-product__upload-btn');
        
        const btnText = document.createElement('span');
        btnText.classList.add('selected-product__title');
        btnText.textContent = "Загрузить пример:";
        openBtn.append(btnText);

        const openIcon = document.createElement('object');
        openIcon.classList.add('selected-product__upload-icon');
        openIcon.setAttribute('type', 'image/svg+xml');
        openIcon.setAttribute('data', 'icons/upload.svg');
        openBtn.append(openIcon);

        const preview = document.createElement('div');
        preview.classList.add('selected-product__preview');

        if(options.multi){//есть параметр, равный true
            uploadInput.setAttribute('multiple', true);//позволяет выбрать несколько файлов
        }
        if (options.accept && Array.isArray(options.accept)){
            uploadInput.setAttribute('accept', options.accept.join(','));//соединяем массив в строку перез запятую
        }

        uploadInput.insertAdjacentElement('afterend', openBtn);//помещает кнопку после себя
        uploadInput.insertAdjacentElement('afterend', preview);

        const moreBtn = document.createElement('button');
        moreBtn.classList.add('selected-product__more-btn');
        const moreIcon = document.createElement('object');
        moreIcon.classList.add('selected-product__more-icon');
        moreIcon.setAttribute('type', 'image/svg+xml');
        moreIcon.setAttribute('data', 'icons/preview-more.svg');
        moreBtn.append(moreIcon);



        const changeHandler = event => {
            // console.log(event.target.files);//выведет элемент типа filelist со всеми выбранными файлами
            if (!event.target.files.length){//эквивалентна записи == 0, но 0 - это false
                return;
            }//если мы ничего не выбрали, то ничего не делаем

            openBtn.style.display = "none";
            files = Array.from(event.target.files);//изначально не массив, а объект
            // preview.innerHTML = '';//очищаем контент, чтобы при новой загрузке файлы не добавлялись, а загружались заново
            files.forEach(file => {
                if(!file.type.match('image')){
                    //file.type у картинок - image/расширение, например, image/jpg
                    //проверяем, что в file type не содержится строки image
                    console.log('Это не картинка');
                    return;//мы работает только с картинками - отрубаемся
                }

                //создаем превью
                const reader = new FileReader();
                reader.onload = ev => {
                    // console.log(ev.target.result);//ev - событие, в котором есть пункт result, где написан путь к файлу в формате base64

                    const previewContent = document.createElement('div');
                    previewContent.classList.add('selected-product__preview-image');
                    previewContent.innerHTML = `
                        <div class="selected-product__preview-remove">
                            <img src="icons/preview-close.svg" data-name="${file.name}" alt="preview-close">
                        </div>
                        <img src="${ev.target.result}" alt="${file.name}">
                    `;
                    preview.insertAdjacentElement('afterbegin', previewContent);//внутри preview
                };
                reader.readAsDataURL(file);//асинхронная операция
            });
            preview.insertAdjacentElement('beforeend', moreBtn);
        };

        const removeHandler = event => {
            //если есть data-атрибут
            if (!event.target.dataset.name){
                return;
            }
            
            const name = event.target.dataset.name;
            files = files.filter(file => file.name !== name);
            //удалили из массива, но нужно удалить и из DOM

            const block = preview
                .querySelector(`[data-name="${name}"]`)
                .closest('.selected-product__preview-image');
            block.remove();//можно сделать анимацию по удалению блоков, см то видео на 1:01:00

            //появление кнопки "загрузить", если не осталось превью
            const elements = preview.querySelectorAll('.selected-product__preview-image');
            if (!elements.length){
                moreBtn.remove();
                openBtn.style.display = "flex";
            }
            
        };


        moreBtn.addEventListener('click', () => {
            uploadInput.click();
        });
        openBtn.addEventListener('click', () => {
            uploadInput.click();
        });
        uploadInput.addEventListener('change', changeHandler);
        preview.addEventListener('click', removeHandler);
    });
    
}
export default uploadFile;