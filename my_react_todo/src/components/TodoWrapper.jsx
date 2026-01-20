import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    {
      content: "LeetCode",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
    {
      content: "Work out",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        content: content,
        id: Math.random(),
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };

  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <h1>博明哥好壯</h1>
      
    </div>
  );
}

export default TodoWrapper;
