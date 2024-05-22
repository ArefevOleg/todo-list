import {TodoList} from "./TodoList";

export type  TaskType = {
    id: number
    title: string
    isDone: boolean
}

const tasks1: TaskType[] =  [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
]




const App = () => {
    return (
        <div className="app">
            <TodoList title={"What to learn"} tasks={tasks1}/>
        </div>
    )
}

export default App