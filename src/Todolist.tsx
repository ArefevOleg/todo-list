import React from 'react';
import {Button} from "./components/Button";
import {FilterValuesType, TaskType} from "./App";

type TodoListType = {
    name: string
    addTask: () => void
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
}

export const TodoList = ({name, addTask, tasks, removeTask, changeFilter}: TodoListType) => {
    return (
        <div >
            <h3>{name}</h3>
            <div>
                <input/>
                <Button name={"+"} onClick={addTask}/>
            </div>
            {tasks.length === 0 ? (
                <span>No tasks</span>
            ) : (
                tasks.map(el => {
                    return (
                        <ul>
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                                <Button name={"x"} onClick={() =>removeTask(el.id)} />
                            </li>
                        </ul>
                    )
                })
            )}
            <div>
                <Button name={"All"} onClick={() =>changeFilter("all")} />
                <Button name={"Active"} onClick={() =>changeFilter("active")} />
                <Button name={"Completed"} onClick={() =>changeFilter("completed")} />
            </div>
        </div>
    );
};

