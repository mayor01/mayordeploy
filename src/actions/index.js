import axios from "axios";

//i signed up to openweathermap.org/forecast to get my api
const API_KEY = "8fecdddd262f91a026ccee6d22c1827b";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},NG`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
