import {ChangeEvent, KeyboardEvent,useState} from "react";
import styled from 'styled-components';
import {FilterValuesType, TaskType} from "./App";
import {Button} from "./components/Button";
import { theme } from "./styles/Theme";

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (taskTitle: string) => void
}


export const TodoList = ({title, tasks,removeTask,changeFilter,addTask}: TodoListPropsType) => {
    const [taskTitle, setTaskTitle] = useState('')

    const addTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle('')
    }
    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    const changeFilterTasksHandler = (filter: FilterValuesType) => {
        changeFilter(filter)
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle}
                       onChange={changeTaskTitleHandler}
                       onKeyUp={addTaskOnKeyUpHandler}
                />
                <Button bgColor={theme.btnColors.bgColor}
                        textColor={theme.colors.fontBlack}
                        name="+"
                        onClick={addTaskHandler}
                        padding="3px"
                        margin ="3px" />
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
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}/>
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