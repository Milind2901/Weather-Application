let weather = {         // object  for storing fns and var for api 
    apiKey : "f02552814be4c713d0e2ce7193200b31" ,
    fetchWeather : function(city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + " &units=metric&appid=" 
        + this.apiKey
        )
        
        .then((response) => response.json())
        .then((data) => this.displayWeather(data)) ; 
    } ,
    displayWeather : function(data) {   // fetches the data from json response and assigns variables to it to be displayed 
        const { name } = data;
        const { icon , description } = data.weather[0] ;
        const { temp , humidity } = data.main ;
        const { speed } = data.wind ;   // wind from data has been assigned to variable speed 
        // console.log(name,icon,description,temp,humidity,speed)   // saves variables in console log if we want the data to be seen in console 
        document.querySelector(".city").innerText = "Weather in " + name ;
        document.querySelector(".icon").src = 
        " https://openweathermap.org/img/wn/" + icon + ".png" ;
        document.querySelector(".description").innerText = description ;
        document.querySelector(".temp").innerText = temp + "°C" ;
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%" ;
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + "km/h" ;
        document.querySelector(".weather").classList.remove("loading");   // provides loading till the weather info is fetched 
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value) ;
    }

} ;

document.querySelector(".search button").addEventListener("click",function(){
weather.search() ; // search button click listener 
})


document.querySelector(".search-bar").addEventListener("keyup",function(event){
if(event.key == "Enter"){
    weather.search() ;   // event listener for pressing enter button in search bar 
}
})

weather.fetchWeather("Delhi"); // default page loader screen

