import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';


function App() {
  const containerClass = "App";

  return (
    <div className="App">
         <Navbar />
      
      
          <Link to="/todo-list">Todo List</Link>|{" "}
          <Link to="/users">Users</Link>|{" "} 
          <Link to="/aijposts">Aij Posts</Link>
    
      <Outlet />
    </div>
  );
}

export default App;
