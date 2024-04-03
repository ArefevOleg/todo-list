import { ButtonPropsType } from "./Types";

export const Button = ({ title }: ButtonPropsType) => {
  return <button className="button">{title}</button>
}