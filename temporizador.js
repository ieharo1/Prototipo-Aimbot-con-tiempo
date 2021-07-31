const inicio = 10;
let time = inicio * 60;
const cuentaRegresiva = document.getElementById("temporizador");

setInterval(actualizaCuentaRegresiva, 1000);

function actualizaCuentaRegresiva() {
  const minutes = Math.floor(time / 60);
  let seconds = Math.round(time % 60, 2);
  if (seconds == 0) {
    cuentaRegresiva.innerHTML = minutes + ":00";
  } else {
    cuentaRegresiva.innerHTML = minutes + ":" + seconds;
  }
  time--;
}
