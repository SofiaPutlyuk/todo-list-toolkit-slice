import { statusTasks } from "../redux/type"
import  {createReducer} from "@reduxjs/toolkit"
const initialState = {
        tasks: JSON.parse(localStorage.getItem("tasks")) ||  [
            {id:0 , text:"Learn Redux Classic", isDone:false},
            {id:1 , text:"Learn Redux Toolkit" , isDone:false}
        ]
}
export const tasksReducer = createReducer(initialState , (builder) => {
    builder
    .addCase(statusTasks.ADD_TASK , (state , action)  => {
      return {
        ...state , 
        tasks: [...state.tasks , action.payload]
      }
    })
    .addCase(statusTasks.REMOVE_TASK , (state , action) => {
      return {
        ...state , 
        tasks:state.tasks.filter(task => task.id !== action.payload)
      }
    })
    .addCase(statusTasks.TOGGLE_TASK , (state , action) => {
     const findTask = state.tasks.find(task => task.id === action.payload)
     if(findTask){
        findTask.isDone =!findTask.isDone
     }
    })
    .addCase(statusTasks.EDIT_TASK , (state , action) => {
    state.tasks = state.tasks.map((task) => 
     task.id === action.payload.id ? {...task , ...action.payload.changes} : task
    )
    })
})