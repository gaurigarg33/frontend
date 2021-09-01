import React, { useContext, useState } from "react";
import TodoList from "./TodoList";
import ThemeContext, { ThemeContextType } from "./Theme33";
import TodosContext, { TodosContextType } from "./Todo33";

const Todos = () => {
  const { todos, setTodos } = useContext<TodosContextType>(TodosContext);
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  const [input, setInput] = useState<string>("");
  return (
    <div className={`todos ${theme ? "dark" : ""}`}>
      <div className="">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodos([...todos, { title: input, done: false }]);
            setInput("");
          }}
        >
          Add Todo
        </button>
      </div>
      {todos.map((todo, ind) => (
        <TodoList key={ind} id={ind} title={todo.title} done={todo.done} />
      ))}
    </div>
  );
};

export default Todos;