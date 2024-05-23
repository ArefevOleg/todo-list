import {TaskType} from "./App";
import {Button} from "./Button";
import styled from 'styled-components';

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
            <ButtonWrapper>
                <Button name={"ALL"} />
                <Button name={"Active"} />
                <Button name={"Completed"} />
            </ButtonWrapper>
        </div>
    )
}

const  ButtonWrapper = styled.div`
    display: flex;
`
