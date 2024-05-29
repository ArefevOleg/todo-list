import {Todolist} from "./TodoList";
import {useState} from "react";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterType = "All" | "Completed" | "Active"
const App = () => {
    let [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JavaScript", isDone: false},
        {id: v1(), title: "React", isDone: false},
    ])
    const [filter, setFilter] = useState<FilterType>("All")
    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }
    const removeTasks = (taskId: string) => {
        const filterTasks = tasks.filter(task => {
            return (
                task.id !== taskId
            )})
        setTasks(filterTasks)
    }
    let filterTasks = tasks
    if (filter === "Completed") {
        filterTasks = tasks.filter(task => !task.isDone)
    }
    if (filter === "Active") {
        filterTasks = tasks.filter(task => !task.isDone)
    }

    return (
        <div className="app">
            <Todolist title={"TodoList"} tasks={filterTasks} changeFilter={changeFilter} removeTasks={removeTasks}/>
        </div>
    )
}

export default App