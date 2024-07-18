import React from 'react';
import styled from 'styled-components';
import { theme } from "../styles/Theme";


type ButtonType = {
    name?: string
    onClick: () => void
    bgColor?: string
    textColor?: string
    padding?: string
    margin?: string
}

export const Button  = ({name,onClick,bgColor,textColor,padding,margin}: ButtonType) => {
    const onClickHandler = () => {
        onClick()
    }
    return <Buttons margin={margin}
                    padding={padding}
                    name={name}
                    bgColor={bgColor}
                    textColor={textColor}
                    onClick={onClickHandler}>{name}</Buttons>
};

const Buttons = styled.button<ButtonType>`
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    
    &:active {
        background-color: ${theme.btnColors.activeColor};
        color: ${theme.colors.fontWhite};
    }

    &:hover {
        outline: 1px solid ${theme.btnColors.borderColor};
    }
`;