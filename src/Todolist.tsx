import styled from "styled-components";
import { TaskType } from "./App"

type PropsType = {
  title: string
  tasks: TaskType[]
}



export const Todolist = ({title, tasks}: PropsType) => {
  return (
    <TodolistWrapper>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        <li>
          <input type="checkbox" checked={tasks[0].isDone} />
           <span>{tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={tasks[1].isDone} /> 
          <span>{tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={tasks[2].isDone} /> 
          <span>{tasks[2].title}</span>
        </li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
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
