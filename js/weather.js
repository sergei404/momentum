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
});


const getCityName = async (lat, lon) => {
  try {
      const res = await fetch(`http://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address?token=8d0083cde9612ebbea568e3dc471c717dedba88e&lat=${lat}&lon=${lon}`);

      const data = await res.json();
      input.value = data.
      suggestions[0].data.city_with_type.slice(2)
      localStorage.setItem('city', data.suggestions[0].data.city_with_type.slice(2));
  } catch (error) {
      console.log(error);
  }
}





