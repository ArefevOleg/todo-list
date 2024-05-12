import styled from "styled-components";

type ButtonType = {
  title: string;
  onClick?: () => void
};

export const Button = ({ title,  onClick}: ButtonType) => {
  return <ButtonWrapper onClick={onClick}>{title}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;

  &:active {
    background-color: #998f8f;
  }
`;  
