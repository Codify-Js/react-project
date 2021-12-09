import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from './containers/TodoList/TodoContainer';
import TodoItemComponent from './containers/TodoList/TodoItemComponent';

import UsersContainer from './containers/Users/UsersContainer';
import AijPosts from './containers/AijPosts/AijPosts';

import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="todo-list" element={<TodoContainer />} >
          <Route path=":itemId" element={<TodoItemComponent />} />
        </Route>
        
        <Route path="users" element={<UsersContainer/>} />
        <Route path="/aijposts" element={<AijPosts/>}/>


        <Route path="*" element={<div>NOT FOUND</div>  } />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
