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

export type TasksStateType = {
    [key: string]: TaskType[]
}

const App = () => {
    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<TodolistType[]>([
        { id: todolistID1, title: 'What to learn', filter: 'all' },
        { id: todolistID2, title: 'What to buy', filter: 'all' },
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
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
/////////// удаление todolist //////////
    const removeTodolist = (todolistId: string) => {
        const newTodolists = todolists.filter(tl => tl.id !== todolistId)
        setTodolists(newTodolists)
        // удалим таски для тудулиста из стейта где мы храним таски
        delete tasks[todolistId]
        // засетаем в state копию объекта
        setTasks({ ...tasks })
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
                               removeTodolist={removeTodolist}
                    />
                )
            })}
        </div>
    )
}

export default App