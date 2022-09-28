import axios from "axios";

const API_URL = "/api/users/";
//* add a proxy to the frontend package json to make the correct url such as
//* for this project we add http://localhost:5000/ for our server

//Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = { register };

export default authService;
