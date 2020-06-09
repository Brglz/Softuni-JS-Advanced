function stopwatch() {
const time = document.getElementById('time');
const start = document.getElementById('startBtn');
const stop = document.getElementById('stopBtn');
let secconds = 0;
let minutes = 0;
let intervalTime;

function startBtnHandler() {
    start.setAttribute('disabled', true);
    stop.removeAttribute('disabled');
    time.textContent = '00:00'

    intervalTime = setInterval(function() {
        secconds++
        if(secconds===60){
            secconds = 0;
            minutes++
        }

        let minText = minutes.toString();
        let secText = secconds.toString();
        if(minutes<10){ minText = '0'+minText}
        if(secconds<10){ secText = '0'+secText}
        time.textContent = `${minText}:${secText}`
        
    },1000)

}

function stopBtnHandler() {
    stop.setAttribute('disabled', true);
    start.removeAttribute('disabled');
    
    clearInterval(intervalTime);
    secconds = 0;
    minutes = 0;

}

start.addEventListener('click', startBtnHandler);
stop.addEventListener('click',stopBtnHandler)

}