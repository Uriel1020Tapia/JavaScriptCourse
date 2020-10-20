
const d = document;

export function digitalClock(clock,btnClockPlay,btnClockStop){
    let clockTiempo;

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnClockPlay)){
           clockTiempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML =`<h3>${clockHour}</h3>`;
            },1000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnClockStop)){
            clearInterval(clockTiempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnClockPlay).disabled = false;
        }
    })
}
export function alarm(soundAlarm,btnAlarmPlay,btnAlarmStop){

    let alarmTime;
    const $alarm = d.createElement("audio");

    $alarm.src = soundAlarm;

    d.addEventListener('click',(e)=>{
        if(e.target.matches(btnAlarmPlay)){

            alarmTime = setTimeout(()=> {
                $alarm.play();
            },2000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnAlarmStop)){
            clearTimeout(alarmTime);
            $alarm.pause();
            $alarm.currentTime = 0;//reset audio
            d.querySelector(btnAlarmPlay).disabled = false;
        }
    })
}