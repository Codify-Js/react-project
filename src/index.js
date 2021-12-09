import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import UsersContainer from './containers/Users/UsersContainer';
// import TodoContainer from './containers/TodoList/TodoContainer';
import TimaPostsContainer from './containers/TimaPosts/TimaPosts.jsx'

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> 
        {/* <Route path="todo-list" element={<TodoContainer/>} /> */}
        <Route></Route>
      </Route>
      <Route path="users" element={<UsersContainer/>} />
      <Route path="tima-posts" element={<TimaPostsContainer/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


