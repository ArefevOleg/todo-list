import {ChangeEvent, KeyboardEvent,useState} from "react";
import styled from 'styled-components';
import {FilterValuesType, TaskType} from "./App";
import {Button} from "./components/Button";
import { theme } from "./styles/Theme";
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";

type TodoListPropsType = {
    title: string
    todolistId: string
    removeTodolist: (todolistId: string) => void
    tasks: TaskType[]
    filter: FilterValuesType
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (todolistId: string, filter: FilterValuesType) => void
    addTask: (taskTitle: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, taskStatus: boolean, todolistId: string) => void
    updateTask: (todolistId: string, taskId: string, title: string) => void
    updateTodolist: (todolistId: string, title: string) => void
}


export const TodoList = ({title, tasks,removeTask,changeFilter,addTask,changeTaskStatus,todolistId,removeTodolist, updateTask, updateTodolist}: TodoListPropsType) => {
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
    const removeTodolistHandler = () => {
        removeTodolist(todolistId)
    }

    const changeTaskStatusHandler = (taskId: string,e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        changeTaskStatus(taskId, newStatusValue, todolistId)
    }

    const changeFilterTasksHandler = (filter: FilterValuesType) => {
        changeFilter(todolistId, filter)
    }

    const addTaskCallback = (title: string) => {
        addTask(title,todolistId)
    }

    const updateTodolistHandler = (title: string) => {
        updateTodolist(todolistId, title)
    }

    return (
        <div className="todo">
            <AddItemForm addItem={addTaskCallback} />
            <div className={'todolist-title-container'}>
                <h3><EditableSpan value={title} onChange={updateTodolistHandler} /></h3>
                <Button name={"X"} onClick={removeTodolistHandler} />
            </div>
            <ul>
                {tasks.length === 0 ? (
                    <span>No tasks</span>
                ) : (
                    tasks.map(el => {
                        const removeTaskHandler = () => {
                            removeTask(el.id, todolistId);
                        }
                        const changeTaskTitleHandler = (title: string) => {
                            updateTask(todolistId, el.id, title)
                        }
                        return (
                            <li key={el.id} className={el.isDone ? 'is-done' : ''}>
                                <input type="checkbox" checked={el.isDone} onChange={(e) => changeTaskStatusHandler(el.id, e)}/>
                                <EditableSpan value={el.title} onChange={changeTaskTitleHandler} />
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