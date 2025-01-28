import {FilterValues, Task} from "../App.tsx";
import {Button} from "./Button.tsx";


type PropsType = {
    title: string
    tasks: Task[]
    date?: string
    deleteTask: (taskId: number) => void
    changeFilter: (filter: FilterValues) => void
}


export const TodolistItem = ({title, tasks, date, deleteTask, changeFilter}: PropsType ) => {
    return (
        <div className="app">
            <div>
                <h3>{title}</h3>
                <div>
                    <input/>
                    <Button onClick={() => ("+")} title="+"/>
                </div>
                    {tasks.length === 0 ? (
                        <span>no task</span>
                    ) : (
                        tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                    <Button onClick={() => deleteTask(task.id)} title="x"/>
                                </li>
                            )
                        })
                    )}
                <div>
                    <Button onClick={() => changeFilter("all")} title="all" />
                    <Button onClick={() => changeFilter("active")} title="active" />
                    <Button onClick={() => changeFilter("completed")} title="completed" />
                </div>
            </div>
            <div>{date}</div>
        </div>
    )
};

