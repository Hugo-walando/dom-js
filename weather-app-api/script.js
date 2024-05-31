const displayWeather = document.querySelector('#display-weather');
const displayWeatherInfo = document.querySelector('#display-weather-info');
const emoji = document.querySelector('#emoji');
const image = document.querySelector('#img');

const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=50.43&lon=2.83&appid=9b57b7993b5bcc69c5cf45727255232a',
    )
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const displayData = (data) => {
  console.log(data);
  displayWeather.innerText = data.weather[0].main;
  displayWeatherInfo.innerText = data.weather[0].description;
  image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
};

const onError = (err) => {
  console.log('Error');
};

fetchData().then(displayData).catch(onError);
