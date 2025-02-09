import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const delayInput = document.querySelector(".delay-input");
const stateInputs = document.querySelectorAll('input[name="state"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = parseInt(delayInput.value, 10);
  const state = Array.from(stateInputs).find(input => input.checked).value;

  createPromise(delay, state)
    .then(() => {
      iziToast.success({
        title: 'Fulfilled',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Rejected',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });

  delayInput.value = "";
  stateInputs.forEach(input => input.checked = false);
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve();
            } else {
                reject();
            }
        }, delay);
    });
}