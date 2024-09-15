const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const input = document.querySelector('.city');

export function getWeather() {
  const key = '005980bebf84925d524e2119aa003890'

  const watchID = navigator.geolocation.watchPosition(async(position) => {
    const { latitude, longitude } = position.coords
    getCityName(latitude, longitude)
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=current&units=metric&lang=RU&appid=${key}`);
  
      const data = await res.json();
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
  } catch (error) {
      console.log(error);
  }
    navigator.geolocation.clearWatch(watchID);
  })
  


}

document.addEventListener('DOMContentLoaded', () =>{
  getWeather()
  console.log(localStorage.getItem('city'));
  
});


const getCityName = async (lat, lon) => {
  try {
      const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`);
      const { city } = await res.json();
      
      input.value = city
      localStorage.setItem('city', city);
  } catch (error) {
      console.log(error);
  }
}





