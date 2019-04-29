import axios from "axios";
let baseUrl = process.env.REACT_APP_BASEURL || "";
baseUrl += "/api/blog";

export const likeBlog = async id => {
  try {
    let response = await axios.post(`${baseUrl}/like/${id}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const reply = async (id, comment) => {
  let data = { id, comment };
  try {
    let response = await axios.post(`${baseUrl}/reply`, data);

    return response;
  } catch (err) {
    return err;
  }
};
