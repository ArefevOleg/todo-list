import {Button} from "./Button";
import {ChangeEvent, useState} from "react";


export const Input = () => {
    let [title, setTitle] = useState("")

const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value)
}

    return (
        <>
            <input onChange={onChangeHandler}/>
            <Button name={"+"} callBack={() => {}} />
        </>
    )
}