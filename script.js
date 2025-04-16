let searchField = document.querySelector(".inputField");
let searchBtn = document.querySelector(".searchBtn");
let weatherImage = document.querySelector(".weather_img");
let cityTemp = document.querySelector(".temp");
let cityName = document.querySelector(".city_name");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weatherDetailsSection = document.querySelector(".weatherDetailsSection");


searchBtn.addEventListener("click", () =>{
    checkCityWeather(searchField.value);
    searchField.value ="";
    weatherDetailsSection.style.display = "block";
})


const apikey = "c9618664cdf1bcc250ed003d7dc1b7bd";
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkCityWeather(city) {
    const response = await fetch(api+city+`&appid=${apikey}`);
    var data = await response.json();
    //console.log(data);
    cityTemp.innerHTML = Math.round(data.main.temp)+" °C";
    cityName.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + " %";
    wind.innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clear"){
        weatherImage.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Clouds"){
        weatherImage.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImage.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherImage.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherImage.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherImage.src = "images/snow.png"
    }
    else if(data.weather[0].main == "Haze"){
        weatherImage.src = "images/mist.png"
    }

    //console.log(data);
    
}


