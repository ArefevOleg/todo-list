import styled from "styled-components";
import { TaskType } from "./App"

type PropsType = {
  title: string
  tasks: TaskType[]
  date?: string
}



export const Todolist = ({title, tasks, date}: PropsType) => {
  return (
    <TodolistWrapper>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {tasks.map(task => {
          return (
            <li>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
            </li>
          )
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
        <div>{date}</div>
      </div>
    </TodolistWrapper>
  );
};

export default Todolist;

const TodolistWrapper = styled.div`
  padding: 20px;
  background-color: #08b140;
  max-width: 200px;
  height: 250px;
`;
