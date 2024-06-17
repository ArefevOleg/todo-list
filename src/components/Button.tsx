type BtnType = {
    name: string
    onClick: () => void
}

export const Button = ({name, onClick}: BtnType) => {
    const onClickHandler = () => {
        onClick()
    }
    return <button onClick={onClickHandler}>{name}</button>
};

