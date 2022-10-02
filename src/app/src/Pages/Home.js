import React from "react";
import useInit from "../Hooks/useInit";
import Header from "../Components/Header/Header";
import TodoForm from "../Components/TodoApp/TodoForm/TodoForm";
import TodoList from "../Components/TodoApp/TodoList/TodoList";
const Home = () => {
  const { todos, setTodos, showInput, setShowInput } = useInit();

  const clearState = (data) => {
    setTodos(data);
    setShowInput(false);
  };
  return (
    <div className='container'>
      <Header />
      <TodoForm showInput={showInput} clearState={clearState} />
      <TodoList todos={todos} clearState={clearState} />
    </div>
  );
};

export default Home;
