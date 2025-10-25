import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
export const getTasks = createAsyncThunk("tasks/fetchAll" , async () => {
    const res = await fetch("https://68f4c907b16eb6f468357b30.mockapi.io/tasks")
    const data = await res.json()
    return data;
})
export const addTask = createAsyncThunk("tasks/addTask" , async(task) => {
    const res = await fetch("https://68f4c907b16eb6f468357b30.mockapi.io/tasks" , {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(task)
    })
    const data = await res.json()
    return data
})
export const deleteTask = createAsyncThunk("tasks/deleteTask" , async(id) => {
    await fetch(`https://68f4c907b16eb6f468357b30.mockapi.io/tasks/${id}` , {
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })
    return id;
})
export const isDoneTask = createAsyncThunk("tasks/toggleTask" , async(id) => id)
export const filterTask = createAsyncThunk("tasks/filterTask" , async(query) => query)
const tasksSlice = createSlice({
    name:"tasks",
    initialState:{
        isLoading:false,
        error:null,
        tasks:[]
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTasks.pending , (state) => {
            state.isLoading = true
        })
        .addCase(getTasks.fulfilled , (state , action) => {
            state.isLoading = false
            state.error = null
            state.tasks = action.payload
        })
        .addCase(getTasks.rejected , (state , action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        .addCase(addTask.fulfilled , (state , action) => {
            state.isLoading = false
            state.error = null
            state.tasks.push(action.payload)
        })
        .addCase(deleteTask.fulfilled , (state ,action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        })
        .addCase(isDoneTask.fulfilled ,  (state ,action)  => {
            const task = state.tasks.find(task => task.id === action.payload)
            if(task){
                task.isDone=!task.isDone
            }
        })
        .addCase(filterTask.fulfilled , (state , action) => {
            state.tasks = state.tasks.filter(task => task.text.toLowerCase().includes(action.payload.toLowerCase()))
        })
        
    }
})
export default tasksSlice.reducer