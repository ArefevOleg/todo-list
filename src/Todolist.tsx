import {ChangeEvent, KeyboardEvent,useState} from "react";
import styled from 'styled-components';
import {FilterValuesType, TaskType} from "./App";
import {Button} from "./components/Button";
import { theme } from "./styles/Theme";

type TodoListPropsType = {
    title: string
    todolistId: string
    tasks: TaskType[]
    filter: FilterValuesType
    removeTask: (taskId: string) => void
    changeFilter: (todolistId: string, filter: FilterValuesType) => void
    addTask: (taskTitle: string) => void
    changeTaskStatus: (taskId: string, taskStatus: boolean) => void
}


export const TodoList = ({title, tasks,removeTask,changeFilter,addTask,changeTaskStatus, todolistId}: TodoListPropsType) => {
    // todo: переести
    // let tasksForTodolist = tasks
    // if (tl.filter === 'active') {
    //     tasksForTodolist = tasks.filter(task => task.isDone === false)
    // }
    //
    // if (tl.filter === 'completed') {
    //     tasksForTodolist = tasks.filter(task => task.isDone === true)
    // }
    //

    const [taskTitle, setTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const changeTaskStatusHandler = (taskId: string,e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        changeTaskStatus(taskId, newStatusValue)
    }

    const addTaskHandler = () => {
        if (taskTitle.trim() !== '') {
            addTask(taskTitle.trim())
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
        changeFilter(todolistId, filter)
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle}
                       style={{ color: theme.error.border}}
                       onChange={changeTaskTitleHandler}
                       onKeyUp={addTaskOnKeyUpHandler}
                />
                <Button bgColor={theme.btnColors.bgColor}
                        textColor={theme.colors.fontBlack}
                        name="+"
                        onClick={addTaskHandler}
                        padding="3px"
                        margin ="3px" />
                {error && <div style={{ color: theme.error.color}}>{error}</div>}
            </div>
            <ul>
                {tasks.length === 0 ? (
                    <span>No tasks</span>
                ) : (
                    tasks.map(el => {
                        const removeTaskHandler = () => {
                            removeTask(el.id)
                        }
                        return (
                            <li key={el.id} className={el.isDone ? 'is-done' : ''}>
                                <input type="checkbox" checked={el.isDone} onChange={(e) => changeTaskStatusHandler(el.id, e)}/>
                                <TaskName>{el.title}</TaskName>
                                <Button name="x"
                                        padding="2px"
                                        onClick={removeTaskHandler}/>
                            </li>
                        )
                    })
                )}
            </ul>
            <div>
                <Button bgColor={theme.btnColors.bgColor}
                        textColor={theme.colors.fontBlack}
                        padding="3px"
                        margin ="3px"
                        name="all" onClick={()=>changeFilterTasksHandler("all")} />
                <Button bgColor={theme.btnColors.bgColor}
                        textColor={theme.colors.fontBlack}
                        padding="3px"
                        margin ="3px"
                        name="active" onClick={()=>changeFilterTasksHandler("active")} />
                <Button bgColor={theme.btnColors.bgColor}
                        textColor={theme.colors.fontBlack}
                        padding="3px"
                        margin ="3px"
                        name="completed" onClick={()=>changeFilterTasksHandler("completed")} />
            </div>
        </div>
    );
};

const TaskName = styled.span`
padding: 0 10px 0 10px;
`