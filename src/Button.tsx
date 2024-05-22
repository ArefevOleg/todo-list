import styled from 'styled-components';

export type ButtonType = {
    name: string
}

export const Button = ({name}: ButtonType) => {
    return (
        <div>
            <button>{name}</button>
        </div>
    )
}