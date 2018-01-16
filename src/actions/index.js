import axios from 'axios';

const API_KEY = 'd119933bcb55680c540e89ac1d73e3f4';

// Ex. http://api.openweathermap.org/data/2.5/forecast?appid=d119933bcb55680c540e89ac1d73e3f4&q=Grants+Pass,us
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// as a convention, declare a variable to hold an Action type
export const FETCH_WEATHER = 'FETCH_WEATHER'

// Action Creators always have to return an Action, and
// an Action is an object which always has a type

// function takes a string (city) as an argument 
export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    console.log('Request', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }

}
