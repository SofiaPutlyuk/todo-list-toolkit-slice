import { useDispatch } from "react-redux"
import { deleteTask , isDoneTask } from "../../redux-toolkit-slice-async/tasksSliceAsync"
import styled from "styled-components"
function randomColor(){
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r} , ${g} , ${b})`;
}
const ContainerList = styled.ul`
  display: flex;
  gap:20px;
  background-color:${randomColor()};
  padding-bottom:20px;
  padding-top:20px;
  align-items:center;
  border-radius:20px;
  width:1000px;
  margin:auto;
  margin-top:20px;
  height:auto;
  justify-content:center;
  flex-direction:column;
`
const Title = styled.h1`
  font-size:28px;
  color:white;
`
const ContainerItem = styled.li`
  list-style:none;
  text-align:center;
`
const ButtonDelete = styled.button`
  width:200px;
  height:40px;
  background-color:${randomColor};
  border:none;
  border-radius:10px;
`
const InputCheckbox = styled.input`
width:20px;
height:20px;
border-radius:20px;
`
export const TaskListSliceAsync = ({tasks}) => {
    const dispatch = useDispatch()
    return(
    <ContainerList>
        <Title>Task List</Title>
        {tasks.map((elem) => (
        <ContainerItem key={elem.id}>
            <InputCheckbox type="checkbox" checked={elem.isDone} onChange={() => dispatch(isDoneTask(elem.id) )}/>
            <p style={{textDecoration: elem.isDone ? "line-through" : "none"}}>{elem.text}</p>
            <ButtonDelete onClick={() => dispatch(deleteTask(elem.id))}>Delete</ButtonDelete>
        </ContainerItem>
        ))}
    </ContainerList>
    )
}