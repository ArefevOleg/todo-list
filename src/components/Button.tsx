
type PropsBtn = {
    title: string
    onClick: () => void
}

export const Button = ({ title, onClick }: PropsBtn) => {
    return <button onClick={onClick}>{title}</button>
}