import React from 'react';
import './App.css';
import { Link, Outlet } from "react-router-dom";


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
        <Link to="/todolist">Todo List</Link> |{" "}
        <Link to="/users">Users</Link> 
        
      </nav>
      </header>
      
      <Outlet />
    </div>
  );
}

export default App;
