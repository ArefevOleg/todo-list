import { PropsType } from "./Types";
import { Button } from "./Button";

export const Todolist = ({ title, tasks, date, removeTask }: PropsType) => {
  const tasksList = tasks.map((task) => {
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone} />{" "}
        <span>{task.title}</span>
        <button onClick={() => removeTask(task.id)}>x</button>
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
