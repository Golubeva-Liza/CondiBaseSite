function doubleRangeSlider(){
    //____________________double-range-slider________________________________________

    window.onload = function(){
        slideOne();
        slideTwo();
    };

    let sliderOne = document.getElementById("range-slider-1");
    let sliderTwo = document.getElementById("range-slider-2");
    let displayValOne = document.getElementById("range-1");
    let displayValTwo = document.getElementById("range-2");
    let minGap = 1200;
    let sliderTrack = document.querySelector('.double-range-slider__track');
    let sliderMaxValue = document.getElementById("range-slider-1").max;

    //Атрибут событий oninput позволяет задать срабатывание скрипта, когда элемент получает ввод данных от пользователя.

    function slideOne(){
        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        displayValOne.value = round100(sliderOne.value);
        fillColor();
    }

    function slideTwo(){
        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        displayValTwo.value = round100(sliderTwo.value);
        fillColor();
    }

    function fillColor(){
        let percent1 = (sliderOne.value / sliderMaxValue) * 100;
        let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #ABAEDA ${percent1}%, #626696 ${percent1}%, #626696 ${percent2}%, #ABAEDA ${percent2}%)`;
    }

    function round100(val) {
        return Math.round(val / 100) * 100;
    }

    sliderOne.addEventListener('input', () => {
        slideOne();
    });
    sliderTwo.addEventListener('input', () => {
        slideTwo();
    });





    
    //____________________block the input of large numbers________________________________________

    const displayValues = document.querySelectorAll('.value-box__input');
    displayValues.forEach((input, i) => {
        const min = +input.min;
        const max = +input.max;

        input.addEventListener('change', (e) => {
            const value = +input.value;
            if (value > max) {
                input.value = max; 
            }
            else if (value < min) {
                input.value = min; 
            }
            if (i == 0){
                sliderOne.value = value;
                fillColor();
            }
            else if (i == 1){
                sliderTwo.value = value;
                fillColor();
            }

        });
    });
}
export default doubleRangeSlider;