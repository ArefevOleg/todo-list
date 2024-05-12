import styled from "styled-components";

type ButtonType = {
  title: string;
};

export const Button = ({ title }: ButtonType) => {
  return <ButtonWrapper>{title}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;

  &:active {
    background-color: #998f8f;
  }
`;  
