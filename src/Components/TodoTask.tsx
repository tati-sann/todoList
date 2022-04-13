import React from "react";
import {ITask} from "../interfaces";

interface Props {
  task: ITask;
  delTask(taskNameToDelete: string): void;
}

function TodoTask({ task, delTask }: Props) {
  return (
    <div className="task">
      <div>{task.taskName}</div>
      <div className="task__right">
        <div>{task.deadline}</div>
        <button onClick={() => delTask(task.taskName)}>Завершить</button>
      </div>
    </div>
  )
}

export default TodoTask;
