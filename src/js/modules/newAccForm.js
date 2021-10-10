
function forms (formSelector){
    // Отправка формы на форму на server.php
    const form = document.querySelector(formSelector);
    bindPostData(form);

    // document.querySelectorAll('[type="text"]').forEach(item => {
    //     item.value = 'sadad';
    // })
    // document.querySelectorAll('[type="number"]').forEach(item => {
    //     item.value = '40';
    // })

    //лучше выносить общение с сервером в отдельную функцию, тк разные формы, например, могут отправляться на разные сервера
    
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();//убираем перезагрузку сервера при отправке формы
            
            //formdata - спец объект, который позволяет с формы формировать данные в формате ключ-значение

            const formData = new FormData(form);//передаетя форма из арг функции
            //!в input необходимо всегда указывать атрибут name, иначе formdata не сможем работать

            form.querySelectorAll('input[type="file"]').forEach(input => {
                // console.log(input.name);
                // console.log(input.closest('.upload-photo').querySelector('.upload-photo__img').src);
                formData.set(input.name, input.value);
            });
            console.log(formData.get('0-cake-photo'));//как правильно передать изображения на сервер?


            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // const obj2 = {a: 23, B: 50};
            // console.log(Object.entries(obj2));
            //метод берет объект, превращает его в массив, внутри которого массивы из двух элементов ключ-значение
            //[ [ 'a', 23 ], [ 'B', 50 ] ] - матрица


            fetch('http://localhost:3004/requests', {
                method: "POST",
                //но потом мы сделаеи, то в postdata передается аргумент, овтечающий за формат данных,
                //в зависимости от которого будет создаваться нужный заголовок
                headers: {
                    'Content-type': 'application/json'
                },
                body: json
            })
            .then(data => data.json())
            .then(data => {
                // console.log(data);//data - данные, которые вернул сервер (промис)
            })
            .finally(() => {
                form.reset();
            });

        }); 
    }

}
export default forms;