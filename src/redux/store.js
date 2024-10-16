import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './features/userReducer'

export const store = configureStore({
    reducer : {
        user : UserReducer
    }
})