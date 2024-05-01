const apiKey = "6cd16d4b7e288cdce2156371748bf912"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
// const y = "q=chennai&appid=&"
const city = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weather_icon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status==404)
    {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    }
    else{
    let data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = data.main.temp+"°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    document.querySelector(".wind").innerHTML = data.wind.speed+"KMPH"
    if(data.weather[0].main=="Clouds")
    {
        weather_icon.src = "clouds.png"
    }
    else if (data.weather[0].main=="Clear")
    {
        weather_icon.src = "clear.png"
    }
    else if(data.weather[0].main=="Rain")
    {
        weather_icon.src = "rain.png"
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weather_icon.src = "drizzle.png"
    }
    else if(data.weather[0].main=="Mist")
    {
        weather_icon.src = "mist.png"
    }
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
}

}
searchBtn.addEventListener("click",()=>{
    checkWeather(city.value)
})
