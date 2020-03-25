const currentAPI = 'https://api.openweathermap.org/data/2.5/weather?zip=83549,us&APPID=c7841a054ca549ed8fb8e9246b43f93e&units=imperial';

fetch(currentAPI)
  .then((response) => response.json())
  .then((today) => {
    console.log(today);

    let sky = today.weather[0].main;
    document.getElementById('weather1').textContent = sky;

    let temperature = Math.round(today.main.temp);
    document.getElementById('weather2').textContent = temperature;

    let humidity = today.main.humidity;
    document.getElementById('weather3').textContent = humidity;

    let source = 'https://openweathermap.org/img/w/' + today.weather[0].icon + '.png';
    let name = today.weather[0].description;

    document.getElementById('image1').textContent = source;
    document.getElementById('image1').setAttribute('src', source);
    document.getElementById('image1').setAttribute('alt', name);

  });