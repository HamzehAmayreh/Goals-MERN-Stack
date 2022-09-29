import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
//Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
<<<<<<< HEAD
//Register user
=======
>>>>>>> 1448253feba83abea4cdd869df17c8b6068bdb5c
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.date &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
<<<<<<< HEAD
//Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.date && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});
=======
>>>>>>> 1448253feba83abea4cdd869df17c8b6068bdb5c
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //because in our thunk func we set our catch to send a string to it will bring that
        state.user = null;
<<<<<<< HEAD
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //because in our thunk func we set our catch to send a string to it will bring that
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
=======
>>>>>>> 1448253feba83abea4cdd869df17c8b6068bdb5c
      });
    //* in these cases pending/fullfiled/rejected it is handeled automatically rather than
    //* handling them indivuallay, and that done by redux
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
