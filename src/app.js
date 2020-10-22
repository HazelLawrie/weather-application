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
  currentDateTime.innerHTML = `${day}, ${dateOfMonth} ${month} ${year} <br /> ${hours}:${minutes}`;
}

currentDate();

// Show Weather and City on Screen

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#displayed-temp").innerHTML = `${temperature}`;
}

// Search for City

function searchLocation(city) {
  let apiKey = "1dca542b443d294d157be34aefdc0627";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input").value;
  city.innerHTML = `${input.value}`;
}

// Geolocation

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

let searchForm = document.querySelector("#input");
searchForm.addEventListener("submit", handleSubmit);

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", retreiveGeolocation);
