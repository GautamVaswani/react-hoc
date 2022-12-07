import { useState, useEffect } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  let renderedTodoList = data.map((todo) => {
    return (
      <div key={todo.id}>
        <p>
          <strong>{todo.title}</strong>
        </p>{" "}
      </div>
    );
  });

  return (
    <div>
      <div>{renderedTodoList}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");
export default SearchTodos;
