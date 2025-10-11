import { nanoid } from "nanoid"
export const addTask = (text,isDone) => ({
type:"tasks/addTask",
payload:{
    id:nanoid(),
    text,
    isDone
}
})
export const removeTask = (id) => ({
    type:"tasks/removeTask",
    payload:id
})
export const toggleTask = (id) => ({
    type:"tasks/toggleTask",
    payload:id
})
export const editTask = (id , changes) => ({
    type:"tasks/editTask",
    payload:{
        id , changes
    }
})
export const filterTask = (filter) => ({
    type:"tasks/filterTask",
    payload: {
        filter
    }
})