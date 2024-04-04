import "./App.css";
import { TaskType, FilterValuesType } from "./Types";
import { Todolist } from "./Todolist";
import React, { useState } from 'react';

function App() {
  const [filter, setFilter] = useState<FilterValuesType>('all')

let tasksForTodolist = tasks
 
if (filter === 'active') {
  tasksForTodolist = tasks.filter(task => !task.isDone)
}
 
if (filter === 'completed') {
  tasksForTodolist = tasks.filter(task => task.isDone)
}

  let [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'Typescript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ])
 
  const removeTask = (taskId: number) => {
    const filteredTasks = tasks.filter(task => {
      return task.id !== taskId
    })
    setTasks(filteredTasks)
  }
  // const tasks_2: Array<TaskType> = [
  //   {
  //     id: 1,
  //     title: "Apple",
  //     isDone: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Orange",
  //     isDone: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Pear",
  //     isDone: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Pineapple",
  //     isDone: false,
  //   },
  // ];

  // const tasks_3: Array<TaskType> = [
  //   {
  //     id: 1,
  //     title: "Dog",
  //     isDone: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Cat",
  //     isDone: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Fish",
  //     isDone: false,
  //   },
  // ];

  return (
    <div className="App">
      <>
      <Todolist title="Red todolistName" tasks={tasks} removeTask={removeTask} />
      {/* <Todolist title="Blue todolistName" tasks={tasks_2} /> */}
      {/* <Todolist title="Green todolistName" tasks={tasks_3} date="01.01.2022" /> */}
      </>
    </div>
  );
}


export default App;
