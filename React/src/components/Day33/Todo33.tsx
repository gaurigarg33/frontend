import React, { createContext } from "react";

export interface TodoType {
  title: string;
  done: boolean;
}

export interface TodosContextType {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
}

const initialState: TodosContextType = {
  todos: [],
  setTodos: (todos: TodoType[]) => {},
};

const TodosContext = createContext<TodosContextType>(initialState);

export default TodosContext;