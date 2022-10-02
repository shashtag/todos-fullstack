import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import TodoForm from "../Components/TodoApp/TodoForm/TodoForm";
import TodoList from "../Components/TodoApp/TodoList/TodoList";
import useAPI from "../Hooks/useAPI";
const Home = () => {
  const getTodos = useAPI("todos", "GET");

  useEffect(() => {
    getTodos();
    return () => {};
  }, []);

  return (
    <div className='container'>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
