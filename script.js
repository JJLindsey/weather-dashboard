//api call for weather ??
//let weatherData = "https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={0baea045fada1a05a3ef777664d6c3d3&q=" + city";
var ApiKey = "0baea045fada1a05a3ef777664d6c3d3";
//form variables
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city-search");

//get current weather by City unique Id
//5 day forecast/future conditions call is displayed 
//display current date, temp, wind, humidity, UV index and city name using server APIs
function runWeather(data) {

    //const inputEl = document.getElementById("city-search");
    const inputEl = $("#city-search");
    //element to search for history
    //const searchEl = document.getElementById("search-btn");
    const searchEl = $("#search-btn");
    //button to clear history
    //const clearEl = document.getElementById("clear-btn");
    const clearEl = $("#clear-btn");
    //const cityNameEl = document.getElementById("city-name");
    const cityNameEl = $("#city-name");
    cityNameEl.text(data.name);

    const currentDate = $("#current-date");
    //currentDate.text(new Date(data.list[i].dt_txt).toLocaleDateString());
    //const weatherIcon = document.getElementById("icon");
    //let weatherI = text.data.weather[0].icon;
    const weatherIcon = $("#icon");
    //weatherIcon.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
    //weatherIcon.text()
    // const tempEl = document.getElementById("temperature");
    const tempEl = $('#temperature');
    tempEl.text("Temperature: " + tempK2F(data.main.temp) + "°F");
    
    const windEl = $("#wind-speed");
    windEl.text("wind-speed: " + data.wind.speed + "mph");
    
    const humidityEl = $("#humidity");
    humidityEl.text("Humidity: " + data.main.humidity + "%");
    
    const uvEl = $("#UV-index");
    //uvEl.text("UV-index: " + )
    // tempEl.textContent = "New value"


}

//display current temp
var getCityData = function(data) {
    const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + data + "&appid=0baea045fada1a05a3ef777664d6c3d3";

    // JS fetch vs ajax
    //make a request to url
    //fetch(apiWeather).then(function(response){
    //     console.log(response);
        //response.json().then(function(weather){
    //         console.log(weather);
    //     });
    // });

    $.get(apiWeather, function(data) {
        console.log(data)

        // start rendering data
        runWeather(data)

    })
};

// function runWeather(data) {
// //     //  Using saved city name, execute a current condition get request from open weather map api
//     let apiCity = "https://api.openweathermap.org/data/2.5/weather?q=" + data + "&appid=0baea045fada1a05a3ef777664d6c3d3";
            
//         $.get(apiCity, function(data) {
//             console.log(data);
//     })    
// };
// 5 day forecast
const fiveDay = function(data) {
    const fiveApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + data  + "&appid=0baea045fada1a05a3ef777664d6c3d";


    runWeather(data)
}

const fiveEl = $(".forecast");
            for (i=0; i<fiveEl.length; i++) {
            }


const weatherIcons = function(data) {
    const iconApi = "https://api.openweathermap.org/data/2.5/weather?q"
   // "http://openweathermap.org/img/wn/" + data.weather.icon + ".png";
}

function tempK2F(K) {
    return Math.floor((K - 273.15) *1.8 +32);
}

//get value from city input
var formSubmitHandler = function(event) {
    event.preventDefault();
    //get value from input element
var city = cityInputEl.value.trim();

    if(city) {
        getCityData(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city name");
    }
}
cityFormEl.addEventListener("submit", formSubmitHandler);

//fetch data from api
// fetch("http://api.openweathermap.org").then(function(response) {
//     console.log("inside", response);
// });

// console.log("outside");
