let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

function startStopwatch() {
    clearInterval(interval);
    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(interval);
}

function resetStopwatch() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

window.onload = updateDisplay;
