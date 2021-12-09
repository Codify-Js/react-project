import React from 'react';
// import { Link } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import './App.css';
// import TodoContainer from './containers/TodoList/TodoContainer';

function App() {
  const containerClass = "App";

  return (
    <div className={containerClass}>
      <header className="App-header">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/todo-list">Todo List</Link> |{" "}
        <Link to="/users  ">Users</Link>|{" "}
        <Link to="/tima-posts">Tima Posts</Link>
      </nav>
      </header>
      <Outlet />
      {/* <TodoContainer /> */}
    </div>
  );
}

export default App;
