function sliderWithAddSlide (){
    $('.slider').slick({
        arrows: true,
        slidesToShow: 5,
        draggable: false,
        // centerMode: true,
        infinite: false,//!!!
        variableWidth: true,
        dots: true
    });

    //минимальное количество фото в слайдере = 5
    let slideIndex = 5;

    const slide = `
        <div data-addSlidePhoto class="slider__item upload-photo">
            <div class="upload-photo slider__photo">
                <input class="upload-photo__input" name="slide-photo-${slideIndex + 1}" type="file">
                <img class="upload-photo__icon" src="icons/upload2.svg"></img>

                <div class="upload-photo__img-wrapper">
                    <div class="upload-photo__remove">
                        <img data-remove src="icons/preview-close.svg" alt="preview-close">
                    </div>
                    <img class="upload-photo__img" src="" alt="cake">
                </div>
            </div>
            <input class="create-profile__slide-tag-input" name="slide-tag-input-${slideIndex + 1}" type="text" placeholder="Введите #тэг">
        </div>
    `;

    $('.js-add-slide').on('click', function() {
        slideIndex++;
        $('.slider').slick('slickAdd', slide);
    });

    $('.js-remove-slide').on('click', function() {
        if (slideIndex !== 5){
            $('.slider').slick('slickRemove',slideIndex - 1);
            slideIndex--;
        }
    });
}
export default sliderWithAddSlide;