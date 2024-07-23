import { configureStore } from "@reduxjs/toolkit";
import  AuthSlice  from "./slices/auth-slice";

export const store = configureStore({
    reducer: {
      auth: AuthSlice
    }
  })