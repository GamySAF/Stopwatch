const start = document.getElementById("start");
const stop = document.getElementById("stop");
const restart = document.getElementById("restart");
const displays = document.getElementById("displays");

let hr = 0;
let min = 0;
let count = 0;
let intervalId = null;
let isRunning = false;

start.addEventListener("click", () => {
    if (isRunning) return;
    isRunning = true;
    intervalId = setInterval(() => {
        count++;
        if (count === 60) {
            count = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hr++;
        }
        let formattedHr = String(hr).padStart(2, "0");
        let formattedMin = String(min).padStart(2, "0");
        let formattedCount = String(count).padStart(2, "0");

        displays.innerHTML = `${formattedHr} : ${formattedMin} : ${formattedCount}`;
    }, 10);
});

stop.addEventListener("click", () => {
    clearInterval(intervalId);
    isRunning = false;
});

restart.addEventListener("click", () => {
    clearInterval(intervalId);
    hr = 0;
    min = 0;
    count = 0;

    let formattedHr = String(hr).padStart(2, "0");
    let formattedMin = String(min).padStart(2, "0");
    let formattedCount = String(count).padStart(2, "0");

    displays.innerHTML = `${formattedHr} : ${formattedMin} : ${formattedCount}`;
    isRunning = false;
});


