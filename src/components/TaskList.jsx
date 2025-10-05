import { useDispatch } from "react-redux"
import { toggleTask , removeTask  , editTask} from "../redux/action" 
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

export const TaskList = ({tasks}) => {
 const dispatch = useDispatch()
    return(
        <ContainerList>
            {tasks.map((task) => (
           <ListItem key={task.id}>
              <label>
                isDone:
            <input type="checkbox" checked={task.isDone} onChange={() => dispatch(toggleTask(task.id))}/>
            </label>
            <p style={{textDecoration: task.isDone ? "line-through" : "none"}}>{task.text}</p>
            <DeleteButton onClick={() => dispatch(removeTask(task.id))}>Delete</DeleteButton>
            <label>
                Edit:
            <InputEdit type="text" value={task.text} onChange={(e) => dispatch(editTask(task.id , {text : e.target.value })) } />
           </label>
           </ListItem>
            ))}
        </ContainerList>
    )
}