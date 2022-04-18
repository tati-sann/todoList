import React, {FC, useState} from "react";
import {ITask} from "../types/interfaces";
import TextInput from "./UI/text-input/TextInput";
import Button from "./UI/button/Button";
import "./UI/styles/form.scss";

interface Props {
  createTask(task: ITask): void;
}

const TodoForm: FC<Props> = ({createTask}: Props) => {
  const [taskForm, setTaskForm] = useState<ITask>({
    id: new Date(),
    name: '',
    deadline: '',
  });

  const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'name':
        setTaskForm({...taskForm, name: event.target.value});
        break;
      case 'deadline':
        setTaskForm({...taskForm, deadline: event.target.value});
        break;
    }
  }

  const addTask = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    createTask(taskForm);
    setTaskForm({
      id: new Date(),
      name: '',
      deadline: '',
    });
  }

  return (
    <form className={'form'} onSubmit={addTask}>
      <TextInput name={"name"} placeholder={"Название задачи"} onChange={changeForm} value={taskForm.name}/>
      <TextInput name={"deadline"} placeholder={"Минут на выполнение"} type={'number'} value={taskForm.deadline}
                 onChange={changeForm}/>
      <Button disabled={!taskForm.name.length || !taskForm.deadline.length} type={'submit'}>Создать</Button>
    </form>
  )
}

export default TodoForm;
