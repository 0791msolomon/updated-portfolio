import axios from "axios";
let baseUrl = process.env.REACT_APP_BASEURL || "";
baseUrl += "/api/trivia";

export const getTrivia = async word => {
  try {
    let response = await axios.get(`${baseUrl}`, { params: { word } });
    return response;
  } catch (err) {
    return err;
  }
};

export const getNumber = async number => {
  try {
    let response = await axios.get(`${baseUrl}/number`, { params: { number } });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const randomTrivia = async () => {
  try {
    let response = axios.get(`${baseUrl}/randomTrivia`);
    return response;
  } catch (err) {
    return err;
  }
};
