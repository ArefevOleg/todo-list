import styled from "styled-components";

type ButtonType = {
  title: string;
  onClick?: () => void
  className?: string
};

export const Button = ({ title,  onClick, className}: ButtonType) => {
  return <ButtonWrapper className={className} onClick={onClick}>{title}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  cursor: pointer;
  border-radius: 5px;

  &:active {
    background-color: #998f8f;
  }
`;  
