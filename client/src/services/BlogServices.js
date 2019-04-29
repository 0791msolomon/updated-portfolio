import axios from "axios";
let baseUrl = process.env.REACT_APP_BASEURL || "";
baseUrl += "/api";

export const likeBlog = async id => {
  try {
    let response = await axios.post(`${baseUrl}/blog/like/${id}`);
    return response;
  } catch (err) {
    return err;
  }
};
