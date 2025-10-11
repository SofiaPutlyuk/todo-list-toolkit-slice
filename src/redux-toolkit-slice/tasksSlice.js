import { createSlice } from "@reduxjs/toolkit";
const tasksSlice = createSlice({
    name:"tasks app",
    initialState:{
         tasks: JSON.parse(localStorage.getItem("tasks")) ||  [
            {id:0 , text:"Learn Redux Classic", isDone:false},
            {id:1 , text:"Learn Redux Toolkit" , isDone:false}
        ],
        filter:"",
        filteredTasks:[]
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
    },
    filterTask:(state , action) => {
        state.filter = action.payload.toLowerCase();
        state.filteredTasks = state.tasks.filter((task) => task.text.toLowerCase().includes(state.filter))
    }
    }
})
export const {addTask , removeTask , toggleTask , editTask , filterTask} = tasksSlice.actions;
export default tasksSlice.reducer