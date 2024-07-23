import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogin: true,
    username: ''
  }


  export const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        onLogin: (state, action) => {
            return {
                isLogin: true,
                username: action.payload
              }
          },
          onLogout: state => {
            return {
                isLogin: false,
                username: ''
              }
          }

    }
  })


  export const { onLogin, onLogout } = AuthSlice.actions

  export default AuthSlice.reducer