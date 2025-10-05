import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TaskList } from "./TaskList"
import { MdAddTask } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import styled from "styled-components"
const MainWrapper = styled.div`
    width:800px;
    height:900px;
    border-radius:15px;
    background:linear-gradient(#1cf332 , #f34b1c , #8b1cf3 , #e5f31c);
    margin:auto;
`
const WrapperInput = styled.input`
    width:270px;
    height:40px;
    border:none;
    border-radius:12px;
    padding-left:30px;
    background:linear-gradient(#0000f4, #7ef400 , #ff2ca4 , #ecf400);
    &::placeholder {
        color:white;
    }
`
const WrapperForm = styled.form`
    width:400px;
    display:flex;
    flex-direction:column;
    background:linear-gradient(#00f4f0, #f4009f , #ff2c2c , #b700f4);
    height:400px;
    border-radius:14px;
    align-items:center;
    margin:auto;
    justify-content:center;
    gap:20px;
`
const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  text-align: center;
  color: #fff;
  padding-top:40px;
  text-shadow: 0 0 5px #00e6e6, 0 0 10px #00e6e6, 0 0 20px #00e6e6, 0 0 40px #00cccc;
`
const TitleForm = styled.h2`
  font-family: 'Pacifico', cursive;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(90deg, #aeff00, #ee0909);
  background-clip: text;
  -webkit-text-fill-color:transparent;
`
const ButtonAdd = styled.button`
width:200px;
height:40px;
background: linear-gradient(90deg, #6600ff, #ee09c4);
border:none;
border-radius:13px;
`
export const TaskForm = () => {
    const [text , setText] = useState("")
    const [isDone , setIsDone] = useState(false)
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasks)
    useEffect(() => {
     localStorage.setItem("tasks" , JSON.stringify(tasks))
    }, [tasks])
    const handleAddTask = () => {
        dispatch({type:"tasks/addTask" , payload:{id:nanoid() , text , isDone:false}})
        setText("")
        setIsDone(false)
    }
    return (
        <MainWrapper>
             <Title>Your Task List</Title>
        <WrapperForm onSubmit={ (e) => {e.preventDefault() ;handleAddTask()}}>
            <TitleForm>Add Task</TitleForm>
            <label>
                <MdAddTask style={{position:"relative" , left:20}}/>
            <WrapperInput type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </label>
            <ButtonAdd><BiTask /> Add Task</ButtonAdd>
        </WrapperForm>
        <TaskList tasks={tasks}/>
        </MainWrapper>
    )
}