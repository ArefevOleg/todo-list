import {ButtonHTMLAttributes} from "react";

type TypeBtn = {
    name: string
    callBack: () => void
    // children: React.ReactNode
}& ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ name,callBack,...restProps}: TypeBtn) => {
    const onclickHandler = () => {
            callBack()
    }
    return <button onClick={onclickHandler} {...restProps}>{name}</button>
}