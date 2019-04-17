import axios from "axios";
let baseUrl = process.env.REACT_APP_BASEURL || "";
baseUrl += "/api";

export const forecast = async zip => {
  console.log(process.env.REACT_APP_WEATHER_API_KEY);
  return process.env.REACT_APP_WEATHER_API_KEY;
};

const responseError = error => {
  return Promise.reject(error);
};
const responseSuccess = response => {
  return response.data;
};
