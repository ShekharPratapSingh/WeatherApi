var search = document.getElementById("search");
// events
search.addEventListener('keyup', e =>{

    if(e.keyCode === 13){
      
        var getCityName = e.target.value
    }
    getWeather(getCityName);
});

function getWeather(getCityName){
    const weatherapi = `http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=6ade1eb40591bd40b2132d109419fb35`
   window.fetch(weatherapi)
   .then(data => {data.json().then(weather=>{


        var weatherData = weather.weather;
        for(let x of weatherData){
            output = `
            <h1 class="name">${getCityName}</h1>
            <div class="card offset-3">
 
  <div class="card-body">
  
  <p class="temp">${weather.main.temp}&deg;c</p>
  <span><img src="https://openweathermap.org/img/wn/${x.icon}.png"/></span>
   
    <h5 class="card-title">STATUS:- ${x.description}</h5>
   
    <p class="card-text">Weather of ${getCityName}</p>
    
  </div>
</div>
            
            
            `;
            document.getElementById("template").innerHTML=output;
        }



   }).catch(err => console.log(err));
}).catch(err => console.log(err));

}