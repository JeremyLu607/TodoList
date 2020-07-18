import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import { Button, TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
  
  // to define some state to keep
  // track of input from the user.
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // the events target value contains the new
    // input text from the user.
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="请输入待办事项..."
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">提交</Button>
    </form>
  );
}

export default TodoForm;
