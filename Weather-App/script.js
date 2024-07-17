const button=document.querySelector(".search-bar");
const input=document.querySelector(".input-field");
const weather=document.querySelector("#weather")
const cityName=document.querySelector("#cityName")
const humidity=document.querySelector("#humidity")
const windspeed=document.querySelector("#windSpeed")
const image=document.querySelector(".main-img")


const content=document.querySelector("#maincontent")

const locationbtn=document.querySelector("#getloc")

locationbtn.addEventListener("click",()=>
  {
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(onSuccess,onError)

  }
  else{
    console.log("error")
  }
  })

  function onSuccess(position)
  {
    console.log(position)
    getWeather(position.coords.latitude,position.coords.longitude)

  }
  function onError()
  {
    document.querySelector("#invalid").style.display="block"
    document.querySelector("#invalid").innerHTML="Access denied!"
    content.style.display="none"
     locationbtn.style.display="block"
     alert("Please give location access")
    
  }




input.addEventListener("input", function() {
  const value = this.value;

  if (value === "") {
    // The value is empty, refresh the page
    window.location.reload();
  }
});

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {

    event.preventDefault();
    button.click();
  }
});


button.addEventListener("click",()=>
{
getWeather()
})



async function getWeather(latitude,longitude)
{
const city=input.value;
 const APIkey="1ad0a3dfa739f19655190bbc32b1cd60"

let response;
let apiUrl;

if(latitude,longitude)
{
 
   apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
   response= await fetch(apiUrl+`lat=${latitude}&lon=${longitude}`+`&appid=${APIkey}`+`&units=metric`)

}
else{
apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  
 response= await fetch(apiUrl+`${city}`+`&appid=${APIkey}`+`&units=metric`)
 


}
const data=await  response.json();

setWeather(response,data)
  
  
    


      
}



function setWeather(response,data)
{
  document.querySelector("#invalid").style.display="none"

if(response.status==404)
  {
    document.querySelector("#invalid").style.display="block"
    content.style.display="none"
     locationbtn.style.display="block"

  }

  
  weather.innerHTML=Math.round(data.main.temp)+"° C"
  cityName.innerHTML=data.name
  humidity.innerHTML=data.main.humidity+"%"
  windspeed.innerHTML=Math.round(data.wind.speed)+" Km/hr"
  input.value=data.name



 
  if(data.weather[0].main=="Clouds")
    {
    image.src="images/clouds.png"
   
    }
else if(data.weather[0].main=="Clear")
      {
      image.src="images/clear.png"

      }
      else if(data.weather[0].main=="Rain")
        {
        image.src="images/rain.png"

        }
        else if(data.weather[0].main=="Drizzle")
          {
          image.src="images/drizzle.png"
  
          }
          else if(data.weather[0].main=="Mist")
            {
            image.src="images/mist.png"
    
            }
            
            content.style.display="block"
            content.style.visibility="visible"
            locationbtn.style.display="none"



}