import React, {useState} from 'react';
import TodoList from "./TodoList";
import { v1 } from 'uuid'


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const App = () => {
    let [tasks, setTasks] = useState<TaskType[]>(
        [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},
        ]
    )

const removeTask = (taskId: string) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId)
    setTasks(filteredTasks)
}


    return (
        <>
            <TodoList
                removeTask={removeTask}
                tasks={tasks}
                title="What to learn"
            />
        </>
    );
};

export default App;