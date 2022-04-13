import React, {useState, ChangeEvent} from 'react';
import './App.css';
import {ITask} from "./interfaces";
import TodoTask from "./Components/TodoTask";

function App() {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  }

  const delTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }))
  }

  return (
    <div className="App">
      <header className="header">
        <div className="header__wrapper wrapper">
          <label className="header__input">
            <span>Добавить дело в список</span>
            <input name="task" value={task} type="text" onChange={handleChange}/>
          </label>
          <label className="header__input">
            <span>Кол-во дней до дедлайна</span>
            <input name="deadline" value={deadline} type="number" min={0} onChange={handleChange}/>
          </label>
          <button onClick={addTask}>Добавить</button>
        </div>
      </header>

      <main>
        <div className="wrapper">
          {todoList.map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} delTask={delTask} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
