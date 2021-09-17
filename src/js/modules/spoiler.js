function spoiler(){
    const spoilerParents = document.querySelectorAll('.spoiler');

    spoilerParents.forEach((item, id) => {
        item.addEventListener('click', () => {
            const spoilerInfo = item.querySelector('.spoiler__info');
            const spoilerIcon = item.querySelector('.spoiler__icon');

            if (spoilerInfo.classList.contains('spoiler__hide')){
                spoilerInfo.classList.remove('spoiler__hide');
                item.style.margin = '25px 0 0 0'; 
                spoilerIcon.setAttribute('data', 'icons/spoiler-minus.svg');
            } else {
                spoilerInfo.classList.add('spoiler__hide');
                if (!(id === spoilerParents.length - 1)){
                    item.style.margin = '25px 50px 0 0'; 
                }
                spoilerIcon.setAttribute('data', 'icons/spoiler-plus.svg');
            }
        });
    });
}
export default spoiler;