import {useState} from "react";
import {v1} from 'uuid'
import {TodoList} from "./TodoList";
import {AddItemForm} from "./components/AddItemForm";

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

export type TasksStateType = {
    [key: string]: TaskType[]
}

export type FilterValuesType = 'all' | 'active' | 'completed'
const App = () => {
    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todoLists, setTodoLists] = useState<TodolistType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])


    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
    })
    const removeTask = (taskId: string, todolistId: string) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})
    }
    const addTask = (title: string, todolistId: string) => {
        const newTask = {
            id: v1(),
            title: title,
            isDone: false,
        }
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }

    const changeTaskStatus = (taskId: string, taskStatus: boolean, todolistId: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(t => (t.id == taskId ? {...t, isDone: taskStatus} : t)),
        })
    }

    const removeTodolist = (todolistId: string) => {
        const newTodolists = todoLists.filter(tl => tl.id !== todolistId)
        delete tasks[todolistId]
        setTodoLists(newTodolists)
    }

    const addTodolist = (title: string) => {
        const todolistId = v1()
        const newTodolist: TodolistType = { id: todolistId, title: title, filter: 'all' }
        setTodoLists([newTodolist, ...todoLists])
        setTasks({ ...tasks, [todolistId]: [] })
    }
    return (
        <div className="app">
            <AddItemForm addItem={addTodolist} />
            {todoLists.map(tl => {
                const allTodolistTasks = tasks[tl.id]
                let tasksForTodolist = allTodolistTasks

                if (tl.filter === 'active') {
                    tasksForTodolist = allTodolistTasks.filter(task => !task.isDone)
                }

                if (tl.filter === 'completed') {
                    tasksForTodolist = allTodolistTasks.filter(task => task.isDone)
                }

                const changeFilter = (todolistId: string, filter: FilterValuesType) => {
                    setTodoLists(todoLists.map(tl => (tl.id === todolistId ? {...tl, filter} : tl)))
                }

                const updateTask = (todolistId: string, taskId: string, title: string) => {
                    const newTodolistTasks = {
                        ...tasks,
                        [todolistId]: tasks[todolistId].map(t => (t.id === taskId ? { ...t, title } : t)),
                    }
                    setTasks(newTodolistTasks)
                }

                const updateTodolist = (todolistId: string, title: string) => {
                    const newTodolists = todoLists.map(tl => (tl.id === todolistId ? { ...tl, title } : tl))
                    setTodoLists(newTodolists)
                }

                return (
                    <TodoList key={tl.id}
                              todolistId={tl.id}
                              title={tl.title}
                              tasks={tasksForTodolist}
                              removeTodolist={removeTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeTaskStatus}
                              filter={tl.filter}
                              updateTask={updateTask}
                              updateTodolist={updateTodolist}
                    />
                )
            })}
        </div>
    )
}

export default App