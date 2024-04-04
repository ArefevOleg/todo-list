import { ButtonPropsType } from "./Types";

export const Button = ({ title, onClick }: ButtonPropsType) => {
  return <button className="button" onClick={onClick}>{title}</button>
}