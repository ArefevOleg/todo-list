import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {Button} from "./components/Button";
import {FilterValuesType, TaskType} from "./App";

type PropsType = {
    name: string
    tasks: TaskType[]
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (filter: FilterValuesType, todolistId: string) => void
    addTask: (taskTitle: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, taskStatus: boolean, todolistId: string) => void
    filter: FilterValuesType
    todolistId: string //?
}

export const TodoList = ({name, tasks, removeTask, addTask, changeFilter, changeTaskStatus, filter, todolistId}: PropsType) => {
    const [taskTitle, setTaskTitle] = useState("")
    const [error, setError] = useState<string | null>(null)


    const addTaskHandler = () => {
        if (taskTitle.trim() !== '') {
            addTask(todolistId,taskTitle.trim())
            setTaskTitle('')
        } else {
            setError('Title is required')
        }
    }
    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }
    const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }
    const changeFilterTasksHandler = (filter: FilterValuesType) => {
        changeFilter(filter, todolistId)
    }


    return (
        <div>
            <h3>{name}</h3>
            <div>
                <input
                    className={error ? 'error' : ''}
                    value={taskTitle}
                    onChange={changeTaskTitleHandler}
                    onKeyUp={addTaskOnKeyUpHandler }
                />
                <Button name={"+"} onClick={addTaskHandler}/>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            {tasks.length === 0 ? (
                <span>No tasks</span>
            ) : (
                tasks.map(task => {

                    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        const newStatusValue = e.currentTarget.checked
                        changeTaskStatus(task.id, )
                    }
                    return (
                        <ul className="box-list">
                            <li className={task.isDone ? 'is-done' : ''} key={task.id}>
                                <input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler} />
                                <span>{task.title}</span>
                                <Button name={"x"} onClick={() => removeTask(task.id, todolistId)}/>
                            </li>
                        </ul>
                    )
                })
            )}
            <div>
                <Button
                    name={"All"}
                    onClick={() => changeFilterTasksHandler("all")}
                    className={filter === 'all' ? 'active-filter' : ''}
                />
                <Button
                    name={"Active"}
                    onClick={() => changeFilterTasksHandler("active")}
                    className={filter === 'active' ? 'active-filter' : ''}
                />
                <Button
                    name={"Completed"}
                    onClick={() => changeFilterTasksHandler("completed")}
                    className={filter === 'completed' ? 'active-filter' : ''}
                />
            </div>
        </div>
    );
};

