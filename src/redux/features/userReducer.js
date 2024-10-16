import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin : false
}

const UserReducer = createSlice({
    name :"user",
    initialState,
    reducers : {
        loginHandler : (state , action) => {
            state.isLogin = true,
            state.data = action.payload
            
        }
    }
})

export const {loginHandler} = UserReducer.actions
export default UserReducer.reducer