import axios from 'axios';

const API_KEY = '0e65172afeb3defabff85825649391fe';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// All action names can be changed here at this one specific place.
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const LOG_LAST_CITY = 'LOG_LAST_CITY';
export const CITY_TEXT_INPUT = 'CITY_TEXT_INPUT';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;

  const request = axios
    .get(url)
    .catch(error => console.log('WEATHER SERVER FUCKED UP:', error));
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function logHistoryItem(city) {
  return {
    type: LOG_LAST_CITY,
    city
  };
}

export function cityTextInput(text = '') {
  return {
    type: CITY_TEXT_INPUT,
    text
  };
}
