import styled from "styled-components";

type PropsType = {
  title: string
}



export const Todolist = ({title}: PropsType) => {
  return (
    <TodolistWrapper>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        <li>
          <input type="checkbox" checked={true} /> <span>HTML&CSS</span>
        </li>
        <li>
          <input type="checkbox" checked={true} /> <span>JS</span>
        </li>
        <li>
          <input type="checkbox" checked={false} /> <span>React</span>
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
