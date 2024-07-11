const apiKey = "5428352c9c5ed744c891bea861fc520f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weather = document.getElementById("weather");
const invalidCity = document.getElementById("error");
const icon = document.querySelector(".weatherpng");
const cont = document.querySelector(".container");

async function checkWeather(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        input.value="";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed;
        
        switch (data.weather[0].main) {
            case "Clouds":
                icon.src = "images/clouds.png";
                break;
            case "Clear":
                icon.src = "images/clear.png";
                break;
            case "Drizzle":
                icon.src = "images/drizzle.png";
                break;
            case "Mist":
                icon.src = "images/mist.png";
                break;
            case "Rain":
                icon.src = "images/rain.png";
                break;
            case "Snow":
                icon.src = "images/snow.png";
                break;
            default:
                icon.src = "images/clear.png";
        }
        cont.style.height="555px";
        weather.style.display = "block";
        invalidCity.style.display = "none";
    } else {
        input.value="";
        cont.style.height="400px";
        weather.style.display = "none";
        invalidCity.style.display = "block";
    }
}

button.addEventListener("click", () => {
    checkWeather(input.value);
});
