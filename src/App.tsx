import {useState} from "react";
import {v1} from 'uuid'
import {TodoList} from "./TodoList";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}


const App = () => {
    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<TodolistType[]>([
        { id: todolistID1, title: 'What to learn', filter: 'all' },
        { id: todolistID2, title: 'What to buy', filter: 'all' },
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            { id: v1(), title: 'HTML&CSS', isDone: true },
            { id: v1(), title: 'JS', isDone: true },
            { id: v1(), title: 'ReactJS', isDone: false },
        ],
        [todolistID2]: [
            { id: v1(), title: 'Rest API', isDone: true },
            { id: v1(), title: 'GraphQL', isDone: false },
        ],
    })

/////////// удаление тасок //////////
    const removeTask = (taskId: string, todolistId: string) => {
        const newTodolistTasks = {
            ...tasks,
            [todolistId]: tasks[todolistId].filter(t => t.id !== taskId),
        }
        setTasks(newTodolistTasks)
    }

/////////// добавление тасок //////////
    const addTask = (title: string, todolistId: string) => {
        const newTask = {
            id: v1(),
            title: title,
            isDone: false,
        }
        const newTodolistTasks = { ...tasks, [todolistId]: [newTask, ...tasks[todolistId]] }
        setTasks(newTodolistTasks)
    }

    const changeTaskStatus = (taskId: string, taskStatus: boolean, todolistId: string) => {
        const newTodolistTasks = {
            ...tasks,
            [todolistId]: tasks[todolistId].map(t => (t.id == taskId ? { ...t, isDone: taskStatus } : t)),
        }
        setTasks(newTodolistTasks)
    }

    return (
        <div className="app">
            {todolists.map(tl => {
                /////////// фильтрация тасок //////////
                const allTodolistTasks = tasks[tl.id]
                let tasksForTodolist = allTodolistTasks

                if (tl.filter === 'active') {
                    tasksForTodolist = allTodolistTasks.filter(task => !task.isDone)
                }

                if (tl.filter === 'completed') {
                    tasksForTodolist = allTodolistTasks.filter(task => task.isDone)
                }

                const changeFilter = (filter: FilterValuesType, todolistId: string) => {
                    setTodolists(todolists.map(tl => (tl.id === todolistId ? { ...tl, filter } : tl)))
                }
                return (
                    <TodoList  key={tl.id}
                               todolistId={tl.id}
                               name={tl.title}
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