//let weatherData = "https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={0baea045fada1a05a3ef777664d6c3d3&q=" + city";
const ApiKey = "0baea045fada1a05a3ef777664d6c3d3";
//form variables
const cityFormEl = document.querySelector("#city-form");
const cityInputEl = document.querySelector("#city-search");


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
    //let weatherI = text.data.weather[0].icon;
    const weatherIcon = $("#icon");
        //weatherIcon.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
    //weatherIcon.text()
    // const tempEl = document.getElementById("temperature");
    const tempEl = $('#temperature');
    tempEl.text("temperature: " + tempK2F(data.main.temp) + "°F");
    
    const windEl = $("#wind-speed");
    windEl.text("wind-speed: " + data.wind.speed + "mph");
    
    const humidityEl = $("#humidity");
    humidityEl.text("Humidity: " + data.main.humidity + "%");
    
    const uvEl = $("#UV-index");
    //uvEl.text("UV-index: " + )
    // tempEl.textContent = "New value"

    
    const fiveApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + data.name  + "&appid=0baea045fada1a05a3ef777664d6c3d";
    
        $.get(fiveApi, function(fiveDayData) {
            console.log(fiveApi)

            const tempDay1El = $('#tempDay1')
            const tempDay2El = $('#tempDay2')
            const tempDay3El = $('#tempDay3')
            const tempDay4El = $('#tempDay4')
            const tempDay5El = $('#tempDay5')
    
            tempDay1El.text("Temperature: " + fiveDayData.list[0].main.temp)
            tempDay2El.text("Temperature: " + fiveDayData.list[8].main.temp)
            tempDay3El.text("Temperature: " + fiveDayData.list[15].main.temp)
            tempDay4El.text("Temperature: " + fiveDayData.list[23].main.temp)
            tempDay5El.text("Temperature: " + fiveDayData.list[31].main.temp)
    
        
    })

    runWeather(data)
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





// const weatherIcons = function(data) {
//     const iconApi = "https://api.openweathermap.org/data/2.5/weather?q"
//    // "http://openweathermap.org/img/wn/" + data.weather.icon + ".png";
// }

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