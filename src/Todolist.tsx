import React from 'react';
import {TaskType} from "./App";
import styles from "./styles/TodoList.module.css"
import {Button} from "./components/Button";

type PropsType = {
    tasks: TaskType[]
    title: string
    removeTask: (taskId: string) => void
}


const TodoList = ({tasks, title, removeTask}: PropsType) => {
    return (
        <div className={styles.mainWrapper}>
            <h3>{title}</h3>
            <div>
                <input type="text"/>
                <Button onClick={() => ("+")} title="+" />
            </div>
            {tasks.length === 0 ? (
                <span>no tasks</span>
            ) : (
                <ul className={styles.listItem}>
                    {tasks.map(task => {
                        return (
                            <li key={task.id} className={styles.item}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <Button onClick={() => removeTask(task.id)} title="x" />
                            </li>
                        )
                    })}
                </ul>
            )}
            <div className={styles.btnWrapper}>
                <Button onClick={() => ("all")} title="all" />
                <Button onClick={() => ("active")} title="active" />
                <Button onClick={() => ("completed")} title="completed" />
            </div>
        </div>
    );
};

export default TodoList;