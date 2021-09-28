function calendar(parent, selector) {
    const calendarParent = parent.querySelector(selector);

    const date = new Date();
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];

    let click = 0;
    let monthAndYear = '';
    let monthAndYearNow = '';
    if (new Date().getMonth() < 10){
        monthAndYearNow  = `0${new Date().getMonth()}`;
    }else{
        monthAndYearNow  = new Date().getMonth();
    }



    const renderCalendar = () => {
        const monthDays = calendarParent.querySelector('.calendar__days');
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();//получаем последний день этого месяца
        
        date.setDate(1);//установили первое число месяца, чтобы узнать его день недели
        let firstDayIndex = date.getDay() - 1;
        if (firstDayIndex === -1){
            firstDayIndex = 6;
        }

        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        const nextDays = 7 - lastDayIndex;

        calendarParent.querySelector('.calendar__month h4').innerHTML = `${months[date.getMonth()]} ${date.getFullYear()} г.`;
        monthDays.setAttribute('data-month', date.getMonth());
        monthDays.setAttribute('data-year', date.getFullYear());

        let days = "";


        //выводим последние числа предыдущего месяца 
        for (let x = firstDayIndex; x > 0; x--){
            days += `<div class="calendar__prev-date">${prevLastDay - x + 1}</div>`;
        }

        for(let i = 1; i <= lastDay; i++){
            date.setDate(i);
            if ((i === new Date().getDate() && date.getMonth() === new Date().getMonth()) || (i === new Date().getDate() + 1 && date.getMonth() === new Date().getMonth())){
                days += `<div class="calendar__current-day">${i}</div>`;
            } else if (date.getTime() < new Date().getTime()) {
                days += `<div class="calendar__past-day">${i}</div>`;
            } else{
                days += `<div>${i}</div>`;
            }
        }
        date.setDate(1);//если не переназначу, код другой сломается

        if (lastDayIndex != 0){
            //выводим первые числа следующего месяца 
            for (let j = 1; j <= nextDays; j++){
                days += `<div class="calendar__next-date">${j}</div>`;
                
            }
        }
        monthDays.innerHTML = days;

        // если в календаре есть подсказка про мин. время выполнения заказа
        if (calendarParent.querySelector('.calendar__hint')){
            const disabledDays = calendarParent.querySelectorAll('.calendar__current-day');
            disabledDays.forEach((day) => {
                day.addEventListener('mouseover', () => {
                    calendarParent.querySelector('.calendar__hint').style.opacity = 1;
                });
                day.addEventListener('mouseout', () => {
                    calendarParent.querySelector('.calendar__hint').style.opacity = 0;
                });
            });
        }
    };
    

    calendarParent.querySelector('.calendar__prev').addEventListener('click', () => {
        if (date.getMonth() < 10){
            monthAndYear = `0${date.getMonth()}`;
        }else{
            monthAndYear = date.getMonth();
        }
        const currentDate = '' + date.getFullYear() + monthAndYear;
        const todayDate = '' + new Date().getFullYear() + monthAndYearNow;
        if (currentDate <= todayDate){
            return;
        }
        click --;
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    calendarParent.querySelector('.calendar__next').addEventListener('click', () => {
        //выбрать дату можно только на этот месяц + на ближайшие 3 месяца
        if (click < 3) {
            click++;
            date.setMonth(date.getMonth() + 1);
            renderCalendar();
        }
    });

    renderCalendar();
}
export default calendar;