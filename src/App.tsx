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
    let [tasks, setTasks] = useState<TaskType[]>(
        [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},
        ]
    )

    const [filter, setFilter] = useState<FilterValuesType>('all')

    let tasksForTodolist = tasks
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(task => task.isDone === false)
    }

    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(task => task.isDone === true)
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

const removeTask = (taskId: string) => {
    const filteredTasks = tasks.filter(task => {
        return task.id !== taskId
    })
    setTasks(filteredTasks)
}

    const addTask = (taskTitle: string) => {
        const newTask = {
            id: v1(),
            title: taskTitle,
            isDone: false,
        }
        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    return (
        <div className="app">
            <TodoList title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    )
}

export default App