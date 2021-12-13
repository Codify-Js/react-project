import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './App.css';

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
          <Link to="/todo-list">Todo List</Link>|{" "}
          <Link to="/users">Users</Link>|{" "}
          <Link to="/mansur-posts">Mansur Posts</Link>|{" "}
          <Link to="/zamir-posts">Zamir Posts</Link>|{" "}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
