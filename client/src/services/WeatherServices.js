import axios from "axios";

const forecast = async zip => {
  let response = await axios.get("/api/forecast", { params: zip });
};
