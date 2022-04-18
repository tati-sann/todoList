import React, {useMemo, useState} from 'react';
import './styles/App.scss';
import TodoForm from "./components/TodoForm";
import {ITask} from "./types/interfaces";
import TodoTaskList from "./components/TodoTaskList";
import {todoList} from "./static/todoList";
import TextInput from "./components/UI/text-input/TextInput";

const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>(todoList);
  const [search, setSearch] = useState<string>('');

  const searchTask = useMemo(() => {
    return taskList.filter(task => task.name.includes(search));
  }, [search, taskList])

  const createTask = (newTask: ITask) => {
    setTaskList([...taskList, newTask]);
  }

  const deleteTask = (taskId: Date) => {
    setTaskList(taskList.filter(task => task.id !== taskId));
  }

  return (
    <div className="App">
      <main className={'main-content'}>
        <div className={'main-content__wrapper'}>
          <section>
            <div className={'col-wrapper'}>
              <h2>Добавить задачу</h2>
              <TodoForm createTask={createTask}/>

              <TextInput
                value={search}
                placeholder={'Поиск'}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </section>

          <section>
            <h2>Список задач</h2>
            <TodoTaskList taskList={searchTask} delTask={deleteTask}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
