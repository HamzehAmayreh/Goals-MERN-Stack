import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
<<<<<<< HEAD
import goalReducer from "../features/goals/goalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
=======
export const store = configureStore({
  reducer: {
    auth: authReducer,
>>>>>>> 1448253feba83abea4cdd869df17c8b6068bdb5c
  },
});
