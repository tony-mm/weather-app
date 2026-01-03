const apiKey ="b3c5dcd781c3a6ec74e20d81a3651aba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");




async function getWeather(city) {
    const response = await fetch(apiUrl + '&q=' + city + '&appid=' + apiKey);
    var data = await response.json();

    console.log(data);


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.Humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.Wind').innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/heavy-rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
}
searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
})
