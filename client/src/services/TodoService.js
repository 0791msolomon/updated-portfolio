import axios from "axios";
let baseUrl = process.env.REACT_APP_BASEURL || "";
baseUrl += "/api/todo";

export const postTodo = async (todo, priority) => {
  let data = { todo, priority };
  try {
    let response = await axios.post(`${baseUrl}`, data);

    return response;
  } catch (err) {
    return err;
  }
};

export const getTodos = async () => {
  try {
    let response = await axios.get(`${baseUrl}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};
