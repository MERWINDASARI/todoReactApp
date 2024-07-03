import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todoList, addToTodoList }) {
  const sortedTodoList = todoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todoList}>
      {sortedTodoList.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.name}
          todoList={todoList}
          addToTodoList={addToTodoList}
        ></TodoItem>
      ))}
    </div>
  );
}
