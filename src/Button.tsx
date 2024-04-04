import { ButtonPropsType } from "./Types";

export const Button = ({ title, onClick }: ButtonPropsType) => {
  return <button onClick={onClick}>{title}</button>
}