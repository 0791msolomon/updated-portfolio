import axios from "axios";
let baseUrl = process.env.REACT_APP_BASEURL || "";
baseUrl += "/api";

export const forecast = async zip => {
  axios
    .get(
      `api.openweathermap.org/data/2.5/forecast?zip=86005,us&APPID=49d19469d121e07effc45f5ef3da6790`
    )
    .then(responseSuccess);
};

const responseError = error => {
  return Promise.reject(error);
};
const responseSuccess = response => {
  return response.data;
};
