import {createStore} from "redux";
const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks")) ||  [
        {id:0 , text:"Learn Redux Classic", isDone:false},
        {id:1 , text:"Learn Redux Toolkit" , isDone:false}
    ]
}
const reducer = (state = initialState , action) => {
    switch(action.type){
        case "tasks/addTask" :
            return {
                ...state,
                tasks: [...state.tasks , action.payload]
            }
        case "tasks/removeTask":
            return {
                ...state ,
                tasks : state.tasks.filter(task => task.id !== action.payload)
            }
        case "tasks/toggleTask":
            return {
                ...state ,
                tasks: state.tasks.map(task => task.id === action.payload ? {...task , isDone : !task.isDone} : task)
            }
        case "tasks/editTask":
            return {
                ...state ,
                tasks: state.tasks.map(task => task.id === action.payload.id ? {...task , ...action.payload.changes} : task )
            }
        default:
            return state
    }
}
export const store = createStore(reducer)