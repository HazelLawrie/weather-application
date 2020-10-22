// Display Date

function currentDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
   
  let currentDate = new Date();
  let day = days[currentDate.getDay()];
  let month = months[currentDate.getMonth()];
  let dateOfMonth = currentDate.getDate();
  let year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentDateTime = document.querySelector("#date");
  currentDateTime.innerHTML = `${day}, ${dateOfMonth} ${month} ${year} <br /> <small>${hours}:${minutes}</small>`;
}

currentDate();

// Show Weather and City on Screen after fetching Geolocation

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#displayed-temp").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#temp-description").innerHTML = response.data.weather[0].main;
  document.querySelector("#pressure-value").innerHTML = response.data.main.pressure;
  document.querySelector("#humidity-value").innerHTML = response.data.main.humidity;
  console.log(response);
  retrieveImperialData();
}

function showWind(response) {
document.querySelector("#wind-value").innerHTML = `${Math.round(response.data.wind.speed)}`;
console.log(response);
}

// Show Wind in MPH rather than default m/s 

function retrieveImperial(position) {
  let apiKey = "1dca542b443d294d157be34aefdc0627";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = `imperial`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(url).then(showWind);
}

// Geolocation when clicking location button

function retrievePosition(position) {
  let apiKey = "1dca542b443d294d157be34aefdc0627";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

function retreiveGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

function retrieveImperialData() {
  navigator.geolocation.getCurrentPosition(retrieveImperial);
  currentDate();
}

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", retreiveGeolocation);

// Default Real Weather Data for London Shown when Opening Page

function autoShowWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#displayed-temp").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#temp-description").innerHTML = response.data.weather[0].main;
  document.querySelector("#pressure-value").innerHTML = response.data.main.pressure;
  document.querySelector("#humidity-value").innerHTML = response.data.main.humidity;
  console.log(response);
}

// Show Wind in MPH rather than default m/s

function autoShowWind(response) {
  document.querySelector("#wind-value").innerHTML = Math.round(response.data.wind.speed);
  console.log(response);
}

function autoRetrieveLondon() {
  let apiKey = "1dca542b443d294d157be34aefdc0627";
  let units = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=${units}&appid=${apiKey}`;
  axios.get(url).then(autoShowWeather);
}

function autoRetrieveLondonImperial() {
  let apiKey = "1dca542b443d294d157be34aefdc0627";
  let units = `imperial`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=${units}&appid=${apiKey}`;
  axios.get(url).then(autoShowWind);
}

autoRetrieveLondon();
autoRetrieveLondonImperial();