const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const cityname = document.querySelector('.city-name');
const weatherbody = document.querySelector('.weather-body');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key ="8187d2e8e54ea1c9c1fbaa18d7761eed";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod=='404'){
        location_not_found.style.display='flex';
        weather_body.style.display='none';
        return alert('City Not Found');
    }
    console.log("run");
    location_not_found.style.display='none';
    weather_body.style.display='flex';
    

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `Humidity: ${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `Wind Speed: ${weather_data.wind.speed} km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src='/asse/cloud.png';
            break;
        case 'Clear':
            weather_img.src='/asse/clear.png';
            break;
        case 'Rain':
            weather_img.src='/asse/rain.png';
            break;
        case 'Mist':
            weather_img.src='/asse/mist.png';
            break;
        case 'Snow':
            weather_img.src='/asse/snow.png';
            break;
    }
    console.log(weather_data);
}

searchbtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value)
})