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

<<<<<<< HEAD
//Login User

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout User
const logout = () => {
  localStorage.removeItem("user"); //simple way it can be more complicated #check later
};
const authService = { register, login, logout };
=======
const authService = { register };
>>>>>>> 1448253feba83abea4cdd869df17c8b6068bdb5c

export default authService;
