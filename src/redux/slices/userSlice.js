import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.loggedIn = true;
      return state;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      return state;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      return state;
    },
    removeUser: (state) => {
      state.user = undefined;
      state.loggedIn = false;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeUser, setUser, updateUser, setLogin } = userSlice.actions;

export default userSlice.reducer;
