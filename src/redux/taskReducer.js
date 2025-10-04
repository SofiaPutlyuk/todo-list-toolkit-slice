import { useDispatch , useSelector } from "react-redux";
export const AppTask = () => {
const dispatch = useDispatch()
const action = useSelector(state => state.action)
const handleSubmit = (type) => {
    dispatch({type:"action/setAction" , action:type})
}
    return (
        <div>
        <button onClick={handleSubmit(statusTasks.ADD_TASK)} aria-pressed={action === statusTasks.ADD_TASK}>Add</button>
        <button onClick={handleSubmit(statusTasks.REMOVE_TASK)} aria-pressed={action === statusTasks.REMOVE_TASK}>Remove</button>
        <button onClick={handleSubmit(statusTasks.TOGGLE_TASK)} aria-pressed={action === statusTasks.TOGGLE_TASK}>Toggle</button>
        <button onClick={handleSubmit(statusTasks.EDIT_TASK)} aria-pressed={action === statusTasks.EDIT_TASK}>Edit</button>
        </div>
    )
}