import axios from "axios";
let baseUrl = process.env.REACT_APP_BASEURL || "";
baseUrl += "/api";

export const forecast = async zip => {
  return process.env.REACT_APP_WEATHER_API_KEY;
};

const responseError = error => {
  return Promise.reject(error);
};
const responseSuccess = response => {
  return response.data;
};
