//api call for weather ??
//api.openweathermap.org/data/2.5/weather?id={city id}&appid={0baea045fada1a05a3ef777664d6c3d3}

//form variables
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");

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