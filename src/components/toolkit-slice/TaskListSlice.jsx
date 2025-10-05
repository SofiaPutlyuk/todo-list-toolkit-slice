import { useDispatch } from "react-redux"
import { removeTask , toggleTask , editTask } from "../../redux-toolkit-slice/tasksSlice"
import styled from "styled-components"
const ContainerList = styled.ul`
margin:auto;
display:flex;
flex-wrap:wrap;
width:600px;
height:auto;
gap:20px;
height:auto;
padding-bottom:30px;
height:auto;
`
const ListItem = styled.li`
display:flex;
flex-direction:column;
gap:20px;
margin-top:80px;
`
const DeleteButton = styled.button`
width:150px;
height:30px;
border:none;
border-radius:10px;
background:linear-gradient(#f40000, #00cbf4 , #ff2c2c , #8af400);
color:white;
`
const InputEdit = styled.input`
width:200px;
height:40px;
border:none;
border-radius:15px;
`
export const TaskListSlice = ({tasks}) => {
 const dispatch = useDispatch()
return(
    <ContainerList>
        {tasks.map((task) => (
          <ListItem key={task.id}>
          <input type="checkbox" checked={task.isDone} onChange={() => dispatch(toggleTask(task.id))}/>
            <p style={{textDecoration: task.isDone ? "line-through" : "none"}}>{task.text}</p>
            <DeleteButton onClick={() => dispatch(removeTask(task.id)) }>Delete</DeleteButton>
            <InputEdit type="text" value={task.text}  placeholder="Edit" onChange={(e) => dispatch(editTask({...task , text:e.target.value}))}/>
          </ListItem>
        ))}
    </ContainerList>
)
}