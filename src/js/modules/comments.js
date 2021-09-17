//____________________шаблонизация комментария_______________________________________
export default class Comments {
    constructor (avatar, name, rating, data, commentText, yesCount, noCount){
        this.avatar = avatar;
        this.name = name;
        this.rating = rating;
        this.data = data;
        this.commentText = commentText;
        this.yesCount = yesCount;
        this.noCount = noCount;
    }

    writeHtml(commentsSelector){
        //создаем карточку
        const commentsParent = document.getElementById(commentsSelector);
        const element = document.createElement('div');
        element.classList.add("comment", "baker-feedback__comment");

        element.innerHTML = `
        <div class="comment__top">
            <div class="comment__user-inner">
                <div class="comment__user-avatar">
                    ${this.avatar}
                </div>
                <div class="comment__user-info">
                    ${this.name}
                    <div class="comment__raiting">
                        Оценка: 
                        <object class="baker-rating__star baker-rating__star_small" type="image/svg+xml" data='icons/star.svg' ></object>
                        <span>${this.rating}</span>
                    </div>
                </div>
            </div>
            <div class="comment__data">${this.data}</div>
        </div>
        <div class="comment__text">
            ${this.commentText}
        </div>
        <div class="comment__footer">
            Вам помог этот отзыв?
            <div class="comment__btns">
                <button class="comment__btn-yes">да<span>${this.yesCount}</span></button>
                <button class="comment__btn-no">нет<span>${this.noCount}</span></button>
            </div>
        </div>
        `;
        
        commentsParent.append(element);
    }
}
