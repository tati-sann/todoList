import React from 'react';
import Button from "./UI/button/Button";
import "../styles/todoCard.scss";
import {ITask} from "../types/interfaces";

interface TodoCardProps {
  task: ITask;
  delTask(): void;
}

const TodoCard = ({task, delTask}: TodoCardProps) => {
  return (
    <li className={'todo-card'}>
      <h3>{task.name}</h3>
      <p>Минут: {task.deadline}</p>
      <Button onClick={delTask}>Выполнить</Button>
    </li>
  );
};

export default TodoCard;