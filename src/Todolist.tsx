import {TaskType} from "./App";
import {Button} from "./Button";

type PropsType = {
    title: string
    tasks: TaskType[]
}

export const TodoList = ({title, tasks}: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <input type="text"/>
            <button>+</button>
            <ul>
                {tasks.map((el) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <Button name={"ALL"} />
        </div>
    )
}