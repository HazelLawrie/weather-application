let isoCountries = {
  AF: "Afghanistan",
  AX: "Aland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua And Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia And Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, Democratic Republic",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Cote D'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island & Mcdonald Islands",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic Of",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle Of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KR: "Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libyan Arab Jamahiriya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States Of",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territory, Occupied",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthelemy",
  SH: "Saint Helena",
  KN: "Saint Kitts And Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre And Miquelon",
  VC: "Saint Vincent And Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome And Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia And Sandwich Isl.",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard And Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad And Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks And Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UM: "United States Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  WF: "Wallis And Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

function formatCountry(countryCode) {
  if (isoCountries.hasOwnProperty(countryCode)) {
    return isoCountries[countryCode];
  } else {
    return countryCode;
  }
}

// Display Date

function currentDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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
    "December",
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
  currentDateTime.innerHTML = `${day}, ${dateOfMonth} ${month} ${year} <br /> <small>Last updated: ${hours}:${minutes}</small>`;
}

currentDate();

// Get Time for 3 hour forecast

function formatHours(timestamp) {
  let currentDate = new Date(timestamp);
  let hours = currentDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

// Get Day for 5 Day forecast

function formatDays(timestamp) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDate = new Date(timestamp);
  let day = days[currentDate.getDay()];
  return `${day}`;
}

// Show Weather and City on Screen after fetching Geolocation

function showWeather(response) {
  celciusTemperature = response.data.main.temp;
  document.querySelector("#city").innerHTML = `${
    response.data.name
  }, ${formatCountry(response.data.sys.country)}`;
  document.querySelector("#displayed-temp").innerHTML = Math.round(
    celciusTemperature
  );
  document.querySelector("#temp-description").innerHTML =
    response.data.weather[0].description.charAt(0).toUpperCase() +
    response.data.weather[0].description.slice(1);
  document.querySelector("#pressure-value").innerHTML =
    response.data.main.pressure;
  document.querySelector("#humidity-value").innerHTML =
    response.data.main.humidity;
  document.querySelector("#wind-value").innerHTML = `${Math.round(
    response.data.wind.speed * 2.237
  )}`;
  document
    .querySelector("#main-icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  document
    .querySelector("#main-icon")
    .setAttribute("alt", response.data.weather[0].description);
  currentDate();
}

// Geolocation when clicking location button

function retrievePosition(position) {
  let apiKey = "1dca542b443d294d157be34aefdc0627";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(url).then(showWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
  apiDaysUrl = `https://api.openweathermap.org/data/2.5/onecall?q=${city}&exclude={current,minutely,hourly}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecastDays);
}

function retreiveGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", retreiveGeolocation);

function autoRetrieveLondon() {
  let apiKey = "1dca542b443d294d157be34aefdc0627";
  let units = `metric`;
  let city = `London`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(url).then(showWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
  apiDaysUrl = `https://api.openweathermap.org/data/2.5/onecall?q=${city}&exclude={current,minutely,hourly}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecastDays);
}

autoRetrieveLondon();

// Display 3 hour Forecast

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 5; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
  <div class="col-sm">
            ${formatHours(forecast.dt * 1000)}
            <br>
            <img class="forecast-icon" src="http://openweathermap.org/img/wn/${
              forecast.weather[0].icon
            }@2x.png">
            <br />
            ${
              forecast.weather[0].description.charAt(0).toUpperCase() +
              forecast.weather[0].description.slice(1)
            }
            <br />
            ${Math.round(forecast.main.temp)}°C | ${
      Math.round((forecast.main.temp * 9) / 5) + 32
    }°F
    </div>`;
  }
}

// Display 5 day forecast

function displayForecastDays(response) {
  let forecastElement = document.querySelector("#forecast-days");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 40; index += 8) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
  <div class="col-sm">
            ${formatDays(forecast.dt * 1000)}
            <br>
            <img class="forecast-icon" src="http://openweathermap.org/img/wn/${
              forecast.weather[0].icon
            }@2x.png">
            <br />
            ${
              forecast.weather[0].description.charAt(0).toUpperCase() +
              forecast.weather[0].description.slice(1)
            }
            <br />
            ${Math.round(forecast.main.temp)}°C | ${
      Math.round((forecast.main.temp * 9) / 5) + 32
    }°F
    </div>`;
  }
}

function search(city) {
  let apiKey = "1dca542b443d294d157be34aefdc0627";
  let units = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(url).then(showWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
  axios.get(apiUrl).then(displayForecastDays);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#input");
  search(cityInputElement.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// Change C to F

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = Math.round((celciusTemperature * 9) / 5) + 32;
  document.querySelector("#displayed-temp").innerHTML = fahrenheitTemp;
}

function displayCelciusTemp(event) {
  event.preventDefault();
  document.querySelector("#displayed-temp").innerHTML = Math.round(
    celciusTemperature
  );
}

let celciusTemperature = null;

let fahrenheitLink = document.querySelector("#change-to-F");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celciusLink = document.querySelector("#change-to-C");
celciusLink.addEventListener("click", displayCelciusTemp);
