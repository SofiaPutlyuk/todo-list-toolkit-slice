import styled from "styled-components"
import { addTask, filterTask } from "../../redux-toolkit-slice/tasksSlice"
import { useDispatch } from "react-redux"
import { MdAddTask } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { nanoid } from "nanoid"
import { useSelector } from "react-redux";
import { TaskListSlice } from "./TaskListSlice";
import { useEffect } from "react";
const MainWrapper = styled.div`
    width:800px;
    height:auto;
    border-radius:15px;
    background:linear-gradient(#1cf332 , #f34b1c , #8b1cf3 , #e5f31c);
    margin:auto;
    padding-top:20px;
`
const WrapperForm = styled.form`
    width:400px;
    display:flex;
    flex-direction:column;
    background:linear-gradient(#00f4f0, #f4009f , #ff2c2c , #b700f4);
    height:auto;
    padding-bottom:20px;
    border-radius:14px;
    align-items:center;
    margin:auto;
    justify-content:center;
    gap:20px;
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
const ButtonAdd = styled.button`
width:200px;
height:40px;
background: linear-gradient(90deg, #6600ff, #ee09c4);
border:none;
border-radius:13px;
`
const FilterInput = styled.input`
width:200px;
height:30px;
border:none;
border-radius:8px;

`
export const TaskFormSlice = () => {
    const tasks = useSelector(state => state.tasks.tasks)
    const filter = useSelector((state) => state.tasks.filter);

    const filteredTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(filter)
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
    const dispatch = useDispatch()
    return (
        <MainWrapper>
            <WrapperForm onSubmit={(e) => {
                e.preventDefault()
                const text = e.target.elements.text.value
                dispatch(addTask({ id: nanoid(), text, isDone: false }))
            }}>
                <TitleForm>Add Task</TitleForm>
                <label>
                    <MdAddTask style={{ position: "relative", left: 20 }} />
                    <WrapperInput type="text" name="text" placeholder="Add Task" />
                </label>
                <label>
                    Filter:
                    <FilterInput type="text" placeholder="Filter" name="filter" onChange={(e) => dispatch(filterTask(e.target.value))} />
                </label>
                <ButtonAdd><BiTask /> Add Task</ButtonAdd>
            </WrapperForm>
            <TaskListSlice tasks={filteredTasks} />
        </MainWrapper>
    )
}