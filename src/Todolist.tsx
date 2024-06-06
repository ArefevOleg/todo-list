import {Input} from "./components/Input";
import {useState} from "react";


export const TodoList = () => {
    const [message, setMessage] = useState(
        [
            {message: "message1"},
            {message: "message2"},
            {message: "message3"},
        ]
    )



    return (
        <div>
            <Input />
            {message.map((el, index) => {
                return (
                    <div key={index}>
                        {el.message}
                    </div>
                )
            })}
        </div>
    )
}