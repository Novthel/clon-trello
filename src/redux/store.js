import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../redux/reducer/TaskSlice'

export const store = configureStore({
    reducer:{
        task: taskReducer,
    }
})
