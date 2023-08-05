const apiKey = '4bf0d8bc58acae6d0beb682e867cbd65';

const cityInput = document.getElementById('cityInput');
const addButton = document.getElementById('addButton');
const weatherCards = document.getElementById('weatherCards');

addButton.addEventListener('click', () => {
    const cityName = cityInput.value.trim();
    console.log(cityName)
    if (cityName === '') return;
    
    fetchWeatherData(cityName);
    cityInput.value = '';
 });

async function fetchWeatherData(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    // const apiUrl = `https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1`
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeatherCard(data);
        console.log(data)
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');
     
    const weatherC=document.createElement('div');
    const weatherIcon = document.createElement('img');
    weatherIcon.classList.add('weather-icon');
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const weather=document.createElement('p');
    weather.innerText=`${data.weather[0].main}`
    weatherC.appendChild(weatherIcon);
    weatherC.appendChild(weather)


    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card-details');
    const temp=document.createElement('span')
    temp.innerText=`${data.main.temp} ° C`
    // &deg;
    temp.classList.add('temp')
    cardDetails.appendChild(temp)
    const city= document.createElement('h3')
    city.innerText=`${data.name}, ${data.sys.country}`
    cardDetails.appendChild(temp)
    cardDetails.appendChild(city)
    card.appendChild(cardDetails);
    card.appendChild(weatherC);
    weatherCards.appendChild(card);
}
  /*  <p>Weather: ${data.weather[0].main}</p>*/