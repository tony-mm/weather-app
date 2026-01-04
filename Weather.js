const apiKey ="b3c5dcd781c3a6ec74e20d81a3651aba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");
const weatherDisplay = document.querySelector(".results");




async function getWeather(city) {
    const response = await fetch(apiUrl + '&q=' + city + '&appid=' + apiKey);
    var data = await response.json();

    console.log(data);

    weatherDisplay.style.opacity = '0';

    setTimeout(() => {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.Humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.Wind').innerHTML = data.wind.speed + "km/h";
    

        const currentTime = data.dt;
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
        const isDay = currentTime >= sunrise && currentTime < sunset;

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = isDay ? "images/cloudy.png" : "images/cloudy-night-removebg-preview.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = isDay ? "images/clear.png" : "images/clear-night-removebg-preview.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = isDay ? "images/heavy-rain.png" : "images/heavy-night.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = isDay ? "images/drizzle.png" : "images/drizzle-night-removebg-preview.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = isDay ? "images/mist.png" : "images/mist-night-removebg-preview.png";
    }


    weatherDisplay.style.opacity = '1';
    }, 300);
}
searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
})
