const d = document;
export default function countDown(id, limitDate, finalMessage) {
  const $countDown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countdownTemp = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now;
    $countDown.innerHTML = `<h3>Faltan: 
    <span class="c-badge">${Math.floor(limitTime / day)}</span> días 
    <span class="c-badge"> ${("0" + Math.floor((limitTime % day) / hour)).slice(-2)}</span> horas 
    <span class="c-badge"> ${("0" + Math.floor((limitTime % hour) / minute)).slice(-2)}</span> minutos 
    <span class="c-badge"> ${("0" + Math.floor((limitTime % minute) / second)).slice(-2)}</span> segundos </h3>`;
    // console.log(countdownDate, now, limitTime);
    if (limitTime < 0) {
      clearInterval(countdownTemp);
      $countDown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, second);
}
