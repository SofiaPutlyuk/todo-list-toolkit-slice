import { useDispatch , useSelector } from "react-redux"
import { addTask } from "../../redux-toolkit-slice-async/tasksSliceAsync"
import { getTasks ,  filterTask} from "../../redux-toolkit-slice-async/tasksSliceAsync"
import { nanoid } from "nanoid"
import { TaskListSliceAsync } from "./TaskListSliceAsync"
import styled from "styled-components"
import { useEffect , useState} from "react"
import { IoFilterOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
const Form = styled.form`
width:500px;
height:auto;
padding-top:20px;
padding-bottom:20px;
display:flex;
flex-direction:column;
margin:auto;
background: linear-gradient(#e66465, #9198e5);
align-items:center;
border-radius:20px;
gap:20px;
`
const Title = styled.h1`
    font-size:30px;
    font-family:"Railway";
    color:white;
`
const ButtonAdd = styled.button`
    width:250px;
    height:40px;
    text-align:center;
    border:none;
    border-radius:20px;
`
const FilterInput = styled.input`
width:300px;
height:30px;
padding-left:30px;
border-radius:20px;
border:none;
`
const TaskInput = styled.input`
width:230px;
height:30px;
border:none;
border-radius:20px;
padding-left:20px;
margin-top:20px;
`

export const TaskFormSliceAsync = () => {
    const [filter , setFilter] =useState("")
    const task = useSelector(state => state.tasks.tasks)
    const dispatch = useDispatch()
    console.log(task)
    useEffect(() => {
     dispatch(getTasks())
    } , [dispatch])
   const filteredTask = task.filter(t => (t.text || t.task || "").toLowerCase().includes(filter.toLowerCase()))
    return (
        <>
        <Form onSubmit={(e) => {
            e.preventDefault()
            const text = e.target.elements.task.value
            console.log(text)
            dispatch(addTask({ id: nanoid(), text }))
        }}>
            <Title>Task Form</Title>
            <TaskInput type="text" name="task" placeholder="Text" />
            <ButtonAdd><IoMdAdd /></ButtonAdd>
            <label>
           <IoFilterOutline  style={{position:"relative" , left:25 , top:2  }}/>
              <FilterInput type="text" placeholder="filter" name="filter" onChange={(e) => dispatch(filterTask(e.target.value))}/>
            </label>
        </Form>
           <TaskListSliceAsync tasks={filteredTask} />
        </>
    )
}