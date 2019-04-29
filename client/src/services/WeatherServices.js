import axios from "axios";
let baseUrl = process.env.REACT_APP_BASEURL || "";
baseUrl += "/api";

export const forecast = async (zip, unit) => {
  let response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=${unit}&APPID=${
      process.env.REACT_APP_WEATHER_API_KEY
    }`
  );
  return response;
};

const responseError = error => {
  return Promise.reject(error);
};
const responseSuccess = response => {
  return response.data;
};
