import {ITask} from "../types/interfaces";

export const todoList: ITask[] = [
  {
    id: new Date(2013, 13, 1),
    name: 'Проснуться',
    deadline: '30',
  },
  {
    id: new Date(2014, 13, 1),
    name: 'Умыться',
    deadline: '10',
  },
  {
    id: new Date(2015, 13, 1),
    name: 'Позавтракать',
    deadline: '60',
  },
  {
    id: new Date(2016, 13, 1),
    name: 'Включить компьютер',
    deadline: '5',
  }
]