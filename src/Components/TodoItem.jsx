import styles from "./todoitem.module.css";
export default function TodoItem({ todo, todoList, addToTodoList }) {
  function deleteItem(item) {
    console.log(item);
    addToTodoList(todoList.filter((todo) => todo !== item));
  }
  function markDone(item) {
    addToTodoList(
      todoList.map((task) =>
        task.name === item ? { ...task, done: !task.done } : task
      )
    );
  }
  const isDone = todo.done ? styles.completed : "";
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoItemName}>
        <span className={isDone} onClick={() => markDone(todo.name)}>
          {todo.name}
        </span>
        <span>
          <button
            className={styles.todoItemDelete}
            onClick={() => deleteItem(todo)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.todoSeparator} />
    </div>
  );
}
