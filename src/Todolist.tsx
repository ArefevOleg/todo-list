import {TaskType} from "./App";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


type TodoListType = {
    name: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
}


export const TodoList = ({name, tasks, removeTask, addTask}: TodoListType) => {
    return (
        <div>
            <h3>{name}</h3>
            <div>
                <Input/>
                <Button name={"+"} onClick={() => addTask("New taskssdfdszf")}/>
            </div>
            {tasks.map(el => {
                return (
                    <ul>
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <Button name={"x"} onClick={() => removeTask(el.id)} />
                        </li>
                    </ul>
                )
            })}
        </div>
    );
};