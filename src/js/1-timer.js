import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('[data-start]');
const dayInput = document.querySelector('#datetime-picker');
const daysElement = document.querySelector('[data-days]');
const hoursElements = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElements = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let userSelectedDate;
let intervalId;

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = new Date();
    userSelectedDate = selectedDates[0];

    if (!userSelectedDate || userSelectedDate <= now) {
      iziToast.error({
        message: "Please choose a date in the future",
        position: "topRight",
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  }
});

startBtn.addEventListener('click', () => {
  const initTime = userSelectedDate.getTime();

  startBtn.disabled = true;
  dayInput.disabled = true;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const remainingTime = initTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(intervalId);
      updateTimerDisplay(0, 0, 0, 0);
      startBtn.disabled = false;
      dayInput.disabled = false;
      return;
    }

    const time = convertMs(remainingTime);
    updateTimerDisplay(time.days, time.hours, time.minutes, time.seconds);
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  daysElement.textContent = formatTimeComponent(days);
  hoursElements.textContent = formatTimeComponent(hours);
  minutesElement.textContent = formatTimeComponent(minutes);
  secondsElements.textContent = formatTimeComponent(seconds);
}

function formatTimeComponent(value) {
  return value.toString().padStart(2, '0');
}