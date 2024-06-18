import styled from 'styled-components';

type BtnType = {
    name: string
    onClick: () => void
    className?: string
}

export const Button = ({name, onClick, className }: BtnType) => {
    const onClickHandler = () => {
        onClick()
    }
    return <Btn className={className}  onClick={onClickHandler}>{name}</Btn>
};

const Btn = styled.button`
    cursor: pointer;
`
