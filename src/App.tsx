import {useState} from "react";
import {v1} from 'uuid'
import {TodoList} from "./TodoList";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type FilterValuesType = 'all' | 'active' | 'completed'
const App = () => {
    let [todolists, setTodolists] = useState<TodolistType[]>([
        {id: v1(), title: 'What to learn', filter: 'all'},
        {id: v1(), title: 'What to buy', filter: 'all'},
    ])


    let [tasks, setTasks] = useState<TaskType[]>(
        [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},
        ]
    )

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

    const changeTaskStatus = (taskId: string, taskStatus: boolean) => {
        const newState = tasks.map(task => (task.id === taskId ? {...task, isDone: taskStatus} : task))
        setTasks(newState)
    }

    return (
        <div className="app">
            {todolists.map(tl => {
                let tasksForTodolist = tasks
                if (tl.filter === 'active') {
                    tasksForTodolist = tasks.filter(task => task.isDone === false)
                }

                if (tl.filter === 'completed') {
                    tasksForTodolist = tasks.filter(task => task.isDone === true)
                }

                const changeFilter = (todolistId: string, filter: FilterValuesType) => {
                    const newTodolists = todolists.map(tl => {
                        return tl.id === todolistId ? { ...tl, filter } : tl
                    })
                    setTodolists(newTodolists)
                }

                return (
                    <TodoList key={tl.id}
                              todolistId={tl.id}
                              title={tl.title}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeTaskStatus}
                              filter={tl.filter}
                    />
                )
            })}
        </div>
    )
}

export default App