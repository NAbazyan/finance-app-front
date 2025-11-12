import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user")
const token = localStorage.getItem("token")

const initialState = {
    token: token ? token : null,
    user: user ? JSON.parse(user) : null 
}

const authSlice = createSlice({
  name: "auth",
    initialState,
    reducers: {
        setCreadentials: (state, action) => {
            const {user, token} = action.payload
            state.user = user
            state.token = token

            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
        },
        logout: state => {
            state.user = null
            state.token = null

            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    }
});


export const {setCreadentials, logout} = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = state => state.user
export const selectCurrentToken = state => state.token