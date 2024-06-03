import {Button} from "./components/Button";
import {FilterType, TaskType} from "./App";
import st from "./styles/Button.module.css"


type PropsType = {
    title: string
    tasks: TaskType[]
    changeFilter: (filter: FilterType) => void
    removeTasks: (taskId: string) => void
}

export const Todolist = ({title, tasks, changeFilter, removeTasks}: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <input type="text"/>
            <Button name={"+"} callBack={() => ("+")} className={st.stylesBtnBlu}/>
            <div>
                {tasks.length === 0 ? (
                    <span>тасок нет</span>
                ) : (
                    <ul>
                        {tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                    <Button name={"x"} callBack={() => removeTasks(task.id)} className={st.stylesBtnBlack}/>
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
            <Button name={"All"} callBack={() => changeFilter("All")} className={st.stylesBtnBlack}/>
            <Button name={"Completed"} callBack={() => changeFilter("Completed")} className={st.stylesBtnBlack}/>
            <Button name={"Active"} callBack={() => changeFilter("Active")} className={st.stylesBtnBlack}/>
        </div>
    )
}