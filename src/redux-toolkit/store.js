import { configureStore } from "@reduxjs/toolkit";
// import { tasksReducer } from "./tasksReducer";
import tasksSlice from "../redux-toolkit-slice/tasksSlice"
export const store = configureStore({
    reducer:{
        // tasks: tasksReducer
        tasks:tasksSlice
    }
})