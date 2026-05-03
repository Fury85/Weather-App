const cityInput = document.getElementById("cityInput")
const searchBtn = document.getElementById("searchBtn")
const weatherData = document.getElementById("weatherData")
const country = document.getElementById("country")
const city = document.getElementById("cityName")
const date = document.getElementById("date")
const temp = document.getElementById("temp")
const icon = document.getElementById("icon")
const condition = document.getElementById("condition")
const feels = document.getElementById("feelsLike")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const pressure = document.getElementById("pressure")
const lastCity = document.getElementById("lastCity")
const API_KEY = "81cd6830a4d803c89e31bf1b3cd4d178"

searchBtn.addEventListener("click", function() {
    let cityName = cityInput.value
    
    if(cityName === "") return
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then(function(res) { return res.json() })
        .then(function(data) { 
                city.innerText = data.name
                country.innerText = data.sys.country
                temp.innerText = Math.round(data.main.temp)
                icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">`
                condition.innerText = data.weather[0].description
                feels.innerText = "Feels like " + Math.round(data.main.feels_like) + "°C"
                humidity.innerText = data.main.humidity + "%"
                wind.innerText = data.wind.speed
                pressure.innerText = data.main.pressure

                let now = new Date()
                date.innerText = now.toDateString()

                localStorage.setItem("lastCity", data.name)
                lastCity.innerText = savedCity
                

                weatherData.classList.remove("hidden")
        })
})

let savedCity = localStorage.getItem("lastCity")
    if(savedCity !== null) {
        lastCity.innerText = savedCity
}