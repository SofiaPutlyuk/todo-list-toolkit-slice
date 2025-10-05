import { createSlice } from "@reduxjs/toolkit";
const tasksSlice = createSlice({
    name:"tasks app",
    initialState:{
         tasks: JSON.parse(localStorage.getItem("tasks")) ||  [
            {id:0 , text:"Learn Redux Classic", isDone:false},
            {id:1 , text:"Learn Redux Toolkit" , isDone:false}
        ]
    },
    reducers:{
    addTask: (state , action) => {
     return {
        ...state , 
        tasks: [...state.tasks , action.payload]
     }
    },
    removeTask: (state , action) => {
        return {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload)
        }
    },
    toggleTask : (state , action) => {
        const findTask = state.tasks.find(task => task.id === action.payload)
        if(findTask){
            findTask.isDone=!findTask.isDone
        }
    },
    editTask: (state , action) => {
        state.tasks = state.tasks.map((task) => 
        task.id === action.payload.id ? {...task , ...action.payload} : task
        )
    }
    }
})
export const {addTask , removeTask , toggleTask , editTask} = tasksSlice.actions;
export default tasksSlice.reducer