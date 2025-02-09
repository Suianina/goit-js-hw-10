import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const delayInput = document.querySelector(".delay-input");
const stateInputs = document.querySelectorAll('input[name="state"]');

function createPromise(value, delay, status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) resolve(value);
            else reject(value);
        }, delay);
    });
}

function onFulfilled(value, delay) {
    iziToast.show({
        message: `✅ ${value} promise in ${delay}ms`,
        backgroundColor: 'rgba(89, 161, 13, 0.8)',
        messageColor: '#ffffff',
        position: 'topRight',
    });
}

function onRejected(value, delay) {
    iziToast.show({
        message: `❌ ${value} promise in ${delay}ms`,
        backgroundColor: 'rgba(239, 64, 64, 0.8)',
        messageColor: '#ffffff',
        position: 'topRight',
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const delay = parseInt(delayInput.value, 10);
    const state = Array.from(stateInputs).find(input => input.checked);
    
    if (!state) return;
    const value = state.value;
    const status = value === "fulfilled";

    createPromise(value, delay, status)
        .then(() => onFulfilled(value, delay))
        .catch(() => onRejected(value, delay));

    form.reset();
});

