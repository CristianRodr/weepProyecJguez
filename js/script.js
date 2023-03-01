'use strict';

const labelDate = document.querySelector('.date');

//Uso de la API de international
//Forma sencilla de formatear fechas y horas
setInterval(function () {
  const now = new Date();

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  };

  labelDate.textContent = new Intl.DateTimeFormat('local', options).format(now);
}, 1000);

const clima = async function () {
  const posClima = await fetch(`
    http://api.openweathermap.org/data/2.5/forecast?q=bogota&appid=c1e47110da4d70de2cafd30f980532f1&units=metric`);
  const dataClima = await posClima.json();
  console.log(posClima);
  console.log(dataClima);
};

clima();
