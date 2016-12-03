import axios from 'axios'
const API_KEY = 'f30a039a18a689aa85bfbd0b1a09de2a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//define actions
export const FETCH_WEATHER = 'FETCH_WEATHER'
//create action creator

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}