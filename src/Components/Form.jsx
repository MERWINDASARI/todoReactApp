import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todoList, addToTodoList }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function addTodo(event) {
    event.preventDefault();
    addToTodoList([...todoList, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoForm} onSubmit={(e) => addTodo(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter Todo Task ..."
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
        ></input>
        <button className={styles.formButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
