// import { TaskForm } from "./components/TaskForm";
// import { TaskFormToolkit } from "./components-toolkit/TaskFormToolkit";
// import { TaskFormSlice } from "./components/toolkit-slice/TaskFormSlice";
import { TaskFormSliceAsync } from "./components/toolkit-slice-async/TaskFormSliceAsync";
import styled from "styled-components"
const Container = styled.div`
 width: 100vw;
  height: 100%;
  background-image: url("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDZyNzNraWhreDJpN2wwNG5rdXgydXlxZWJ1cWkzYnJ6dWhycTJ2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4KihuqeuJEi9qLSM/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 20px;
`
function App() {
  return (
    <Container>
    {/* <TaskFormToolkit /> */}
  {/* <TaskForm /> */}
   {/* <TaskFormSlice /> */}
   <TaskFormSliceAsync />
  </Container>
  );
}

export default App;
