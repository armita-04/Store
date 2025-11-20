// import {createSlice} from "@reduxjs/toolkit";

// const userSlice = createSlice({

//     name: "user",

//     initialState: {
//         currentUser: null,
//         isFetching: false,
//         error: false
//     },

//     reducers:{
//         loginStart: (state) =>{
//             state.isFetching = true;
//         },
//         loginSuccess: (state, action) =>{
//             state.isFetching = false;
//             state.currentUser = action.payload
//         },
//         loginFailure: (state) =>{

//             state.isFetching = false;
//             state.error = true
//         },

//         logOut: (state) =>{
//             state.isFetching = false;
//             state.error = false;
//             state.currentUser = null;
//         }
//     }
// })

// export const {loginFailure, loginStart, loginSuccess, logOut} = userSlice.actions;
// export default userSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateUserStart: (state) => {
      state.isFetching = true;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },

    logOut: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
  },
});

export const {
  loginFailure,
  loginStart,
  loginSuccess,
  logOut,
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
