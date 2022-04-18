import React from 'react';
import {ITask} from "../types/interfaces";
import TodoCard from "./TodoCard";
import "../styles/todoList.scss";

interface TaskListProps {
  taskList: ITask[],
  delTask(taskId: Date): void;
}

const TodoTaskList = ({taskList, delTask}: TaskListProps) => {
  return (
    <ul className={'todo-list'}>
      {taskList.map(task => {
        return <TodoCard key={task.name} task={task} delTask={() => delTask(task.id)} />
      })}
    </ul>
  );
};

export default TodoTaskList;