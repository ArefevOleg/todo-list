import "./App.css";
import { TaskType } from "./Types";
import { Todolist } from "./Todolist";

function App() {
  // const titleNameOne = "Red todolistName";
  // const titleNameTwo = "Blue todolistName";
  // const titleNameThree = "Green todolistName";
  const tasks_1: Array<TaskType> = [
    {
      id: 1,
      title: "HTML&CSS",
      isDone: true,
    },
    {
      id: 2,
      title: "JS",
      isDone: true,
    },
    {
      id: 3,
      title: "React",
      isDone: false,
    },
  ];
  const tasks_2: Array<TaskType> = [
    {
      id: 1,
      title: "Apple",
      isDone: false,
    },
    {
      id: 2,
      title: "Orange",
      isDone: true,
    },
    {
      id: 3,
      title: "Pear",
      isDone: false,
    },
    {
      id: 3,
      title: "Pineapple",
      isDone: false,
    },
  ];

  const tasks_3: Array<TaskType> = [
    {
      id: 1,
      title: "Dog",
      isDone: true,
    },
    {
      id: 2,
      title: "Cat",
      isDone: true,
    },
    {
      id: 3,
      title: "Fish",
      isDone: false,
    },
  ];
  return (
    <div className="App">
      <>
      <Todolist title="Red todolistName" tasks={tasks_1} />
      <Todolist title="Blue todolistName" tasks={tasks_2} />
      <Todolist title="Green todolistName" tasks={tasks_3} date="01.01.2022"/>
      </>
    </div>
  );
}


export default App;
