//делает get запрос для формирования карточек
const getResourse = async (url) => {
    const res = await fetch(url);

    //fetch не выдаст catch из-за ошибки http-запроса, поэтому вручную исправляем это
    //свойства у промиса, возвращаемого из fetch - ok и status

    if (!res.ok) {
        //объект ошибки
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    
    //перевод тоже может долго идти
    return await res.json();//это промис
};

export {getResourse};