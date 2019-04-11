const axios = require("axios");

const getTodos = async (req, res) => {
  let list = await axios.get("https://jsonplaceholder.typicode.com/todos");
  res.status(200).send(list.data);
};
module.exports = { getTodos };
