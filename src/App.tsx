import {useState} from "react";
import {v1} from 'uuid'
import {TodoList} from "./TodoList";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

const App = () => {
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>("all")
    let tasksForTodolist = tasks
    if (filter === "active")
        tasksForTodolist = tasks.filter(task => !task.isDone)
    if (filter === "completed")
        tasksForTodolist = tasks.filter(task => task.isDone)

    const addTask = () => {
        console.log("+")
    }

    const removeTask = (taskId: string) => {
        const filterTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filterTasks)
    }
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    return (
        <div className="app">
            <TodoList name={"TodoList"} tasks={tasksForTodolist} addTask={addTask} removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    )
}

export default App