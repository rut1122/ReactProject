import { createSlice } from "@reduxjs/toolkit";
import { string } from "yup";

const userSlice = createSlice({
    name:"user",
  initialState: {
    registeredUser:{
    name: "tyty",
    password: "123123",
  },
  isLoggedIn: false,
},
  //הפונקציות לסלייס של המשתמש
  reducers: {
    //התחברות
    login: (state, action) => {
      const { name, password } = action.payload;
      if (
        name === state.registeredUser.name &&
       String( password) === String(state.registeredUser.password)
      ) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
       state.setLoginerror=true;

      }
    },
    //התנתקות
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
  
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
