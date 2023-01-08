const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // clock.innerText = `${hours}:${minutes}:${seconds}`;
    clock.innerText = date.toLocaleTimeString('it-IT')
}

getClock(); // 즉시호출
setInterval(getClock, 1000); // 매초마다 실행
