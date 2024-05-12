import styled from "styled-components";

type ButtonType = {
title: string
}


export const Button = ({title}: ButtonType) => {
  return (
    <ButtonWrapper>{title}</ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  
`

