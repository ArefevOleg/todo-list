import {Task} from "../App.tsx";


type PropsType = {
    title: string
    tasks: Task[]
    date?: string
}


export const TodolistItem = ({title, tasks, date}: PropsType ) => {
    return (
        <div className="app">
            <div>
                <h3>{title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {tasks.map(task => {
                        debugger
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
            <div>{date}</div>
        </div>
    )
};

