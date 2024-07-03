import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todoList, addToTodoList] = useState([]);
  const completedTodos = todoList.filter((todo) => todo.done).length;
  const totalTodos = todoList.length;

  return (
    <div>
      <Form todoList={todoList} addToTodoList={addToTodoList}></Form>
      <TodoList todoList={todoList} addToTodoList={addToTodoList}></TodoList>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}></Footer>
    </div>
  );
}
