//api call for weather ??
//let weatherData = "https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={0baea045fada1a05a3ef777664d6c3d3&q=" + city";
var ApiKey = "0baea045fada1a05a3ef777664d6c3d3";
//form variables
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");

//get current weather by City unique Id
//5 day forecast/future conditions call is displayed 
function runWeather() {

    const inputEl = document.getElementById("city-search");
    //element to search for history
    const searchEl = document.getElementById("search-btn");
    //button to clear history
    const clearEl = document.getElementById("clear-btn");
    const cityNameEl = document.getElementById("city-name");
    const weatherIcon = document.getElementById("icon");
    

}

//display current temp
var getCityData = function(data) {
    var apiWeather = "http://api.openweathermap.org" + data;

    //make a request to url
    fetch(apiWeather).then(function(response){
        response.json().then(function(weather){
            console.log(weather);
        });
    });
};

//get value from city input
var formSubmitHandler = function(event) {

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
