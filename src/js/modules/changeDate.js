import calendar from './calendar';

const shortMonths = [
    "янв.",
    "февр.",
    "марта",
    "апр.",
    "мая",
    "июня",
    "июля",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
]

function changeDate(parent){
    const changeDateBtn = parent.querySelector('[data-change-date]');
    const calendarElement = parent.querySelector('.calendar');
    calendar(parent, '.calendar');

    changeDateBtn.addEventListener('click', () => {
        if (calendarElement.classList.contains('calendar_opened')){
            calendarElement.classList.remove('calendar_opened');
            return;
        } 
        calendarElement.classList.add('calendar_opened');
        calendarElement.addEventListener('click', (e) => {
            if (e.target.closest('.calendar__days') && e.target.classList.value === ''){
                // e.target.classList.add('calendar__selected-day');

                const selectedDate = e.target.textContent;
                const numOfMonth = e.target.closest('.calendar__days').getAttribute('data-month');
                const numOfYear = e.target.closest('.calendar__days').getAttribute('data-year');

                changeDateBtn.querySelector('span').textContent = `${selectedDate} ${shortMonths[numOfMonth]} ${numOfYear} г.`;
                calendarElement.classList.remove('calendar_opened');
            }
        });
    });
}
export default changeDate;