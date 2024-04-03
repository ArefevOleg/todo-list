import { PropsType } from "./Types";
import { Button } from "./Button";

export const Todolist = ({ title, tasks, date }: PropsType) => {
  const tasksList = tasks.map((task) => {
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone} />{" "}
        <span>{task.title}</span>
      </li>
    );
  });

  return (
    <div className="todolist">
      <h3 className="titleMain">{title}</h3>
      <div>
        <input />
        <Button title={"+"} />
      </div>
      {tasks.length === 0 ? (
        <p className="no-tasks">Тасок нет</p>
      ) : (
        <ul>{tasksList}</ul>
      )}
      <div>
        <Button title={"All"} />
        <Button title={"Active"} />
        <Button title={"Completed"} />
        <div>{date}</div>
      </div>
    </div>
  );
};
