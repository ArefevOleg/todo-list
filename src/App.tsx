import './App.css'
import {TodolistItem} from "./components/TodolistItem.tsx";


export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const App = () => {
    const tasks:Task[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ]

    return (
        <div className="app">
            <TodolistItem title="What to learn" tasks={tasks} />
        </div>
    );
};
