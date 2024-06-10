import {TodoList} from "./TodoList";
import {useState} from "react";
import {v1} from 'uuid'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


const App = () => {
    const [tasks, setTasks] = useState<TaskType[]>(
        [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'CSS', isDone: true},
        ]
    )

    const removeTask = (taskId: string) => {
        let filterTask = tasks.filter(el => el.id !== taskId)
        setTasks(filterTask)
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(), title: title, isDone: false
        }
        const updateState = [newTask, ...tasks]
        setTasks(updateState)
    }

    return (
        <div className="app">
            <TodoList name={"TodoList"}
                      tasks={tasks}
                      removeTask={removeTask}
                      addTask={addTask}
            />
        </div>
    )
}

export default App