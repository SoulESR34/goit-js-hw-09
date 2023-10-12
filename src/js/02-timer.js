import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);  
    return { days, hours, minutes, seconds };
}

function startCount(selectedDates, today, timerArr){
    const timeMs = convertMs(selectedDates - today);

    timerArr[0].innerText = timeMs.days
    timerArr[1].innerText = timeMs.hours
    timerArr[2].innerText = timeMs.minutes
    timerArr[3].innerText = timeMs.seconds
    console.log(timerArr[0])
}
let timerBucle;
const timeInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]')
const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]')
const minutes = document.querySelector('span[data-minutes]')
const seconds = document.querySelector('span[data-seconds]')
timer = [days, hours, minutes, seconds]
startBtn.disabled = true


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        if(selectedDates[0] <= new Date()){
            alert("Please choose a date in the future")
        }else{
            startBtn.disabled = false;
            startBtn.addEventListener('click',()=>{

                if (timerBucle) {
                    clearInterval(timerBucle);
                }

                timerBucle = setInterval(()=>{
                    const equalToZero = timer.every((value) => {
                        return value === 0;
                    });

                    startCount(selectedDates[0], new Date(), timer)

                    if(equalToZero){
                        clearInterval(timerBucle);
                    }

                },1000)
            })
        }
    },
};


flatpickr(timeInput, options);
