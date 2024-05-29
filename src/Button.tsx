type TypeBtn = {
    name: string
    callBack: () => void
}

export const Button = ({name, callBack}: TypeBtn) => {
    return (<button onClick={callBack}>{name}</button>)
}